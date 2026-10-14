// Shared helpers used by every page.
var PAGES = [["index.html","Home"],["dashboard.html","Dashboard"],["analyze.html","Analyze"],["results.html","Results"],["interview.html","Interview prep"],["about.html","About"]];

function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]; }); }
function $(id){ return document.getElementById(id); }

// Pages that need a login. Anyone not logged in is sent to the login page.
function requireLogin(){
  if(!MockAPI.currentUser()){ window.location.href = "login.html"; return false; }
  return true;
}

function renderNav(current){
  var user = MockAPI.currentUser();
  var links = PAGES.map(function(p){
    return "<li><a href=\"" + p[0] + "\"" + (p[0] === current ? " aria-current=\"page\"" : "") + ">" + p[1] + "</a></li>";
  }).join("");
  var auth = user
    ? "<li class=\"who\">" + esc(user.name) + " <button type=\"button\" class=\"linkbtn\" id=\"logout\">Log out</button></li>"
    : "<li><a href=\"login.html\"" + (current === "login.html" ? " aria-current=\"page\"" : "") + ">Log in</a></li>";
  var el = $("nav");
  if(el) el.innerHTML = "<div class=\"nav-in\"><a class=\"brand\" href=\"index.html\">Resume Tailor for Grads</a><nav aria-label=\"Main\"><ul>" + links + auth + "</ul></nav></div>";
  var lo = $("logout");
  if(lo) lo.addEventListener("click", function(){ MockAPI.logout().then(function(){ window.location.href = "index.html"; }); });
  var f = $("foot");
  if(f) f.textContent = "Design Thinking college project, 2026. This is a prototype: the login is a demo and the example posting and resume are made up.";
}

function markup(text, matches, found){
  var out = "", pos = 0;
  matches.forEach(function(m){
    out += esc(text.slice(pos, m.start));
    var ok = found[m.skill.name];
    out += "<mark class=\"" + (ok ? "m-found" : "m-gap") + "\" title=\"" + esc(m.skill.name + (ok ? " (on your resume)" : " (missing)")) + "\">" + esc(text.slice(m.start, m.end)) + "</mark>";
    pos = m.end;
  });
  return out + esc(text.slice(pos));
}

function cheatText(r){
  var t = "INTERVIEW PREP CHEAT SHEET\n";
  r.questions.forEach(function(q, i){
    t += "\n" + (i + 1) + ". " + q.q + "\n   " + q.why + "\n";
    q.points.forEach(function(p){ t += "   - " + p + "\n"; });
  });
  return t;
}
function copyText(text, statusId){
  var say = function(m){ $(statusId).textContent = m; };
  var fallback = function(){
    var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand("copy"); } catch(e){}
    document.body.removeChild(ta);
    say(ok ? "Copied." : "Could not copy. Select the text and copy it by hand.");
  };
  try { navigator.clipboard.writeText(text).then(function(){ say("Copied."); }, fallback); } catch(e){ fallback(); }
}
function fmtDate(iso){
  try { return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }); } catch(e){ return ""; }
}
