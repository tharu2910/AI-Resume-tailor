
// ==ENGINE START
// name | aliases (comma list, leading ! = case-sensitive) | type | plain meaning | first step | related skills
var SKILLS_RAW = [
 ["JavaScript","javascript,js,es6","tech","The language that makes web pages interactive.","Build a to-do list app in plain JavaScript and put it on GitHub.","TypeScript,React,Node.js,HTML,CSS"],
 ["TypeScript","typescript","tech","JavaScript with type checking, which catches mistakes before the code runs.","Convert one small JavaScript project to TypeScript.","JavaScript,React"],
 ["Python","python","tech","A beginner-friendly language used for automation, data and back-end work.","Solve 20 beginner problems, then automate one small task you do by hand.","Pandas,Django,Flask,Machine learning,Java"],
 ["Java","java","tech","A widely used language for back-end systems and Android apps.","Write a small console app with classes and collections.","OOP,Spring Boot,C++,Python"],
 ["C++","c++,cpp","tech","A fast, low-level language used in systems, games and competitive coding.","Build a small program with classes and the standard template library.","Data structures and algorithms,C programming,Java,OOP"],
 ["C programming","c programming,c language","tech","A low-level language that shows how memory and the machine work.","Write a program that reads a file and uses pointers.","C++,Data structures and algorithms"],
 ["SQL","sql","tech","The language for asking questions of a database.","Practise joins and GROUP BY on a free sample database.","MySQL,PostgreSQL,MongoDB,Data analysis"],
 ["HTML","html,html5","tech","The structure of every web page.","Rebuild a simple landing page from scratch.","CSS,JavaScript"],
 ["CSS","css,css3,tailwind,bootstrap","tech","The styling and layout of web pages.","Make one page work on both a phone and a laptop.","HTML,JavaScript"],
 ["React","!React,react.js,reactjs","tech","A popular library for building interactive web interfaces from reusable pieces.","Follow the official tutorial, then rebuild one of your own pages in React.","JavaScript,HTML,CSS,Angular,Vue"],
 ["Angular","angular","tech","A framework for building large web apps.","Complete the official Tour of Heroes tutorial.","TypeScript,JavaScript,React"],
 ["Vue","!Vue,vue.js,vuejs","tech","A beginner-friendly framework for building web interfaces.","Build a small notes app with the official guide.","JavaScript,React,HTML"],
 ["Node.js","node.js,nodejs,!Node","tech","JavaScript running on a server instead of in the browser.","Build a small server with two routes.","JavaScript,Express,REST APIs"],
 ["Express","!Express,express.js","tech","A small framework for writing web servers in Node.js.","Add three routes to a Node server and test them.","Node.js,REST APIs,JavaScript"],
 ["Django","django","tech","A Python framework for building full websites quickly.","Finish the official polls tutorial.","Python,SQL,REST APIs"],
 ["Flask","flask","tech","A light Python framework for small web apps and APIs.","Build a one-page app that saves a form to a file.","Python,REST APIs"],
 ["Spring Boot","!Spring Boot,spring boot","tech","A Java framework for building back-end services.","Create a simple REST service with the Spring starter project.","Java,REST APIs,SQL"],
 ["PHP","php","tech","A server-side language that powers many websites.","Make a contact form that stores entries in a database.","SQL,MySQL,HTML"],
 ["REST APIs","rest api,rest apis,restful,api,apis,web services","tech","The way apps ask other apps for data over the internet.","Build a tiny API with two endpoints and test it in Postman.","Node.js,Express,Flask,Django,JavaScript"],
 ["Git","git","tech","Version control: tracking every change to code, especially when working with others.","Make a repo, create a branch and open a pull request on a practice project.","GitHub"],
 ["GitHub","github,gitlab,bitbucket","tech","A website for sharing code and reviewing teammates' changes.","Put two of your projects online with a clear README.","Git"],
 ["MySQL","mysql","tech","A common database that stores data in tables.","Install it and build a small student-records database.","SQL,PostgreSQL"],
 ["PostgreSQL","postgresql,postgres","tech","A powerful open-source database that stores data in tables.","Create a database and practise joins on it.","SQL,MySQL"],
 ["MongoDB","mongodb,mongo,nosql","tech","A database that stores flexible documents instead of tables.","Store and search notes from a small Node app.","SQL,Node.js,JavaScript"],
 ["Docker","docker,containers","tool","A way to package an app so it runs the same on any computer.","Put one of your projects in a container and run it.","Linux,Cloud,CI/CD"],
 ["AWS","!AWS,amazon web services","tool","Amazon's cloud platform for hosting apps and data.","Host a static page on the free tier.","Cloud,Docker,Linux"],
 ["Cloud","cloud,azure,gcp,google cloud","tool","Running software on rented servers instead of your own machine.","Deploy a small app to a free hosting service.","AWS,Docker"],
 ["Linux","linux,unix,bash,shell scripting","tool","The operating system most servers run, used from the command line.","Learn 15 core commands and write one shell script.","Docker,Git,Cloud"],
 ["Data structures and algorithms","data structures,algorithms,dsa","tech","The standard ways to organise data and solve problems efficiently.","Solve two easy problems a day on a practice site for two weeks.","C++,Java,Python"],
 ["OOP","oop,object-oriented,object oriented","tech","Organising code into objects that bundle data and behaviour.","Model a library system with classes in any language.","Java,C++,Python"],
 ["Machine learning","machine learning,!ML,deep learning","tech","Teaching a program to find patterns in data instead of writing every rule.","Train a simple model on a public dataset and explain the result.","Python,Pandas,NumPy,TensorFlow,Data analysis"],
 ["Pandas","pandas","tool","A Python library for cleaning and analysing tables of data.","Clean a messy CSV and answer three questions with it.","Python,NumPy,Data analysis"],
 ["NumPy","numpy","tool","A Python library for fast number crunching.","Redo a maths exercise using arrays.","Python,Pandas"],
 ["TensorFlow","tensorflow,pytorch","tool","Libraries for building neural networks.","Follow a beginner image-classification tutorial.","Machine learning,Python"],
 ["Data analysis","data analysis,data analytics,analytics","tech","Turning raw numbers into answers and charts people can act on.","Pick a public dataset and write a one-page finding.","Excel,SQL,Pandas,Power BI,Tableau"],
 ["Excel","!Excel,microsoft excel,ms excel,spreadsheets","tool","Spreadsheets for organising, calculating and charting data.","Build a budget with formulas, a pivot table and a chart.","Data analysis,SQL"],
 ["Power BI","power bi,powerbi","tool","A tool for turning data into interactive dashboards.","Build one dashboard from a public dataset.","Data analysis,Excel,Tableau"],
 ["Tableau","tableau","tool","A tool for turning data into interactive charts.","Publish one public chart from a sample dataset.","Data analysis,Power BI,Excel"],
 ["Figma","figma","tool","A design tool for sketching screens before they are built.","Redesign one screen of an app you use.","UI/UX design"],
 ["UI/UX design","ui/ux,ux,ui design,user experience,wireframing,wireframes","tech","Designing screens that are easy to understand and use.","Sketch a three-screen flow and ask two people to try it.","Figma,HTML,CSS"],
 ["Agile","agile,scrum,kanban,sprint","tool","A way of working in short cycles with regular check-ins.","Run a one-week sprint with a board on your next team project.","Project management,Teamwork"],
 ["Unit testing","unit testing,unit tests,testing,test cases,junit,pytest,jest,qa","tech","Writing small checks that prove each part of your code still works.","Add five tests to an existing project and run them.","JavaScript,Python,Java"],
 ["Debugging","debugging,debug,troubleshooting,bug fixing","tech","Finding why code misbehaves and fixing it.","Fix three bugs in an open-source beginner issue and write down how you found each one.","JavaScript,Python,Java,HTML"],
 ["CI/CD","ci/cd,cicd,jenkins,github actions","tool","Automatically testing and releasing code on every change.","Set up a GitHub Actions workflow that runs your tests.","Git,GitHub,Docker,Unit testing"],
 ["Android","android,kotlin","tech","Building apps for Android phones.","Build a counter app in Android Studio.","Java,Flutter"],
 ["Flutter","flutter,dart","tech","Building phone apps for Android and iPhone from one codebase.","Build a simple list app from the official codelab.","Android,UI/UX design"],
 ["Cybersecurity","cybersecurity,network security,information security,ethical hacking","tech","Protecting systems and data from attacks.","Complete a beginner capture-the-flag challenge.","Networking,Linux"],
 ["Networking","computer networks,networking,tcp/ip","tech","How computers find and talk to each other.","Trace a web request from browser to server and write it up.","Cybersecurity,Linux,REST APIs"],
 ["Communication","communication,communicate,written and verbal,verbal and written,articulate","soft","Explaining ideas clearly, in writing and out loud.","","Presentation,Teamwork"],
 ["Teamwork","teamwork,team player,collaboration,collaborate,collaborated,worked in a team,work in a team,team of,work well in teams","soft","Getting things done with other people.","","Communication,Leadership"],
 ["Problem solving","problem solving,problem-solving,analytical,analytical thinking,critical thinking","soft","Breaking a vague problem into steps and working through it.","","Debugging,Data structures and algorithms"],
 ["Leadership","leadership,lead a team,led a team,led the,initiative,treasurer,captain","soft","Taking responsibility and guiding others.","","Teamwork,Project management"],
 ["Time management","time management,deadlines,prioritize,prioritise","soft","Planning your work so the important things finish on time.","","Project management"],
 ["Presentation","presentation,presentations,presented,public speaking,demo,demos","soft","Showing your work to an audience.","","Communication"],
 ["Project management","project management,jira,trello","tool","Planning tasks, owners and deadlines for a team.","Plan your next team project on a free Trello or Jira board.","Agile,Leadership"],
 ["Willingness to learn","quick learner,willingness to learn,eager to learn,fast learner,self-learner,self-motivated","soft","Picking up new tools quickly without being taught.","","Problem solving"]
];

