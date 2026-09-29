# 🛡️ ClickFix Guard

**ClickFix Guard** is a Chrome browser extension designed to detect and warn users about suspicious commands associated with **ClickFix-style social engineering attacks**.

Instead of allowing users to unknowingly copy and execute potentially dangerous commands, ClickFix Guard analyzes page content and displays a warning when suspicious patterns are detected.

##  Why ClickFix Guard?

ClickFix-style attacks use social engineering to convince users to copy and paste commands into:

- Windows PowerShell
- Command Prompt
- Linux Terminal
- macOS Terminal

These commands may download or execute malicious content.

**ClickFix Guard provides an additional warning layer before the user proceeds.**


##  Features

-  **Suspicious Command Detection**
  - Detects potentially dangerous command patterns.

-  **High-Risk Warning**
  - Displays a visible warning when suspicious content is detected.

-  **Pattern Matching**
  - Shows the pattern that triggered the detection.

-  **Browser-Based Protection**
  - Runs as a Chrome browser extension.

-  **Lightweight**
  - Designed to provide detection without requiring a separate security application.

-  **ClickFix-Focused Detection**
  - Focuses on command-paste techniques commonly associated with ClickFix-style attacks.



## ⚙️ How It Works
text
        User visits a webpage
                ↓
        ClickFix Guard scans
          page content
                ↓
       Suspicious pattern?
          ↙           ↘
        YES             NO
         ↓               ↓
  High-Risk Warning    Normal page
         ↓
  Show matched pattern
         ↓
   User decides what
       to do next
