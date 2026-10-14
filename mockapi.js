// Mock API layer. It behaves like a small server (every call is asynchronous and takes a moment)
// but runs entirely in the browser and keeps its data in localStorage. There is no real account system.
var MockAPI = (function(){
  var memory = {};
  function wait(value, ms){ return new Promise(function(resolve){ setTimeout(function(){ resolve(value); }, ms == null ? 450 : ms); }); }
  function fail(code, message, ms){ return new Promise(function(_, reject){ setTimeout(function(){ reject({ code: code, message: message }); }, ms == null ? 450 : ms); }); }
  function read(key, fallback){
    try { var v = localStorage.getItem(key); if(v) return JSON.parse(v); } catch(e){}
    return key in memory ? memory[key] : fallback;
  }
  function write(key, value){
    memory[key] = value;
    try { localStorage.setItem(key, JSON.stringify(value)); } catch(e){}
  }
  function remove(key){ delete memory[key]; try { localStorage.removeItem(key); } catch(e){} }
  function title(jd){
    var first = jd.split(/\r?\n/).filter(function(l){ return l.trim(); })[0] || "Job posting";
    return first.trim().length > 60 ? first.trim().slice(0, 59) + "…" : first.trim();
  }
  return {
    // POST /login
    login: function(name, email){
      name = (name || "").trim(); email = (email || "").trim();
      if(!name) return fail("name_missing", "Enter your name.", 250);
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return fail("email_invalid", "Enter a valid email address, for example name@college.edu.", 250);
      var user = { name: name, email: email };
      write("rtg_user", user);
      return wait({ ok: true, user: user }, 400);
    },
    // GET /me (instant: no network wait needed in this mock)
    currentUser: function(){ return read("rtg_user", null); },
    // POST /logout
    logout: function(){ remove("rtg_user"); return wait({ ok: true }, 150); },
    // POST /analyses  (runs the matching engine and saves the result to history)
    analyze: function(jd, resume){
      if(!jd.trim() || !resume.trim()) return fail("empty", "Please fill in both boxes first.", 150);
      var r = analyze(jd, resume);
      if(!r.items.length) return fail("no_skills", "No known skills were found in the job posting. Paste the full description, including the requirements list.", 500);
      var entry = { id: String(Date.now()), title: title(jd), date: new Date().toISOString(), score: r.score, found: r.items.length - r.gaps.length, total: r.items.length, gaps: r.gaps.length, jd: jd, resume: resume };
      var list = read("rtg_history", []); list.unshift(entry); write("rtg_history", list.slice(0, 10));
      write("rtg_current", { id: entry.id }); write("rtg_fresh", true);
      return wait({ id: entry.id, score: r.score }, 900);
    },
    // GET /analyses
    history: function(){ return wait(read("rtg_history", []).map(function(e){ return { id: e.id, title: e.title, date: e.date, score: e.score, found: e.found, total: e.total, gaps: e.gaps }; }), 350); },
    // PUT /analyses/current
    open: function(id){ write("rtg_current", { id: id }); remove("rtg_fresh"); return wait({ ok: true }, 100); },
    // GET /analyses/current
    getCurrent: function(){
      var cur = read("rtg_current", null), list = read("rtg_history", []);
      var entry = cur && list.filter(function(e){ return e.id === cur.id; })[0];
      if(!entry) return wait(null, 300);
      var fresh = !!read("rtg_fresh", false); remove("rtg_fresh");
      return wait({ jd: entry.jd, resume: entry.resume, result: analyze(entry.jd, entry.resume), fresh: fresh }, 400);
    },
    clearHistory: function(){ remove("rtg_history"); remove("rtg_current"); return wait({ ok: true }, 150); }
  };
})();