function escRe(s){ return s.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&"); }
function buildRe(list, flags){
  if(!list.length) return null;
  var alt = list.slice().sort(function(a,b){return b.length-a.length;}).map(escRe).join("|");
  return new RegExp("(?<![A-Za-z0-9+#])(?:" + alt + ")(?![A-Za-z0-9+#])", flags + "g");
}
var SKILLS = SKILLS_RAW.map(function(r){
  var ci = [], cs = [];
  r[1].split(",").forEach(function(a){ if(a.charAt(0) === "!") cs.push(a.slice(1)); else ci.push(a); });
  return { name:r[0], type:r[2], what:r[3], start:r[4], related:r[5].split(","), reCi:buildRe(ci,"i"), reCs:buildRe(cs,"") };
});
var BY_NAME = {}; SKILLS.forEach(function(s){ BY_NAME[s.name] = s; });

function findMatches(text){
  var out = [];
  SKILLS.forEach(function(s){
    [s.reCi, s.reCs].forEach(function(re){
      if(!re) return; re.lastIndex = 0; var m;
      while((m = re.exec(text))){ out.push({ start:m.index, end:m.index + m[0].length, skill:s }); }
    });
  });
  out.sort(function(a,b){ return a.start - b.start || (b.end - b.start) - (a.end - a.start); });
  var clean = [], last = -1;
  out.forEach(function(m){ if(m.start >= last){ clean.push(m); last = m.end; } });
  return clean;
}

var NICE_CUE = /\b(nice to have|preferred|bonus|a plus|good to have|plus point|familiarity|exposure to)\b/i;
function lineContexts(text){
  var lines = text.split(/\r?\n/), pos = 0, mode = "must", out = [];
  lines.forEach(function(line){
    var t = line.trim(), ctx = mode;
    if(t){
      var heading = t.length < 45 && (/:\s*$/.test(t) || /^(nice to have|preferred|bonus|good to have|what you|requirements|qualifications|responsibilities|about)/i.test(t));
      if(heading){ mode = /(nice to have|preferred|bonus|good to have|plus)/i.test(t) ? "nice" : "must"; ctx = mode; }
      else if(NICE_CUE.test(t)){ ctx = "nice"; }
    }
    out.push({ start:pos, end:pos + line.length, ctx:ctx, text:line });
    pos += line.length + 1;
  });
  return out;
}
function ctxAt(ctxs, idx){ for(var i = 0; i < ctxs.length; i++){ if(idx <= ctxs[i].end) return ctxs[i].ctx; } return "must"; }
function lineAt(text, idx){
  var s = text.lastIndexOf("\n", idx - 1) + 1, e = text.indexOf("\n", idx); if(e < 0) e = text.length;
  return text.slice(s, e).trim();
}
function clip(s, n){ s = s.replace(/^[-*•\s]+/, ""); return s.length > n ? s.slice(0, n - 1).trim() + "…" : s; }
function lcFirst(s){ return s.charAt(0).toLowerCase() + s.slice(1); }

function resumeChecks(resume){
  var words = (resume.match(/\S+/g) || []).length, list = [];
  var stripped = resume.replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, " ").replace(/\b(19|20)\d\d\b/g, " ").replace(/\d{7,}/g, " ");
  var hasNum = /\d/.test(stripped);
  list.push(/[\w.+-]+@[\w-]+\.[\w.]+/.test(resume) ? { ok:true, t:"Email address found", d:"Recruiters can reach you." } : { ok:false, t:"No email address", d:"Add one near the top of the resume." });
  var secs = [["Education",/education|academic/i],["Projects",/projects?\b/i],["Skills",/skills|technologies|tools/i]];
  var missing = secs.filter(function(x){ return !x[1].test(resume); }).map(function(x){ return x[0]; });
  list.push(missing.length ? { ok:false, t:"Missing section: " + missing.join(", "), d:"Early-year resumes work best with Education, Projects and Skills." } : { ok:true, t:"Education, Projects and Skills sections found", d:"The core sections are present." });
  list.push(hasNum ? { ok:true, t:"Numbers found in your descriptions", d:"Measurable results make projects easier to judge." } : { ok:false, t:"No measurable results", d:"Add one number per project, such as users, time saved or accuracy." });
  if(words > 650) list.push({ ok:false, t:"Long for a student resume (" + words + " words)", d:"Aim for one page, roughly 400 to 600 words." });
  else if(words < 120) list.push({ ok:false, t:"Very short (" + words + " words)", d:"Add project details and skills so there is something to match." });
  else list.push({ ok:true, t:"Length looks right (" + words + " words)", d:"Fits on about one page." });
  return { list:list, hasNum:hasNum };
}

