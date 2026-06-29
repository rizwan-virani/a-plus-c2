/* ============================================================================
   a+ core 2  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ subject-topic badges,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the domain reading content (APLUS2.reading[1..4], lazy-loaded from
   assets/js/content/domainN.js).

   A deliberate sister to the A+ Core 1, security+ and network+ platforms:
   identical architecture and aesthetic, CompTIA A+ Core 2 (220-1202) content.
   Authored by Professor Rizwan Virani, San Jacinto College.
   ========================================================================== */
window.APLUS2 = window.APLUS2 || {};

APLUS2.exam = {
  code: "220-1202",
  name: "CompTIA A+ Core 2",
  minutes: 90,
  maxQuestions: 90,
  scaleLow: 100, scaleHigh: 900, passing: 700,
  domains: 4,
  launched: "2025",
  retiredPredecessor: "220-1102"
};

/* Per-domain metadata. `objectives` mirror the official 220-1202 exam outline. */
APLUS2.domainMeta = [
  { id: 1, weight: 22, color: "d1", icon: "🖥", title: "Operating Systems", sectionCount: 10,
    short: "Windows editions and features, the Microsoft command line (Command Prompt and PowerShell), Windows tools and settings, OS installation and upgrade strategies, application installation concepts, and macOS and Linux baselines.",
    objectives: [
      { id: "1.1", t: "Identify basic features of Microsoft Windows editions" },
      { id: "1.2", t: "Given a scenario, use the appropriate Microsoft command-line tool" },
      { id: "1.3", t: "Given a scenario, use features and tools of the Microsoft Windows operating system" },
      { id: "1.4", t: "Given a scenario, use the appropriate Microsoft Windows settings" },
      { id: "1.5", t: "Given a scenario, use the appropriate Windows networking features" },
      { id: "1.6", t: "Given a scenario, apply application installation and configuration concepts" },
      { id: "1.7", t: "Explain common OS types and their purposes" },
      { id: "1.8", t: "Given a scenario, perform OS installations and upgrades in a diverse OS environment" },
      { id: "1.9", t: "Given a scenario, configure and use features of macOS and Linux client environments" }
    ] },
  { id: 2, weight: 25, color: "d2", icon: "🔒", title: "Security",
    short: "Physical and logical security controls, wireless security and authentication, malware detection and removal, social-engineering threats and vulnerabilities, Windows and workstation security configuration, mobile/embedded security, data destruction standards, SOHO network security, and browser hardening.",
    sectionCount: 12,
    objectives: [
      { id: "2.1", t: "Summarize various security measures and their purposes" },
      { id: "2.2", t: "Compare and contrast wireless security protocols and authentication methods" },
      { id: "2.3", t: "Given a scenario, detect, remove, and prevent malware using the appropriate tools and methods" },
      { id: "2.4", t: "Explain common social-engineering attacks, threats, and vulnerabilities" },
      { id: "2.5", t: "Given a scenario, manage and configure basic security settings in the Microsoft Windows OS" },
      { id: "2.6", t: "Given a scenario, configure a workstation to meet best practices for security" },
      { id: "2.7", t: "Explain common methods for securing mobile and embedded devices" },
      { id: "2.8", t: "Given a scenario, use common data destruction and disposal methods" },
      { id: "2.9", t: "Given a scenario, configure appropriate security settings on SOHO wireless and wired networks" },
      { id: "2.10", t: "Given a scenario, install and configure browsers and relevant security settings" }
    ] },
  { id: 3, weight: 22, color: "d3", icon: "🩺", title: "Software Troubleshooting",
    short: "Diagnosing and resolving Windows OS crashes and faults, application freezes and instability, common PC security symptoms, the best-practice malware-removal procedure, and mobile OS and mobile application issues including app security concerns.",
    sectionCount: 9,
    objectives: [
      { id: "3.1", t: "Given a scenario, troubleshoot common Windows OS problems" },
      { id: "3.2", t: "Given a scenario, troubleshoot common personal computer (PC) security issues" },
      { id: "3.3", t: "Given a scenario, use best practice procedures for malware removal" },
      { id: "3.4", t: "Given a scenario, troubleshoot common mobile OS and application issues" },
      { id: "3.5", t: "Given a scenario, troubleshoot common mobile OS and application security issues" }
    ] },
  { id: 4, weight: 31, color: "d4", icon: "📋", title: "Operational Procedures",
    short: "The largest domain: ticketing and documentation management, change-control governance, backup and recovery methods, safety procedures, environmental controls, prohibited content and privacy/licensing/policy concepts, professional communication, the basics of scripting, and remote access technologies.",
    sectionCount: 11,
    objectives: [
      { id: "4.1", t: "Given a scenario, implement best practices associated with documentation and support systems information management" },
      { id: "4.2", t: "Explain basic change-management best practices" },
      { id: "4.3", t: "Given a scenario, implement workstation backup and recovery methods" },
      { id: "4.4", t: "Given a scenario, use common safety procedures" },
      { id: "4.5", t: "Summarize environmental impacts and local environmental controls" },
      { id: "4.6", t: "Explain the importance of prohibited content/activity and privacy, licensing, and policy concepts" },
      { id: "4.7", t: "Given a scenario, use proper communication techniques and professionalism" },
      { id: "4.8", t: "Identify the basics of scripting" },
      { id: "4.9", t: "Given a scenario, use remote access technologies" }
    ] }
];

