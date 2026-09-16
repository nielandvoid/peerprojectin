const RESOURCE_DATA = [
  {
    "id": "boards-nootan",
    "group": "boards-icse-isc",
    "title": "Nootan Textbooks (Nageen Prakashan)",
    "url": null,
    "tags": [],
    "note": "The textbooks most ISC students are actually handed, alongside Selina - across Physics, Chemistry, Biology and Maths (Kumar &amp; Mittal for Physics, H.C. Srivastava for Chemistry). Closely matched to the ISC syllabus and exam pattern, which is exactly what the free CBSE-first material online tends to miss."
  },
  {
    "id": "boards-folger-macbeth",
    "group": "boards-icse-isc",
    "title": "Folger Shakespeare Library - Macbeth",
    "url": "https://www.folger.edu/explore/shakespeares-works/macbeth/",
    "tags": ["free"],
    "note": "The current ISC Shakespeare set text - Acts I &amp; II for Class XI, Acts III-V for Class XII. Full text free from an actual Shakespeare institution, not a content-mill summary site. Use the \"Read\" section on the page, not the essays or teaching resources above it."
  },
  {
    "id": "physics-hc-verma",
    "group": "physics-boards-jee-neet",
    "title": "HC Verma - Concepts of Physics (Vol 1 & 2)",
    "url": null,
    "tags": [],
    "note": "The correct starting point for almost every Indian student. Builds genuine conceptual intuition rather than formula-matching. If you only own one physics book, this is it."
  },
  {
    "id": "physics-dc-pandey",
    "group": "physics-boards-jee-neet",
    "title": "DC Pandey",
    "url": null,
    "tags": [],
    "note": "Problem volume, closely matched to the JEE and NEET pattern alike."
  },
  {
    "id": "boards-ncert-exemplar",
    "group": "boards-ncert-exemplar",
    "title": "NCERT Exemplar Problems",
    "url": "https://ncert.nic.in/exemplar-problems.php",
    "tags": ["free"],
    "note": "Free, official, and genuinely the most underused resource there is. Significantly harder than the NCERT textbook exercises, and a large share of difficult board and competitive exam questions trace directly back to it. Most students do not know it exists."
  },
  {
    "id": "boards-ncert-textbooks",
    "group": "boards-ncert",
    "title": "NCERT Textbooks",
    "url": "https://ncert.nic.in/textbook.php",
    "tags": ["free"],
    "note": "Free PDF, and the actual source of truth. Board papers are set from these, not from coaching modules."
  },
  {
    "id": "boards-cbse-sample",
    "group": "boards-ncert",
    "title": "CBSE Sample Papers and Marking Schemes",
    "url": "https://cbseacademic.nic.in/",
    "tags": ["free"],
    "note": "Free. The marking scheme matters more than the paper - it shows exactly how marks are apportioned per step, which is the difference between knowing an answer and scoring it."
  },
  {
    "id": "khan-academy-india",
    "group": "boards-only",
    "title": "Khan Academy India",
    "url": "https://india.khanacademy.org/",
    "tags": ["free"],
    "note": "Underrated for how good it is. Free, topic-specific video lectures mapped directly to the India curriculum for classes 1-12 across maths and science, in English, Hinglish, Hindi and several regional languages. The gold standard for boards practice - most students only ever hear of it as a US site and never realise it has a dedicated India curriculum track."
  },
  {
    "id": "boards-nta-pastpapers",
    "group": "jee-neet-pastpapers",
    "title": "NTA / JEE Main Past QPs",
    "url": "https://jeemain.nta.nic.in/",
    "tags": ["free"],
    "note": "From the NTA site directly, not third-party compilations - those introduce transcription errors surprisingly often. The homepage does not show papers directly - open the \"Question Papers\" tab in the top menu to get to the actual archive."
  },
  {
    "id": "jee-advanced-pastpapers",
    "group": "jee-neet-pastpapers",
    "title": "NTA / JEE Advanced Past QPs",
    "url": "https://jeeadv.ac.in/archive.html",
    "tags": ["free"],
    "note": "Run by whichever IIT is organising JEE Advanced that year (IIT Roorkee currently). Full archive back to 2007, plus AAT (Architecture Aptitude Test) papers separately."
  },
  {
    "id": "marksapp",
    "group": "marksapp",
    "title": "MARKS App",
    "url": null,
    "tags": ["free"],
    "note": "Chapter-wise past-year questions for JEE Main, JEE Advanced, NEET and IAT, free, with custom tests and a preparation tracker. Not an official archive, but the most complete PYQ practice tool covering all three exams in one place. It will constantly prompt you to upgrade to MARKS Premium - we are not endorsing that, only the PYQ practice, which is entirely free."
  },
  {
    "id": "marksapp-mobile",
    "group": "marksapp",
    "child": true,
    "title": "Android / iOS",
    "url": "https://www.getmarks.app/",
    "tags": ["free"],
    "note": "The app."
  },
  {
    "id": "marksapp-web",
    "group": "marksapp",
    "child": true,
    "title": "Desktop / Web",
    "url": "https://web.getmarks.app/",
    "tags": ["free"],
    "note": "Browser version."
  },
  {
    "id": "boards-cengage",
    "group": "boards-cengage",
    "title": "Cengage series",
    "url": null,
    "tags": [],
    "note": "Solved examples ramping from easy to hard. Good for self-study without a teacher."
  },
  {
    "id": "physics-kalda",
    "group": "physics-olympiad-elite-kalda",
    "title": "Jaan Kalda's Study Materials",
    "url": "https://www.ioc.ee/~kalda/ipho/",
    "tags": ["free", "hard"],
    "note": "Estonian olympiad trainer, legendary in the community. Organised by <em>technique</em> rather than topic, which is what makes it unusual. The mechanics booklet alone is considered by many the highest value-per-page physics document available."
  },
  {
    "id": "physics-kevin-zhou",
    "group": "physics-olympiad-elite-kevinzhou",
    "title": "Kevin Zhou's Physics Handouts",
    "url": "https://knzhou.github.io/#physics-olympiad-handouts",
    "tags": ["free", "hard"],
    "note": "The best English-language physics olympiad material that exists - but not an entry point. There is a set of preliminary problems on the page itself to check you are ready before starting; if you cannot get through those, come back after the FOUNDATION books below. His essay <em>Advice for Introductory Physics</em> is worth reading regardless of where you are - it is about how to actually learn physics instead of pattern-matching problem types."
  },
  {
    "id": "physics-hrk",
    "group": "physics-olympiad-basics",
    "title": "Halliday, Resnick & Krane",
    "url": null,
    "tags": [],
    "note": "Note: <strong>Krane</strong>, not Walker. The HRK edition is meaningfully harder and better for olympiad preparation than the HRW version most students already own."
  },
  {
    "id": "physics-kleppner",
    "group": "physics-olympiad-basics",
    "title": "Kleppner & Kolenkow - Introduction to Mechanics",
    "url": null,
    "tags": [],
    "note": "The mechanics book. A surprising number of national olympiad problems are drawn near-directly from it."
  },
  {
    "id": "physics-morin",
    "group": "physics-olympiad-basics",
    "title": "David Morin - Classical Mechanics",
    "url": null,
    "tags": [],
    "note": "Comparable in level to Kleppner, with a very large problem bank and unusually good worked solutions. Several chapters are free on the author's site."
  },
  {
    "id": "physics-bukhovtsev",
    "group": "physics-olympiad-basics",
    "title": "Bukhovtsev et al. - Problems in Elementary Physics",
    "url": null,
    "tags": [],
    "note": "Irodov-like but far less calculus-heavy. This is the stepping stone most students skip, and skipping it is why Irodov feels impossible."
  },
  {
    "id": "physics-200-puzzling",
    "group": "physics-olympiad-basics",
    "title": "200 Puzzling Physics Problems",
    "url": null,
    "tags": [],
    "note": "Problems that read like riddles and reward physical reasoning over machinery. Excellent for building intuition."
  },
  {
    "id": "physics-irodov",
    "group": "physics-olympiad-advanced",
    "title": "Irodov - Problems in General Physics",
    "url": null,
    "tags": ["hard"],
    "note": "Famous, and genuinely brutal. Requires real comfort with calculus. <strong>Do not start here.</strong> Used well, it looks like this: pick your single weakest topic, do ten to fifteen problems in it, move on."
  },
  {
    "id": "physics-berkeley",
    "group": "physics-olympiad-advanced",
    "title": "Berkeley Physics Course (Vol 1-5)",
    "url": null,
    "tags": ["hard"],
    "note": "Reference-grade. Volume 2 (Purcell) on electricity and magnetism is the standout."
  },
  {
    "id": "physics-nsep",
    "group": "physics-olympiad-pastpapers",
    "title": "NSEP",
    "url": "https://iapt.org.in/",
    "tags": ["free"],
    "note": "The first-stage exam, run by IAPT rather than HBCSE. Past papers sit in the NSE archive further down the homepage, sorted by year."
  },
  {
    "id": "physics-inpho",
    "group": "physics-olympiad-pastpapers",
    "title": "INPhO",
    "url": "https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers",
    "tags": ["free"],
    "note": "Second-stage papers, once you have cleared NSEP, via HBCSE. The page opens on Astronomy by default - click the \"Physics\" tab near the top to get to INPhO."
  },
  {
    "id": "physics-ipho",
    "group": "physics-olympiad-pastpapers",
    "title": "IPhO, APhO and EuPhO",
    "url": "https://www.ipho-new.org/documentations/#past-ipho-problems-and-solutions",
    "tags": ["free"],
    "note": "International papers. APhO tends to be more computation-heavy; EuPhO leans toward elegance and insight."
  },
  {
    "id": "physics-usapho",
    "group": "physics-olympiad-pastpapers",
    "title": "USAPhO and F=ma",
    "url": "https://www.aapt.org/physicsteam/PT-exams.cfm",
    "tags": ["free"],
    "note": "American olympiad papers, well-suited to building up before attempting INPhO-level problems."
  },
  {
    "id": "physics-phods",
    "group": "physics-olympiad-communities",
    "title": "Physics Olympiads Discord",
    "url": "https://discord.gg/8ShAZsHyat",
    "tags": ["free"],
    "note": "The natural home for anyone working through Kevin Zhou's handouts or Kalda above - active problem discussion spanning complete beginners to IPhO medallists."
  },
  {
    "id": "physics-aops-forum",
    "group": "physics-olympiad-communities",
    "title": "AoPS Physics Forum",
    "url": "https://artofproblemsolving.com/community/c164_physics",
    "tags": ["free"],
    "note": "The same community behind the maths archive on our Mathematics page, with a dedicated physics section and real olympiad-training subforums."
  },
  {
    "id": "physics-feynman",
    "group": "physics-curiosity",
    "title": "The Feynman Lectures on Physics",
    "url": "https://www.feynmanlectures.caltech.edu/",
    "tags": ["free"],
    "note": "Full text, free, officially hosted by Caltech. Not exam prep and not a problem book. Volumes I and II especially."
  },
  {
    "id": "physics-mit-801sc",
    "group": "physics-curiosity",
    "title": "MIT OpenCourseWare 8.01SC - Classical Mechanics",
    "url": "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/",
    "tags": ["free"],
    "note": "Complete mechanics course including Walter Lewin's famous lectures, with full problem sets and solutions."
  },
  {
    "id": "physics-mit-802x",
    "group": "physics-curiosity",
    "title": "MIT 8.02.1x - Electricity and Magnetism",
    "url": "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+8.02.1x+1T2019/about",
    "tags": ["free"],
    "note": "The electromagnetism counterpart to 8.01, self-paced through MIT's Open Learning Library."
  },
  {
    "id": "physics-kevin-zhou-videos",
    "group": "physics-curiosity",
    "title": "Kevin Zhou's Video List",
    "url": "https://knzhou.github.io/videos/",
    "tags": ["free"],
    "note": "In his own words: \"some fun videos for a rainy day.\""
  },
  {
    "id": "physics-forums",
    "group": "physics-curiosity",
    "title": "Physics Forums",
    "url": "https://www.physicsforums.com/",
    "tags": ["free"],
    "note": "Running since 2001, and it shows - a genuinely deep archive of answered questions across physics, maths and engineering, moderated by people who actually know the subject."
  },
  {
    "id": "physics-se",
    "group": "physics-curiosity",
    "title": "Physics Stack Exchange",
    "url": "https://physics.stackexchange.com/",
    "tags": ["free"],
    "note": "More rigorous and less forgiving than a subreddit - best for a specific, well-posed question rather than open-ended \"how do I study\" advice."
  },
  {
    "id": "physics-r-physicsstudents",
    "group": "physics-curiosity",
    "title": "r/PhysicsStudents",
    "url": "https://www.reddit.com/r/PhysicsStudents/",
    "tags": ["free"],
    "note": "Student-facing, unlike r/Physics which skews toward research and professional physicists. Better for homework help and course-selection questions."
  },
  {
    "id": "maths-evan-chen-site",
    "group": "maths-olympiad-elite",
    "title": "Evan Chen's website",
    "url": "https://web.evanchen.cc/",
    "tags": ["free"],
    "note": "IMO gold medallist, MIT number theory PhD, US olympiad coach. The closest thing to a canonical English-language starting point for olympiad mathematics. Dozens of free handouts on inequalities, functional equations, geometry and combinatorics."
  },
  {
    "id": "maths-evan-chen-beginner",
    "group": "maths-olympiad-elite",
    "child": true,
    "title": "Evan Chen - Beginner's Page",
    "url": "https://web.evanchen.cc/wherestart.html",
    "tags": ["free"],
    "note": "An honest, well-sequenced answer to 'where do I actually start'. Read this before buying any olympiad book."
  },
  {
    "id": "maths-aops-archive",
    "group": "maths-olympiad-elite",
    "title": "AoPS Olympiad Archive",
    "url": "https://artofproblemsolving.com/wiki/index.php/Olympiad_Archive",
    "tags": ["free"],
    "note": "The largest archive of past competition problems from essentially every contest worldwide, with community solutions. The archive alone justifies the account."
  },
  {
    "id": "maths-napkin",
    "group": "maths-curiosity",
    "title": "An Infinitely Large Napkin",
    "url": "https://web.evanchen.cc/napkin.html",
    "tags": ["free"],
    "note": "Free, around a thousand pages, an introduction to higher mathematics - abstract algebra, topology, analysis - for students who have outgrown competition maths and want to know what comes next."
  },
  {
    "id": "maths-3blue1brown",
    "group": "maths-curiosity",
    "title": "3Blue1Brown",
    "url": "https://www.3blue1brown.com/",
    "tags": ["free"],
    "note": "Visual, intuition-first explanations of linear algebra, calculus and analysis. Does not teach problem-solving - teaches why the thing is true, which is usually the missing piece."
  },
  {
    "id": "maths-professor-leonard",
    "group": "maths-curiosity",
    "title": "Professor Leonard",
    "url": "https://www.youtube.com/@ProfessorLeonard",
    "tags": ["free"],
    "note": "Full-length, unhurried university lectures on precalculus, calculus I-III and differential equations. One of the best lecturers on the internet if you need the whole thing built from the ground up rather than a ten-minute summary."
  },
  {
    "id": "maths-spivak",
    "group": "maths-curiosity",
    "title": "Michael Spivak - Calculus",
    "url": null,
    "tags": ["hard"],
    "note": "Rigorous, proof-based calculus - not what you need to pass a board or JEE question, but the book if you actually want to know why calculus works instead of just computing with it. Slow and demanding. Treat it as a long-term project, not exam prep."
  },
  {
    "id": "maths-zeitz",
    "group": "maths-olympiad-books-start",
    "title": "Paul Zeitz - The Art and Craft of Problem Solving",
    "url": null,
    "tags": [],
    "note": "The best general introduction to olympiad-style thinking. Start here rather than with a topic-specific book."
  },
  {
    "id": "maths-engel",
    "group": "maths-olympiad-books-start",
    "title": "Arthur Engel - Problem-Solving Strategies",
    "url": null,
    "tags": ["hard"],
    "note": "The other book that belongs at the start alongside Zeitz - denser and more reference-like, organised by technique with hundreds of problems per section. Less narrative, more to dig through."
  },
  {
    "id": "maths-egmo",
    "group": "maths-olympiad-books-topic",
    "title": "Evan Chen - Euclidean Geometry in Mathematical Olympiads (EGMO)",
    "url": null,
    "tags": [],
    "note": "The standard olympiad geometry text."
  },
  {
    "id": "maths-modern-nt",
    "group": "maths-olympiad-books-topic",
    "title": "Modern Olympiad Number Theory",
    "url": null,
    "tags": [],
    "note": "Currently the most comprehensive olympiad number theory text available."
  },
  {
    "id": "maths-pranav-sriram",
    "group": "maths-olympiad-books-topic",
    "title": "Pranav Sriram - Olympiad Combinatorics",
    "url": null,
    "tags": ["free"],
    "note": "Free PDF. Steep learning curve, excellent content."
  },
  {
    "id": "maths-counting-rocks",
    "group": "maths-olympiad-books-topic",
    "title": "Counting Rocks! An Introduction to Combinatorics",
    "url": "https://arxiv.org/abs/2108.07206",
    "tags": ["free"],
    "note": "Free on arXiv. A genuinely beginner-friendly entry into combinatorics, starting from pre-olympiad material."
  },
  {
    "id": "maths-lemmas-geometry",
    "group": "maths-olympiad-books-topic",
    "title": "Andreescu & Pohoata - Lemmas in Olympiad Geometry",
    "url": null,
    "tags": ["hard"],
    "note": "For after EGMO."
  },
  {
    "id": "maths-cmumc",
    "group": "maths-olympiad-books-topic",
    "title": "CMUMC Problem of the Day Book",
    "url": null,
    "tags": [],
    "note": "Compiled by Thomas Lam. Evan Chen describes it as among the best general problem collections he has seen."
  },
  {
    "id": "maths-rmo-inmo",
    "group": "maths-olympiad-pastpapers",
    "title": "RMO and INMO",
    "url": "https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers",
    "tags": ["free"],
    "note": "Indian national olympiad papers, via HBCSE. The page opens on Astronomy by default - click the \"Mathematics\" tab near the top to get to RMO and INMO."
  },
  {
    "id": "maths-imo",
    "group": "maths-olympiad-pastpapers",
    "title": "IMO",
    "url": "https://www.imo-official.org/problems/",
    "tags": ["free"],
    "note": "Every International Mathematical Olympiad problem set since 1959, hosted by the IMO's own official site. The shortlists (harder problems the jury considered but did not use) are worth just as much practice time as the actual papers."
  },
  {
    "id": "maths-mods",
    "group": "maths-olympiad-communities",
    "title": "Mathematical Olympiads Discord (MODS)",
    "url": "https://discord.gg/q93Wrgn",
    "tags": ["free"],
    "note": "Over 2000 members from 30-plus countries, running a daily problem-of-the-day and monthly contests. The most active place online to get a genuinely hard problem looked at by people who compete at this level."
  },
  {
    "id": "maths-aops-forums",
    "group": "maths-olympiad-communities",
    "title": "AoPS Forums",
    "url": "https://artofproblemsolving.com/community/c13_contests",
    "tags": ["free"],
    "note": "The discussion side of the same community behind the AoPS archive above - hundreds of thousands of posts spanning middle school through graduate level, sorted by contest and topic."
  },
  {
    "id": "maths-se",
    "group": "maths-curiosity",
    "title": "Math Stack Exchange",
    "url": "https://math.stackexchange.com/",
    "tags": ["free"],
    "note": "Best for a specific, well-defined question with a rigorous answer, rather than general olympiad strategy discussion."
  },
  {
    "id": "maths-r-learnmath",
    "group": "maths-curiosity",
    "title": "r/learnmath",
    "url": "https://www.reddit.com/r/learnmath/",
    "tags": ["free"],
    "note": "Patient with genuine beginner questions in a way that r/math, below, generally is not."
  },
  {
    "id": "maths-r-math",
    "group": "maths-curiosity",
    "title": "r/math",
    "url": "https://www.reddit.com/r/math/",
    "tags": ["free"],
    "note": "Skews toward research-level and recreational maths rather than exam prep, but worth lurking in once competition maths has you actually curious about the subject."
  },
  {
    "id": "chem-codsite",
    "group": "chemistry-olympiad-elite",
    "title": "CODsite",
    "url": "https://chem.isodn.org/",
    "tags": ["free"],
    "note": "A student-run chemistry olympiad resource site with genuinely opinionated, specific guidance - beginner and intermediate roadmaps, honest commentary on which textbooks are actually necessary versus commonly over-bought, and per-year notes on which past IChO papers are worth your time. Rare to find advice this non-generic."
  },
  {
    "id": "chem-libretexts",
    "group": "chemistry-curiosity",
    "title": "ChemLibreTexts",
    "url": "https://chem.libretexts.org/",
    "tags": ["free"],
    "note": "Full university-level chemistry across every branch, open access. For specialised topics, usually better than buying an entire textbook for two chapters."
  },
  {
    "id": "chem-master-organic",
    "group": "chemistry-curiosity",
    "title": "Master Organic Chemistry",
    "url": "https://www.masterorganicchemistry.com/",
    "tags": ["free"],
    "note": "Mostly free. One of very few places that explains <em>why</em> reactions go the way they do, rather than listing them for memorisation."
  },
  {
    "id": "chem-reusch",
    "group": "chemistry-curiosity",
    "title": "Reusch's Virtual Textbook of Organic Chemistry",
    "url": "https://www2.chemistry.msu.edu/faculty/reusch/virttxtjml/intro1.htm",
    "tags": ["free"],
    "note": "Michigan State. Old-school, complete, with practice problems throughout."
  },
  {
    "id": "chem-rsc-pastpapers",
    "group": "chemistry-olympiad-pastpapers",
    "title": "RSC Chemistry Olympiad past papers",
    "url": "https://edu.rsc.org/",
    "tags": ["free"],
    "note": "Papers going back to 2003 with worked video answers split by difficulty - unusually strong support material for a free resource."
  },
  {
    "id": "chem-klein",
    "group": "chemistry-olympiad-books-core",
    "title": "Klein - Organic Chemistry",
    "url": null,
    "tags": [],
    "note": "Mechanism-focused and readable. Widely considered the only organic text genuinely required for olympiad work up to national level."
  },
  {
    "id": "chem-atkins-jones",
    "group": "chemistry-olympiad-books-core",
    "title": "Atkins & Jones - Chemical Principles",
    "url": null,
    "tags": [],
    "note": "The general chemistry foundation."
  },
  {
    "id": "chem-zumdahl",
    "group": "chemistry-olympiad-books-core",
    "title": "Zumdahl - Chemical Principles",
    "url": null,
    "tags": [],
    "note": "Note the title: <em>Chemical Principles</em>, not <em>Chemistry</em>. The latter is considerably easier and a very common accidental purchase."
  },
  {
    "id": "chem-clayden",
    "group": "chemistry-olympiad-books-advanced",
    "title": "Clayden - Organic Chemistry",
    "url": null,
    "tags": ["hard"],
    "note": "The deeper, more comprehensive organic text. Chapters 27-38 and 40 are the commonly cited high-value sections."
  },
  {
    "id": "chem-housecroft",
    "group": "chemistry-olympiad-books-advanced",
    "title": "Housecroft & Sharpe - Inorganic Chemistry",
    "url": null,
    "tags": ["hard"],
    "note": "Reference-grade inorganic."
  },
  {
    "id": "chem-skoog",
    "group": "chemistry-olympiad-books-advanced",
    "title": "Skoog - Fundamentals of Analytical Chemistry",
    "url": null,
    "tags": ["hard"],
    "note": "Analytical chemistry, for study camp and IChO preparation."
  },
  {
    "id": "chem-ms-chouhan",
    "group": "chemistry-boards-jee-neet",
    "title": "MS Chouhan - Organic Chemistry",
    "url": null,
    "tags": [],
    "note": "Technically Wiley's Solomons, Fryhle &amp; Snyder <em>Organic Chemistry for JEE</em>, adapted by Chouhan - not an independent book, though everyone just calls it \"MS Chouhan.\" Problem-heavy, built around competitive exam patterns rather than boards-level recall - standard for JEE, and just as useful for NEET-level organic drilling."
  },
  {
    "id": "chem-jd-lee",
    "group": "chemistry-boards-jee-neet",
    "title": "JD Lee - Concise Inorganic Chemistry",
    "url": null,
    "tags": [],
    "note": "The standard inorganic reference for JEE and NEET alike."
  },
  {
    "id": "chem-n-awasthi",
    "group": "chemistry-boards-jee-neet",
    "title": "N Awasthi - Physical Chemistry",
    "url": null,
    "tags": [],
    "note": "The standard physical chemistry problem book for JEE and NEET alike."
  },
  {
    "id": "chem-nsec",
    "group": "chemistry-olympiad-pastpapers",
    "title": "NSEC",
    "url": "https://iapt.org.in/",
    "tags": ["free"],
    "note": "The first-stage exam, run by IAPT rather than HBCSE. Past papers sit in the NSE archive further down the homepage, sorted by year."
  },
  {
    "id": "chem-incho",
    "group": "chemistry-olympiad-pastpapers",
    "title": "INChO",
    "url": "https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers",
    "tags": ["free"],
    "note": "Second-stage papers, once you have cleared NSEC, via HBCSE. The page opens on Astronomy by default - click the \"Chemistry\" tab near the top to get to INChO."
  },
  {
    "id": "chem-icho",
    "group": "chemistry-olympiad-pastpapers",
    "title": "IChO",
    "url": "https://icho-official.org/",
    "tags": ["free"],
    "note": "IChO has no single central archive - each year's host country runs its own site - but this page collects and links out to every past problem set since the 1960s. Worth pairing with the RSC papers above rather than replacing them."
  },
  {
    "id": "chem-cods-discord",
    "group": "chemistry-olympiad-communities",
    "title": "Chemistry Olympiads Discord (CODS)",
    "url": "https://discord.com/invite/chemistryolympiad",
    "tags": ["free"],
    "note": "Over 10,000 members running study help and competitions specifically around IChO and the national olympiads - the natural companion to CODsite above, run by the same broader community."
  },
  {
    "id": "chem-acs-usnco",
    "group": "chemistry-olympiad-communities",
    "title": "ACS USNCO Preparation forum",
    "url": "https://communities.acs.org/t5/USNCO-Preparation/gh-p/USNCOPreparation",
    "tags": ["free"],
    "note": "Run by the American Chemical Society itself. Aimed at the US olympiad but genuinely useful for anyone at IChO level - volunteers who actually write and grade these exams answer questions here."
  },
  {
    "id": "chem-se",
    "group": "chemistry-curiosity",
    "title": "Chemistry Stack Exchange",
    "url": "https://chemistry.stackexchange.com/",
    "tags": ["free"],
    "note": "Best for a specific mechanism or calculation question with a definitive answer, rather than open-ended study advice."
  },
  {
    "id": "chem-r-chemistry",
    "group": "chemistry-curiosity",
    "title": "r/chemistry",
    "url": "https://www.reddit.com/r/chemistry/",
    "tags": ["free"],
    "note": "General chemistry community, skewing toward undergraduate and professional chemists - useful once you are past the basics and want a wider perspective than a school-level forum gives you."
  },
  {
    "id": "chem-r-chemhelp",
    "group": "chemistry-curiosity",
    "title": "r/chemhelp",
    "url": "https://www.reddit.com/r/chemhelp/",
    "tags": ["free"],
    "note": "Smaller and more homework-focused than r/chemistry - a better fit if your question is \"why did I get this specific problem wrong\" rather than a general discussion."
  },
  {
    "id": "bio-ncert-biology",
    "group": "biology-boards-neet",
    "title": "NCERT Biology, Class XI & XII",
    "url": "https://ncert.nic.in/textbook.php",
    "tags": ["free"],
    "note": "The holy grail for NEET. A huge share of NEET Biology questions are lifted near-verbatim from these two books, lines and diagrams included - nothing else on this page matters more. On the portal, select Class XI or XII, then Biology, to get the chapter list. Free, official, watermarked PDF."
  },
  {
    "id": "bio-campbell",
    "group": "biology-boards-neet",
    "title": "Campbell Biology",
    "url": null,
    "tags": [],
    "note": "Genuinely the core book, for NEET as much as for olympiad - described across essentially every resource list as the closest thing to a required text. Any edition from the ninth onwards is fine - do not pay a premium for the latest. Read after NCERT, not instead of it."
  },
  {
    "id": "bio-alberts",
    "group": "biology-olympiad-advanced",
    "title": "Alberts - Molecular Biology of the Cell",
    "url": null,
    "tags": ["hard"],
    "note": "The authoritative reference for cell and molecular biology. Go here once Campbell has given you the map."
  },
  {
    "id": "bio-klug",
    "group": "biology-olympiad-advanced",
    "title": "Klug - Concepts of Genetics",
    "url": null,
    "tags": [],
    "note": "Fills the genetics gaps Campbell leaves. Genetics recurs heavily in olympiad papers."
  },
  {
    "id": "bio-silverthorn",
    "group": "biology-olympiad-advanced",
    "title": "Silverthorn or Vander - Human Physiology",
    "url": null,
    "tags": [],
    "note": "Animal physiology at the depth olympiads actually expect."
  },
  {
    "id": "bio-raven",
    "group": "biology-olympiad-advanced",
    "title": "Raven - Biology of Plants",
    "url": null,
    "tags": [],
    "note": "Plant biology, consistently the most under-prepared area among Indian students."
  },
  {
    "id": "bio-berg",
    "group": "biology-olympiad-advanced",
    "title": "Berg, Tymoczko & Gatto - Biochemistry",
    "url": null,
    "tags": ["hard"],
    "note": "Advanced biochemistry, for study-camp level."
  },
  {
    "id": "bio-hhmi",
    "group": "biology-curiosity",
    "title": "HHMI BioInteractive",
    "url": "https://www.biointeractive.org/",
    "tags": ["free"],
    "note": "The best free biology resource that exists. Virtual labs, molecular animations, short films on current research, and - unusually - <strong>real research datasets you can analyse yourself</strong>. Directly relevant to olympiad biology, which tests data interpretation far more than recall."
  },
  {
    "id": "bio-learn-genetics",
    "group": "biology-curiosity",
    "title": "Learn.Genetics",
    "url": "https://learn.genetics.utah.edu/",
    "tags": ["free"],
    "note": "University of Utah. Interactive genetics, cell biology and neuroscience explainers. Very good at the molecular scale, where static diagrams tend to fail."
  },
  {
    "id": "bio-ncbi-blast",
    "group": "biology-curiosity",
    "title": "NCBI and BLAST",
    "url": "https://blast.ncbi.nlm.nih.gov/",
    "tags": ["free"],
    "note": "The actual sequence databases and alignment tools working biologists use. If you are doing a research project or aiming at bioinformatics questions, using the real tool beats reading about it."
  },
  {
    "id": "bio-rcsb",
    "group": "biology-curiosity",
    "title": "RCSB Protein Data Bank",
    "url": "https://www.rcsb.org/",
    "tags": ["free"],
    "note": "Every solved protein structure, viewable in 3D in your browser."
  },
  {
    "id": "bio-inaturalist",
    "group": "biology-curiosity",
    "title": "iNaturalist",
    "url": "https://www.inaturalist.org/",
    "tags": ["free"],
    "note": "Photograph organisms, get identification, contribute to real biodiversity datasets. Good for ecology coursework and genuinely good for building a research-adjacent extracurricular."
  },
  {
    "id": "bio-nseb",
    "group": "biology-olympiad-pastpapers",
    "title": "NSEB",
    "url": "https://iapt.org.in/",
    "tags": ["free"],
    "note": "The first-stage exam, run by IAPT rather than HBCSE. Past papers sit in the NSE archive further down the homepage, sorted by year."
  },
  {
    "id": "bio-inbo",
    "group": "biology-olympiad-pastpapers",
    "title": "INBO",
    "url": "https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers",
    "tags": ["free"],
    "note": "Second-stage papers, once you have cleared NSEB, via HBCSE. The page opens on Astronomy by default - click the \"Biology\" tab near the top to get to INBO."
  },
  {
    "id": "bio-ibo",
    "group": "biology-olympiad-pastpapers",
    "title": "IBO",
    "url": "https://ibo-info.org/en/info/papers.html",
    "tags": ["free"],
    "note": "The official archive, theory and practical exams back to 1990. The most recent two years are held back under a black-out period, so do not be surprised if the very latest paper is missing."
  },
  {
    "id": "bio-bods",
    "group": "biology-olympiad-communities",
    "title": "Biology Olympiad Discord (BODS)",
    "url": "https://discord.com/invite/fMhYTZqMKU",
    "tags": ["free"],
    "note": "Over 6000 members focused specifically on USABO and IBO preparation - the most active place to get a genuinely hard data-interpretation question looked at."
  },
  {
    "id": "bio-biolympiads-studygroup",
    "group": "biology-olympiad-communities",
    "title": "Biolympiads Study Group",
    "url": "https://biolympiads.com/study-group/",
    "tags": ["free"],
    "note": "Smaller and more informal than BODS - peers sharing tips, resources and past-paper discussion specifically for olympiad prep."
  },
  {
    "id": "bio-se",
    "group": "biology-curiosity",
    "title": "Biology Stack Exchange",
    "url": "https://biology.stackexchange.com/",
    "tags": ["free"],
    "note": "Best for a specific, well-posed question with a definitive answer - a mechanism, a pathway, a specific paper's methodology - rather than general study advice."
  },
  {
    "id": "bio-r-biology",
    "group": "biology-curiosity",
    "title": "r/biology",
    "url": "https://www.reddit.com/r/biology/",
    "tags": ["free"],
    "note": "General biology community, useful for the wider \"why does this matter\" context that a syllabus rarely bothers to explain."
  }
];
