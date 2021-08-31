### Notes: viewing Firefox command line options/switches

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