/* The five PBQ formats, badged by their true operational subject topic. */
APLUS2.pbqFormats = [
  { id: 1, icon: "⌨", domainColor: 1, obj: "1.2", badge: "COMMAND LINE", title: "Windows Command-Line Tooling",
    desc: "Match each task to the correct Command Prompt or PowerShell command — the highest-yield CLI memorization on Core 2.",
    long: "For each requirement, select the correct <b>command-line tool</b>. Master the must-know utilities: <code>ipconfig</code>, <code>ping</code>, <code>chkdsk</code>, <code>sfc</code>, <code>gpupdate</code>, <code>diskpart</code>, <code>robocopy</code>, <code>net user</code>, <code>tasklist</code>/<code>taskkill</code>, and their PowerShell equivalents." },
  { id: 2, icon: "💿", domainColor: 1, obj: "1.4 / 1.8", badge: "OS INSTALL & SETTINGS", title: "OS Installation & Configuration",
    desc: "Choose the correct installation method, file system, partition style, and Windows setting for a deployment scenario.",
    long: "Configure the deployment field by field: the correct <b>boot/installation method</b> (clean, in-place upgrade, image, recovery), the correct <b>partition scheme</b> (MBR vs GPT) and <b>file system</b> (NTFS, exFAT, FAT32, APFS, ext4), and the right <b>Windows setting</b> for the requirement." },
  { id: 3, icon: "🛡", domainColor: 2, obj: "2.5 / 2.6", badge: "SECURITY HARDENING", title: "Security Configuration & Hardening",
    desc: "Harden a Windows workstation: account controls, NTFS vs share permissions, login security, and best-practice settings.",
    long: "Apply best-practice security: choose the correct <b>account and login control</b> (UAC, least privilege, password policy), the correct <b>permission model</b> (NTFS vs share, principle of least privilege), <b>encryption</b> (BitLocker, EFS), and endpoint protections to meet the requirement." },
  { id: 4, icon: "🦠", domainColor: 3, obj: "3.3", badge: "MALWARE REMEDIATION", title: "Malware Removal Procedure",
    desc: "Apply the CompTIA seven-step malware-removal best practice — put the workflow in the correct order and pick the right tool at each stage.",
    long: "Work the incident like a technician: order the <b>seven malware-removal steps</b> (identify, quarantine, disable System Restore, remediate, schedule scans and run updates, re-enable System Restore, educate the end user), and choose the correct <b>tool or action</b> at each stage." },
  { id: 5, icon: "📑", domainColor: 4, obj: "4.2 / 4.3", badge: "OPERATIONAL PROCEDURES", title: "Operational Procedures & Change Control",
    desc: "Run change management, backup/recovery, and documentation correctly — pick the right artifact, backup scheme, or governance step.",
    long: "Operate by the book: select the correct <b>change-management artifact</b> (request form, rollback plan, approval, end-user acceptance), the right <b>backup method and rotation</b> (full/incremental/differential, 3-2-1, GFS), and the proper <b>documentation or recovery</b> action for the scenario." }
];

