### Notes: viewing Firefox command line options/switches

````
// Name         : command-line-options.md
// Project      : https://github.com/icpantsparti/browser-bits
// Version      : 2021.08.31
// File/Update  : https://github.com/icpantsparti/browser-bits/blob/main/firefox-info/command-line-options.md
// License (MIT): https://raw.githubusercontent.com/icpantsparti/browser-bits/main/LICENSE
// Disclaimer   : Use with care at your own risk, and verify any results
````

#### Windows

From command prompt (cmd.exe), for some reason it does not show unless piped or redirected:

* Output by page

    ```
    "C:\Program Files\Mozilla Firefox\firefox.exe" -h | more
    ```

    (press 'Enter' key to read the next page)

* Output all

    ```
    "C:\Program Files\Mozilla Firefox\firefox.exe" -h | findstr /N /I /R ".*"
    ```

    (findstr: /N show line numbers, /I ignore case, /R regex, ".*" search term)

* Output to a file, then output the file

    ```
    "C:\Program Files\Mozilla Firefox\firefox.exe" -h >> firefox-help.txt
    type firefox-help.txt
    ```

#### Linux

From a terminal command line:

```
firefox -h
```
