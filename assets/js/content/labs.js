/* a+ core 2 :: content/labs.js — hands-on sandbox labs (220-1202). */
window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "OPERATING SYSTEMS",
    "title": "Windows Command-Line Network Diagnostics",
    "desc": "A user reports they cannot reach an internal application server. From the Windows diagnostic shell, verify the workstation's network identity and trace where connectivity breaks.",
    "objectives": [
      "Read the workstation's IP address, subnet, and gateway.",
      "Test reachability to the default gateway and a remote host.",
      "Trace the network path and resolve a hostname to verify DNS.",
      "Record the diagnostic conclusion to the ticket."
    ],
    "console": {
      "host": "win-bench01",
      "boot": [
        "[SYS] Operating systems bench lab online.",
        "[SYS] Windows 11 diagnostic shell ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Display the host IP configuration" },
        { "id": "t2", "label": "Test reachability to a remote host" },
        { "id": "t3", "label": "Trace the route to the destination" },
        { "id": "t4", "label": "Resolve the server hostname via DNS" },
        { "id": "t5", "label": "Submit the diagnostic conclusion" }
      ],
      "configs": [],
      "payload": {
        "label": "DIAGNOSTIC CONCLUSION",
        "placeholder": "type: document where connectivity failed",
        "button": "Submit",
        "response": "[OK] Diagnostic conclusion attached to the ticket.",
        "task": "t5"
      },
      "commands": [
        { "cmd": "ipconfig /all", "out": "[NET] IPv4 Address. . . : 192.168.10.42\n[NET] Subnet Mask . . . : 255.255.255.0\n[NET] Default Gateway . : 192.168.10.1\n[NET] DNS Servers . . . : 192.168.10.5", "task": "t1" },
        { "cmd": "ping 192.168.10.1", "out": "[NET] Reply from 192.168.10.1: bytes=32 time=1ms TTL=64\n[NET] Reply from 192.168.10.1: bytes=32 time=1ms TTL=64\n[OK] Gateway is reachable.", "task": "t2" },
        { "cmd": "tracert app-srv01", "out": "[NET] 1   1 ms  192.168.10.1\n[NET] 2   *    Request timed out.\n[NET] 3   *    Request timed out.\n[NET] Trace stops past the gateway.", "task": "t3" },
        { "cmd": "nslookup app-srv01", "out": "[NET] Server: 192.168.10.5\n[NET] Name: app-srv01.corp.local\n[NET] Address: 10.20.0.30\n[OK] Hostname resolves correctly.", "task": "t4" },
        { "cmd": "getmac", "out": "[NET] Physical Address: 9C-B6-D0-1A-2B-3C\n[NET] Transport: \\Device\\Tcpip_{...}" }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "OPERATING SYSTEMS",
    "title": "Disk Health and System File Repair",
    "desc": "A workstation shows file corruption and intermittent disk errors after an unexpected shutdown. Use the built-in Windows repair tools to scan the disk and restore protected system files.",
    "objectives": [
      "Scan and repair the file system and bad sectors on the volume.",
      "Verify and restore protected operating system files.",
      "Repair the component store image used as the SFC source.",
      "Confirm the result and record the repair note."
    ],
    "console": {
      "host": "win-bench02",
      "boot": [
        "[SYS] Disk maintenance bench online.",
        "[SYS] Elevated command prompt ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Scan and repair the file system" },
        { "id": "t2", "label": "Repair the component store image" },
        { "id": "t3", "label": "Verify and restore protected system files" },
        { "id": "t4", "label": "Choose the correct repair source order" },
        { "id": "t5", "label": "Submit the repair note" }
      ],
      "configs": [
        { "id": "c1", "label": "Which tool repairs the underlying image that SFC pulls clean files from?", "options": ["chkdsk", "DISM /Online /Cleanup-Image /RestoreHealth", "diskpart"], "correct": "DISM /Online /Cleanup-Image /RestoreHealth", "task": "t4" }
      ],
      "payload": {
        "label": "REPAIR NOTE",
        "placeholder": "type: document the tools run and the outcome",
        "button": "Submit",
        "response": "[OK] Repair note recorded to the maintenance log.",
        "task": "t5"
      },
      "commands": [
        { "cmd": "chkdsk C: /f /r", "out": "[CHK] Scanning file system...\n[CHK] Recovering lost files...\n[CHK] Bad sectors marked. No further errors found.", "task": "t1" },
        { "cmd": "DISM /Online /Cleanup-Image /RestoreHealth", "out": "[DISM] Scanning component store...\n[DISM] Restoring health from Windows Update.\n[DISM] The operation completed successfully.", "task": "t2" },
        { "cmd": "sfc /scannow", "out": "[SFC] Beginning verification phase of system scan.\n[SFC] Found corrupt files and successfully repaired them.", "task": "t3" },
        { "cmd": "diskpart", "out": "[DSK] Microsoft DiskPart version 11.0\n[DSK] On computer: WIN-BENCH02" }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "OPERATING SYSTEMS",
    "title": "Windows Tools, Services, and Policy",
    "desc": "A line-of-business application has hung and a stale Group Policy is preventing a mapped drive. Inspect running processes, manage a service, end the frozen task, and refresh policy.",
    "objectives": [
      "List running processes and identify the hung application.",
      "Query the state of a Windows service.",
      "Terminate the unresponsive process by image name.",
      "Force a refresh of Group Policy on the workstation."
    ],
    "console": {
      "host": "win-bench03",
      "boot": [
        "[SYS] Tools and services bench online.",
        "[SYS] Administrative shell ready."
      ],
      "tasks": [
        { "id": "t1", "label": "List running processes" },
        { "id": "t2", "label": "Query a service state" },
        { "id": "t3", "label": "Terminate the hung process" },
        { "id": "t4", "label": "Refresh Group Policy" },
        { "id": "t5", "label": "Choose the correct kill switch" }
      ],
      "configs": [
        { "id": "c1", "label": "Which flag forces taskkill to end a not-responding process by image name?", "options": ["/IM badapp.exe /F", "/S only", "/T without /F"], "correct": "/IM badapp.exe /F", "task": "t5" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "tasklist", "out": "[PROC] explorer.exe        4120 Console\n[PROC] badapp.exe          7884 Console  (Not Responding)\n[PROC] svchost.exe          988 Services", "task": "t1" },
        { "cmd": "sc query Spooler", "out": "[SVC] SERVICE_NAME: Spooler\n[SVC] STATE: 4 RUNNING\n[SVC] START_TYPE: AUTO", "task": "t2" },
        { "cmd": "taskkill /IM badapp.exe /F", "out": "[PROC] SUCCESS: The process badapp.exe with PID 7884 has been terminated.", "task": "t3" },
        { "cmd": "gpupdate /force", "out": "[POL] Updating policy...\n[POL] Computer Policy update has completed successfully.\n[POL] User Policy update has completed successfully.", "task": "t4" },
        { "cmd": "msinfo32", "out": "[SYS] Launching System Information...\n[SYS] OS Name: Microsoft Windows 11 Pro" }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "OPERATING SYSTEMS",
    "title": "OS Install and Disk Partitioning",
    "desc": "You are preparing a new SSD for a clean Windows installation. Use diskpart to clean the disk, choose the correct partition style for UEFI, create and format a partition, and confirm it is ready.",
    "objectives": [
      "Select the target disk and wipe its existing structure.",
      "Initialize the disk with the correct partition style for UEFI boot.",
      "Create a primary partition and format it with the correct file system.",
      "Verify the partition layout before installing the OS."
    ],
    "console": {
      "host": "win-setup04",
      "boot": [
        "[SYS] OS deployment bench online.",
        "[SYS] DiskPart provisioning environment ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Select and clean the target disk" },
        { "id": "t2", "label": "Choose the partition style for UEFI" },
        { "id": "t3", "label": "Create and format the primary partition" },
        { "id": "t4", "label": "Choose the file system for the Windows volume" },
        { "id": "t5", "label": "Verify the partition layout" }
      ],
      "configs": [
        { "id": "c1", "label": "Which partition style is required for UEFI boot on a drive over 2 TB?", "options": ["MBR", "GPT", "exFAT"], "correct": "GPT", "task": "t2" },
        { "id": "c2", "label": "Which file system should the Windows system volume use?", "options": ["FAT32", "NTFS", "ext4"], "correct": "NTFS", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "select disk 1\nclean", "out": "[DSK] Disk 1 is now the selected disk.\n[DSK] DiskPart succeeded in cleaning the disk.", "task": "t1" },
        { "cmd": "create partition primary\nformat fs=ntfs quick", "out": "[DSK] DiskPart succeeded in creating the specified partition.\n[DSK] 100 percent completed. Format complete.", "task": "t3" },
        { "cmd": "list partition", "out": "[DSK] Partition 1   Primary   476 GB   1024 KB\n[OK] Layout ready for Windows installation.", "task": "t5" },
        { "cmd": "list disk", "out": "[DSK] Disk 0   Online   238 GB\n[DSK] Disk 1   Online   476 GB" }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "OPERATING SYSTEMS",
    "title": "Linux and macOS Terminal Basics",
    "desc": "A shared Linux file server needs a script made executable and a package installed, while a macOS user wants their backup verified. Use the appropriate terminal commands for each platform.",
    "objectives": [
      "List directory contents including permissions.",
      "Grant execute permission to a script with elevated rights.",
      "Install a package using the Linux package manager.",
      "Identify the correct macOS native backup utility."
    ],
    "console": {
      "host": "nix-bench05",
      "boot": [
        "[SYS] Cross-platform terminal bench online.",
        "[SYS] Bash and zsh shells available."
      ],
      "tasks": [
        { "id": "t1", "label": "List files with permissions" },
        { "id": "t2", "label": "Make the script executable" },
        { "id": "t3", "label": "Install a package with elevated rights" },
        { "id": "t4", "label": "Choose the macOS backup tool" }
      ],
      "configs": [
        { "id": "c1", "label": "Which macOS utility performs scheduled full-system backups to an external drive?", "options": ["Disk Utility", "Time Machine", "Spotlight"], "correct": "Time Machine", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "ls -l", "out": "[NIX] -rw-r--r-- 1 root root 482 backup.sh\n[NIX] drwxr-xr-x 2 root root  4096 logs", "task": "t1" },
        { "cmd": "chmod +x backup.sh", "out": "[NIX] Mode changed: -rwxr-xr-x backup.sh\n[OK] Script is now executable.", "task": "t2" },
        { "cmd": "sudo apt install net-tools", "out": "[NIX] Reading package lists... Done\n[NIX] Setting up net-tools...\n[OK] Package installed successfully.", "task": "t3" },
        { "cmd": "pwd", "out": "[NIX] /home/admin/scripts" }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "SECURITY",
    "title": "NTFS and Share Permissions",
    "desc": "A user can open a shared folder but cannot modify a file inside it. Examine the NTFS access control list, understand how share and NTFS permissions combine, and grant the correct effective access.",
    "objectives": [
      "Display the current NTFS permissions on the folder.",
      "Grant a user modify rights using the command line.",
      "Identify which permission wins when share and NTFS differ.",
      "Verify the updated access control list."
    ],
    "console": {
      "host": "win-sec06",
      "boot": [
        "[SYS] Security permissions bench online.",
        "[SYS] Elevated administrative shell ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Display current NTFS permissions" },
        { "id": "t2", "label": "Grant the user modify access" },
        { "id": "t3", "label": "Choose the effective-permission rule" },
        { "id": "t4", "label": "Verify the updated ACL" }
      ],
      "configs": [
        { "id": "c1", "label": "When share and NTFS permissions both apply over the network, which set is effective?", "options": ["The least restrictive of the two", "The most restrictive of the two", "Share always overrides NTFS"], "correct": "The most restrictive of the two", "task": "t3" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "icacls C:\\Projects", "out": "[SEC] C:\\Projects BUILTIN\\Administrators:(F)\n[SEC] CORP\\jdoe:(R)\n[SEC] Successfully processed 1 file.", "task": "t1" },
        { "cmd": "icacls C:\\Projects /grant CORP\\jdoe:(M)", "out": "[SEC] processed file: C:\\Projects\n[OK] Modify permission granted to CORP\\jdoe.", "task": "t2" },
        { "cmd": "icacls C:\\Projects", "out": "[SEC] C:\\Projects BUILTIN\\Administrators:(F)\n[SEC] CORP\\jdoe:(M)\n[OK] ACL now reflects modify access.", "task": "t4" },
        { "cmd": "whoami /groups", "out": "[SEC] CORP\\Domain Users   Group\n[SEC] BUILTIN\\Users       Group" }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "SECURITY",
    "title": "BitLocker and EFS Encryption",
    "desc": "A laptop holding sensitive data must have full-disk encryption enabled and an individual project folder encrypted at the file level. Use BitLocker and EFS, and securely wipe deallocated data.",
    "objectives": [
      "Check the BitLocker protection status of the system drive.",
      "Enable BitLocker and back up the recovery key.",
      "Encrypt a specific folder with EFS.",
      "Choose the correct tool for full-volume vs file-level encryption."
    ],
    "console": {
      "host": "win-sec07",
      "boot": [
        "[SYS] Encryption bench online.",
        "[SYS] TPM 2.0 detected and ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Check BitLocker status" },
        { "id": "t2", "label": "Enable BitLocker on the system drive" },
        { "id": "t3", "label": "Encrypt a folder with EFS" },
        { "id": "t4", "label": "Choose full-volume vs file-level encryption" }
      ],
      "configs": [
        { "id": "c1", "label": "Which technology encrypts an entire volume using the TPM, rather than individual files per user?", "options": ["EFS", "BitLocker", "cipher /w"], "correct": "BitLocker", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "manage-bde -status C:", "out": "[SEC] Volume C: [OS]\n[SEC] Conversion Status: Fully Decrypted\n[SEC] Protection Status: Protection Off", "task": "t1" },
        { "cmd": "manage-bde -on C: -RecoveryPassword", "out": "[SEC] Encryption in progress...\n[SEC] Recovery key ID generated. Back up to AD/Azure.\n[OK] BitLocker enabled on C:.", "task": "t2" },
        { "cmd": "cipher /e C:\\Projects\\Confidential", "out": "[SEC] Encrypting files in C:\\Projects\\Confidential\n[SEC] 1 directory encrypted.\n[OK] EFS encryption applied.", "task": "t3" },
        { "cmd": "cipher /w:C:\\Temp", "out": "[SEC] Writing 0x00, 0xFF, random...\n[SEC] Wiping free space complete." }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "SECURITY",
    "title": "User and Account Hardening",
    "desc": "A new contractor needs a standard account and an old administrator account must be locked down. Manage local accounts and groups from the command line and set User Account Control appropriately.",
    "objectives": [
      "List the local user accounts on the system.",
      "Create a new standard user account with a password.",
      "Remove a user from the local Administrators group.",
      "Choose the correct least-privilege UAC posture."
    ],
    "console": {
      "host": "win-sec08",
      "boot": [
        "[SYS] Account hardening bench online.",
        "[SYS] Local Users and Groups management ready."
      ],
      "tasks": [
        { "id": "t1", "label": "List local user accounts" },
        { "id": "t2", "label": "Create a standard user account" },
        { "id": "t3", "label": "Remove a user from Administrators" },
        { "id": "t4", "label": "Choose the correct UAC setting" }
      ],
      "configs": [
        { "id": "c1", "label": "Which UAC posture best follows least privilege for daily users?", "options": ["Never notify (UAC off)", "Always notify and require admin credentials to elevate", "Run all users as administrators"], "correct": "Always notify and require admin credentials to elevate", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "net user", "out": "[SEC] User accounts for \\\\WIN-SEC08\n[SEC] Administrator   Guest   jsmith   oldadmin", "task": "t1" },
        { "cmd": "net user contractor P@ssw0rd! /add", "out": "[SEC] Adding account contractor...\n[OK] The command completed successfully.", "task": "t2" },
        { "cmd": "net localgroup Administrators oldadmin /delete", "out": "[SEC] Removing oldadmin from Administrators...\n[OK] The command completed successfully.", "task": "t3" },
        { "cmd": "net accounts", "out": "[SEC] Minimum password length: 8\n[SEC] Lockout threshold: 5" }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "SECURITY",
    "title": "Defender Firewall and Antivirus",
    "desc": "A workstation needs its host firewall verified, an inbound rule for a blocked legitimate app, and an on-demand malware scan. Use the firewall command-line interface and Microsoft Defender Antivirus.",
    "objectives": [
      "Show the current firewall profile states.",
      "Add an inbound firewall rule to allow a legitimate application.",
      "Run a Microsoft Defender quick scan.",
      "Record the security verification note."
    ],
    "console": {
      "host": "win-sec09",
      "boot": [
        "[SYS] Endpoint defense bench online.",
        "[SYS] Microsoft Defender engine current."
      ],
      "tasks": [
        { "id": "t1", "label": "Show firewall profile states" },
        { "id": "t2", "label": "Add an inbound allow rule" },
        { "id": "t3", "label": "Run a Defender quick scan" },
        { "id": "t4", "label": "Submit the verification note" }
      ],
      "configs": [],
      "payload": {
        "label": "SECURITY VERIFICATION NOTE",
        "placeholder": "type: document the firewall and scan results",
        "button": "Submit",
        "response": "[OK] Security verification note saved to the endpoint record.",
        "task": "t4"
      },
      "commands": [
        { "cmd": "netsh advfirewall show allprofiles", "out": "[SEC] Domain Profile: State ON\n[SEC] Private Profile: State ON\n[SEC] Public Profile: State ON", "task": "t1" },
        { "cmd": "netsh advfirewall firewall add rule name=\"LOB App\" dir=in action=allow program=\"C:\\App\\lob.exe\" enable=yes", "out": "[SEC] Adding inbound rule 'LOB App'...\n[OK] Ok.", "task": "t2" },
        { "cmd": "MpCmdRun -Scan -ScanType 1", "out": "[AV] Starting quick scan...\n[AV] Scanning critical locations.\n[AV] Scan finished. No threats detected.", "task": "t3" },
        { "cmd": "MpCmdRun -SignatureUpdate", "out": "[AV] Checking for definition updates...\n[AV] Signatures are up to date." }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "SECURITY",
    "title": "SOHO and Wireless Hardening",
    "desc": "A small-office router is using factory defaults and weak wireless settings. From the router's management console, harden the wireless encryption, default credentials, broadcast, and firmware.",
    "objectives": [
      "Replace the default administrator credentials.",
      "Set the strongest available wireless encryption standard.",
      "Reduce wireless visibility and update firmware.",
      "Choose the correct encryption standard for the network."
    ],
    "console": {
      "host": "soho-rtr10",
      "boot": [
        "[SYS] SOHO router management console online.",
        "[SYS] Factory default configuration detected."
      ],
      "tasks": [
        { "id": "t1", "label": "Change the default admin credentials" },
        { "id": "t2", "label": "Set the strongest wireless encryption" },
        { "id": "t3", "label": "Disable SSID broadcast and update firmware" },
        { "id": "t4", "label": "Choose the encryption standard" }
      ],
      "configs": [
        { "id": "c1", "label": "Which wireless encryption standard should be selected for the strongest protection?", "options": ["WEP", "WPA2-TKIP", "WPA3"], "correct": "WPA3", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "set admin-credentials user=netadmin password=Str0ng-Pass!", "out": "[CFG] Default 'admin/admin' credentials replaced.\n[OK] New administrator credentials saved.", "task": "t1" },
        { "cmd": "set wireless encryption WPA3", "out": "[CFG] Wireless security set to WPA3-Personal (SAE).\n[OK] Encryption applied to SSID.", "task": "t2" },
        { "cmd": "set ssid-broadcast disable\nupdate firmware", "out": "[CFG] SSID broadcast disabled.\n[CFG] Downloading firmware 3.1.4...\n[OK] Firmware updated and rebooted.", "task": "t3" },
        { "cmd": "show wireless config", "out": "[CFG] SSID: OfficeNet (hidden)\n[CFG] Security: WPA3-Personal\n[CFG] Firmware: 3.1.4" }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "SOFTWARE TROUBLESHOOTING",
    "title": "BSOD and Boot Repair",
    "desc": "A PC fails to boot after a recent update, showing a stop error. Use the Windows Recovery Environment to boot into Safe Mode, rebuild boot records, and roll back with a restore point.",
    "objectives": [
      "Boot into Safe Mode to isolate the failure.",
      "Rebuild the boot configuration and master boot record.",
      "Restore the system to a known-good restore point.",
      "Choose the correct first recovery step."
    ],
    "console": {
      "host": "win-winre11",
      "boot": [
        "[SYS] Windows Recovery Environment online.",
        "[SYS] Boot repair toolset ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Boot into Safe Mode" },
        { "id": "t2", "label": "Rebuild boot configuration and MBR" },
        { "id": "t3", "label": "Restore to a known-good point" },
        { "id": "t4", "label": "Choose the first recovery step" }
      ],
      "configs": [
        { "id": "c1", "label": "What is the safest first step when a single update causes a stop error?", "options": ["Reinstall Windows from scratch", "Boot to Safe Mode and use a System Restore point", "Replace the hard drive"], "correct": "Boot to Safe Mode and use a System Restore point", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "bcdedit /set {default} safeboot minimal", "out": "[BOOT] Configuring next boot for Safe Mode (minimal).\n[OK] The operation completed successfully.", "task": "t1" },
        { "cmd": "bootrec /fixmbr\nbootrec /rebuildbcd", "out": "[BOOT] The operation completed successfully.\n[BOOT] Scanning for Windows installations... 1 found.\n[BOOT] Added installation to boot list.", "task": "t2" },
        { "cmd": "rstrui /offline:C:\\Windows", "out": "[REC] Listing restore points...\n[REC] Restoring to point 'Before Update KB5xxxxxx'.\n[OK] System restore completed successfully.", "task": "t3" },
        { "cmd": "bcdedit /enum", "out": "[BOOT] Windows Boot Manager\n[BOOT] identifier {bootmgr} device partition=\\Device\\HD0" }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "SOFTWARE TROUBLESHOOTING",
    "title": "Malware Removal Workflow",
    "desc": "A workstation is infected. Follow the CompTIA best-practice malware removal procedure: identify and quarantine, disable System Restore, remediate, schedule scans and re-enable restore, and educate the user.",
    "objectives": [
      "Quarantine the infected system from the network.",
      "Disable System Restore before remediation.",
      "Remediate the infection and update definitions.",
      "Re-enable System Restore and order the steps correctly.",
      "Record the end-user education note."
    ],
    "console": {
      "host": "win-st12",
      "boot": [
        "[SYS] Remediation bench online.",
        "[SYS] Malware removal toolkit ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Quarantine the infected machine" },
        { "id": "t2", "label": "Disable System Restore" },
        { "id": "t3", "label": "Remediate and update definitions" },
        { "id": "t4", "label": "Order the workflow steps correctly" },
        { "id": "t5", "label": "Submit the user education note" }
      ],
      "configs": [
        { "id": "c1", "label": "After identifying symptoms and quarantining, what is the next step before scanning?", "options": ["Create a new restore point", "Disable System Restore in Windows", "Reimage immediately"], "correct": "Disable System Restore in Windows", "task": "t4" }
      ],
      "payload": {
        "label": "END-USER EDUCATION NOTE",
        "placeholder": "type: document the prevention guidance given to the user",
        "button": "Submit",
        "response": "[OK] End-user education note logged to the ticket.",
        "task": "t5"
      },
      "commands": [
        { "cmd": "netsh interface set interface \"Ethernet\" admin=disable", "out": "[NET] Interface 'Ethernet' disabled.\n[OK] Host quarantined from the network.", "task": "t1" },
        { "cmd": "Disable-ComputerRestore -Drive \"C:\\\"", "out": "[SYS] System Restore disabled on C:.\n[OK] Infected restore points will not be reintroduced.", "task": "t2" },
        { "cmd": "MpCmdRun -SignatureUpdate\nMpCmdRun -Scan -ScanType 2", "out": "[AV] Definitions updated.\n[AV] Running full scan...\n[AV] 3 threats removed and quarantined.", "task": "t3" },
        { "cmd": "Enable-ComputerRestore -Drive \"C:\\\"", "out": "[SYS] System Restore re-enabled on C:.\n[SYS] New clean restore point created." }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "SOFTWARE TROUBLESHOOTING",
    "title": "Browser Security Symptom Cleanup",
    "desc": "A user's browser redirects to unwanted sites, shows pop-ups, and displays a certificate warning. Remove the malicious extension, reset browser settings, clear cached data, and verify the site certificate.",
    "objectives": [
      "Identify and remove the malicious browser extension.",
      "Reset browser settings to defaults.",
      "Clear the browser cache and stored data.",
      "Verify the certificate of a trusted site."
    ],
    "console": {
      "host": "win-st13",
      "boot": [
        "[SYS] Browser remediation bench online.",
        "[SYS] Browser management shell ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Remove the malicious extension" },
        { "id": "t2", "label": "Reset browser settings to default" },
        { "id": "t3", "label": "Clear cached browsing data" },
        { "id": "t4", "label": "Verify the site certificate" }
      ],
      "configs": [
        { "id": "c1", "label": "A site shows 'NET::ERR_CERT_AUTHORITY_INVALID'. What does this indicate?", "options": ["The page loaded too slowly", "The certificate is untrusted or invalid; do not proceed with sensitive data", "The browser cache is full"], "correct": "The certificate is untrusted or invalid; do not proceed with sensitive data", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "browser ext list\nbrowser ext remove SaverDealsPlus", "out": "[WEB] Extensions: SaverDealsPlus (unverified), uBlock Origin\n[WEB] Removing SaverDealsPlus...\n[OK] Malicious extension removed.", "task": "t1" },
        { "cmd": "browser settings reset", "out": "[WEB] Restoring default search engine and homepage.\n[WEB] Disabling unauthorized notification permissions.\n[OK] Browser settings reset to defaults.", "task": "t2" },
        { "cmd": "browser clear cache --all", "out": "[WEB] Clearing cache, cookies, and site data...\n[OK] Cached browsing data cleared.", "task": "t3" },
        { "cmd": "browser cert verify https://intranet.corp.local", "out": "[WEB] Subject: intranet.corp.local\n[WEB] Issuer: Corp Internal CA\n[OK] Certificate valid and trusted." }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "SOFTWARE TROUBLESHOOTING",
    "title": "Mobile OS and App Troubleshooting",
    "desc": "A smartphone has a crashing app and is low on storage and out of date. Work through the standard mobile troubleshooting steps from least to most invasive to restore normal operation.",
    "objectives": [
      "Clear the misbehaving app's cache.",
      "Reinstall the problematic application.",
      "Update the mobile operating system.",
      "Choose the correct least-invasive first step."
    ],
    "console": {
      "host": "mobile-st14",
      "boot": [
        "[SYS] Mobile device diagnostic bench online.",
        "[SYS] Connected device: handset in developer mode."
      ],
      "tasks": [
        { "id": "t1", "label": "Clear the app cache" },
        { "id": "t2", "label": "Reinstall the problematic app" },
        { "id": "t3", "label": "Update the mobile OS" },
        { "id": "t4", "label": "Choose the first troubleshooting step" }
      ],
      "configs": [
        { "id": "c1", "label": "Which step should be tried first for a single crashing app?", "options": ["Factory reset the device", "Clear the app cache, then force stop and restart", "Replace the device"], "correct": "Clear the app cache, then force stop and restart", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "app clear-cache com.example.mail", "out": "[MOB] Clearing cache for com.example.mail (212 MB).\n[OK] Cache cleared. App force-stopped.", "task": "t1" },
        { "cmd": "app reinstall com.example.mail", "out": "[MOB] Uninstalling com.example.mail...\n[MOB] Reinstalling latest version 4.2.1...\n[OK] App reinstalled successfully.", "task": "t2" },
        { "cmd": "system update --check\nsystem update --install", "out": "[MOB] OS update available: build 14.6.\n[MOB] Installing and rebooting...\n[OK] Operating system updated.", "task": "t3" },
        { "cmd": "device storage", "out": "[MOB] Internal storage: 118 GB / 128 GB used\n[MOB] Cache reclaimed: 1.4 GB free" }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "SOFTWARE TROUBLESHOOTING",
    "title": "Mobile App Security Remediation",
    "desc": "A device shows signs of a malicious sideloaded app: excessive permissions, high data usage, and pop-ups. Revoke risky permissions, remove the sideloaded app, and decide when a factory reset is warranted.",
    "objectives": [
      "Audit and revoke excessive app permissions.",
      "Remove the sideloaded application.",
      "Identify when a factory reset is appropriate.",
      "Record the remediation outcome."
    ],
    "console": {
      "host": "mobile-st15",
      "boot": [
        "[SYS] Mobile security remediation bench online.",
        "[SYS] Permission and package manager ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Revoke excessive permissions" },
        { "id": "t2", "label": "Remove the sideloaded app" },
        { "id": "t3", "label": "Decide when to factory reset" },
        { "id": "t4", "label": "Submit the remediation outcome" }
      ],
      "configs": [
        { "id": "c1", "label": "When is a factory reset the correct remediation for mobile malware?", "options": ["For every minor app glitch", "When infection persists after removing apps and revoking permissions", "Never, under any circumstances"], "correct": "When infection persists after removing apps and revoking permissions", "task": "t3" }
      ],
      "payload": {
        "label": "REMEDIATION OUTCOME",
        "placeholder": "type: document the actions taken and the result",
        "button": "Submit",
        "response": "[OK] Remediation outcome recorded to the device ticket.",
        "task": "t4"
      },
      "commands": [
        { "cmd": "perm revoke com.unknown.flashlite LOCATION SMS CONTACTS", "out": "[MOB] Revoking LOCATION, SMS, CONTACTS from com.unknown.flashlite.\n[OK] Excessive permissions revoked.", "task": "t1" },
        { "cmd": "pm uninstall com.unknown.flashlite", "out": "[MOB] Detected sideloaded package (unknown source).\n[MOB] Uninstalling com.unknown.flashlite...\n[OK] Sideloaded app removed.", "task": "t2" },
        { "cmd": "perm list com.unknown.flashlite", "out": "[MOB] Package not found.\n[MOB] No residual permissions remain." }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "OPERATIONAL PROCEDURES",
    "title": "Ticketing and Documentation",
    "desc": "A user reports a recurring printing issue. Create a service ticket with accurate categorization and severity, attach a knowledge base article, and document the resolution clearly.",
    "objectives": [
      "Create a ticket capturing the user and problem description.",
      "Set the appropriate severity and category.",
      "Attach a relevant knowledge base article.",
      "Record the resolution and close the ticket."
    ],
    "console": {
      "host": "itsm-op16",
      "boot": [
        "[SYS] IT service management console online.",
        "[SYS] Ticketing and knowledge base ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Create the service ticket" },
        { "id": "t2", "label": "Set severity and category" },
        { "id": "t3", "label": "Attach a knowledge base article" },
        { "id": "t4", "label": "Choose the correct severity" },
        { "id": "t5", "label": "Submit the resolution summary" }
      ],
      "configs": [
        { "id": "c1", "label": "A single user cannot print but has a workaround. What severity fits best?", "options": ["Critical / P1 (business down)", "Low to Medium / P3 (single user, workaround exists)", "No severity needed"], "correct": "Low to Medium / P3 (single user, workaround exists)", "task": "t4" }
      ],
      "payload": {
        "label": "RESOLUTION SUMMARY",
        "placeholder": "type: document the fix and steps taken to resolve",
        "button": "Submit & Close",
        "response": "[OK] Resolution summary saved; ticket closed.",
        "task": "t5"
      },
      "commands": [
        { "cmd": "ticket create --user jdoe --subject \"Printer error on PR-02\"", "out": "[ITSM] Ticket INC-10482 created.\n[ITSM] Requester: jdoe  Asset: PR-02\n[OK] Ticket opened.", "task": "t1" },
        { "cmd": "ticket set INC-10482 --category Printing --severity P3", "out": "[ITSM] Category set to Printing.\n[ITSM] Severity set to P3.\n[OK] Ticket attributes updated.", "task": "t2" },
        { "cmd": "ticket attach INC-10482 --kb KB-2041", "out": "[ITSM] Linking KB-2041 'Clearing stuck print jobs'.\n[OK] Knowledge base article attached.", "task": "t3" },
        { "cmd": "ticket show INC-10482", "out": "[ITSM] INC-10482  Status: In Progress\n[ITSM] Severity: P3  Category: Printing" }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "OPERATIONAL PROCEDURES",
    "title": "Change Management",
    "desc": "A firewall rule change is needed in production. Follow the change management process: submit a request with a rollback plan, test in a sandbox, obtain change-board approval, and schedule implementation.",
    "objectives": [
      "Submit a change request with scope and rollback plan.",
      "Validate the change in a sandbox environment.",
      "Obtain change advisory board approval.",
      "Identify the most important element of a change request."
    ],
    "console": {
      "host": "cm-op17",
      "boot": [
        "[SYS] Change management portal online.",
        "[SYS] Sandbox and CAB workflow ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Submit the change request with rollback plan" },
        { "id": "t2", "label": "Test the change in a sandbox" },
        { "id": "t3", "label": "Obtain change-board approval" },
        { "id": "t4", "label": "Choose the most critical request element" }
      ],
      "configs": [
        { "id": "c1", "label": "Which element must every change request include in case implementation fails?", "options": ["A marketing plan", "A documented rollback (back-out) plan", "A new asset tag"], "correct": "A documented rollback (back-out) plan", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "change submit --title \"Update edge firewall rule\" --rollback \"restore prior ruleset from backup\"", "out": "[CM] Change RFC-7731 submitted.\n[CM] Rollback plan attached.\n[OK] Request queued for review.", "task": "t1" },
        { "cmd": "change test RFC-7731 --env sandbox", "out": "[CM] Deploying rule to sandbox...\n[CM] Connectivity tests passed; no side effects.\n[OK] Sandbox validation complete.", "task": "t2" },
        { "cmd": "change approve RFC-7731 --board CAB", "out": "[CM] Submitting to Change Advisory Board.\n[CM] Approved with scheduled maintenance window.\n[OK] Change authorized.", "task": "t3" },
        { "cmd": "change status RFC-7731", "out": "[CM] RFC-7731  State: Approved\n[CM] Window: Sat 02:00-04:00" }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "OPERATIONAL PROCEDURES",
    "title": "Backup and Recovery",
    "desc": "A file server needs a resilient backup strategy. Configure full and incremental backups, apply the 3-2-1 rule, and verify a restore works to ensure backups are recoverable.",
    "objectives": [
      "Run a full backup of the data volume.",
      "Schedule incremental backups between fulls.",
      "Verify that a restore from backup succeeds.",
      "Identify the 3-2-1 backup rule."
    ],
    "console": {
      "host": "bk-op18",
      "boot": [
        "[SYS] Backup and recovery bench online.",
        "[SYS] Backup target media mounted."
      ],
      "tasks": [
        { "id": "t1", "label": "Run a full backup" },
        { "id": "t2", "label": "Schedule incremental backups" },
        { "id": "t3", "label": "Verify a test restore" },
        { "id": "t4", "label": "Choose the 3-2-1 strategy" }
      ],
      "configs": [
        { "id": "c1", "label": "Which option correctly describes the 3-2-1 backup rule?", "options": ["3 copies, 2 different media, 1 off-site", "3 backups per day, 2 servers, 1 admin", "3 drives in one server only"], "correct": "3 copies, 2 different media, 1 off-site", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "backup run --type full --source D:\\Shares --dest \\\\nas01\\backups", "out": "[BK] Full backup started for D:\\Shares.\n[BK] 482 GB written to NAS target.\n[OK] Full backup completed.", "task": "t1" },
        { "cmd": "backup schedule --type incremental --interval daily --time 23:00", "out": "[BK] Incremental backup scheduled nightly at 23:00.\n[OK] Schedule saved.", "task": "t2" },
        { "cmd": "backup verify-restore --set latest --to D:\\RestoreTest", "out": "[BK] Restoring sample set to D:\\RestoreTest...\n[BK] Checksums match source.\n[OK] Restore verified successfully.", "task": "t3" },
        { "cmd": "backup list", "out": "[BK] full-2026-06-28 482 GB\n[BK] incr-2026-06-27 6 GB" }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "OPERATIONAL PROCEDURES",
    "title": "Safety and Environmental Procedures",
    "desc": "Before servicing equipment in the workshop, follow proper safety and environmental procedures: use ESD protection, look up the safety data sheet for a chemical, confirm UPS coverage, and dispose of components correctly.",
    "objectives": [
      "Confirm ESD protection before handling components.",
      "Look up the safety data sheet for a cleaning chemical.",
      "Verify UPS battery coverage for critical equipment.",
      "Choose the correct disposal method for old batteries."
    ],
    "console": {
      "host": "safety-op19",
      "boot": [
        "[SYS] Safety and environmental console online.",
        "[SYS] Workshop compliance checklist ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Confirm ESD protection" },
        { "id": "t2", "label": "Look up the chemical safety data sheet" },
        { "id": "t3", "label": "Verify UPS coverage" },
        { "id": "t4", "label": "Choose the correct disposal method" }
      ],
      "configs": [
        { "id": "c1", "label": "How should used lithium-ion batteries be handled at end of life?", "options": ["Place them in the regular trash", "Take them to certified e-waste or hazardous-material recycling", "Burn them on-site"], "correct": "Take them to certified e-waste or hazardous-material recycling", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "check esd-strap", "out": "[SAFE] ESD wrist strap continuity: PASS\n[SAFE] Bench grounded to common point.\n[OK] Safe to handle static-sensitive parts.", "task": "t1" },
        { "cmd": "sds lookup isopropyl-cleaner", "out": "[SAFE] SDS: Isopropyl Alcohol 99%\n[SAFE] Hazards: Flammable. Use in ventilated area.\n[OK] Safety data sheet retrieved.", "task": "t2" },
        { "cmd": "ups status RACK-01", "out": "[SAFE] UPS RACK-01 online. Battery: 100%\n[SAFE] Estimated runtime: 22 min at load.\n[OK] Critical equipment protected.", "task": "t3" },
        { "cmd": "inventory toner-cartridges", "out": "[SAFE] 4 used toner cartridges staged for recycling." }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "OPERATIONAL PROCEDURES",
    "title": "Scripting and Remote Access",
    "desc": "You need to automate a maintenance task and connect to a remote server. Run a PowerShell script, map a network drive, and start a secure remote session using the appropriate protocol.",
    "objectives": [
      "Execute a PowerShell maintenance script.",
      "Map a network drive for the script's output.",
      "Start a remote session to the server.",
      "Choose the correct remote-access protocol."
    ],
    "console": {
      "host": "auto-op20",
      "boot": [
        "[SYS] Automation and remote access bench online.",
        "[SYS] PowerShell and remote clients ready."
      ],
      "tasks": [
        { "id": "t1", "label": "Run the PowerShell maintenance script" },
        { "id": "t2", "label": "Map a network drive" },
        { "id": "t3", "label": "Start a remote session" },
        { "id": "t4", "label": "Choose the remote-access protocol" }
      ],
      "configs": [
        { "id": "c1", "label": "Which protocol provides an encrypted graphical remote session to a Windows server?", "options": ["Telnet (port 23)", "RDP (port 3389)", "FTP (port 21)"], "correct": "RDP (port 3389)", "task": "t4" }
      ],
      "payload": null,
      "commands": [
        { "cmd": "powershell -ExecutionPolicy RemoteSigned -File .\\cleanup.ps1", "out": "[PS] Running cleanup.ps1...\n[PS] Cleared 3.2 GB of temp files and old logs.\n[OK] Maintenance script completed.", "task": "t1" },
        { "cmd": "net use Z: \\\\srv01\\reports /persistent:yes", "out": "[NET] Mapping Z: to \\\\srv01\\reports...\n[OK] The command completed successfully.", "task": "t2" },
        { "cmd": "mstsc /v:srv01:3389", "out": "[RDP] Initiating Remote Desktop session to srv01...\n[RDP] TLS secured. Authenticated as netadmin.\n[OK] Remote session established.", "task": "t3" },
        { "cmd": "ssh netadmin@nix-srv02", "out": "[SSH] Connecting to nix-srv02 on port 22...\n[SSH] Authenticated. Last login: Sat Jun 27." }
      ]
    }
  }
];