/* Curated free study resources. */
APLUS2.resources = [
  { icon: "🎥", title: "Professor Messer — Free A+ 220-1202 Course", host: "professormesser.com",
    url: "https://www.professormesser.com/free-a-plus-training/220-1202/220-1202-video/220-1202-training-course/",
    desc: "The complete, free video course covering every 220-1202 objective, plus monthly live study groups, practice questions, and downloadable course notes." },
  { icon: "📄", title: "Official CompTIA A+ Core 2 Objectives (PDF)", host: "comptia.org",
    url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/",
    desc: "The authoritative exam outline for 220-1202 — every objective and sub-bullet CompTIA can test. Download the objectives PDF and use it as your master checklist." },
  { icon: "⌨", title: "Windows Command-Line Reference (Microsoft Learn)", host: "learn.microsoft.com",
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
    desc: "The official A–Z reference for Windows commands. Drill the ones Core 2 expects you to know cold (ipconfig, chkdsk, sfc, gpupdate, diskpart, robocopy) with the Command-Line PBQs here." },
  { icon: "👥", title: "r/CompTIA — Community Wiki & Study Guides", host: "reddit.com/r/CompTIA",
    url: "https://www.reddit.com/r/CompTIA/wiki/index/",
    desc: "Crowd-sourced study plans, exam-day experiences, and the well-known community guides. Read recent “passed Core 2” posts for current question-style intel." },
  { icon: "🐧", title: "Linux Command Line Basics (free)", host: "linuxcommand.org",
    url: "https://linuxcommand.org/",
    desc: "Hands-on practice with the Linux shell — Core 2 expects familiarity with ls, grep, chmod, sudo, apt/yum, and more. Working a real terminal makes the macOS/Linux objective stick." },
  { icon: "🧭", title: "r/CompTIA A+ Study Group", host: "reddit.com/r/CompTIA",
    url: "https://www.reddit.com/r/CompTIA/",
    desc: "Active community for A+ candidates — accountability, resource sharing, and answers to the “is this on the exam?” questions that come up while you study." }
];