function analyze(jd, resume){
  var jdM = findMatches(jd), rsM = findMatches(resume), ctxs = lineContexts(jd);
  var rsSet = {}; rsM.forEach(function(m){ if(!(m.skill.name in rsSet)) rsSet[m.skill.name] = m; });
  var seen = {}, items = [];
  jdM.forEach(function(m){
    var n = m.skill.name, c = ctxAt(ctxs, m.start);
    if(!seen[n]){ seen[n] = { skill:m.skill, ctx:{}, order:items.length }; items.push(seen[n]); }
    seen[n].ctx[c] = true;
  });
  items.forEach(function(it){
    it.priority = it.ctx.must ? "must" : "nice";
    var hit = rsSet[it.skill.name];
    it.found = !!hit;
    it.evidence = hit ? clip(lineAt(resume, hit.start), 120) : "";
  });
  var must = items.filter(function(i){ return i.priority === "must"; });
  var nice = items.filter(function(i){ return i.priority === "nice"; });
  var total = must.length * 2 + nice.length;
  var got = must.filter(function(i){ return i.found; }).length * 2 + nice.filter(function(i){ return i.found; }).length;
  var gaps = items.filter(function(i){ return !i.found; }).sort(function(a,b){
    if(a.priority !== b.priority) return a.priority === "must" ? -1 : 1;
    var at = a.skill.type === "soft" ? 1 : 0, bt = b.skill.type === "soft" ? 1 : 0;
    return at - bt || a.order - b.order;
  });
  var matched = items.filter(function(i){ return i.found; }).sort(function(a,b){
    return (a.priority === b.priority ? 0 : a.priority === "must" ? -1 : 1) || (a.skill.type === "soft" ? 1 : 0) - (b.skill.type === "soft" ? 1 : 0) || b.evidence.length - a.evidence.length || a.order - b.order;
  });
  var notes = [];
  var yrs = jd.match(/(\d+)\s*\+?\s*years?/i);
  if(yrs) notes.push("The posting mentions " + yrs[1] + " year" + (yrs[1] === "1" ? "" : "s") + " of experience. For internships and fresher roles, college projects usually count as experience.");
  var deg = jd.split(/\r?\n/).filter(function(l){ return /\b(b\.?tech|b\.?e\b|bachelor|degree|pursuing|diploma)/i.test(l); })[0];
  if(deg) notes.push("Education: " + clip(deg, 140));
  var checks = resumeChecks(resume);
  var rsNames = Object.keys(rsSet);
  return { items:items, must:must, nice:nice, gaps:gaps, matched:matched, score: total ? Math.round(got / total * 100) : 0, total:total, notes:notes, checks:checks, jdM:jdM, rsSet:rsSet, rsNames:rsNames, questions:buildQuestions(gaps, matched, rsNames, checks) };
}

