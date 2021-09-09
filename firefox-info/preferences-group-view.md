### Notes: view a group of preferences in Firefox about:config

* ###### | 2021.09.09 ([first 2021.04.16](https://github.com/icpantsparti/firefox-user.js-tool/issues/3)) | https://github.com/icpantsparti/browser-bits/blob/main/firefox-info/preferences-group-view.md | License (MIT): https://raw.githubusercontent.com/icpantsparti/browser-bits/main/LICENSE | Disclaimer: Use with care at your own risk, and verify any results |

Viewing groups of preferences is useful when reviewing, troubleshooting, or for toggles.

In newer versions of Firefox, bookmarks of the style `about:config?filter=...` no longer populate the search box,  
they just open `about:config` now.  However, we can style a `about:config?filter=...` link/bookmark so that you 
can copy/paste it into the `about:config` search box...

---

#### Create about:config link/bookmark

Form the link in this style (and optionally bookmark it):

````
about:config?filter=/^\*$|^(privacy\.resistFingerprinting|privacy\.firstparty\.isolate)(;|$)|^$/i
````

---

#### (Optional) Create the link from a list of preferences

Optionally, paste your list of preferences into [Box 4 of userjs-tool.html](https://icpantsparti.github.io/firefox-user.js-tool/userjs-tool.html?box=a), then click the `[To Group]` button to help create the link.

Note: userjs-tool.html is standard HTML/JavaScript that runs client side, there is no uploading or external dependency/connection other than fetching text files (eg arkenfox user.js from GitHub) initiated by user action (or by specifying url parameters).  It does not directly edit (or read) about:config or user.js, and web browser security ensures that the user controls the load/save of local files.

---

#### Using the link/bookmark

Simply open the `about:config` page and paste the link into the search box

Method 1 (copy, open, paste):

* **copy** the link<br>
    eg: right click on the link/bookmark and choose Copy<br>
    (tip: press and hold the right mouse button release on Copy)

* **open** `about:config` page<br>
    eg left click on the link/bookmark, or paste the link into the URL box 

* **paste** the link into the `about:config` search box<br>
    (tip: press and hold the right mouse button release on Paste)

Method 2 (open, copy, paste):

* **open** `about:config` page<br>
    eg left click on the link/bookmark

* **copy** the link<br>
    eg right click in the URL box and Copy the link<br>
    (tip: press and hold the right mouse button release on Copy)

* **paste** the link into the `about:config` search box<br>
    (tip: press and hold the right mouse button release on Paste)

---

#### Examples

These links generate groups of preferences (the text files specified are fetched):

* [prefs from privacytools.io/browsers/](https://icpantsparti.github.io/firefox-user.js-tool/userjs-tool.html?action=togroup&load4=%68ttps://privacytools.io/browsers/)  (fetches html text from privacytools.io/browsers/, the info on that web page is due an update sometime)

* [prefs from arkenfox troubleshooter.js](https://icpantsparti.github.io/firefox-user.js-tool/userjs-tool.html?action=togroup&load4=%68ttps://raw.githubusercontent.com/arkenfox/user.js/master/scratchpad-scripts/troubleshooter.js)  (fetches arkenfox troubleshooter.js file from GitHub)

* [prefs from arkenfox user.js](https://icpantsparti.github.io/firefox-user.js-tool/userjs-tool.html?at&groups=true)  (fetches arkenfox user.js file from GitHub)

---