/* ---- Reader: Exam Mechanics card ---- */
APLUS2.examMechanics = [
  { heading: "Two exams, one certification", body:
    "<p><strong>CompTIA A+ requires passing two separate exams</strong> — <strong>Core 1 (220-1201)</strong> and <strong>Core 2 (220-1202)</strong>. You earn the A+ certification only after passing both; this platform covers <strong>Core 2</strong>. The two exams can be taken in either order and on different days, but both must be passed within three years of each other.</p>" +
    "<p>Core 2 (220-1202) is a single exam of <strong>up to 90 questions</strong> in <strong>90 minutes</strong>, delivered at a Pearson VUE testing center or via OnVUE online proctoring. Because the count is a <em>maximum</em>, some forms have fewer scored items, and CompTIA seeds unscored beta questions you cannot identify — so treat every question as if it counts.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>Core 2 is the <strong>software, security, and procedures</strong> half of A+. Operational Procedures and Security together are over half the exam, so weight your study toward documentation, change management, security configuration, and the malware-removal methodology.</div>" },
  { heading: "Question styles: multiple choice, drag-and-drop, and PBQs", body:
    "<p>Core 2 mixes <strong>multiple-choice</strong> items (single- and multiple-response) with <strong>drag-and-drop</strong> matching and <strong>performance-based questions (PBQs)</strong> — interactive tasks such as choosing the correct command-line tool, configuring Windows security settings, ordering the malware-removal steps, performing an OS installation, or applying a change-management procedure. PBQs typically appear first, are worth more, and consume more time.</p>" +
    "<ul><li>Read the <strong>last sentence first</strong> — it usually contains the real ask (“which command…”, “what should the technician do <em>first</em>…”).</li><li><strong>Multiple-response</strong> items tell you how many to choose; you must get all of them right.</li><li><strong>PBQs</strong> usually allow partial credit — complete every field you can, even if unsure of one.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use the <strong>flag-and-review</strong> workflow: first pass, answer everything you know and flag the rest; second pass, spend the remaining time only on flagged items. A slow PBQ should never cost you easy multiple-choice points.</div>" },
  { heading: "Scoring: the 100–900 scale", body:
    "<p>Core 2 is scored on a <strong>scaled range of 100 to 900</strong>, and the passing score is <strong>700</strong>. Scaled scoring is not a simple percentage: CompTIA weights items by difficulty and equates across forms, so you cannot reverse-engineer a “number correct” from 700, and the raw-to-scaled mapping is not published.</p>" +
    "<p>There is <strong>no penalty for guessing</strong> — an unanswered question is simply wrong — so never leave an item blank. Eliminate obviously wrong options, make your best choice, flag it if unsure, and move on.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the 100–900 band. Use it as a <em>relative</em> readiness signal — “am I trending toward 700?” — not as a literal prediction of your official score.</blockquote>" },
  { heading: "Eligibility, cost, and renewal", body:
    "<p>There are <strong>no formal prerequisites</strong>, but CompTIA recommends about <strong>12 months</strong> of hands-on experience in an IT support / help-desk role. A+ is the recommended starting point of the CompTIA pathway, before Network+ and Security+.</p>" +
    "<p>The exam voucher cost varies by region (commonly in the US$390+ range). Academic and bundle discounts exist — ask your institution. There may also be funding available for a free voucher. Connect with the Program Director or your professor for more information about funding opportunities.</p>" +
    "<p>The A+ certification is valid for <strong>three years</strong> and renews through CompTIA's <strong>Continuing Education (CE)</strong> program, or automatically when you earn a higher CompTIA certification such as Network+ or Security+.</p>" },
  { heading: "Exam-day logistics", body:
    "<p>Bring two forms of ID; for online proctoring, show a clear workspace, a working webcam, and a stable connection. You cannot use notes, phones, or smartwatches. A simple on-screen whiteboard or provided scratch material may be available — use it to jot the <strong>command-line tools</strong>, the <strong>seven malware-removal steps</strong>, and the <strong>change-management workflow</strong> you'll otherwise lose under pressure.</p>" +
    "<div class='callout scenario'><div class='lbl'>Mindset</div>Core 2 rewards <strong>technician judgment</strong> — knowing your Windows tools, security best practices, and a disciplined procedure for malware and change control. Most questions are answerable by applying those fundamentals to the scenario in front of you.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
APLUS2.careerGuidance = [
  { heading: "Where A+ sits on the ladder", body:
    "<p><strong>CompTIA A+ is the foundational, vendor-neutral IT certification</strong> — for most people, it is the very first cert they earn and the formal start of an IT career. It validates that you can support, configure, and troubleshoot end-user hardware, operating systems, networks, and security at a help-desk / desktop-support level.</p>" +
    "<p>On the CompTIA core pathway, A+ comes <em>before</em> <strong>Network+</strong> (networking depth) and <strong>Security+</strong> (security fundamentals). Many employers list A+ as a <em>required</em> or <em>preferred</em> qualification for entry IT roles, and it is widely recognized by hiring managers as proof you can be trusted with a ticket queue on day one.</p>" },
  { heading: "What Core 2 proves you can do", body:
    "<p>Core 2 specifically validates the <strong>operating-system, security, software-troubleshooting, and operational-procedures</strong> half of the technician skill set. It proves you can:</p>" +
    "<ul>" +
    "<li><strong>Operate Windows (and macOS/Linux)</strong> — use the command line and built-in tools, configure settings, and perform installations and upgrades.</li>" +
    "<li><strong>Apply security</strong> — configure account, permission, and login controls, harden workstations and SOHO networks, and follow data-destruction standards.</li>" +
    "<li><strong>Troubleshoot software</strong> — diagnose OS crashes, application faults, security symptoms, and mobile-app problems, and follow the malware-removal procedure.</li>" +
    "<li><strong>Follow operational procedures</strong> — documentation, change management, backups, safety, professional communication, scripting basics, and remote access.</li>" +
    "</ul>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>These are the literal daily tasks of help-desk and desktop-support technicians. A+ tells an employer you can do them without hand-holding.</div>" },
  { heading: "Roles A+ opens", body:
    "<p>A+ aligns with the most common entry points into IT:</p>" +
    "<ul>" +
    "<li><strong>Help Desk / Service Desk Technician</strong> — first-line support, ticket triage, and end-user troubleshooting.</li>" +
    "<li><strong>Desktop Support Technician</strong> — imaging, deploying, and repairing workstations and peripherals.</li>" +
    "<li><strong>Field Service / IT Support Technician</strong> — on-site installs, repairs, and break-fix.</li>" +
    "<li><strong>IT Support Specialist</strong> — broad first/second-line support across hardware, OS, and basic networking.</li>" +
    "<li><strong>Technical Support / Customer Support (IT)</strong> — supporting products and users with a technical foundation.</li>" +
    "</ul>" },
  { heading: "Building the path beyond A+", body:
    "<p>Treat A+ as the launch point of a career, not a destination. A common trajectory: <em>A+ → help-desk/desktop experience → Network+ → Security+</em>, then a specialization (cloud, cybersecurity, networking, or systems administration). Earning Network+ or Security+ later also <strong>auto-renews your A+</strong>.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Pair the cert with <strong>hands-on practice</strong> — install Windows in a VM, script a simple task, configure BitLocker and UAC, and work real tickets if you can. Employers hire A+ holders who can actually operate and secure systems, not just recite definitions.</div>" }
];

/* Reading content lazy-loads from assets/js/content/domainN.js (APLUS2.reading[N]);
   flashcard decks lazy-load from content/flashN.js (APLUS2.flash[N]). */
APLUS2.reading = APLUS2.reading || {};
APLUS2.flash = APLUS2.flash || {};