var GENERIC = ["Debugging","Unit testing","Data analysis","Data structures and algorithms","Machine learning","Networking","Cybersecurity","Cloud"];
function dn(name){ return GENERIC.indexOf(name) >= 0 ? lcFirst(name) : name; }
function bridgeFrom(item, rsNames){
  for(var i = 0; i < item.skill.related.length; i++){ if(rsNames.indexOf(item.skill.related[i]) >= 0) return item.skill.related[i]; }
  return "";
}
function gapQuestion(g, rsNames){
  var s = g.skill, tier = g.priority === "must" ? "a must-have" : "a nice-to-have";
  if(s.type === "soft"){
    return { tag:"Gap", q:"Tell me about a time you showed " + lcFirst(s.name) + " in a team or college project.",
      why:"Why they will ask: " + s.name + " is " + tier + " in the posting and your resume does not show it.",
      points:[
        "Situation: pick one real moment from a class project, club or internship, such as [your project name].",
        "Action: say what you personally did, in two or three sentences. Use \"I\", not \"we\".",
        "Result: end with an outcome, with a number if you have one, and one thing you learned."
      ] };
  }
  var rel = bridgeFrom(g, rsNames), second;
  if(rel) second = "Connect it to what you already know: \"I've used " + dn(rel) + " in [your project name], and learning " + dn(s.name) + " is the next step from there.\"";
  else second = "Connect it to your closest experience: \"In [your project name] I learned [a related skill], and learning " + dn(s.name) + " is the next step from there.\"";
  return { tag:"Gap", q:"The role needs " + dn(s.name) + ", and your resume does not mention it. How would you get up to speed?",
    why:"Why they will ask: " + s.name + " is " + tier + " in the posting and is missing from your resume.",
    points:[
      "Be upfront that you have not used " + dn(s.name) + " in a project yet, then show you know what it is: " + lcFirst(s.what),
      second,
      "Give one concrete first step with a timeframe, for example: " + lcFirst(s.start).replace(/\.$/, "") + " (within two weeks)."
    ] };
}
function strengthQuestion(m, hasNum){
  var pts = [];
  pts.push("Set the scene in one sentence: the problem and who it was for." + (m.evidence ? " Your resume line to build on: \"" + m.evidence + "\"" : ""));
  pts.push("Say what you personally built or decided, not what the team did. Name one choice you made and why.");
  pts.push(hasNum ? "Finish with a result from your resume and one thing you would improve next time." : "Finish with a result and one thing you would improve. Add a number if you can, such as users, time saved or test scores.");
  return { tag:"Strength", q:"Your resume mentions " + m.skill.name + ". Walk me through a project where you used it.",
    why:"Why they will ask: " + m.skill.name + " is " + (m.priority === "must" ? "a must-have" : "a nice-to-have") + " in the posting, so they will test how deep your experience goes.", points:pts };
}
function buildQuestions(gaps, matched, rsNames, checks){
  var nGap = Math.min(3, gaps.length), nStr = Math.min(matched.length, Math.max(1, 4 - nGap));
  var arr = [];
  if(nStr) arr.push(strengthQuestion(matched[0], checks.hasNum));
  gaps.slice(0, nGap).forEach(function(g){ arr.push(gapQuestion(g, rsNames)); });
  for(var i = 1; i < nStr; i++) arr.push(strengthQuestion(matched[i], checks.hasNum));
  var topM = matched[0] ? matched[0].skill.name : "";
  arr.push({ tag:"Fit", q:"Why do you want this role, and why now?",
    why:"Why they will ask: they want to hear that you chose this job on purpose.",
    points:[
      "Name one thing in the posting you want to practise" + (topM ? ", for example " + topM : "") + ".",
      "Link it to one project or class that sparked your interest: [your project name].",
      gaps[0] ? "Mention that you are already working on " + gaps[0].skill.name + " so the gap sounds like a plan." : "Say what you want to learn in your first three months."
    ] });
  var fillers = [
    { tag:"Fit", q:"Tell me about yourself and how this role fits your next step.", why:"Why they will ask: almost every interview opens with it.", points:["Start with your course and year, then one project you are proud of.","Say what you are learning right now.","End with why this role is the logical next step."] },
    { tag:"Strength", q:"Which project are you proudest of, and why?", why:"Why they will ask: it shows what you care about and how you describe your work.", points:["Pick the project with the clearest result.","Explain your part and one hard moment.","Say what you would do differently."] }
  ];
  var f = 0;
  while(arr.length < 5 && f < fillers.length){ arr.unshift(fillers[f++]); }
  return arr.slice(0, 5);
}
// ==ENGINE END

