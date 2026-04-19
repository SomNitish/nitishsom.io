/* ════════════════════════════════════════════
   monkincyber — SINGLE SOURCE OF TRUTH
   All portfolio data lives here.
   Import on every page that needs data.
   Edit ONLY this file for content updates.
════════════════════════════════════════════ */
const P = {

  /* ── IDENTITY ──────────────────────────── */
  name:    "monkincyber",
  role:    "SOC Analyst · Threat Hunter · Security Researcher",
  tagline: "2 years securing enterprise environments.",
  summary: "SOC analyst with 2 years of hands-on experience in enterprise environments. I've monitored ISP-level traffic for APT behaviour, built SOAR automation pipelines that cut MTTR from 15 minutes to under 2, and written 30+ threat hunting reports delivered directly to clients.",
  location: "India",
  tz:       "IST / UTC+5:30",

  /* ── VISIBILITY FLAGS ──────────────────────
     showHireBtn:    false = hidden from everyone
                     true  = visible (flip when job hunting)
     showAvailBadge: green "Open to remote" badge in nav
  ─────────────────────────────────────────── */
  showHireBtn:    false,
  showAvailBadge: true,

  /* ── CONTACT ───────────────────────────── */
  contact: {
    email:    "your@email.com",
    linkedin: "linkedin.com/in/yourprofile",
    github:   "github.com/monkincyber",
    site:     "monkincyber.github.io",
  },

  /* ── STATS ─────────────────────────────── */
  stats: [
    { num: "30+",  label: "IR reports delivered" },
    { num: "2 yrs", label: "Hands-on SOC" },
    { num: "5+",   label: "Enterprise tools" },
    { num: "3",    label: "Compliance frameworks" },
  ],

  /* ── SKILLS
     Used by: knowledge graph, cert detail pages, skill evidence trail
     Each skill has: id, name, category, description
  ─────────────────────────────────────────── */
  skills: [
    { id:"log-parsing",      name:"Log parsing",           cat:"detection",  desc:"Extracting structured fields from raw syslog, JSON, EVTX, CEF, and custom formats to feed detection logic." },
    { id:"correlation-rules",name:"Correlation rules",     cat:"detection",  desc:"Writing detection logic in SIEM/UEBA platforms — low-noise, high-fidelity alerts from parsed log fields." },
    { id:"threat-hunting",   name:"Threat hunting",        cat:"hunting",    desc:"Proactive hypothesis-driven hunting using NDR and SIEM — 30+ structured hunt reports delivered." },
    { id:"ueba",             name:"UEBA",                  cat:"detection",  desc:"Behavioural baseline modelling and anomaly detection for user and entity activity." },
    { id:"ir-playbooks",     name:"IR playbooks",          cat:"response",   desc:"Structured incident response methodology — triage, containment, eradication, recovery, reporting." },
    { id:"soar-automation",  name:"SOAR automation",       cat:"automation", desc:"End-to-end automated triage pipelines — Wazuh alert → N8N enrichment → TheHive case creation." },
    { id:"ndr-analysis",     name:"NDR analysis",          cat:"hunting",    desc:"Network traffic analysis at ISP scale — flow analysis, DPI, lateral movement detection." },
    { id:"mitre-mapping",    name:"MITRE ATT&CK mapping",  cat:"detection",  desc:"Mapping detection rules and hunt hypotheses to ATT&CK tactics, techniques, and data sources." },
    { id:"python-scripting", name:"Python scripting",      cat:"scripting",  desc:"Security automation scripts — API integrations, log parsers, alert enrichment. Currently learning." },
    { id:"bash-scripting",   name:"Bash scripting",        cat:"scripting",  desc:"Shell scripting for SOC automation, log processing, and system administration tasks." },
    { id:"network-security", name:"Network security",      cat:"network",    desc:"Firewall policy, IPS/IDS configuration, network segmentation, perimeter monitoring." },
    { id:"cloud-security",   name:"Cloud security",        cat:"cloud",      desc:"Cloud IAM, misconfiguration detection, cloud log analysis. In progress via Security+." },
    { id:"report-writing",   name:"IR report writing",     cat:"response",   desc:"Structured client-facing reports — findings, impact scope, timeline, remediation steps." },
    { id:"sop-design",       name:"SOP design",            cat:"process",    desc:"Designing and maintaining standard operating procedures for SOC operational activities." },
  ],

  /* ── CERTIFICATIONS
     Each cert has:
       id        — used in URL: certifications/sentinelone.html
       name      — full cert name
       issuer    — vendor name
       year      — completion year
       status    — "active" | "progress" | "planned"
       progress  — 0-100 (only for "progress")
       icon      — path to icon: assets/icons/sentinelone.svg
       color     — accent color for the cert page
       badge     — short label for badge display
       summary   — 1-2 sentences about the cert
       learned   — array of skill IDs learned from this cert
       appliedIn — array of project IDs where this was applied
       notes_url — optional link to learning notes page
       verify_url— link to verify credential
       topics    — array of { heading, points[] } — what was covered
  ─────────────────────────────────────────── */
  certs: [
    {
      id:        "sentinelone",
      name:      "SentinelOne Certified Professional",
      issuer:    "SentinelOne",
      year:      2024,
      status:    "active",
      icon:      "../assets/icons/sentinelone.svg",
      color:     "#8B3DFF",
      badge:     "S1 Certified",
      summary:   "Vendor-certified on SentinelOne's EDR platform covering endpoint investigation, automated response, purple team operations, and hyperautomation workflows.",
      learned:   ["log-parsing","ir-playbooks","mitre-mapping","soar-automation"],
      appliedIn: ["sentinelone-hyperauto","wazuh-siem-lab"],
      verify_url:"https://",
      topics: [
        { heading: "Platform fundamentals",
          points: ["Agent policy management and deployment","Console navigation and alert triage","Threat intelligence integration","Exclusion management and noise reduction"] },
        { heading: "Investigation & RemoteOps",
          points: ["Deep-dive event analysis and causality chains","RemoteOps: live endpoint investigation without interruption","Forensic artefact collection playbooks","Process tree and file timeline analysis"] },
        { heading: "Automation & Purple team",
          points: ["Hyperautomation — building custom response workflows","STAR rules for custom behavioural detection","Purple Team: running adversary simulations to test coverage","Detection gap analysis mapped to MITRE ATT&CK"] },
      ],
      notes: "Applied every module in production at Job 2. Built Hyperautomation workflows that reduced containment time from 8 minutes to 30 seconds.",
    },
    {
      id:        "fortinet-nse",
      name:      "Fortinet NSE Certification",
      issuer:    "Fortinet",
      year:      2023,
      status:    "active",
      icon:      "../assets/icons/fortinet.svg",
      color:     "#EE3124",
      badge:     "Fortinet NSE",
      summary:   "Fortinet network security certification covering firewall management, IPS/IDS, VPN architecture, and threat intelligence feeds.",
      learned:   ["network-security","log-parsing","ndr-analysis"],
      appliedIn: ["wazuh-siem-lab"],
      verify_url:"https://",
      topics: [
        { heading: "Network security fundamentals",
          points: ["FortiGate firewall policy management","Network segmentation and zone-based security","NAT, routing, and traffic shaping"] },
        { heading: "Threat detection",
          points: ["IPS/IDS signature management","Application control and web filtering","FortiAnalyzer log aggregation and correlation"] },
        { heading: "VPN & remote access",
          points: ["SSL-VPN and IPsec tunnel configuration","Two-factor authentication integration","Certificate management"] },
      ],
      notes: "Used IPS/IDS knowledge from this cert to correlate firewall events with SIEM alerts for richer threat context in SOC operations.",
    },
    {
      id:        "palo-alto-cortex",
      name:      "Cortex XDR — Investigation & Response",
      issuer:    "Palo Alto Networks",
      year:      2024,
      status:    "active",
      icon:      "../assets/icons/paloalto.svg",
      color:     "#FA582D",
      badge:     "Cortex XDR",
      summary:   "XDR investigation and response certification — causality chain analysis, BIOC rule writing, and cross-layer alert correlation across endpoint, network, and cloud.",
      learned:   ["log-parsing","ir-playbooks","mitre-mapping","correlation-rules"],
      appliedIn: ["sentinelone-hyperauto"],
      verify_url:"https://",
      topics: [
        { heading: "XDR concepts",
          points: ["Cross-layer data ingestion — endpoint, network, cloud","Alert correlation and deduplication","Causality chain (CBC) analysis"] },
        { heading: "Investigation",
          points: ["BIOC rule writing for custom behavioural detection","Incident timeline reconstruction","Cross-endpoint hunt using XQL queries"] },
        { heading: "Response",
          points: ["Automated response action configuration","Isolate, remediate, and restore workflows","Integration with SOAR platforms"] },
      ],
      notes: "Causality chain analysis from this cert directly improved how I trace lateral movement in NDR + SIEM correlation at Job 2.",
    },
    {
      id:        "letsdefend-soc",
      name:      "SOC Analyst Learning Path",
      issuer:    "LetsDefend",
      year:      2023,
      status:    "active",
      icon:      "../assets/icons/letsdefend.svg",
      color:     "#3B82F6",
      badge:     "LetsDefend SOC",
      summary:   "Scenario-based SOC analyst training covering real-world alert investigation, log analysis, SIEM usage, and phishing investigation through hands-on lab environments.",
      learned:   ["log-parsing","threat-hunting","ir-playbooks","report-writing","mitre-mapping"],
      appliedIn: ["wazuh-siem-lab","soar-pipeline"],
      verify_url:"https://app.letsdefend.io/",
      topics: [
        { heading: "Log analysis & SIEM",
          points: ["Windows Event Log analysis — key Event IDs and their meaning","Network log parsing — syslog, firewall, proxy","SIEM alert investigation workflow","Writing and tuning detection rules"] },
        { heading: "Phishing investigation",
          points: ["Email header analysis","URL and attachment sandbox detonation","Identifying credential harvesting techniques","Writing phishing detection rules"] },
        { heading: "Incident response",
          points: ["Structured IR methodology — PICERL","Evidence collection and preservation","Writing client-facing IR reports","MITRE ATT&CK technique identification"] },
      ],
      notes: "This was my foundation. The alert triage methodology and log analysis techniques from this path were applied daily in Job 1. The IR report structure became the template for our SOC's documentation SOPs.",
    },
    {
      id:        "letsdefend-ir",
      name:      "Incident Responder Path",
      issuer:    "LetsDefend",
      year:      2023,
      status:    "active",
      icon:      "../assets/icons/letsdefend.svg",
      color:     "#3B82F6",
      badge:     "LetsDefend IR",
      summary:   "Practical incident response path covering evidence collection, containment strategies, timeline reconstruction, and structured reporting through real-world scenarios.",
      learned:   ["ir-playbooks","report-writing","mitre-mapping","threat-hunting"],
      appliedIn: ["soar-pipeline","sentinelone-hyperauto"],
      verify_url:"https://app.letsdefend.io/",
      topics: [
        { heading: "IR methodology",
          points: ["Preparation, identification, containment, eradication, recovery, lessons learned","Evidence handling and chain of custody","Containment strategy selection based on threat type"] },
        { heading: "Forensics fundamentals",
          points: ["Memory analysis basics","Disk artefact identification","Browser and application forensics","Log timeline reconstruction"] },
        { heading: "Reporting",
          points: ["Executive summary writing","Technical findings documentation","Remediation recommendation structuring","Client communication during active incidents"] },
      ],
      notes: "Directly shaped how I wrote 30+ IR reports in Job 1. The structured methodology from this path became the foundation of our SOC documentation standard.",
    },
    {
      id:        "security-plus",
      name:      "CompTIA Security+",
      issuer:    "CompTIA",
      year:      2025,
      status:    "progress",
      progress:  60,
      icon:      "../assets/icons/comptia.svg",
      color:     "#C41230",
      badge:     "Security+",
      summary:   "Broad security fundamentals certification covering threats, architecture, implementation, and operations. Industry-standard recognition for security practitioners.",
      learned:   ["network-security","cloud-security","ir-playbooks","correlation-rules"],
      appliedIn: [],
      verify_url:"",
      topics: [
        { heading: "Threats, attacks & vulnerabilities",
          points: ["Social engineering techniques","Malware types and attack vectors","Application and network attacks","Threat intelligence concepts"] },
        { heading: "Architecture & design",
          points: ["Cloud and virtualisation security","Zero trust architecture","Secure network design principles","Identity and access management"] },
        { heading: "Operations (in progress)",
          points: ["Incident response procedures","Digital forensics","Business continuity and DR","Risk management frameworks"] },
      ],
      notes: "Currently 60% through. Target: Q3 2025. Studying 1-2 hours daily.",
    },
  ],

  /* ── PROJECTS ──────────────────────────── */
  projects: [
    {
      id:        "wazuh-siem-lab",
      name:      "Wazuh SIEM hardening & detection lab",
      tagline:   "Production-grade SIEM with 20+ custom rules, noise reduction, multi-source integration",
      desc:      "Full Wazuh deployment with custom decoders for Windows Event, syslog, JSON, and proprietary ISP firewall formats. Integrated Suricata IDS for network-layer visibility. Wrote 20+ correlation rules mapped to MITRE ATT&CK TTPs.",
      impact:    "Alert fidelity +60% · False positives −45%",
      tags:      ["Wazuh","Suricata","MITRE ATT&CK","Custom decoders","Linux"],
      skills:    ["log-parsing","correlation-rules","ndr-analysis","mitre-mapping"],
      github:    "https://github.com/monkincyber/",
      blog:      "../blog/wazuh-detection-lab.html",
      icon:      "../assets/icons/wazuh.svg",
    },
    {
      id:        "soar-pipeline",
      name:      "SOAR pipeline — N8N + Wazuh + TheHive",
      tagline:   "End-to-end automated alert triage with IP enrichment and auto case creation",
      desc:      "Wazuh alert fires → N8N workflow enriches with IP reputation, geo, and threat intel → TheHive case auto-created with full context. Severity-based routing pages on-call analyst for critical alerts.",
      impact:    "MTTR: 15 min → under 2 min",
      tags:      ["N8N","TheHive","Wazuh","Cortex","Python"],
      skills:    ["soar-automation","ir-playbooks","log-parsing"],
      github:    "https://github.com/monkincyber/",
      blog:      "../blog/soar-pipeline.html",
      icon:      "../assets/icons/n8n.svg",
    },
    {
      id:        "sentinelone-hyperauto",
      name:      "SentinelOne hyperautomation & response playbooks",
      tagline:   "Auto-isolate on high-severity, RemoteOps forensics, Purple Team library",
      desc:      "Custom response automation built on SentinelOne API — auto-isolate endpoints on high-severity triggers, standardised RemoteOps forensic collection playbooks, and a library of 15+ adversary simulations for Purple Team exercises.",
      impact:    "Containment: 8 min → 30 sec",
      tags:      ["SentinelOne","Python","REST API","MITRE ATT&CK","Purple team"],
      skills:    ["soar-automation","ir-playbooks","mitre-mapping"],
      github:    "https://github.com/monkincyber/",
      blog:      "../blog/sentinelone-hyperauto.html",
      icon:      "../assets/icons/sentinelone.svg",
    },
  ],

  /* ── TOOLS / STACK ─────────────────────── */
  tools: [
    { id:"sentinelone", name:"SentinelOne",      cat:"EDR",        icon:"sentinelone.svg", lvl:90 },
    { id:"wazuh",       name:"Wazuh",            cat:"SIEM/XDR",   icon:"wazuh.svg",       lvl:92 },
    { id:"splunk",      name:"Splunk",           cat:"SIEM",       icon:"splunk.svg",       lvl:78 },
    { id:"elastic",     name:"Elastic SIEM",     cat:"SIEM",       icon:"elastic.svg",      lvl:62 },
    { id:"cortex-xdr",  name:"Cortex XDR",       cat:"XDR",        icon:"paloalto.svg",     lvl:76 },
    { id:"n8n",         name:"N8N",              cat:"SOAR",       icon:"n8n.svg",          lvl:82 },
    { id:"thehive",     name:"TheHive",          cat:"SOAR",       icon:"thehive.svg",      lvl:84 },
    { id:"suricata",    name:"Suricata",         cat:"NDR/IDS",    icon:"suricata.svg",     lvl:80 },
    { id:"fortinet",    name:"Fortinet",         cat:"Firewall",   icon:"fortinet.svg",     lvl:66 },
    { id:"jira",        name:"JIRA",             cat:"Process",    icon:"jira.svg",         lvl:70 },
    { id:"python",      name:"Python",           cat:"Scripting",  icon:"python.svg",       lvl:42 },
    { id:"bash",        name:"Bash",             cat:"Scripting",  icon:"bash.svg",         lvl:56 },
    { id:"powershell",  name:"PowerShell",       cat:"Scripting",  icon:"powershell.svg",   lvl:50 },
  ],

  /* ── BLOG POSTS ────────────────────────── */
  posts: [
    /* ↓ NEW POST — added 2025-04-20 */
  {
    id:       "threat-hunting-notes",
    title:    "Threat Hunting — My Notes & Learnings",
    date:     "2025-04-20",
    readMins: 8,
    cat:      "Threat Hunting",
    catColor: "green",
    summary:  "Hypotheses, IoCs, the full lifecycle, and 3 real Wazuh lab walkthroughs. Learning in public.",
    tags:     ["Threat hunting","SIEM","Wazuh","MITRE ATT&CK"],
    skills:   ["threat-hunting","log-parsing","mitre-mapping"],
    linkedin: "https://linkedin.com/in/yourprofile",
  },
    /* ↑ END NEW POST */
    {
      id:       "suricata-wazuh-integration",
      title:    "Integrating Suricata with Wazuh — a complete step-by-step guide",
      date:     "2025-03-14",
      readMins: 8,
      cat:      "Tool integration",
      catColor: "green",
      summary:  "Every non-standard log source needs a custom decoder before a single alert fires. Here's the exact process I use — from capturing a raw log sample to a production-ready decoder.",
      tags:     ["Wazuh","Suricata","Log parsing","Detection"],
      skills:   ["log-parsing","correlation-rules","ndr-analysis"],
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    {
      id:       "soar-pipeline",
      title:    "Building a SOAR pipeline with N8N + Wazuh + TheHive from scratch",
      date:     "2025-02-28",
      readMins: 12,
      cat:      "Blue team ops",
      catColor: "blue",
      summary:  "How I connected three open-source tools to build a fully automated alert triage system. No manual Tier 1 steps. MTTR dropped from 15 minutes to under 2.",
      tags:     ["N8N","TheHive","Wazuh","SOAR","Automation"],
      skills:   ["soar-automation","ir-playbooks"],
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    {
      id:       "wazuh-detection-lab",
      title:    "Writing effective Wazuh detection rules for real-world use cases",
      date:     "2025-01-20",
      readMins: 10,
      cat:      "Tutorial",
      catColor: "purple",
      summary:  "A walkthrough of how I approach correlation rule writing — from understanding the log format to mapping detections to MITRE ATT&CK and tuning for noise.",
      tags:     ["Wazuh","Detection rules","MITRE ATT&CK","SIEM"],
      skills:   ["log-parsing","correlation-rules","mitre-mapping"],
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    {
      id:       "sentinelone-hyperauto",
      title:    "SentinelOne RemoteOps for IR — a real case walkthrough",
      date:     "2024-12-10",
      readMins: 9,
      cat:      "Threat analysis",
      catColor: "amber",
      summary:  "How I used SentinelOne RemoteOps to investigate a suspicious process on a live endpoint — without interrupting the user or tipping off the attacker.",
      tags:     ["SentinelOne","EDR","Incident response","RemoteOps"],
      skills:   ["ir-playbooks","mitre-mapping","soar-automation"],
      linkedin: "https://linkedin.com/in/yourprofile",
    },
  ],

  /* ── KNOWLEDGE GRAPH NODES & EDGES ────────
     Nodes: id, label, type (domain|skill|cert|project|tool|blog), cat
     Edges: [source_id, target_id]
  ─────────────────────────────────────────── */
  graph: {
    nodes: [
      // Domains
      { id:"d-detection",  label:"Detection",       type:"domain", cat:"detection"  },
      { id:"d-response",   label:"Response",        type:"domain", cat:"response"   },
      { id:"d-automation", label:"Automation",      type:"domain", cat:"automation" },
      { id:"d-hunting",    label:"Threat hunting",  type:"domain", cat:"hunting"    },
      { id:"d-network",    label:"Networking",      type:"domain", cat:"network"    },
      { id:"d-cloud",      label:"Cloud security",  type:"domain", cat:"cloud"      },
      // Skills
      { id:"log-parsing",       label:"Log parsing",       type:"skill", cat:"detection"  },
      { id:"correlation-rules", label:"Correlation rules",  type:"skill", cat:"detection"  },
      { id:"threat-hunting",    label:"Threat hunting",    type:"skill", cat:"hunting"    },
      { id:"ueba",              label:"UEBA",              type:"skill", cat:"detection"  },
      { id:"ir-playbooks",      label:"IR playbooks",      type:"skill", cat:"response"   },
      { id:"soar-automation",   label:"SOAR automation",   type:"skill", cat:"automation" },
      { id:"ndr-analysis",      label:"NDR analysis",      type:"skill", cat:"hunting"    },
      { id:"mitre-mapping",     label:"MITRE ATT&CK",      type:"skill", cat:"detection"  },
      { id:"network-security",  label:"Network security",  type:"skill", cat:"network"    },
      { id:"report-writing",    label:"IR reporting",      type:"skill", cat:"response"   },
      // Certs
      { id:"sentinelone",     label:"S1 Certified",    type:"cert", cat:"edr"     },
      { id:"fortinet-nse",    label:"Fortinet NSE",    type:"cert", cat:"network" },
      { id:"palo-alto-cortex",label:"Cortex XDR",      type:"cert", cat:"xdr"     },
      { id:"letsdefend-soc",  label:"LD SOC Path",     type:"cert", cat:"soc"     },
      { id:"letsdefend-ir",   label:"LD IR Path",      type:"cert", cat:"ir"      },
      { id:"security-plus",   label:"Security+",       type:"cert", cat:"general" },
      // Projects
      { id:"wazuh-siem-lab",       label:"Wazuh SIEM lab",   type:"project", cat:"siem"   },
      { id:"soar-pipeline",        label:"SOAR pipeline",    type:"project", cat:"soar"   },
      { id:"sentinelone-hyperauto",label:"S1 Hyperauto",     type:"project", cat:"edr"    },
      // Blog posts
      { id:"blog-threat-hunting", label:"TH Notes post", type:"blog", cat:"hunting" },
    ],
    edges: [
      // Domains → skills
      ["d-detection","log-parsing"],["d-detection","correlation-rules"],["d-detection","ueba"],["d-detection","mitre-mapping"],
      ["d-response","ir-playbooks"],["d-response","report-writing"],
      ["d-automation","soar-automation"],
      ["d-hunting","threat-hunting"],["d-hunting","ndr-analysis"],
      ["d-network","network-security"],["d-network","ndr-analysis"],
      // Certs → skills they taught
      ["letsdefend-soc","log-parsing"],["letsdefend-soc","threat-hunting"],["letsdefend-soc","ir-playbooks"],["letsdefend-soc","report-writing"],["letsdefend-soc","mitre-mapping"],
      ["letsdefend-ir","ir-playbooks"],["letsdefend-ir","report-writing"],["letsdefend-ir","mitre-mapping"],["letsdefend-ir","threat-hunting"],
      ["sentinelone","ir-playbooks"],["sentinelone","mitre-mapping"],["sentinelone","soar-automation"],["sentinelone","log-parsing"],
      ["fortinet-nse","network-security"],["fortinet-nse","log-parsing"],["fortinet-nse","ndr-analysis"],
      ["palo-alto-cortex","log-parsing"],["palo-alto-cortex","ir-playbooks"],["palo-alto-cortex","correlation-rules"],["palo-alto-cortex","mitre-mapping"],
      ["security-plus","network-security"],["security-plus","ir-playbooks"],
      // Skills → projects that use them
      ["log-parsing","wazuh-siem-lab"],["correlation-rules","wazuh-siem-lab"],["ndr-analysis","wazuh-siem-lab"],["mitre-mapping","wazuh-siem-lab"],
      ["soar-automation","soar-pipeline"],["ir-playbooks","soar-pipeline"],["log-parsing","soar-pipeline"],
      ["soar-automation","sentinelone-hyperauto"],["ir-playbooks","sentinelone-hyperauto"],["mitre-mapping","sentinelone-hyperauto"],
      // Projects → domains
      ["wazuh-siem-lab","d-detection"],["soar-pipeline","d-automation"],["sentinelone-hyperauto","d-response"],
      // Blog post → skills
      ["blog-threat-hunting","threat-hunting"],
      ["blog-threat-hunting","mitre-mapping"],
      ["blog-threat-hunting","log-parsing"],
      ["letsdefend-soc","blog-threat-hunting"],
    ],
  },
};