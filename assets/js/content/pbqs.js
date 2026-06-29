/* a+ core 2 :: content/pbqs.js — performance-based question bank (220-1202). */
window.APLUS2 = window.APLUS2 || {};
APLUS2.pbqs = APLUS2.pbqs || [];
APLUS2.pbqs.push(
  {
    id: "PBQ-001",
    format: 1,
    domain: 1,
    title: "Network Diagnostics from the Command Line",
    brief: "A technician must diagnose a connectivity problem on a Windows host using <span class='cy'>built-in command-line tools</span>. Choose the correct command for each task.",
    exhibitTitle: "task list",
    exhibit: "Diagnose host connectivity:\n  <span class='cy'>View IP configuration</span>\n  <span class='ok'>Test reachability to a host</span>\n<span class='dim'>Use built-in Windows commands only</span>",
    fields: [
      { label: "Show IP address, subnet, gateway", hint: "Adapter configuration", options: ["ipconfig", "ping", "netstat", "chkdsk"], answer: 0, explain: "ipconfig displays the host's IP configuration including address, subnet mask, and default gateway." },
      { label: "Test reachability to 8.8.8.8", hint: "ICMP echo", options: ["tracert", "ping", "nslookup", "sfc"], answer: 1, explain: "ping sends ICMP echo requests to test reachability and round-trip time." }
    ],
    summary: "ipconfig shows local configuration; ping tests reachability."
  },
  {
    id: "PBQ-002",
    format: 1,
    domain: 1,
    title: "Tracing the Path to a Remote Host",
    brief: "Pages load slowly for a remote site. Match each goal to the correct <span class='cy'>diagnostic command</span>.",
    exhibitTitle: "goals",
    exhibit: "Investigate latency:\n  <span class='cy'>List every router hop to the host</span>\n  <span class='ok'>Combine hop trace with sustained loss stats</span>",
    fields: [
      { label: "Show each hop and its latency", options: ["ping", "tracert", "netstat", "gpresult"], answer: 1, explain: "tracert lists each router hop to the destination along with per-hop round-trip times." },
      { label: "Gather per-hop packet-loss over time", options: ["pathping", "ipconfig", "tasklist", "winver"], answer: 0, explain: "pathping traces the route then samples each hop over time, reporting per-hop latency and loss." }
    ],
    summary: "tracert maps hops; pathping adds sustained per-hop loss statistics."
  },
  {
    id: "PBQ-003",
    format: 1,
    domain: 1,
    title: "Name Resolution Troubleshooting",
    brief: "A user can reach a server by IP but not by name. Pick the right command for each step.",
    exhibitTitle: "symptoms",
    exhibit: "<span class='warnc'>Name lookups fail</span>\n  Direct IP access works\n  <span class='dim'>Suspect DNS</span>",
    fields: [
      { label: "Query DNS for a hostname", hint: "Resolver test", options: ["nslookup", "robocopy", "diskpart", "format"], answer: 0, explain: "nslookup queries DNS servers directly and shows whether a hostname resolves to an address." },
      { label: "Clear the local DNS resolver cache", options: ["ipconfig /renew", "ipconfig /flushdns", "ipconfig /release", "ipconfig /all"], answer: 1, explain: "ipconfig /flushdns purges cached DNS records so the next lookup is fresh." }
    ],
    summary: "nslookup tests DNS resolution; ipconfig /flushdns clears stale cached records."
  },
  {
    id: "PBQ-004",
    format: 1,
    domain: 1,
    title: "Active Connections and Listening Ports",
    brief: "A technician suspects an unexpected process is listening on the network. Match each need to a command.",
    exhibitTitle: "investigation",
    exhibit: "Find rogue listener:\n  <span class='cy'>Show active TCP connections and ports</span>\n  <span class='ok'>Map the owning process</span>",
    fields: [
      { label: "List active connections numerically", hint: "No name resolution", options: ["netstat -an", "ping -t", "ipconfig /all", "sfc /scannow"], answer: 0, explain: "netstat -an lists all active connections and listening ports in numeric form without resolving names." },
      { label: "Show the PID that owns each connection", options: ["netstat -o", "netstat -r", "netstat -e", "netstat -s"], answer: 0, explain: "netstat -o adds the owning process identifier to each connection so you can correlate with tasklist." }
    ],
    summary: "netstat -an reveals listeners; the -o switch ties each socket to a process."
  },
  {
    id: "PBQ-005",
    format: 1,
    domain: 1,
    title: "Repairing Disk and System Files",
    brief: "A workstation reports disk errors and corrupted system files. Choose the correct repair command for each task.",
    exhibitTitle: "repair tasks",
    exhibit: "Repair the OS:\n  <span class='cy'>Fix file-system errors, recover bad sectors</span>\n  <span class='ok'>Verify protected system files</span>",
    fields: [
      { label: "Fix file-system errors and recover sectors", hint: "Disk integrity", options: ["sfc /scannow", "chkdsk /f /r", "format /q", "diskpart clean"], answer: 1, explain: "chkdsk /f fixes file-system errors and /r locates bad sectors and recovers readable data." },
      { label: "Scan and repair protected system files", options: ["chkdsk", "sfc /scannow", "gpupdate", "robocopy"], answer: 1, explain: "sfc /scannow verifies the integrity of protected OS files and replaces corrupted ones." }
    ],
    summary: "chkdsk repairs the disk; sfc repairs protected Windows system files."
  },
  {
    id: "PBQ-006",
    format: 1,
    domain: 1,
    title: "Component Store Repair Workflow",
    brief: "sfc reports it could not repair a file. Choose the next command and its purpose.",
    exhibitTitle: "console output",
    exhibit: "<span class='warnc'>Windows Resource Protection found corrupt files but was unable to fix some of them.</span>\n<span class='dim'>Repair the component store, then re-run sfc.</span>",
    fields: [
      { label: "Repair the online component store", hint: "Servicing image", options: ["dism /online /cleanup-image /restorehealth", "chkdsk /f", "sfc /verifyonly", "diskpart list disk"], answer: 0, explain: "DISM with /restorehealth repairs the component store that sfc relies on for known-good files." },
      { label: "After DISM, re-run which command", options: ["format", "sfc /scannow", "ping", "net use"], answer: 1, explain: "Re-running sfc /scannow lets it pull good files from the now-repaired component store." }
    ],
    summary: "Run DISM /restorehealth to fix the image, then re-run sfc /scannow."
  },
  {
    id: "PBQ-007",
    format: 1,
    domain: 1,
    title: "Group Policy on the Client",
    brief: "In a domain, a technician changed a policy and must apply and verify it immediately.",
    exhibitTitle: "domain task",
    exhibit: "Apply new GPO now:\n  <span class='cy'>Force immediate policy refresh</span>\n  <span class='ok'>Confirm which policies applied</span>",
    fields: [
      { label: "Force an immediate policy refresh", options: ["gpresult /r", "gpupdate /force", "net user", "tasklist"], answer: 1, explain: "gpupdate /force reapplies all Group Policy settings immediately rather than waiting for the interval." },
      { label: "Report the resultant set of policy", options: ["gpresult /r", "gpupdate /force", "winver", "shutdown /r"], answer: 0, explain: "gpresult /r reports which policies are applied to the user and computer." }
    ],
    summary: "gpupdate /force applies policy now; gpresult /r reports what was applied."
  },
  {
    id: "PBQ-008",
    format: 1,
    domain: 1,
    title: "Managing Disks with diskpart",
    brief: "A technician prepares a new disk from the command line using <span class='cy'>diskpart</span>.",
    exhibitTitle: "diskpart session",
    exhibit: "DISKPART> <span class='cy'>list disk</span>\nDISKPART> select disk 1\nDISKPART> <span class='ok'>?</span>\n<span class='dim'>Initialize and partition the new disk</span>",
    fields: [
      { label: "List all disks in the system", options: ["list volume", "list disk", "detail disk", "list partition"], answer: 1, explain: "list disk enumerates the physical disks and their sizes and status." },
      { label: "Remove all partition data from selected disk", hint: "Destructive", options: ["clean", "format", "assign", "extend"], answer: 0, explain: "clean removes all partition and volume formatting from the currently selected disk." }
    ],
    summary: "Inside diskpart, list disk enumerates disks and clean wipes the selected disk."
  },
  {
    id: "PBQ-009",
    format: 1,
    domain: 1,
    title: "Copying Files in Bulk",
    brief: "A technician must mirror a large directory tree to a backup location preserving structure.",
    exhibitTitle: "copy job",
    exhibit: "Mirror C:\\Data to D:\\Backup:\n  <span class='cy'>Copy subdirectories including empty ones</span>\n  <span class='ok'>Resilient, resumable copy preferred</span>",
    fields: [
      { label: "Best tool for a robust mirror with retries", options: ["copy", "xcopy", "robocopy", "format"], answer: 2, explain: "robocopy is built for robust, resumable directory mirroring with retry and multithreading options." },
      { label: "xcopy switch to include all subdirectories", hint: "Even empty ones", options: ["/s", "/e", "/q", "/y"], answer: 1, explain: "xcopy /e copies all subdirectories including empty ones, while /s skips empty folders." }
    ],
    summary: "robocopy is the robust mirror tool; xcopy /e copies all subdirectories including empty ones."
  },
  {
    id: "PBQ-010",
    format: 1,
    domain: 1,
    title: "Mapping and Managing Network Drives",
    brief: "A user needs a mapped drive to a file share. Choose the correct <span class='cy'>net</span> commands.",
    exhibitTitle: "share task",
    exhibit: "Connect to \\\\srv01\\share:\n  <span class='cy'>Map it to drive Z:</span>\n  <span class='ok'>List current mappings</span>",
    fields: [
      { label: "Map \\\\srv01\\share to Z:", options: ["net use Z: \\\\srv01\\share", "net user Z: \\\\srv01\\share", "net share Z: \\\\srv01\\share", "net view Z:"], answer: 0, explain: "net use Z: \\\\srv01\\share maps the share to drive letter Z." },
      { label: "View existing drive mappings", options: ["net user", "net use", "net stop", "net start"], answer: 1, explain: "net use with no arguments lists current mapped drives and connections." }
    ],
    summary: "net use maps and lists network drives; with no args it shows current mappings."
  },
  {
    id: "PBQ-011",
    format: 1,
    domain: 1,
    title: "Local User Account Management",
    brief: "A technician manages local accounts from an elevated prompt using <span class='cy'>net user</span>.",
    exhibitTitle: "account task",
    exhibit: "Manage local accounts:\n  <span class='cy'>Create an account</span>\n  <span class='ok'>List all local users</span>",
    fields: [
      { label: "Create a local account named tech1", options: ["net user tech1 P@ss /add", "net use tech1 /add", "net localgroup tech1 /add", "net accounts tech1 /add"], answer: 0, explain: "net user tech1 P@ss /add creates a new local user account with the given password." },
      { label: "List all local user accounts", options: ["net user", "net view", "net share", "net session"], answer: 0, explain: "net user with no arguments lists all local user accounts on the machine." }
    ],
    summary: "net user /add creates an account; net user with no args lists local users."
  },
  {
    id: "PBQ-012",
    format: 1,
    domain: 1,
    title: "Process Inspection and Termination",
    brief: "An unresponsive process must be identified and ended from the command line.",
    exhibitTitle: "process task",
    exhibit: "Kill a hung app:\n  <span class='cy'>List running processes with PIDs</span>\n  <span class='ok'>Force-terminate by PID</span>",
    fields: [
      { label: "List running processes and PIDs", options: ["tasklist", "taskkill", "tracert", "gpresult"], answer: 0, explain: "tasklist displays all running processes with their image names and process IDs." },
      { label: "Force-end the process with PID 4120", options: ["taskkill /PID 4120 /F", "tasklist /PID 4120", "shutdown /PID 4120", "net stop 4120"], answer: 0, explain: "taskkill /PID 4120 /F forcibly terminates the process with that identifier." }
    ],
    summary: "tasklist lists processes; taskkill /F force-ends one by PID."
  },
  {
    id: "PBQ-013",
    format: 1,
    domain: 1,
    title: "Shutdown and Restart Options",
    brief: "A technician schedules restarts and forces a full shutdown from the command line.",
    exhibitTitle: "shutdown switches",
    exhibit: "shutdown <span class='cy'>/?</span>\n  <span class='dim'>/r restart  /s shutdown  /t seconds  /a abort</span>",
    fields: [
      { label: "Restart the computer in 60 seconds", options: ["shutdown /s /t 60", "shutdown /r /t 60", "shutdown /l /t 60", "shutdown /h /t 60"], answer: 1, explain: "shutdown /r /t 60 restarts the machine after a 60-second delay." },
      { label: "Cancel a pending scheduled shutdown", options: ["shutdown /a", "shutdown /p", "shutdown /g", "shutdown /i"], answer: 0, explain: "shutdown /a aborts a shutdown that has been scheduled but not yet executed." }
    ],
    summary: "shutdown /r restarts; /t sets a delay; /a aborts a pending shutdown."
  },
  {
    id: "PBQ-014",
    format: 1,
    domain: 1,
    title: "Identifying the Windows Build",
    brief: "Support asks the user to confirm the exact Windows version and build before troubleshooting.",
    exhibitTitle: "version check",
    exhibit: "Confirm OS details:\n  <span class='cy'>Show version and build in a dialog</span>\n  <span class='ok'>Show the local computer name</span>",
    fields: [
      { label: "Display the Windows version dialog", options: ["winver", "ver /all", "hostname", "systeminfo /v"], answer: 0, explain: "winver opens the About Windows dialog showing the edition, version, and build number." },
      { label: "Print just the local computer name", options: ["whoami", "hostname", "winver", "net name"], answer: 1, explain: "hostname prints the local computer's name with no other output." }
    ],
    summary: "winver shows the Windows version and build; hostname prints the computer name."
  },
  {
    id: "PBQ-015",
    format: 1,
    domain: 1,
    title: "Formatting a Volume Safely",
    brief: "A technician must format a new USB volume for cross-platform use from the command line.",
    exhibitTitle: "format task",
    exhibit: "Prepare E: drive:\n  <span class='cy'>Quick format the volume</span>\n  <span class='warnc'>Confirm the correct drive letter first</span>",
    fields: [
      { label: "Quick-format drive E: as exFAT", options: ["format E: /FS:exFAT /Q", "format E: /FS:NTFS /P", "format E: /X /A", "diskpart E: /Q"], answer: 0, explain: "format E: /FS:exFAT /Q performs a quick format of E: using the exFAT file system." },
      { label: "What does the /Q switch do", hint: "Speed vs thoroughness", options: ["Encrypts the volume", "Performs a quick format", "Marks bad sectors", "Sets the volume label"], answer: 1, explain: "/Q performs a quick format that resets the file table without scanning every sector." }
    ],
    summary: "format /FS sets the file system and /Q performs a quick format."
  },
  {
    id: "PBQ-016",
    format: 1,
    domain: 1,
    title: "PowerShell Equivalents for Networking",
    brief: "A technician is moving scripts from cmd to <span class='cy'>PowerShell</span> cmdlets.",
    exhibitTitle: "cmdlet mapping",
    exhibit: "Modernize the script:\n  <span class='cy'>Replace ipconfig with a cmdlet</span>\n  <span class='ok'>Replace ping with a cmdlet</span>",
    fields: [
      { label: "PowerShell cmdlet to show IP configuration", options: ["Get-NetIPAddress", "Get-Process", "Get-Service", "Get-ChildItem"], answer: 0, explain: "Get-NetIPAddress returns the host's IP address configuration in PowerShell." },
      { label: "PowerShell cmdlet to test connectivity", options: ["Test-NetConnection", "Test-Path", "Get-Content", "Set-Location"], answer: 0, explain: "Test-NetConnection performs ping-style and port reachability tests in PowerShell." }
    ],
    summary: "Get-NetIPAddress replaces ipconfig; Test-NetConnection replaces ping in PowerShell."
  },
  {
    id: "PBQ-017",
    format: 1,
    domain: 1,
    title: "PowerShell File and Service Cmdlets",
    brief: "A script must list files and inspect services using PowerShell cmdlets.",
    exhibitTitle: "cmdlet mapping",
    exhibit: "Translate the batch file:\n  <span class='cy'>List directory contents</span>\n  <span class='ok'>List running services</span>",
    fields: [
      { label: "Cmdlet to list directory contents (like dir)", options: ["Get-ChildItem", "Get-Item", "Get-Member", "Get-History"], answer: 0, explain: "Get-ChildItem lists files and folders, equivalent to dir or ls." },
      { label: "Cmdlet to view services and their state", options: ["Get-Process", "Get-Service", "Get-Host", "Get-Date"], answer: 1, explain: "Get-Service returns installed services and their running or stopped status." }
    ],
    summary: "Get-ChildItem lists directory contents; Get-Service shows service status."
  },
  {
    id: "PBQ-018",
    format: 1,
    domain: 1,
    title: "Process Management in PowerShell",
    brief: "A technician identifies and stops a process using PowerShell rather than tasklist/taskkill.",
    exhibitTitle: "cmdlet mapping",
    exhibit: "PowerShell process control:\n  <span class='cy'>Enumerate running processes</span>\n  <span class='ok'>Stop a named process</span>",
    fields: [
      { label: "Cmdlet to list running processes", options: ["Get-Process", "Get-Content", "Get-NetTCPConnection", "Get-EventLog"], answer: 0, explain: "Get-Process lists running processes, the PowerShell counterpart to tasklist." },
      { label: "Cmdlet to terminate a process", options: ["Stop-Service", "Stop-Process", "Remove-Item", "Clear-Host"], answer: 1, explain: "Stop-Process ends a running process, the counterpart to taskkill." }
    ],
    summary: "Get-Process lists and Stop-Process terminates processes in PowerShell."
  },
  {
    id: "PBQ-019",
    format: 1,
    domain: 1,
    title: "Choosing Between ping and pathping",
    brief: "A technician must pick the right reachability tool for two distinct goals.",
    exhibitTitle: "tooling choice",
    exhibit: "Latency vs loss:\n  <span class='cy'>Quick yes/no reachability</span>\n  <span class='ok'>Per-hop loss over a sustained sample</span>",
    fields: [
      { label: "Quickest single-host reachability test", options: ["ping", "pathping", "tracert", "netstat"], answer: 0, explain: "ping is the fastest way to confirm a single host responds and measure round-trip time." },
      { label: "Best for per-hop loss over time", options: ["ping", "pathping", "ipconfig", "nslookup"], answer: 1, explain: "pathping samples each hop over time to report per-hop latency and packet loss." }
    ],
    summary: "Use ping for a quick reachability check and pathping for sustained per-hop loss."
  },
  {
    id: "PBQ-020",
    format: 1,
    domain: 1,
    title: "DISM vs SFC Roles",
    brief: "Distinguish which repair tool operates on the running OS files versus the servicing image.",
    exhibitTitle: "repair scope",
    exhibit: "Two-stage repair:\n  <span class='cy'>Repair protected system files in place</span>\n  <span class='ok'>Repair the underlying Windows image</span>",
    fields: [
      { label: "Repairs in-use protected system files", options: ["sfc", "dism", "chkdsk", "diskpart"], answer: 0, explain: "sfc scans and repairs protected operating system files on the running system." },
      { label: "Repairs the component store / image", options: ["sfc", "dism", "format", "robocopy"], answer: 1, explain: "dism services the Windows image and component store that sfc draws known-good files from." }
    ],
    summary: "sfc repairs in-use system files; DISM repairs the underlying component store image."
  },
  {
    id: "PBQ-021",
    format: 1,
    domain: 1,
    title: "Verifying Connectivity Layers",
    brief: "A technician isolates whether a failure is at the IP layer or the name layer.",
    exhibitTitle: "layered test",
    exhibit: "Bottom-up check:\n  <span class='cy'>Confirm an IP responds</span>\n  <span class='ok'>Confirm a name resolves</span>",
    fields: [
      { label: "Confirm the gateway IP responds", options: ["ping 192.168.1.1", "nslookup gateway", "netstat -r", "winver"], answer: 0, explain: "ping to the gateway IP confirms basic Layer 3 reachability before testing names." },
      { label: "Confirm a hostname resolves to an IP", options: ["ping -t", "nslookup www.example.com", "tasklist", "gpupdate"], answer: 1, explain: "nslookup verifies that DNS resolves the hostname to an address." }
    ],
    summary: "Ping the IP to verify reachability, then nslookup to verify name resolution."
  },
  {
    id: "PBQ-022",
    format: 1,
    domain: 1,
    title: "robocopy Mirror Switches",
    brief: "A technician fine-tunes a <span class='cy'>robocopy</span> backup job.",
    exhibitTitle: "robocopy switches",
    exhibit: "robocopy C:\\Data D:\\Backup <span class='cy'>/MIR</span>\n  <span class='dim'>/MIR mirror  /R retries  /W wait  /Z restartable</span>",
    fields: [
      { label: "Switch that mirrors a directory tree", hint: "Deletes extras in dest", options: ["/MIR", "/L", "/NP", "/XO"], answer: 0, explain: "/MIR mirrors the source to the destination, including deleting files that no longer exist in the source." },
      { label: "Switch for restartable mode over flaky links", options: ["/Z", "/S", "/E", "/Q"], answer: 0, explain: "/Z copies files in restartable mode so an interrupted transfer can resume." }
    ],
    summary: "robocopy /MIR mirrors a tree; /Z enables restartable copies over unreliable links."
  },
  {
    id: "PBQ-023",
    format: 2,
    domain: 1,
    title: "Choosing an Installation Method",
    brief: "A technician must image many identical workstations and also upgrade one user's PC without losing data.",
    exhibitTitle: "deployment plan",
    exhibit: "Two jobs:\n  <span class='cy'>Deploy 40 identical lab PCs fast</span>\n  <span class='ok'>Upgrade one PC, keep apps and files</span>",
    fields: [
      { label: "Best method for 40 identical machines", hint: "Repeatable golden build", options: ["Clean install each", "Image deployment", "Recovery partition", "In-place upgrade"], answer: 1, explain: "Image deployment applies a prepared golden image to many identical machines quickly and consistently." },
      { label: "Upgrade one PC keeping apps and data", options: ["Clean install", "In-place upgrade", "Wipe and reload", "PXE boot"], answer: 1, explain: "An in-place upgrade keeps existing applications, settings, and files while updating the OS." }
    ],
    summary: "Imaging scales identical builds; an in-place upgrade preserves apps and data on a single PC."
  },
  {
    id: "PBQ-024",
    format: 2,
    domain: 1,
    title: "MBR versus GPT Partitioning",
    brief: "A technician configures a new 4 TB system disk for a UEFI machine.",
    exhibitTitle: "disk facts",
    exhibit: "<span class='cy'>4 TB system disk, UEFI firmware</span>\n  MBR limit: 2 TB, 4 primary partitions\n  <span class='ok'>GPT: large disks, UEFI boot</span>",
    fields: [
      { label: "Partition style for a 4 TB UEFI boot disk", options: ["MBR", "GPT", "Dynamic only", "exFAT"], answer: 1, explain: "GPT supports disks larger than 2 TB and is required to boot Windows on UEFI firmware." },
      { label: "Why MBR is unsuitable here", hint: "Capacity ceiling", options: ["No file system support", "2 TB addressing limit", "Cannot be formatted", "Only for Linux"], answer: 1, explain: "MBR addressing tops out at 2 TB, so it cannot use the full 4 TB disk." }
    ],
    summary: "Use GPT for disks over 2 TB and UEFI boot; MBR is capped at 2 TB."
  },
  {
    id: "PBQ-025",
    format: 2,
    domain: 1,
    title: "Selecting a File System",
    brief: "A technician formats volumes for different uses across operating systems.",
    exhibitTitle: "volume uses",
    exhibit: "Three volumes:\n  <span class='cy'>Windows system drive</span>\n  <span class='ok'>Large USB shared with macOS</span>\n  <span class='warnc'>Small USB for an old camera</span>",
    fields: [
      { label: "File system for the Windows system drive", options: ["FAT32", "exFAT", "NTFS", "ext4"], answer: 2, explain: "NTFS is the standard Windows file system supporting large volumes, permissions, and journaling." },
      { label: "Large USB to share with macOS", hint: "No 4 GB file limit", options: ["FAT32", "exFAT", "NTFS", "APFS"], answer: 1, explain: "exFAT is read/write on both Windows and macOS and has no 4 GB per-file limit." },
      { label: "Maximum file size on FAT32", options: ["2 GB", "4 GB", "16 GB", "No limit"], answer: 1, explain: "FAT32 limits any single file to under 4 GB, which is why exFAT is preferred for large files." }
    ],
    summary: "NTFS for Windows system drives, exFAT for cross-platform large files; FAT32 caps files near 4 GB."
  },
  {
    id: "PBQ-026",
    format: 2,
    domain: 1,
    title: "Apple and Linux File Systems",
    brief: "A technician documents native file systems for non-Windows platforms.",
    exhibitTitle: "platform map",
    exhibit: "Native defaults:\n  <span class='cy'>Modern macOS internal SSD</span>\n  <span class='ok'>Typical Linux root volume</span>",
    fields: [
      { label: "Default file system on modern macOS SSDs", options: ["HFS+", "APFS", "NTFS", "FAT32"], answer: 1, explain: "APFS is Apple's modern file system optimized for SSDs on current macOS versions." },
      { label: "Common native Linux file system", options: ["exFAT", "ext4", "NTFS", "APFS"], answer: 1, explain: "ext4 is a widely used native Linux file system for root and data volumes." }
    ],
    summary: "macOS uses APFS on modern SSDs; Linux commonly uses ext4."
  },
  {
    id: "PBQ-027",
    format: 2,
    domain: 1,
    title: "PXE Network Boot Deployment",
    brief: "A technician deploys an OS to a diskless lab over the network with no local media.",
    exhibitTitle: "boot method",
    exhibit: "<span class='cy'>No USB or DVD available</span>\n  NIC supports network boot\n  <span class='ok'>Deployment server on the LAN</span>",
    fields: [
      { label: "Boot method to install over the network", options: ["PXE / network boot", "Optical media", "Recovery partition", "USB flash"], answer: 0, explain: "PXE network boot loads the installer from a deployment server over the LAN with no local media." },
      { label: "Firmware setting that must be enabled", hint: "Boot order", options: ["Secure Boot off", "Network/PXE boot enabled", "TPM disabled", "Legacy ROM only"], answer: 1, explain: "The NIC's PXE/network boot option must be enabled and ordered in the boot sequence." }
    ],
    summary: "PXE boots the installer from a network server; enable network boot in firmware."
  },
  {
    id: "PBQ-028",
    format: 2,
    domain: 1,
    title: "Recovery and Reset Options",
    brief: "A PC will not boot normally and a technician wants to repair or reset Windows.",
    exhibitTitle: "recovery menu",
    exhibit: "Windows RE:\n  <span class='cy'>Reset this PC (keep or remove files)</span>\n  <span class='ok'>Startup repair</span>\n<span class='dim'>Last resort: clean install</span>",
    fields: [
      { label: "Repair OS while keeping personal files", options: ["Reset this PC, keep my files", "Full clean install", "diskpart clean", "Format C:"], answer: 0, explain: "Reset this PC with the keep-my-files option reinstalls Windows while preserving personal data." },
      { label: "Automatically fix boot problems", options: ["Startup Repair", "Image deployment", "PXE boot", "Disk Cleanup"], answer: 0, explain: "Startup Repair in the recovery environment diagnoses and fixes common boot issues." }
    ],
    summary: "Reset this PC can keep files; Startup Repair fixes boot problems from Windows RE."
  },
  {
    id: "PBQ-029",
    format: 2,
    domain: 1,
    title: "Clean Install Prerequisites",
    brief: "A technician plans a clean installation of Windows on a reused machine.",
    exhibitTitle: "checklist",
    exhibit: "Before wiping:\n  <span class='warnc'>Back up user data</span>\n  <span class='cy'>Verify hardware meets requirements</span>\n  <span class='ok'>Have product activation ready</span>",
    fields: [
      { label: "First step before a clean install", hint: "Data loss is permanent", options: ["Back up all user data", "Disable UAC", "Join the domain", "Install drivers"], answer: 0, explain: "A clean install erases the drive, so backing up user data first is essential." },
      { label: "What a clean install does to existing apps", options: ["Keeps them", "Removes them all", "Updates them", "Archives them"], answer: 1, explain: "A clean install removes all existing applications and data, unlike an in-place upgrade." }
    ],
    summary: "Back up data before a clean install; it removes all existing apps and files."
  },
  {
    id: "PBQ-030",
    format: 2,
    domain: 1,
    title: "Upgrade Compatibility Check",
    brief: "A technician verifies whether a PC can run a newer Windows release before upgrading.",
    exhibitTitle: "requirements",
    exhibit: "Newer Windows requires:\n  <span class='cy'>Compatible 64-bit CPU</span>\n  <span class='ok'>TPM 2.0 and Secure Boot</span>\n  <span class='warnc'>Adequate RAM and storage</span>",
    fields: [
      { label: "Security chip required by recent Windows", options: ["TPM 2.0", "BIOS password", "RAID controller", "Discrete GPU"], answer: 0, explain: "Recent Windows versions require a TPM 2.0 module for the upgrade." },
      { label: "Firmware feature that must be enabled", options: ["Legacy BIOS", "Secure Boot", "Wake-on-LAN", "Hyperthreading"], answer: 1, explain: "Secure Boot must be enabled to meet the upgrade requirements for recent Windows." }
    ],
    summary: "Recent Windows upgrades require TPM 2.0 and Secure Boot enabled in firmware."
  },
  {
    id: "PBQ-031",
    format: 2,
    domain: 1,
    title: "Partition Layout Planning",
    brief: "A technician plans partitions on a GPT system disk.",
    exhibitTitle: "GPT layout",
    exhibit: "Required partitions:\n  <span class='cy'>EFI System Partition</span>\n  <span class='ok'>Windows (NTFS) partition</span>\n  <span class='dim'>Recovery partition</span>",
    fields: [
      { label: "Partition that holds the UEFI bootloader", options: ["EFI System Partition", "Windows data partition", "Swap partition", "Extended partition"], answer: 0, explain: "The EFI System Partition stores the bootloader files UEFI firmware loads at startup." },
      { label: "File system for the EFI System Partition", options: ["NTFS", "FAT32", "exFAT", "ext4"], answer: 1, explain: "The EFI System Partition is formatted FAT32 so UEFI firmware can read it." }
    ],
    summary: "A GPT disk needs a FAT32 EFI System Partition for the UEFI bootloader plus the NTFS Windows partition."
  },
  {
    id: "PBQ-032",
    format: 2,
    domain: 1,
    title: "Choosing the Windows Edition",
    brief: "A technician picks the Windows edition for a domain-joined corporate laptop.",
    exhibitTitle: "requirements",
    exhibit: "Corporate laptop needs:\n  <span class='cy'>Domain join</span>\n  <span class='ok'>BitLocker and Group Policy</span>",
    fields: [
      { label: "Edition that supports domain join and BitLocker", options: ["Home", "Pro", "Starter", "S mode only"], answer: 1, explain: "Windows Pro (or higher) supports domain join, Group Policy, and BitLocker, which Home lacks." },
      { label: "Feature missing from the Home edition", options: ["File Explorer", "Domain join", "Microsoft Edge", "Task Manager"], answer: 1, explain: "The Home edition cannot join an Active Directory domain; Pro is required." }
    ],
    summary: "Windows Pro adds domain join, Group Policy, and BitLocker that Home lacks."
  },
  {
    id: "PBQ-033",
    format: 2,
    domain: 1,
    title: "Regional and Language Setup",
    brief: "During first setup a technician configures locale and input for a new region.",
    exhibitTitle: "OOBE settings",
    exhibit: "Out-of-box experience:\n  <span class='cy'>Set time zone</span>\n  <span class='ok'>Set keyboard layout</span>\n  <span class='dim'>Set system language</span>",
    fields: [
      { label: "Setting that affects clock and scheduling", options: ["Keyboard layout", "Time zone", "Display scaling", "Theme"], answer: 1, explain: "The time zone setting controls the system clock offset used for time and scheduling." },
      { label: "Setting that maps physical keys to characters", options: ["Keyboard layout", "Time zone", "Resolution", "Wallpaper"], answer: 0, explain: "The keyboard layout defines how physical keys map to characters for the chosen region." }
    ],
    summary: "Set the time zone for clock accuracy and the keyboard layout for correct key mapping during setup."
  },
  {
    id: "PBQ-034",
    format: 2,
    domain: 1,
    title: "Account Type During Setup",
    brief: "A technician chooses an account type during Windows out-of-box setup.",
    exhibitTitle: "account choice",
    exhibit: "Sign-in choice:\n  <span class='cy'>Microsoft account (cloud sync)</span>\n  <span class='ok'>Local account (no cloud)</span>",
    fields: [
      { label: "Account that syncs settings across devices", options: ["Local account", "Microsoft account", "Guest account", "Service account"], answer: 1, explain: "A Microsoft account syncs settings and enables cloud features across devices." },
      { label: "Account best for an isolated kiosk PC", hint: "No cloud dependency", options: ["Local account", "Microsoft account", "Domain admin", "Azure AD"], answer: 0, explain: "A local account keeps a kiosk self-contained with no cloud sign-in dependency." }
    ],
    summary: "A Microsoft account syncs across devices; a local account suits an isolated kiosk."
  },
  {
    id: "PBQ-035",
    format: 2,
    domain: 1,
    title: "Drive Preparation Order",
    brief: "A technician prepares a brand-new disk for installation in the correct order.",
    exhibitTitle: "prep order",
    exhibit: "New disk steps:\n  1) <span class='cy'>Initialize / choose partition style</span>\n  2) <span class='ok'>Create partition</span>\n  3) <span class='dim'>Format with a file system</span>",
    fields: [
      { label: "First action on a raw new disk", options: ["Format it", "Initialize and pick GPT/MBR", "Assign a letter", "Run chkdsk"], answer: 1, explain: "A raw disk must first be initialized with a partition style before partitions can be created." },
      { label: "Last step before storing files", options: ["Initialize", "Format with a file system", "Set partition style", "Power cycle"], answer: 1, explain: "After partitioning, the volume must be formatted with a file system before it can hold files." }
    ],
    summary: "Initialize and choose a partition style, create a partition, then format it."
  },
  {
    id: "PBQ-036",
    format: 2,
    domain: 1,
    title: "Boot Order for Installation Media",
    brief: "A technician must boot from USB installation media instead of the internal disk.",
    exhibitTitle: "firmware boot menu",
    exhibit: "UEFI boot order:\n  1) <span class='warnc'>Windows Boot Manager</span>\n  2) USB Storage\n<span class='dim'>Press F12 for one-time boot menu</span>",
    fields: [
      { label: "Change needed to boot the installer", options: ["Move USB above the internal disk", "Disable the USB port", "Format the disk first", "Enable Wake-on-LAN"], answer: 0, explain: "The USB device must be ordered above the internal disk, or selected from the one-time boot menu." },
      { label: "Firmware feature that may block unsigned media", options: ["Secure Boot", "Fast Startup", "Hibernate", "ASLR"], answer: 0, explain: "Secure Boot can block media without a trusted signature and may need adjustment for some installers." }
    ],
    summary: "Order USB above the disk (or use the boot menu); Secure Boot may block unsigned media."
  },
  {
    id: "PBQ-037",
    format: 2,
    domain: 1,
    title: "In-Place Upgrade Safeguards",
    brief: "Before an in-place upgrade, a technician takes precautions to allow recovery.",
    exhibitTitle: "pre-upgrade",
    exhibit: "Reduce risk:\n  <span class='cy'>Full backup of the system</span>\n  <span class='ok'>Verify free disk space</span>\n  <span class='dim'>Note the rollback window</span>",
    fields: [
      { label: "Best safeguard before upgrading", options: ["Delete restore points", "Take a full backup", "Disable antivirus", "Remove the recovery partition"], answer: 1, explain: "A full backup lets you recover if the in-place upgrade fails." },
      { label: "Windows keeps old files for rollback in", options: ["System Volume Information", "Windows.old", "Program Files", "AppData only"], answer: 1, explain: "After an upgrade, Windows.old retains the previous installation for a limited rollback period." }
    ],
    summary: "Take a full backup before an in-place upgrade; Windows.old enables temporary rollback."
  },
  {
    id: "PBQ-038",
    format: 2,
    domain: 1,
    title: "FAT32 versus exFAT Decision",
    brief: "A technician selects a file system for removable media holding files over 4 GB.",
    exhibitTitle: "media use",
    exhibit: "USB drive will hold:\n  <span class='warnc'>Single video files over 4 GB</span>\n  <span class='cy'>Used on Windows and macOS</span>",
    fields: [
      { label: "File system that allows files over 4 GB on USB", options: ["FAT32", "exFAT", "ext4", "HFS+"], answer: 1, explain: "exFAT supports very large files and is read/write on both Windows and macOS." },
      { label: "Reason FAT32 fails here", options: ["No Windows support", "4 GB per-file limit", "Needs a domain", "Unreadable on USB"], answer: 1, explain: "FAT32 cannot store a single file 4 GB or larger, so the video files would not fit." }
    ],
    summary: "Use exFAT for large cross-platform files; FAT32 cannot hold a file 4 GB or larger."
  },
  {
    id: "PBQ-039",
    format: 2,
    domain: 1,
    title: "Image Capture and Deployment",
    brief: "A technician builds a reference image and prepares it for mass deployment.",
    exhibitTitle: "imaging steps",
    exhibit: "Golden image:\n  <span class='cy'>Build and configure reference PC</span>\n  <span class='ok'>Generalize before capture</span>\n  <span class='dim'>Deploy to targets</span>",
    fields: [
      { label: "Step to strip machine-specific data before capture", hint: "Avoid duplicate SIDs", options: ["sysprep generalize", "chkdsk", "gpupdate", "format"], answer: 0, explain: "Running Sysprep with the generalize option removes machine-specific data so the image can deploy to many PCs." },
      { label: "Benefit of image deployment", options: ["Unique config per PC", "Fast, consistent identical builds", "Avoids backups", "Removes the need for drivers"], answer: 1, explain: "Imaging produces fast, consistent identical builds across many machines." }
    ],
    summary: "Generalize a reference build with Sysprep before capture, then deploy the image for fast identical installs."
  },
  {
    id: "PBQ-040",
    format: 2,
    domain: 1,
    title: "Choosing exFAT, NTFS, or FAT32 Quickly",
    brief: "A technician matches three drives to the most appropriate file system.",
    exhibitTitle: "three drives",
    exhibit: "Match each drive:\n  <span class='cy'>Internal Windows drive needing permissions</span>\n  <span class='ok'>Cross-platform external SSD</span>",
    fields: [
      { label: "Drive needing file permissions and encryption", options: ["FAT32", "exFAT", "NTFS", "ext4"], answer: 2, explain: "NTFS supports file-level permissions, encryption (EFS), and journaling for an internal Windows drive." },
      { label: "Cross-platform external SSD for large files", options: ["NTFS", "exFAT", "FAT32", "APFS"], answer: 1, explain: "exFAT works read/write on Windows and macOS and handles large files, ideal for an external SSD." }
    ],
    summary: "NTFS for internal Windows drives with permissions; exFAT for cross-platform external storage."
  },
  {
    id: "PBQ-041",
    format: 3,
    domain: 2,
    title: "NTFS versus Share Permissions",
    brief: "A user gets unexpected access when reaching a folder over the network versus locally.",
    exhibitTitle: "permission sets",
    exhibit: "Folder Reports:\n  <span class='cy'>Share permission: Everyone = Read</span>\n  <span class='ok'>NTFS permission: Users = Modify</span>",
    fields: [
      { label: "Effective access over the network", hint: "Most restrictive wins", options: ["Modify", "Read", "Full Control", "No access"], answer: 1, explain: "When share and NTFS permissions combine, the most restrictive applies, so network access is limited to Read." },
      { label: "Effective access when logged on locally", options: ["Read", "Modify", "No access", "Full Control"], answer: 1, explain: "Share permissions do not apply locally, so the NTFS Modify permission governs local access." }
    ],
    summary: "Over the network the more restrictive of share and NTFS applies; locally only NTFS applies."
  },
  {
    id: "PBQ-042",
    format: 3,
    domain: 2,
    title: "Applying Least Privilege",
    brief: "A technician assigns rights to a new help-desk user who should not administer servers.",
    exhibitTitle: "role needs",
    exhibit: "Help-desk role:\n  <span class='cy'>Reset user passwords</span>\n  <span class='warnc'>No server admin rights</span>",
    fields: [
      { label: "Principle that grants only needed rights", options: ["Implicit deny", "Least privilege", "Defense in depth", "Separation of duties"], answer: 1, explain: "Least privilege grants users only the access required to do their job and nothing more." },
      { label: "Account the help-desk user should NOT have", options: ["Standard user", "Delegated password-reset rights", "Domain Administrator", "Self-service portal access"], answer: 2, explain: "Granting Domain Administrator violates least privilege for a help-desk role." }
    ],
    summary: "Least privilege grants only required rights; a help-desk user should not be a Domain Administrator."
  },
  {
    id: "PBQ-043",
    format: 3,
    domain: 2,
    title: "User Account Control Behavior",
    brief: "A technician configures <span class='cy'>UAC</span> for standard users and admins.",
    exhibitTitle: "UAC prompts",
    exhibit: "Elevation prompts:\n  <span class='cy'>Standard user runs an installer</span>\n  <span class='ok'>Admin approves a system change</span>",
    fields: [
      { label: "What UAC requests for a privileged action", options: ["A reboot", "Consent or credentials to elevate", "A network login", "A BIOS password"], answer: 1, explain: "UAC prompts for consent (admin) or credentials (standard user) before allowing an elevated action." },
      { label: "Why leaving UAC enabled matters", options: ["It speeds boot", "It prevents silent privilege escalation", "It encrypts disks", "It blocks all software"], answer: 1, explain: "UAC stops software from silently gaining administrator rights without the user's awareness." }
    ],
    summary: "UAC requires consent or credentials to elevate, preventing silent privilege escalation."
  },
  {
    id: "PBQ-044",
    format: 3,
    domain: 2,
    title: "BitLocker versus EFS",
    brief: "A technician decides between full-disk and file-level encryption.",
    exhibitTitle: "encryption needs",
    exhibit: "Two needs:\n  <span class='cy'>Protect a stolen laptop's whole drive</span>\n  <span class='ok'>Encrypt one user's files on a shared PC</span>",
    fields: [
      { label: "Encrypt the entire system drive", options: ["EFS", "BitLocker", "Compression", "NTFS auditing"], answer: 1, explain: "BitLocker provides full-volume encryption that protects all data if the drive is lost or stolen." },
      { label: "Encrypt individual files per user", options: ["BitLocker", "EFS", "Share permissions", "Firewall rules"], answer: 1, explain: "EFS encrypts selected files and folders tied to a user's certificate." }
    ],
    summary: "BitLocker encrypts the whole volume; EFS encrypts individual files per user."
  },
  {
    id: "PBQ-045",
    format: 3,
    domain: 2,
    title: "BitLocker and the TPM",
    brief: "A technician enables BitLocker and explains how the key is protected.",
    exhibitTitle: "key protection",
    exhibit: "BitLocker setup:\n  <span class='cy'>TPM stores the encryption key</span>\n  <span class='warnc'>Save the recovery key safely</span>",
    fields: [
      { label: "Hardware that seals the BitLocker key", options: ["GPU", "TPM", "NIC", "RAID card"], answer: 1, explain: "The TPM seals the BitLocker key and releases it only when boot integrity checks pass." },
      { label: "What to store for emergency unlock", options: ["The user password only", "The 48-digit recovery key", "A firewall rule", "A restore point"], answer: 1, explain: "The BitLocker recovery key is needed to unlock the drive if the TPM or PIN check fails." }
    ],
    summary: "The TPM seals the BitLocker key; keep the recovery key for emergency unlock."
  },
  {
    id: "PBQ-046",
    format: 3,
    domain: 2,
    title: "Password Policy Settings",
    brief: "A technician hardens domain password policy.",
    exhibitTitle: "policy fields",
    exhibit: "Account policy:\n  <span class='cy'>Minimum length and complexity</span>\n  <span class='ok'>Lockout after failed attempts</span>",
    fields: [
      { label: "Setting that resists brute-force guessing", hint: "Repeated failures", options: ["Password history", "Account lockout threshold", "Minimum age", "Screen timeout"], answer: 1, explain: "An account lockout threshold disables logon after a set number of failed attempts, slowing brute force." },
      { label: "Setting preventing reuse of old passwords", options: ["Password history", "Complexity", "Minimum length", "Lockout duration"], answer: 0, explain: "Enforcing password history prevents users from reusing recent passwords." }
    ],
    summary: "Lockout thresholds slow brute force; password history blocks reuse of old passwords."
  },
  {
    id: "PBQ-047",
    format: 3,
    domain: 2,
    title: "Windows Defender Firewall Rules",
    brief: "A technician allows an internal app while blocking unsolicited inbound traffic.",
    exhibitTitle: "firewall task",
    exhibit: "Defender Firewall:\n  <span class='cy'>Allow app TCP 8443 inbound</span>\n  <span class='warnc'>Block other unsolicited inbound</span>",
    fields: [
      { label: "Rule type to permit the app's port", options: ["Outbound block", "Inbound allow rule", "Connection security rule", "Disable firewall"], answer: 1, explain: "An inbound allow rule for TCP 8443 lets the specific traffic through while other inbound stays blocked." },
      { label: "Safest default for unsolicited inbound", options: ["Allow all", "Block by default", "Prompt every time", "Log only"], answer: 1, explain: "Blocking unsolicited inbound by default and allowing only what is needed follows the principle of least exposure." }
    ],
    summary: "Add an inbound allow rule for the needed port and block other unsolicited inbound by default."
  },
  {
    id: "PBQ-048",
    format: 3,
    domain: 2,
    title: "Managing Local Accounts and Groups",
    brief: "A technician hardens local account management on a shared workstation.",
    exhibitTitle: "account hardening",
    exhibit: "Shared PC:\n  <span class='warnc'>Disable the built-in Guest account</span>\n  <span class='cy'>Rename the default admin</span>",
    fields: [
      { label: "Action that reduces anonymous access", options: ["Enable Guest", "Disable the Guest account", "Add Guest to Administrators", "Share the admin password"], answer: 1, explain: "Disabling the built-in Guest account removes a common anonymous access path." },
      { label: "Hardening the built-in Administrator account", hint: "Obscure the obvious target", options: ["Leave it default", "Rename and set a strong password", "Delete it entirely", "Give it no password"], answer: 1, explain: "Renaming the default administrator and setting a strong password reduces targeted attacks; it should not simply be left default." }
    ],
    summary: "Disable Guest and rename/secure the built-in Administrator to harden local accounts."
  },
  {
    id: "PBQ-049",
    format: 3,
    domain: 2,
    title: "WPA3 and SOHO Wireless Hardening",
    brief: "A technician secures a small-office wireless router.",
    exhibitTitle: "wireless config",
    exhibit: "Router security:\n  <span class='cy'>Strongest wireless encryption</span>\n  <span class='warnc'>Disable legacy management</span>",
    fields: [
      { label: "Strongest current Wi-Fi encryption", options: ["WEP", "WPA", "WPA2-TKIP", "WPA3"], answer: 3, explain: "WPA3 is the strongest current wireless security standard and should be used when supported." },
      { label: "Feature to disable to reduce attack surface", hint: "Easy-setup convenience", options: ["WPA3", "WPS", "DHCP", "NAT"], answer: 1, explain: "WPS has known weaknesses and should be disabled to reduce the attack surface." }
    ],
    summary: "Use WPA3 for wireless encryption and disable WPS to reduce risk."
  },
  {
    id: "PBQ-050",
    format: 3,
    domain: 2,
    title: "Changing SOHO Router Defaults",
    brief: "A technician hardens a new SOHO router out of the box.",
    exhibitTitle: "default hardening",
    exhibit: "First-time setup:\n  <span class='warnc'>Default admin password in use</span>\n  <span class='cy'>Remote admin enabled by default</span>",
    fields: [
      { label: "First hardening step on a new router", options: ["Change the default admin credentials", "Open all ports", "Enable WPS", "Broadcast on max power"], answer: 0, explain: "Changing default administrative credentials prevents trivial takeover using published defaults." },
      { label: "Reduce exposure of the admin interface", options: ["Enable remote management", "Disable remote management from the WAN", "Use HTTP only", "Disable the firewall"], answer: 1, explain: "Disabling WAN-side remote management keeps the admin interface off the public internet." }
    ],
    summary: "Change default credentials and disable WAN-side remote management on a new router."
  },
  {
    id: "PBQ-051",
    format: 3,
    domain: 2,
    title: "Inherited and Explicit Permissions",
    brief: "A folder's permissions are not behaving as expected due to inheritance.",
    exhibitTitle: "acl behavior",
    exhibit: "Folder ACL:\n  <span class='cy'>Child inherits from parent</span>\n  <span class='warnc'>Explicit deny present</span>",
    fields: [
      { label: "How a child folder gets its default rights", options: ["Random assignment", "Inheritance from the parent", "Always Full Control", "Always read-only"], answer: 1, explain: "By default a child object inherits NTFS permissions from its parent folder." },
      { label: "Effect of an explicit Deny entry", hint: "Precedence", options: ["Ignored", "Overrides allowed permissions", "Only applies remotely", "Applies after a reboot"], answer: 1, explain: "An explicit Deny takes precedence over allowed permissions for the affected principal." }
    ],
    summary: "Children inherit parent NTFS permissions, but an explicit Deny overrides Allows."
  },
  {
    id: "PBQ-052",
    format: 3,
    domain: 2,
    title: "Securing Data at Rest on Mobile Drives",
    brief: "A technician protects data on portable drives that leave the building.",
    exhibitTitle: "portable data",
    exhibit: "USB drives travel offsite:\n  <span class='warnc'>Could be lost or stolen</span>\n  <span class='cy'>Encrypt removable volumes</span>",
    fields: [
      { label: "Encrypt a removable USB volume on Windows", options: ["EFS only", "BitLocker To Go", "Share permissions", "Compress the drive"], answer: 1, explain: "BitLocker To Go encrypts removable drives so lost media cannot be read." },
      { label: "Why encryption matters here", options: ["Speeds transfers", "Protects data if the drive is lost", "Adds storage capacity", "Removes the need for backups"], answer: 1, explain: "Encryption keeps data unreadable if the portable drive is lost or stolen." }
    ],
    summary: "Use BitLocker To Go to encrypt removable drives so lost media stays unreadable."
  },
  {
    id: "PBQ-053",
    format: 3,
    domain: 2,
    title: "Account Lockout and MFA",
    brief: "A technician layers controls against credential attacks.",
    exhibitTitle: "layered auth",
    exhibit: "Logon hardening:\n  <span class='cy'>Lock accounts after failures</span>\n  <span class='ok'>Require a second factor</span>",
    fields: [
      { label: "Control that adds a second authentication factor", options: ["Password history", "Multifactor authentication", "Disk encryption", "Screen saver"], answer: 1, explain: "Multifactor authentication requires an additional factor beyond the password, blocking stolen-credential reuse." },
      { label: "Setting that stops repeated guessing", options: ["Account lockout threshold", "File compression", "Wallpaper policy", "DNS caching"], answer: 0, explain: "An account lockout threshold halts logons after several failed attempts." }
    ],
    summary: "MFA adds a second factor and lockout thresholds stop repeated password guessing."
  },
  {
    id: "PBQ-054",
    format: 3,
    domain: 2,
    title: "Defender Antivirus and Real-Time Protection",
    brief: "A technician verifies endpoint anti-malware settings.",
    exhibitTitle: "endpoint protection",
    exhibit: "Security app:\n  <span class='cy'>Real-time protection on</span>\n  <span class='ok'>Definitions current</span>",
    fields: [
      { label: "Setting that scans files as they are accessed", options: ["Scheduled scan only", "Real-time protection", "Firewall logging", "Disk cleanup"], answer: 1, explain: "Real-time protection scans files as they are opened or written, catching threats immediately." },
      { label: "Most important maintenance for detection", options: ["Defragment the disk", "Keep definitions updated", "Disable the firewall", "Clear browser cache"], answer: 1, explain: "Up-to-date definitions let the engine recognize the latest known malware." }
    ],
    summary: "Enable real-time protection and keep malware definitions current for effective detection."
  },
  {
    id: "PBQ-055",
    format: 3,
    domain: 2,
    title: "Screen Lock and Timeout Policy",
    brief: "A technician enforces unattended-session protection.",
    exhibitTitle: "session policy",
    exhibit: "Unattended PCs:\n  <span class='cy'>Auto-lock after idle</span>\n  <span class='ok'>Require sign-in on resume</span>",
    fields: [
      { label: "Control protecting an idle, unlocked PC", options: ["Screen lock with timeout", "Wake-on-LAN", "Fast Startup", "Disk indexing"], answer: 0, explain: "An automatic screen lock after idle time prevents access to an unattended session." },
      { label: "Setting that forces credentials on wake", options: ["Require sign-in on resume", "Disable the lock screen", "Auto-login", "Guest mode"], answer: 0, explain: "Requiring sign-in on resume ensures a password is needed after the screen locks." }
    ],
    summary: "Auto-lock after idle and require sign-in on resume to protect unattended sessions."
  },
  {
    id: "PBQ-056",
    format: 3,
    domain: 2,
    title: "Principle of Least Privilege for Apps",
    brief: "A technician decides whether an app should run elevated.",
    exhibitTitle: "app rights",
    exhibit: "Line-of-business app:\n  <span class='cy'>Needs only its own folder</span>\n  <span class='warnc'>Requested admin rights</span>",
    fields: [
      { label: "Correct response to an unjustified admin request", options: ["Grant admin to all users", "Run as standard user with needed folder rights", "Disable UAC", "Add users to Administrators"], answer: 1, explain: "Least privilege means running the app as a standard user with only the specific access it requires." },
      { label: "Risk of running everything as admin", options: ["Slower boot", "Greater impact if compromised", "Less disk space", "Fewer updates"], answer: 1, explain: "Running with admin rights increases the damage if the app or account is compromised." }
    ],
    summary: "Run apps with least privilege; broad admin rights magnify the impact of a compromise."
  },
  {
    id: "PBQ-057",
    format: 3,
    domain: 2,
    title: "Disabling Unneeded Services and Autorun",
    brief: "A technician reduces attack surface on a hardened endpoint.",
    exhibitTitle: "attack surface",
    exhibit: "Reduce exposure:\n  <span class='cy'>Disable unused services</span>\n  <span class='warnc'>Disable removable-media autorun</span>",
    fields: [
      { label: "Why disable unused network services", options: ["Frees CPU only", "Removes potential entry points", "Improves graphics", "Adds storage"], answer: 1, explain: "Each running service is a potential entry point, so disabling unused ones shrinks the attack surface." },
      { label: "Disabling autorun on USB prevents", options: ["Faster transfers", "Auto-execution of malware on insert", "Drive encryption", "Disk errors"], answer: 1, explain: "Disabling autorun stops malware from automatically executing when removable media is inserted." }
    ],
    summary: "Disable unused services and removable-media autorun to shrink the attack surface."
  },
  {
    id: "PBQ-058",
    format: 3,
    domain: 2,
    title: "Group-Based Access Control",
    brief: "A technician assigns folder access by role rather than per user.",
    exhibitTitle: "rbac plan",
    exhibit: "Finance share:\n  <span class='cy'>Assign rights to a group</span>\n  <span class='ok'>Add users to the group</span>",
    fields: [
      { label: "Best practice for assigning permissions", options: ["Per individual user", "To role-based groups", "To Everyone", "To Guest"], answer: 1, explain: "Assigning permissions to role-based groups simplifies management and supports least privilege." },
      { label: "Granting a new hire finance access", options: ["Edit the ACL directly", "Add them to the finance group", "Make them admin", "Share the password"], answer: 1, explain: "Adding the user to the appropriate group grants access consistently without editing each ACL." }
    ],
    summary: "Assign permissions to role-based groups and manage access by group membership."
  },
  {
    id: "PBQ-059",
    format: 3,
    domain: 2,
    title: "Securing Browsers and Extensions",
    brief: "A technician hardens browser security on managed endpoints.",
    exhibitTitle: "browser policy",
    exhibit: "Browser hardening:\n  <span class='cy'>Install only trusted extensions</span>\n  <span class='ok'>Keep the browser updated</span>",
    fields: [
      { label: "Reduce risk from add-ons", options: ["Install any extension", "Allow only trusted, vetted extensions", "Disable updates", "Run as admin"], answer: 1, explain: "Allowing only trusted, vetted extensions limits malicious or data-leaking add-ons." },
      { label: "Mitigation for known browser vulnerabilities", options: ["Keep the browser patched and updated", "Use an old version", "Disable HTTPS", "Clear bookmarks"], answer: 0, explain: "Keeping the browser patched closes known vulnerabilities attackers exploit." }
    ],
    summary: "Allow only trusted extensions and keep the browser patched to reduce risk."
  },
  {
    id: "PBQ-060",
    format: 3,
    domain: 2,
    title: "Wireless Guest Network Isolation",
    brief: "A technician separates guest Wi-Fi from internal resources.",
    exhibitTitle: "network segmentation",
    exhibit: "SOHO Wi-Fi:\n  <span class='cy'>Separate guest SSID</span>\n  <span class='warnc'>No access to internal LAN</span>",
    fields: [
      { label: "Control isolating guests from the LAN", options: ["Shared SSID", "Guest network with client isolation", "Open network", "Static IPs only"], answer: 1, explain: "A dedicated guest network with client isolation keeps visitors off internal resources." },
      { label: "Encryption for the guest network", options: ["Open / none", "WPA3 with a passphrase", "WEP", "Hidden SSID only"], answer: 1, explain: "Even guest networks should use WPA3 (or at least WPA2) rather than running open." }
    ],
    summary: "Use an isolated guest network with WPA3 to keep visitors off the internal LAN."
  },
  {
    id: "PBQ-061",
    format: 3,
    domain: 2,
    title: "EFS Key Recovery Awareness",
    brief: "A technician explains the risk of losing an EFS certificate.",
    exhibitTitle: "efs risk",
    exhibit: "EFS in use:\n  <span class='cy'>Files tied to a user certificate</span>\n  <span class='warnc'>Lost cert = lost access</span>",
    fields: [
      { label: "What protects against permanent EFS data loss", options: ["Disabling UAC", "Backing up the EFS certificate / using a recovery agent", "Compressing files", "Renaming the admin"], answer: 1, explain: "Backing up the EFS certificate or configuring a recovery agent prevents permanent loss if the key is gone." },
      { label: "Who can normally read EFS-encrypted files", options: ["Anyone on the PC", "Only the user (or a recovery agent)", "Any administrator", "Guest users"], answer: 1, explain: "Only the encrypting user, or a designated recovery agent, can decrypt EFS files." }
    ],
    summary: "Back up the EFS certificate or use a recovery agent; only the user or agent can decrypt EFS files."
  },
  {
    id: "PBQ-062",
    format: 3,
    domain: 2,
    title: "Audit Logging for Access",
    brief: "A technician enables auditing to detect unauthorized access attempts.",
    exhibitTitle: "audit policy",
    exhibit: "Compliance need:\n  <span class='cy'>Record logon successes and failures</span>\n  <span class='ok'>Review the Security log</span>",
    fields: [
      { label: "Where audited events are recorded", options: ["Application log", "Security event log", "Setup log", "Forwarded events only"], answer: 1, explain: "Audited logon and access events are written to the Windows Security event log." },
      { label: "Value of auditing failed logons", options: ["Speeds the PC", "Helps detect intrusion attempts", "Encrypts data", "Frees disk space"], answer: 1, explain: "Failed-logon auditing surfaces brute-force or unauthorized access attempts for review." }
    ],
    summary: "Enable logon auditing to the Security log so failed access attempts can be detected."
  },
  {
    id: "PBQ-063",
    format: 4,
    domain: 3,
    title: "Malware Removal: First Three Steps",
    brief: "Place the first three steps of the <span class='cy'>CompTIA seven-step malware removal process</span> in the correct order.",
    exhibitTitle: "best practice",
    exhibit: "Seven-step process:\n  <span class='dim'>1 verify  2 quarantine  3 disable System Restore</span>\n  <span class='dim'>4 remediate  5 schedule scans  6 re-enable SR  7 educate</span>",
    fields: [
      { label: "Step 1 in the CompTIA malware-removal process", options: ["Quarantine the system", "Investigate and verify malware symptoms", "Disable System Restore", "Educate the user"], answer: 1, explain: "Step 1 is to investigate and verify the malware symptoms before acting." },
      { label: "Step 2 in the CompTIA malware-removal process", options: ["Quarantine the infected system", "Re-enable System Restore", "Remediate the infection", "Schedule scans"], answer: 0, explain: "Step 2 is to quarantine the infected system to stop spread." },
      { label: "Step 3 in the CompTIA malware-removal process", options: ["Educate the user", "Disable System Restore in Windows", "Create a restore point", "Run updates"], answer: 1, explain: "Step 3 is to disable System Restore so infected snapshots are not retained." }
    ],
    summary: "The process begins: verify symptoms, quarantine, then disable System Restore."
  },
  {
    id: "PBQ-064",
    format: 4,
    domain: 3,
    title: "Malware Removal: Final Four Steps",
    brief: "Continue the <span class='cy'>CompTIA malware removal process</span> and order steps four through seven.",
    exhibitTitle: "best practice",
    exhibit: "Seven-step process:\n  <span class='dim'>1 verify  2 quarantine  3 disable System Restore</span>\n  <span class='cy'>4 remediate  5 schedule scans  6 re-enable SR  7 educate</span>",
    fields: [
      { label: "Step 4 in the CompTIA malware-removal process", options: ["Educate the user", "Remediate: update anti-malware, scan and remove", "Quarantine", "Verify symptoms"], answer: 1, explain: "Step 4 is remediation: update the anti-malware tools and scan/remove, using Safe Mode or the recovery environment as needed." },
      { label: "Step 5 in the CompTIA malware-removal process", options: ["Schedule scans and run updates", "Disable System Restore", "Educate the user", "Quarantine"], answer: 0, explain: "Step 5 is to schedule scans and keep updates running to catch reinfection." },
      { label: "Step 6 in the CompTIA malware-removal process", options: ["Re-enable System Restore and create a restore point", "Investigate symptoms", "Quarantine the system", "Disable System Restore"], answer: 0, explain: "Step 6 is to re-enable System Restore and create a clean restore point." },
      { label: "Step 7 in the CompTIA malware-removal process", options: ["Educate the end user", "Remediate", "Quarantine", "Disable System Restore"], answer: 0, explain: "Step 7 is to educate the end user to prevent recurrence." }
    ],
    summary: "Remediate, schedule scans, re-enable System Restore, then educate the user."
  },
  {
    id: "PBQ-065",
    format: 4,
    domain: 3,
    title: "Why Quarantine Comes Before Remediation",
    brief: "A technician confirms an infection. Order the early steps and explain why quarantine precedes cleanup.",
    exhibitTitle: "incident notes",
    exhibit: "Confirmed infection on a networked PC:\n  <span class='warnc'>Risk of lateral spread</span>\n  <span class='cy'>Follow the seven-step process</span>",
    fields: [
      { label: "Step 2 in the CompTIA malware-removal process", options: ["Remediate immediately", "Quarantine the infected system", "Educate the user", "Re-enable System Restore"], answer: 1, explain: "After verifying, step 2 quarantines the system to prevent spread before any cleanup." },
      { label: "Step 3 in the CompTIA malware-removal process", options: ["Disable System Restore", "Schedule scans", "Create a restore point", "Educate the user"], answer: 0, explain: "Step 3 disables System Restore so the infection is not preserved in restore points." },
      { label: "How to quarantine an infected networked PC", hint: "Stop spread", options: ["Reinstall the OS", "Disconnect it from the network", "Defragment the disk", "Update drivers"], answer: 1, explain: "Quarantine means isolating the system, typically by disconnecting it from the network." }
    ],
    summary: "Quarantine isolates the host before cleanup, and disabling System Restore stops infected snapshots."
  },
  {
    id: "PBQ-066",
    format: 4,
    domain: 3,
    title: "Remediation Environment Choice",
    brief: "During the <span class='cy'>remediate</span> step, a technician selects the best environment to scan and remove malware.",
    exhibitTitle: "remediation",
    exhibit: "Step 4 remediation:\n  <span class='cy'>Update anti-malware definitions</span>\n  <span class='ok'>Scan and remove</span>\n  <span class='dim'>Use a clean boot environment if needed</span>",
    fields: [
      { label: "Step 4 in the CompTIA malware-removal process", options: ["Schedule scans", "Remediate: update anti-malware, scan and remove", "Educate the user", "Quarantine"], answer: 1, explain: "Step 4 is to update tools and scan/remove the infection." },
      { label: "Best boot mode when active malware blocks tools", options: ["Normal mode", "Safe Mode or the recovery environment", "Hibernate", "Fast Startup"], answer: 1, explain: "Booting into Safe Mode or the recovery environment loads minimal drivers so persistent malware is easier to remove." }
    ],
    summary: "Remediation updates tools and scans/removes; use Safe Mode or RE when malware resists cleanup."
  },
  {
    id: "PBQ-067",
    format: 4,
    domain: 3,
    title: "Disabling and Re-enabling System Restore",
    brief: "Order the two System Restore actions within the malware process and explain their purpose.",
    exhibitTitle: "system restore",
    exhibit: "System Restore steps:\n  <span class='warnc'>Step 3: disable</span>\n  <span class='ok'>Step 6: re-enable + create point</span>",
    fields: [
      { label: "Step 3 in the CompTIA malware-removal process", options: ["Re-enable System Restore", "Disable System Restore in Windows", "Educate the user", "Schedule scans"], answer: 1, explain: "Step 3 disables System Restore so infected restore points are cleared." },
      { label: "Step 6 in the CompTIA malware-removal process", options: ["Re-enable System Restore and create a restore point", "Disable System Restore", "Quarantine", "Verify symptoms"], answer: 0, explain: "Step 6 re-enables System Restore and captures a known-clean restore point." },
      { label: "Why disable System Restore during cleanup", options: ["To speed scanning", "So malware is not retained in restore points", "To free RAM", "To update drivers"], answer: 1, explain: "Disabling System Restore prevents infected files from persisting in restore snapshots." }
    ],
    summary: "Disable System Restore (step 3) to purge infected snapshots, then re-enable and create a clean point (step 6)."
  },
  {
    id: "PBQ-068",
    format: 4,
    domain: 3,
    title: "Verifying Symptoms Before Acting",
    brief: "A user reports pop-ups and slowness. Order the first steps and choose how to verify.",
    exhibitTitle: "report",
    exhibit: "User report:\n  <span class='warnc'>Pop-ups, slow performance, redirected searches</span>\n  <span class='cy'>Confirm it is malware first</span>",
    fields: [
      { label: "Step 1 in the CompTIA malware-removal process", options: ["Quarantine the PC", "Investigate and verify malware symptoms", "Disable System Restore", "Schedule scans"], answer: 1, explain: "Step 1 is to investigate and verify that the symptoms are actually caused by malware." },
      { label: "Best way to verify a suspected infection", options: ["Reimage immediately", "Review symptoms and run an updated scan", "Ignore it", "Delete user files"], answer: 1, explain: "Verifying combines symptom review with an updated anti-malware scan before disruptive action." }
    ],
    summary: "Always verify the infection first; reimaging before confirming symptoms is premature."
  },
  {
    id: "PBQ-069",
    format: 4,
    domain: 3,
    title: "Preventing Reinfection After Cleanup",
    brief: "After removal, order the late steps that keep the system clean.",
    exhibitTitle: "post-cleanup",
    exhibit: "After remediation:\n  <span class='cy'>Keep scanning on a schedule</span>\n  <span class='ok'>Educate the user</span>",
    fields: [
      { label: "Step 5 in the CompTIA malware-removal process", options: ["Educate the user", "Schedule scans and run updates", "Disable System Restore", "Quarantine"], answer: 1, explain: "Step 5 schedules ongoing scans and updates to catch any reinfection." },
      { label: "Step 7 in the CompTIA malware-removal process", options: ["Educate the end user", "Re-enable System Restore", "Quarantine", "Verify symptoms"], answer: 0, explain: "Step 7 educates the end user to avoid the behavior that led to infection." },
      { label: "Education topic most likely to prevent recurrence", options: ["How to defragment", "Recognizing phishing and risky downloads", "Changing wallpaper", "Disk partitioning"], answer: 1, explain: "Teaching users to recognize phishing and risky downloads addresses the common infection vector." }
    ],
    summary: "Schedule ongoing scans and educate the user on safe behavior to prevent reinfection."
  },
  {
    id: "PBQ-070",
    format: 4,
    domain: 3,
    title: "Choosing Malware Removal Tools",
    brief: "A technician selects appropriate tools while following the process.",
    exhibitTitle: "toolbox",
    exhibit: "Cleanup toolbox:\n  <span class='cy'>Updated anti-malware scanner</span>\n  <span class='ok'>Bootable recovery media</span>",
    fields: [
      { label: "Step 4 in the CompTIA malware-removal process", options: ["Quarantine", "Remediate: update anti-malware, scan and remove", "Educate the user", "Schedule scans"], answer: 1, explain: "Tool use happens during the remediation step." },
      { label: "Tool for removing malware that blocks Windows boot", options: ["Disk Defragmenter", "Bootable antivirus / recovery environment", "Notepad", "Calculator"], answer: 1, explain: "A bootable antivirus or recovery environment can scan offline when malware prevents normal boot." }
    ],
    summary: "Use updated scanners and bootable recovery media to remediate stubborn infections."
  },
  {
    id: "PBQ-071",
    format: 4,
    domain: 3,
    title: "Full Sequence Recall",
    brief: "Identify the correct step for three positions in the seven-step process.",
    exhibitTitle: "sequence",
    exhibit: "Match positions:\n  <span class='cy'>Position 1, 4, and 6</span>",
    fields: [
      { label: "Step 1 in the CompTIA malware-removal process", options: ["Investigate and verify malware symptoms", "Quarantine", "Educate the user", "Schedule scans"], answer: 0, explain: "Position 1 is to investigate and verify symptoms." },
      { label: "Step 4 in the CompTIA malware-removal process", options: ["Disable System Restore", "Remediate: update anti-malware, scan and remove", "Educate the user", "Quarantine"], answer: 1, explain: "Position 4 is remediation." },
      { label: "Step 6 in the CompTIA malware-removal process", options: ["Re-enable System Restore and create a restore point", "Verify symptoms", "Quarantine", "Schedule scans"], answer: 0, explain: "Position 6 re-enables System Restore and creates a restore point." }
    ],
    summary: "Positions 1, 4, and 6 are verify, remediate, and re-enable System Restore."
  },
  {
    id: "PBQ-072",
    format: 4,
    domain: 3,
    title: "Network Isolation During Quarantine",
    brief: "A technician quarantines a workstation spreading malware on the LAN.",
    exhibitTitle: "containment",
    exhibit: "Active spread detected:\n  <span class='warnc'>Other hosts at risk</span>\n  <span class='cy'>Isolate immediately</span>",
    fields: [
      { label: "Step 2 in the CompTIA malware-removal process", options: ["Educate the user", "Quarantine the infected system", "Re-enable System Restore", "Schedule scans"], answer: 1, explain: "Quarantine is step 2, isolating the host to stop the spread." },
      { label: "Most effective immediate isolation action", options: ["Lower the screen brightness", "Unplug network cable / disable Wi-Fi", "Run Disk Cleanup", "Change the wallpaper"], answer: 1, explain: "Disconnecting the network interface immediately stops the host from spreading malware." }
    ],
    summary: "Quarantine (step 2) means isolating the host from the network to contain the spread."
  },
  {
    id: "PBQ-073",
    format: 4,
    domain: 3,
    title: "Restore Point After Cleanup",
    brief: "Order the step where a clean restore point is captured and explain its value.",
    exhibitTitle: "restore point",
    exhibit: "After successful removal:\n  <span class='ok'>Re-enable System Restore</span>\n  <span class='cy'>Create a clean restore point</span>",
    fields: [
      { label: "Step 6 in the CompTIA malware-removal process", options: ["Disable System Restore", "Re-enable System Restore and create a restore point", "Quarantine", "Verify symptoms"], answer: 1, explain: "Step 6 re-enables System Restore and creates a fresh, clean restore point." },
      { label: "Why create a restore point now", options: ["To delete user files", "To capture a known-good clean state", "To disable updates", "To format the disk"], answer: 1, explain: "A restore point after cleanup captures a known-good state to roll back to if needed." }
    ],
    summary: "After cleanup, re-enable System Restore and create a clean restore point as a known-good baseline."
  },
  {
    id: "PBQ-074",
    format: 4,
    domain: 3,
    title: "Investigate vs Educate Placement",
    brief: "Distinguish the first and last steps of the process.",
    exhibitTitle: "endpoints of the process",
    exhibit: "Bookends:\n  <span class='cy'>First action</span>\n  <span class='ok'>Final action</span>",
    fields: [
      { label: "Step 1 in the CompTIA malware-removal process", options: ["Educate the user", "Investigate and verify malware symptoms", "Remediate", "Re-enable System Restore"], answer: 1, explain: "The very first step is to investigate and verify the symptoms." },
      { label: "Step 7 in the CompTIA malware-removal process", options: ["Educate the end user", "Quarantine", "Disable System Restore", "Verify symptoms"], answer: 0, explain: "The final step is to educate the end user." }
    ],
    summary: "Investigation is the first step and end-user education is the last."
  },
  {
    id: "PBQ-075",
    format: 4,
    domain: 3,
    title: "Updating Definitions Before Scanning",
    brief: "Within remediation, order the action and choose the correct tool prep.",
    exhibitTitle: "remediation detail",
    exhibit: "Step 4 detail:\n  <span class='cy'>Update definitions first</span>\n  <span class='ok'>Then scan and remove</span>",
    fields: [
      { label: "Step 4 in the CompTIA malware-removal process", options: ["Schedule scans", "Remediate: update anti-malware, scan and remove", "Educate the user", "Disable System Restore"], answer: 1, explain: "Remediation is step 4 and includes updating before scanning." },
      { label: "Why update anti-malware before scanning", options: ["To free disk space", "So the latest threats are detectable", "To speed booting", "To reset the password"], answer: 1, explain: "Updating definitions first ensures the scanner recognizes the newest known threats." }
    ],
    summary: "During remediation, update definitions before scanning so the latest threats are detected."
  },
  {
    id: "PBQ-076",
    format: 4,
    domain: 3,
    title: "Safe Mode for Stubborn Infections",
    brief: "A rootkit reloads on normal boot. Order the relevant step and pick the environment.",
    exhibitTitle: "stubborn infection",
    exhibit: "<span class='warnc'>Malware reloads at every normal boot</span>\n  <span class='cy'>Use a minimal boot environment</span>",
    fields: [
      { label: "Step 4 in the CompTIA malware-removal process", options: ["Quarantine", "Remediate using Safe Mode/recovery environment", "Educate the user", "Schedule scans"], answer: 1, explain: "Remediation (step 4) may require Safe Mode or the recovery environment for persistent malware." },
      { label: "Why Safe Mode helps remove persistent malware", options: ["It encrypts the disk", "It loads minimal drivers so malware may not start", "It speeds the CPU", "It disables the firewall"], answer: 1, explain: "Safe Mode loads only essential drivers, so many malware components do not start and can be removed." }
    ],
    summary: "Use Safe Mode or the recovery environment during remediation to remove malware that reloads on normal boot."
  },
  {
    id: "PBQ-077",
    format: 4,
    domain: 3,
    title: "Documenting the Incident",
    brief: "A technician follows the process and also documents findings.",
    exhibitTitle: "process plus documentation",
    exhibit: "Close out the incident:\n  <span class='cy'>Follow all seven steps</span>\n  <span class='ok'>Record what happened</span>",
    fields: [
      { label: "Step 7 in the CompTIA malware-removal process", options: ["Educate the end user", "Quarantine", "Disable System Restore", "Verify symptoms"], answer: 0, explain: "Educating the end user is the final step of the process." },
      { label: "Best practice alongside user education", options: ["Skip documentation", "Document symptoms, actions, and outcome", "Delete the logs", "Disable auditing"], answer: 1, explain: "Documenting the symptoms, remediation actions, and outcome supports future troubleshooting and accountability." }
    ],
    summary: "Finish by educating the user and documenting the symptoms, actions, and outcome."
  },
  {
    id: "PBQ-078",
    format: 4,
    domain: 3,
    title: "Ordering the Middle Steps",
    brief: "Order steps three through five of the process.",
    exhibitTitle: "middle steps",
    exhibit: "Match positions 3-5:\n  <span class='dim'>3 disable SR  4 remediate  5 schedule scans</span>",
    fields: [
      { label: "Step 3 in the CompTIA malware-removal process", options: ["Disable System Restore in Windows", "Educate the user", "Quarantine", "Re-enable System Restore"], answer: 0, explain: "Step 3 disables System Restore." },
      { label: "Step 4 in the CompTIA malware-removal process", options: ["Schedule scans", "Remediate: update anti-malware, scan and remove", "Verify symptoms", "Educate the user"], answer: 1, explain: "Step 4 is remediation." },
      { label: "Step 5 in the CompTIA malware-removal process", options: ["Schedule scans and run updates", "Disable System Restore", "Quarantine", "Educate the user"], answer: 0, explain: "Step 5 schedules scans and runs updates." }
    ],
    summary: "The middle of the process is disable System Restore, remediate, then schedule scans."
  },
  {
    id: "PBQ-079",
    format: 4,
    domain: 3,
    title: "First Response to a Suspected Infection",
    brief: "Order the first two actions when malware is suspected.",
    exhibitTitle: "first response",
    exhibit: "Suspected infection:\n  <span class='cy'>Confirm before disrupting the user</span>\n  <span class='warnc'>Contain once confirmed</span>",
    fields: [
      { label: "Step 1 in the CompTIA malware-removal process", options: ["Quarantine", "Investigate and verify malware symptoms", "Remediate", "Educate the user"], answer: 1, explain: "Verify the symptoms first before taking disruptive action." },
      { label: "Step 2 in the CompTIA malware-removal process", options: ["Quarantine the infected system", "Disable System Restore", "Schedule scans", "Educate the user"], answer: 0, explain: "Once confirmed, quarantine the system to contain it." }
    ],
    summary: "Confirm the infection first, then quarantine to contain it."
  },
  {
    id: "PBQ-080",
    format: 4,
    domain: 3,
    title: "Complete Process Audit",
    brief: "Verify the placement of steps two, five, and seven.",
    exhibitTitle: "audit",
    exhibit: "Confirm positions 2, 5, 7:\n  <span class='cy'>quarantine / schedule scans / educate</span>",
    fields: [
      { label: "Step 2 in the CompTIA malware-removal process", options: ["Quarantine the infected system", "Educate the user", "Disable System Restore", "Verify symptoms"], answer: 0, explain: "Position 2 is quarantine." },
      { label: "Step 5 in the CompTIA malware-removal process", options: ["Schedule scans and run updates", "Remediate", "Quarantine", "Verify symptoms"], answer: 0, explain: "Position 5 is to schedule scans and run updates." },
      { label: "Step 7 in the CompTIA malware-removal process", options: ["Educate the end user", "Re-enable System Restore", "Disable System Restore", "Quarantine"], answer: 0, explain: "Position 7 is to educate the end user." }
    ],
    summary: "Positions 2, 5, and 7 are quarantine, schedule scans, and educate the user."
  },
  {
    id: "PBQ-081",
    format: 5,
    domain: 4,
    title: "Change Management Artifacts",
    brief: "A technician documents a planned change through the <span class='cy'>change-management process</span>.",
    exhibitTitle: "change record",
    exhibit: "Change request lifecycle:\n  <span class='cy'>Document the proposed change</span>\n  <span class='ok'>Plan how to undo it</span>",
    fields: [
      { label: "Artifact that formally proposes the change", options: ["Rollback plan", "Change request form", "Incident report", "Asset tag"], answer: 1, explain: "The change request form formally documents the proposed change for review and approval." },
      { label: "Document describing how to undo a failed change", options: ["Risk analysis", "Rollback plan", "Acceptance form", "Network diagram"], answer: 1, explain: "A rollback plan describes how to revert the system if the change fails." }
    ],
    summary: "A change request form proposes the change; a rollback plan describes how to undo it."
  },
  {
    id: "PBQ-082",
    format: 5,
    domain: 4,
    title: "Testing Changes Before Production",
    brief: "A technician validates a change without risking production systems.",
    exhibitTitle: "test plan",
    exhibit: "Before deploying:\n  <span class='cy'>Test in an isolated environment</span>\n  <span class='ok'>Assess potential impact</span>",
    fields: [
      { label: "Where to validate a change safely", options: ["Directly in production", "A sandbox / test environment", "On every user PC", "No testing needed"], answer: 1, explain: "A sandbox or isolated test environment validates the change without affecting production." },
      { label: "Document weighing likelihood and impact", options: ["Risk analysis", "Rollback plan", "Asset inventory", "Acceptable use policy"], answer: 0, explain: "A risk analysis evaluates the likelihood and impact of the change before approval." }
    ],
    summary: "Test changes in a sandbox and complete a risk analysis before production deployment."
  },
  {
    id: "PBQ-083",
    format: 5,
    domain: 4,
    title: "Approval and Acceptance",
    brief: "A change must be authorized and later confirmed acceptable by users.",
    exhibitTitle: "governance",
    exhibit: "Authorization path:\n  <span class='cy'>Review board approves</span>\n  <span class='ok'>End users confirm it works</span>",
    fields: [
      { label: "Body that authorizes a significant change", options: ["Help desk only", "Change advisory board", "Individual technician", "Vendor support"], answer: 1, explain: "The change advisory board (change board) reviews and approves significant changes." },
      { label: "Confirmation gathered after deployment", options: ["End-user acceptance", "Asset tagging", "Disk formatting", "Password reset"], answer: 0, explain: "End-user acceptance confirms the change works as intended in real use." }
    ],
    summary: "A change board approves the change; end-user acceptance confirms it works after deployment."
  },
  {
    id: "PBQ-084",
    format: 5,
    domain: 4,
    title: "Backup Methods: Full, Incremental, Differential",
    brief: "A technician designs a backup rotation balancing speed and restore time.",
    exhibitTitle: "backup types",
    exhibit: "Backup behavior:\n  <span class='cy'>Full: everything each time</span>\n  <span class='ok'>Incremental: changes since last backup</span>\n  <span class='dim'>Differential: changes since last full</span>",
    fields: [
      { label: "Backup capturing only changes since the last backup", hint: "Fastest backup, slower restore", options: ["Full", "Incremental", "Differential", "Synthetic"], answer: 1, explain: "An incremental backup saves only data changed since the last backup of any type, minimizing backup time." },
      { label: "Backup capturing changes since the last full", options: ["Incremental", "Differential", "Full", "Mirror"], answer: 1, explain: "A differential backup saves all changes since the last full backup, simplifying restores." }
    ],
    summary: "Incremental backs up since the last backup; differential backs up since the last full."
  },
  {
    id: "PBQ-085",
    format: 5,
    domain: 4,
    title: "The 3-2-1 Backup Rule",
    brief: "A technician applies the <span class='cy'>3-2-1 rule</span> to a backup strategy.",
    exhibitTitle: "3-2-1 rule",
    exhibit: "3-2-1 strategy:\n  <span class='cy'>3 copies of data</span>\n  <span class='ok'>2 different media types</span>\n  <span class='warnc'>1 copy offsite</span>",
    fields: [
      { label: "How many total copies of data the rule requires", options: ["1", "2", "3", "4"], answer: 2, explain: "The 3-2-1 rule keeps three total copies of the data." },
      { label: "Where one copy must reside", hint: "Disaster protection", options: ["On the same server", "Offsite", "In the recycle bin", "On the same disk"], answer: 1, explain: "At least one copy must be stored offsite to survive a local disaster." }
    ],
    summary: "3-2-1 means three copies, on two media types, with one stored offsite."
  },
  {
    id: "PBQ-086",
    format: 5,
    domain: 4,
    title: "Grandfather-Father-Son Rotation",
    brief: "A technician sets up a <span class='cy'>GFS</span> media rotation for long-term retention.",
    exhibitTitle: "GFS rotation",
    exhibit: "GFS scheme:\n  <span class='cy'>Son = daily</span>\n  <span class='ok'>Father = weekly</span>\n  <span class='dim'>Grandfather = monthly</span>",
    fields: [
      { label: "Which set is retained the longest", options: ["Son (daily)", "Father (weekly)", "Grandfather (monthly)", "All equal"], answer: 2, explain: "In GFS, the monthly grandfather backups are kept the longest for long-term retention." },
      { label: "Benefit of the GFS scheme", options: ["Single point of failure", "Tiered retention with reusable media", "No offsite needed", "Eliminates full backups"], answer: 1, explain: "GFS provides tiered daily/weekly/monthly retention while reusing media efficiently." }
    ],
    summary: "GFS rotates daily, weekly, and monthly sets, with monthly grandfather media kept longest."
  },
  {
    id: "PBQ-087",
    format: 5,
    domain: 4,
    title: "Documentation Types",
    brief: "A technician maintains operational documentation.",
    exhibitTitle: "doc library",
    exhibit: "Documents to keep:\n  <span class='cy'>Network topology</span>\n  <span class='ok'>Standard operating procedures</span>",
    fields: [
      { label: "Document showing device layout and connections", options: ["Network topology diagram", "Password list", "Invoice", "Warranty card"], answer: 0, explain: "A network topology diagram depicts devices and how they connect." },
      { label: "Document standardizing repeatable tasks", options: ["SOP / knowledge base article", "Sales brochure", "License sticker", "Receipt"], answer: 0, explain: "Standard operating procedures and knowledge base articles standardize repeatable tasks." }
    ],
    summary: "Keep topology diagrams for layout and SOP/KB articles for repeatable procedures."
  },
  {
    id: "PBQ-088",
    format: 5,
    domain: 4,
    title: "Electrical and ESD Safety",
    brief: "A technician follows safety procedures while servicing hardware.",
    exhibitTitle: "safety gear",
    exhibit: "Bench safety:\n  <span class='cy'>Prevent static damage</span>\n  <span class='warnc'>De-energize before service</span>",
    fields: [
      { label: "Equipment that prevents ESD damage", options: ["Antistatic wrist strap and mat", "Multimeter", "Label printer", "Cable tester"], answer: 0, explain: "An antistatic wrist strap and mat safely equalize static charge to protect components." },
      { label: "Action before working inside a power supply", hint: "Stored charge risk", options: ["Spray it with water", "Disconnect power and avoid opening PSUs", "Run it under load", "Increase the voltage"], answer: 1, explain: "Disconnect power before service; power supplies hold dangerous stored charge and should not be opened." }
    ],
    summary: "Use an antistatic strap and mat for ESD, and de-energize hardware before servicing it."
  },
  {
    id: "PBQ-089",
    format: 5,
    domain: 4,
    title: "Scripting File Types",
    brief: "A technician identifies script file extensions and their interpreters.",
    exhibitTitle: "script files",
    exhibit: "Automation scripts:\n  <span class='cy'>.ps1 PowerShell</span>\n  <span class='ok'>.bat / .cmd batch</span>\n  <span class='dim'>.sh shell  .py Python  .js JavaScript  .vbs VBScript</span>",
    fields: [
      { label: "Extension for a PowerShell script", options: [".bat", ".ps1", ".sh", ".vbs"], answer: 1, explain: ".ps1 is the PowerShell script file extension." },
      { label: "Extension for a Linux/Unix shell script", options: [".sh", ".cmd", ".ps1", ".js"], answer: 0, explain: ".sh denotes a shell script run by a Unix/Linux shell." }
    ],
    summary: ".ps1 is PowerShell, .bat/.cmd are batch, and .sh is a Unix shell script."
  },
  {
    id: "PBQ-090",
    format: 5,
    domain: 4,
    title: "More Scripting Extensions",
    brief: "A technician matches additional script types to their languages.",
    exhibitTitle: "script files",
    exhibit: "Identify languages:\n  <span class='cy'>.py</span>\n  <span class='ok'>.js</span>\n  <span class='dim'>.vbs</span>",
    fields: [
      { label: "Extension for a Python script", options: [".py", ".ps1", ".bat", ".sh"], answer: 0, explain: ".py is the file extension for Python scripts." },
      { label: "Extension for a VBScript file", options: [".js", ".vbs", ".cmd", ".sh"], answer: 1, explain: ".vbs denotes a VBScript file run by the Windows Script Host." }
    ],
    summary: ".py is Python, .js is JavaScript, and .vbs is VBScript."
  },
  {
    id: "PBQ-091",
    format: 5,
    domain: 4,
    title: "Incident Response and Chain of Custody",
    brief: "A technician handles potential evidence after a security incident.",
    exhibitTitle: "incident handling",
    exhibit: "Evidence handling:\n  <span class='warnc'>Preserve the data</span>\n  <span class='cy'>Track who handled it</span>",
    fields: [
      { label: "Documentation tracking evidence handling", options: ["Chain of custody", "Rollback plan", "SOP", "Asset tag"], answer: 0, explain: "A chain of custody records who handled evidence and when, preserving its integrity." },
      { label: "First action on discovering an incident", hint: "Don't destroy evidence", options: ["Wipe the disk", "Preserve data and report per policy", "Reinstall the OS", "Ignore it"], answer: 1, explain: "Preserve the data and follow the reporting and escalation policy rather than altering evidence." }
    ],
    summary: "Maintain a chain of custody and preserve data when responding to a security incident."
  },
  {
    id: "PBQ-092",
    format: 5,
    domain: 4,
    title: "Backup Testing and Validation",
    brief: "A technician ensures backups are actually recoverable.",
    exhibitTitle: "backup assurance",
    exhibit: "Backup program:\n  <span class='cy'>Backups complete nightly</span>\n  <span class='warnc'>Are they restorable?</span>",
    fields: [
      { label: "Essential practice to trust backups", options: ["Never test them", "Periodically test restores", "Delete old backups", "Disable logging"], answer: 1, explain: "Periodically testing restores verifies backups are valid and recoverable when needed." },
      { label: "Risk of skipping restore tests", options: ["Faster backups", "Discovering failures only during a real disaster", "More storage", "Better encryption"], answer: 1, explain: "Without restore testing, backup failures may surface only during an actual recovery." }
    ],
    summary: "Regularly test restores so backup failures are caught before a real disaster."
  },
  {
    id: "PBQ-093",
    format: 5,
    domain: 4,
    title: "Asset Management and Inventory",
    brief: "A technician tracks hardware and licenses across the organization.",
    exhibitTitle: "asset records",
    exhibit: "Track assets:\n  <span class='cy'>Hardware inventory</span>\n  <span class='ok'>License compliance</span>",
    fields: [
      { label: "Record identifying each device uniquely", options: ["Asset tag / inventory ID", "Wallpaper", "Hostname only", "MAC vendor"], answer: 0, explain: "An asset tag or inventory ID uniquely identifies and tracks each device." },
      { label: "Tracking that prevents over-deployment of software", options: ["License / entitlement records", "Network diagram", "Rollback plan", "Chain of custody"], answer: 0, explain: "License and entitlement records ensure software use stays within purchased limits." }
    ],
    summary: "Asset tags track hardware and license records keep software use compliant."
  },
  {
    id: "PBQ-094",
    format: 5,
    domain: 4,
    title: "Risk and Impact of Skipping Change Control",
    brief: "A technician weighs the consequences of bypassing change management.",
    exhibitTitle: "governance risk",
    exhibit: "Unapproved change:\n  <span class='warnc'>No board review</span>\n  <span class='warnc'>No rollback plan</span>",
    fields: [
      { label: "Primary purpose of change management", options: ["Slow down all work", "Reduce risk of unplanned disruption", "Increase costs", "Avoid documentation"], answer: 1, explain: "Change management reduces the risk of unplanned outages by reviewing, testing, and approving changes." },
      { label: "Consequence of no rollback plan", options: ["Faster recovery", "No defined way to revert a failed change", "Better uptime", "Lower risk"], answer: 1, explain: "Without a rollback plan there is no defined way to revert if the change fails." }
    ],
    summary: "Change management reduces disruption risk; without a rollback plan, failed changes cannot be cleanly reverted."
  },
  {
    id: "PBQ-095",
    format: 5,
    domain: 4,
    title: "Full Backup Trade-offs",
    brief: "A technician explains the trade-offs of full backups.",
    exhibitTitle: "full backup",
    exhibit: "Full backup:\n  <span class='cy'>Copies all selected data</span>\n  <span class='ok'>Simplest restore</span>\n  <span class='warnc'>Longest backup time and most storage</span>",
    fields: [
      { label: "Main advantage of a full backup", options: ["Fastest to create", "Simplest, single-set restore", "Uses least storage", "No media needed"], answer: 1, explain: "A full backup restores from a single set, making recovery the simplest." },
      { label: "Main drawback of full backups", options: ["Hardest restore", "Most time and storage to create", "Cannot be encrypted", "Not recoverable"], answer: 1, explain: "Full backups take the most time and storage because they copy everything each run." }
    ],
    summary: "Full backups are simplest to restore but cost the most time and storage to create."
  },
  {
    id: "PBQ-096",
    format: 5,
    domain: 4,
    title: "Change Documentation and Communication",
    brief: "A technician communicates a scheduled change to stakeholders.",
    exhibitTitle: "communication plan",
    exhibit: "Planned maintenance:\n  <span class='cy'>Notify affected users</span>\n  <span class='ok'>Record date, scope, and contact</span>",
    fields: [
      { label: "Who should be informed of a planned change", options: ["No one", "Affected end users and stakeholders", "Only the vendor", "Only the CEO"], answer: 1, explain: "Affected users and stakeholders should be notified so they can prepare for the change." },
      { label: "Detail to include in the change notice", options: ["Personal opinions", "Date, scope, and rollback contact", "Unrelated tickets", "Marketing copy"], answer: 1, explain: "A change notice should state the date, scope, and who to contact, including for rollback." }
    ],
    summary: "Notify affected stakeholders and document the date, scope, and contacts for the change."
  },
  {
    id: "PBQ-097",
    format: 5,
    domain: 4,
    title: "Safe Disposal and Handling",
    brief: "A technician disposes of old equipment and batteries responsibly.",
    exhibitTitle: "disposal",
    exhibit: "Decommissioning:\n  <span class='warnc'>Batteries and toner are hazardous</span>\n  <span class='cy'>Follow regulations and the SDS</span>",
    fields: [
      { label: "Reference for handling a hazardous material", options: ["Safety data sheet (SDS)", "Sales receipt", "Network diagram", "User manual cover"], answer: 0, explain: "The safety data sheet (SDS) describes safe handling, storage, and disposal of a material." },
      { label: "Correct disposal of batteries and toner", options: ["Regular trash", "Approved recycling per local regulations", "Burn them", "Bury them"], answer: 1, explain: "Batteries and toner must be recycled or disposed of per local environmental regulations." }
    ],
    summary: "Consult the SDS and follow local regulations to recycle hazardous items like batteries and toner."
  },
  {
    id: "PBQ-098",
    format: 5,
    domain: 4,
    title: "Restore Strategy by Backup Type",
    brief: "A technician compares restore complexity across backup types.",
    exhibitTitle: "restore steps",
    exhibit: "To restore:\n  <span class='cy'>Incremental: full + every increment</span>\n  <span class='ok'>Differential: full + latest differential</span>",
    fields: [
      { label: "Restore using an incremental scheme", options: ["Last full only", "Last full plus all increments since", "Latest increment only", "Any single backup"], answer: 1, explain: "Restoring incrementals requires the last full backup plus every incremental made since." },
      { label: "Restore using a differential scheme", options: ["Last full plus the latest differential", "All differentials", "Last full only", "Any increment"], answer: 0, explain: "Restoring differentials needs only the last full plus the most recent differential." }
    ],
    summary: "Incremental restores need the full plus all increments; differential needs the full plus the latest differential."
  },
  {
    id: "PBQ-099",
    format: 5,
    domain: 4,
    title: "Acceptable Use and Regulatory Compliance",
    brief: "A technician applies policy and compliance requirements.",
    exhibitTitle: "policy",
    exhibit: "Governance:\n  <span class='cy'>Acceptable use policy</span>\n  <span class='ok'>Regulated data handling</span>",
    fields: [
      { label: "Document defining permitted use of company IT", options: ["Acceptable use policy", "Network diagram", "Rollback plan", "SDS"], answer: 0, explain: "The acceptable use policy defines how employees may use company IT resources." },
      { label: "Why follow regulatory data-handling rules", options: ["Optional preference", "Legal and compliance obligations", "To slow work", "No real reason"], answer: 1, explain: "Handling regulated data correctly meets legal and compliance obligations and avoids penalties." }
    ],
    summary: "An acceptable use policy governs IT use, and regulated data must be handled to meet compliance obligations."
  },
  {
    id: "PBQ-100",
    format: 5,
    domain: 4,
    title: "Sandbox Testing and Staged Rollout",
    brief: "A technician plans a staged rollout after sandbox validation.",
    exhibitTitle: "rollout plan",
    exhibit: "Deployment plan:\n  <span class='cy'>Validate in sandbox</span>\n  <span class='ok'>Pilot to a small group</span>\n  <span class='dim'>Then full rollout</span>",
    fields: [
      { label: "Purpose of a pilot group before full rollout", options: ["Skip testing", "Catch issues with limited impact", "Increase risk", "Avoid approval"], answer: 1, explain: "A pilot exposes issues on a small scale before a wider, higher-impact rollout." },
      { label: "Step that precedes any production rollout", options: ["Sandbox testing", "Disposal", "Asset tagging", "Password reset"], answer: 0, explain: "Sandbox testing validates the change in isolation before it touches production." }
    ],
    summary: "Validate changes in a sandbox, pilot to a small group, then proceed to full rollout."
  }
);
