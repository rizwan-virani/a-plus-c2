/* a+ core 2 :: content/taxonomy.js — drag-and-drop classification activities (220-1202). */
window.TAXONOMY = [
  {
    title: "Windows Command-Line Tools by Purpose",
    subtitle: "Sort each command to what it does.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "net", label: "Networking" },
      { id: "disk", label: "Disk & File Repair" },
      { id: "user", label: "User & Process" }
    ],
    items: [
      { text: "ipconfig", cat: "net" },
      { text: "ping", cat: "net" },
      { text: "tracert", cat: "net" },
      { text: "nslookup", cat: "net" },
      { text: "chkdsk", cat: "disk" },
      { text: "sfc /scannow", cat: "disk" },
      { text: "diskpart", cat: "disk" },
      { text: "format", cat: "disk" },
      { text: "net user", cat: "user" },
      { text: "taskkill", cat: "user" },
      { text: "tasklist", cat: "user" },
      { text: "gpupdate", cat: "user" }
    ]
  },
  {
    title: "File Systems by Platform and Use",
    subtitle: "Drop each file system trait into its matching system.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "ntfs", label: "NTFS (Windows)" },
      { id: "fatx", label: "FAT32 / exFAT (Removable)" },
      { id: "nix", label: "APFS / ext4 (macOS & Linux)" }
    ],
    items: [
      { text: "Supports file-level permissions", cat: "ntfs" },
      { text: "Journaling and EFS encryption", cat: "ntfs" },
      { text: "Default for Windows system drives", cat: "ntfs" },
      { text: "Supports compression and quotas", cat: "ntfs" },
      { text: "4 GB maximum file size limit", cat: "fatx" },
      { text: "Wide cross-device compatibility", cat: "fatx" },
      { text: "exFAT removes the 4 GB cap for large media", cat: "fatx" },
      { text: "Common on USB flash drives", cat: "fatx" },
      { text: "APFS is the modern macOS default", cat: "nix" },
      { text: "ext4 is a common Linux file system", cat: "nix" },
      { text: "Used by Time Machine snapshots", cat: "nix" }
    ]
  },
  {
    title: "Windows Editions by Capability",
    subtitle: "Match each feature to the lowest edition that includes it.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "home", label: "Home" },
      { id: "pro", label: "Pro" },
      { id: "ent", label: "Enterprise" }
    ],
    items: [
      { text: "Microsoft account sign-in", cat: "home" },
      { text: "Windows Defender baseline", cat: "home" },
      { text: "Consumer-focused desktop", cat: "home" },
      { text: "BitLocker drive encryption", cat: "pro" },
      { text: "Join an Active Directory domain", cat: "pro" },
      { text: "Group Policy Editor (gpedit)", cat: "pro" },
      { text: "Remote Desktop host", cat: "pro" },
      { text: "AppLocker application control", cat: "ent" },
      { text: "Volume licensing for organizations", cat: "ent" },
      { text: "DirectAccess remote connectivity", cat: "ent" }
    ]
  },
  {
    title: "Where Does That Setting Live?",
    subtitle: "Sort each task to the tool you would open in Windows.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "devmgr", label: "Device Manager" },
      { id: "control", label: "Control Panel Applet" },
      { id: "settings", label: "Settings App" }
    ],
    items: [
      { text: "Update a driver for a network card", cat: "devmgr" },
      { text: "Disable a malfunctioning device", cat: "devmgr" },
      { text: "View hardware with a warning icon", cat: "devmgr" },
      { text: "Uninstall a program (Programs and Features)", cat: "control" },
      { text: "Configure Windows Defender Firewall rules", cat: "control" },
      { text: "Manage Internet Options", cat: "control" },
      { text: "Open Administrative Tools", cat: "control" },
      { text: "Check for Windows Update", cat: "settings" },
      { text: "Pair a Bluetooth device", cat: "settings" },
      { text: "Adjust display scaling and resolution", cat: "settings" }
    ]
  },
  {
    title: "Malware Types by Behavior",
    subtitle: "Drop each description onto the malware it describes.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "virfam", label: "Virus & Worm Family" },
      { id: "trojan", label: "Trojan & RAT" },
      { id: "extort", label: "Ransomware / Spyware / Keylogger" }
    ],
    items: [
      { text: "Attaches to a host file and needs the file to run", cat: "virfam" },
      { text: "Self-replicates across a network without a host", cat: "virfam" },
      { text: "Boot-sector infector loads before the OS", cat: "virfam" },
      { text: "Disguised as legitimate software", cat: "trojan" },
      { text: "Opens a backdoor for remote attacker control", cat: "trojan" },
      { text: "Grants persistent remote access to a host", cat: "trojan" },
      { text: "Encrypts files and demands payment", cat: "extort" },
      { text: "Locks the screen until a ransom is paid", cat: "extort" },
      { text: "Secretly monitors browsing and activity", cat: "extort" },
      { text: "Records every keystroke typed", cat: "extort" }
    ]
  },
  {
    title: "Attack and Social-Engineering Types",
    subtitle: "Sort each technique into the right attack category.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "social", label: "Social Engineering" },
      { id: "network", label: "Network Attack" },
      { id: "webapp", label: "Web Application Attack" }
    ],
    items: [
      { text: "Phishing email asking for credentials", cat: "social" },
      { text: "Tailgating through a secure door", cat: "social" },
      { text: "Shoulder surfing a typed password", cat: "social" },
      { text: "Impersonating IT staff by phone (vishing)", cat: "social" },
      { text: "Distributed denial-of-service flood", cat: "network" },
      { text: "On-path (man-in-the-middle) interception", cat: "network" },
      { text: "ARP spoofing to redirect traffic", cat: "network" },
      { text: "DNS poisoning of a resolver cache", cat: "network" },
      { text: "SQL injection into a login form", cat: "webapp" },
      { text: "Cross-site scripting (XSS) payload", cat: "webapp" },
      { text: "Brute forcing a web login portal", cat: "webapp" }
    ]
  },
  {
    title: "Wireless Security and Authentication",
    subtitle: "Classify each wireless term by its role.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "crypto", label: "Encryption Protocol" },
      { id: "authsvr", label: "Authentication Server / Method" },
      { id: "legacy", label: "Legacy or Insecure" }
    ],
    items: [
      { text: "WPA3 with AES encryption", cat: "crypto" },
      { text: "WPA2 using CCMP/AES", cat: "crypto" },
      { text: "AES block cipher", cat: "crypto" },
      { text: "RADIUS authentication server", cat: "authsvr" },
      { text: "TACACS+ for device administration", cat: "authsvr" },
      { text: "Kerberos ticket-based authentication", cat: "authsvr" },
      { text: "Multifactor authentication prompt", cat: "authsvr" },
      { text: "WEP with the RC4 cipher", cat: "legacy" },
      { text: "TKIP as used by original WPA", cat: "legacy" },
      { text: "Open network with no encryption", cat: "legacy" }
    ]
  },
  {
    title: "Permissions and Encryption Scenarios",
    subtitle: "Drop each scenario onto the access-control mechanism it uses.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "ntfsp", label: "NTFS Permissions" },
      { id: "sharep", label: "Share Permissions" },
      { id: "encrypt", label: "Encryption" }
    ],
    items: [
      { text: "Local and network access control on a volume", cat: "ntfsp" },
      { text: "Permissions inherited from a parent folder", cat: "ntfsp" },
      { text: "Granular Read, Write, and Modify rights", cat: "ntfsp" },
      { text: "Most restrictive of NTFS and share applies", cat: "ntfsp" },
      { text: "Applies only when accessed over the network", cat: "sharep" },
      { text: "Limited to Read, Change, and Full Control", cat: "sharep" },
      { text: "Ignored when logged in at the local console", cat: "sharep" },
      { text: "BitLocker protects a whole volume", cat: "encrypt" },
      { text: "EFS protects individual files per user", cat: "encrypt" },
      { text: "TPM stores the BitLocker key at boot", cat: "encrypt" }
    ]
  },
  {
    title: "Data Destruction and Disposal Methods",
    subtitle: "Sort each method by what it does to the media.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "destroy", label: "Physical Destruction" },
      { id: "reuse", label: "Wiping for Reuse" },
      { id: "docs", label: "Outsourcing & Documentation" }
    ],
    items: [
      { text: "Shredding a drive into fragments", cat: "destroy" },
      { text: "Drilling holes through the platters", cat: "destroy" },
      { text: "Incinerating the media", cat: "destroy" },
      { text: "Degaussing a magnetic hard drive", cat: "destroy" },
      { text: "Standard format then redeploy the disk", cat: "reuse" },
      { text: "Low-level secure erase of an SSD", cat: "reuse" },
      { text: "Drive-wiping software overwrite", cat: "reuse" },
      { text: "Certificate of destruction on file", cat: "docs" },
      { text: "Third-party recycling vendor receipt", cat: "docs" },
      { text: "Chain-of-custody record for the media", cat: "docs" }
    ]
  },
  {
    title: "Malware Removal Steps in Order",
    subtitle: "Group each action into the right phase of the best-practice procedure.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "before", label: "Before Remediation" },
      { id: "during", label: "Remediation" },
      { id: "after", label: "After Remediation" }
    ],
    items: [
      { text: "Investigate and verify malware symptoms", cat: "before" },
      { text: "Quarantine the infected system", cat: "before" },
      { text: "Disable System Restore in Windows", cat: "before" },
      { text: "Update the anti-malware signatures", cat: "during" },
      { text: "Scan and remove the malware", cat: "during" },
      { text: "Use safe mode or a preinstallation environment", cat: "during" },
      { text: "Re-enable System Restore", cat: "after" },
      { text: "Create a fresh restore point", cat: "after" },
      { text: "Educate the end user on prevention", cat: "after" },
      { text: "Schedule recurring scans and updates", cat: "after" }
    ]
  },
  {
    title: "Backup Types and Schemes",
    subtitle: "Drop each description onto the backup type it matches.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "full", label: "Full Backup" },
      { id: "incr", label: "Incremental Backup" },
      { id: "diff", label: "Differential Backup" }
    ],
    items: [
      { text: "Copies all selected data every time", cat: "full" },
      { text: "Longest backup window to complete", cat: "full" },
      { text: "Fastest single-set restore", cat: "full" },
      { text: "Backs up data changed since the last backup", cat: "incr" },
      { text: "Clears the archive bit after running", cat: "incr" },
      { text: "Smallest daily backup size", cat: "incr" },
      { text: "Restore needs the full plus every set", cat: "incr" },
      { text: "Backs up data changed since the last full", cat: "diff" },
      { text: "Does not clear the archive bit", cat: "diff" },
      { text: "Restore needs only the full plus one set", cat: "diff" }
    ]
  },
  {
    title: "Operational Procedures Grab-Bag",
    subtitle: "Sort each artifact into its operational-procedures category.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "change", label: "Change Management" },
      { id: "docs", label: "Documentation" },
      { id: "safety", label: "Safety & Environment" }
    ],
    items: [
      { text: "Rollback plan if a change fails", cat: "change" },
      { text: "Request submitted to the change board", cat: "change" },
      { text: "Risk analysis of a proposed change", cat: "change" },
      { text: "End-user acceptance before deployment", cat: "change" },
      { text: "Network topology diagram", cat: "docs" },
      { text: "Acceptable use policy (AUP)", cat: "docs" },
      { text: "Knowledge base article", cat: "docs" },
      { text: "ESD strap to prevent static discharge", cat: "safety" },
      { text: "Material safety data sheet (MSDS/SDS)", cat: "safety" },
      { text: "Proper equipment lifting technique", cat: "safety" }
    ]
  }
];