var EXAMPLE_JD = "Junior Web Developer Intern\n\nAbout the role:\nYou will help our product team build and improve customer-facing web pages.\n\nWhat you'll do:\n- Build responsive pages with HTML, CSS and JavaScript\n- Connect pages to REST APIs\n- Work with designers and use Git for every change\n- Write unit tests for new features and fix bugs through debugging\n\nRequirements:\n- Currently pursuing a B.Tech or degree in Computer Science or a related field\n- Working knowledge of React and JavaScript\n- Basic SQL\n- Strong communication skills\n- Good problem solving\n\nNice to have:\n- TypeScript\n- Experience with Docker or AWS\n- Familiarity with Agile practices";
var EXAMPLE_RESUME = "Meera K\n2nd Year B.Tech, Computer Science\nmeera.k@example.com\n\nEducation\nB.Tech Computer Science, 2024-2028, CGPA 8.4\n\nProjects\nCampus Event Finder: Built a web app with HTML, CSS and JavaScript that lists college events. Used by 120 students in the first month. Worked in a team of 4 and fixed layout bugs by debugging on phone and desktop.\nExpense Tracker: Python script that reads bank CSV files and charts monthly spending with Pandas.\nPortfolio Site: Designed a personal portfolio with HTML and CSS that loads in under 2 seconds.\n\nCertifications\nIntroduction to Python, online course, 2025\n\nSkills\nPython, JavaScript, HTML, CSS, Git, GitHub, SQL, Excel\n\nActivities\nTreasurer of the coding club. Presented project demos to 30 classmates. Volunteered at the college tech fest and helped 40 first-year students set up their first code repositories.";
