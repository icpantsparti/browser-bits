### Notes: run a Firefox profile located in its own folder (or encrypted folder)

Firefox profiles are usually stored in your user home folder, look at `about:support` or `about:profiles` to see where.

It is possible to use either a Portable Firefox or a command line option to run firefox from another folder location.

---

#### (Optional) Make an encrypted file container

If you are not using system encryption (which VeraCrypt can do on Windows).

With [VeraCrypt](https://www.veracrypt.fr/en/Downloads.html) you "Create Volume" and "Create an encrypted **file container**".

* Put the container file in a sensible location where you will not accidentally delete it
* Give the container file an ".hc" extension (then clicking that file opens it with VeraCrypt)
* The tricky part is choosing the container size (perhaps 4GB ?) and NTFS on Windows or eg EXT4 on Linux<br>
you can always move the folders/files to a new larger container if you ever need to.

---

#### Windows Option 1 - Use a Portable Firefox (easier)

Use [portable Firefox](https://portableapps.com/apps/internet/firefox_portable)

* On the download site, below the download button, choose the installer for your language.
* When the installer runs choose where to install<br>
(ie to the drive/path of your folder or mounted encrypted container)<br>
default folder name is "FirefoxPortable" or change that to your own choice
* This gives you an entirely separate Firefox program in your specified location, with a profile and cache.
* It seems to cope when you change the folder location or name<br>
(so no issues if you mount an encrypted container with a different drive/path)
* **However**, you will have to remember to check for updates.

#### Windows Option 2 - Use the Firefox installed on your PC

* Copy the "Firefox" icon from the desktop into your folder or mounted encrypted container.
* Right click that "Firefox" file, select "Properties"<br>
clear the path shown for "Start in"<br>
change "Target" to something like: `"C:\Program Files\Mozilla Firefox\firefox.exe" -no-remote -profile MYFIREFOXPROFILENAME`
* When you click on that "Firefox" icon it will create the folder, and the browser cache is stored there too.<br>
(or it will use an already created/copied profile, but note below)
* **However**, if you rename the profile folder, or you copied/moved a profile<br>
you will have to edit the paths in the `extensions.json` file within that profile<br>
Eg you would have to change any "C:\\\\OLDPATH\\\\OLDFOLDER" to "K:\\\\NEWFOLDER" and any "C:/OLDPATH/OLDFOLDER" to "K:/NEWFOLDER".<br>
(so when using an encrypted container it is easier to mount with the same drive/path)

---

#### Linux Option 1 - Use a Firefox application from custom location

(rough example)

* [Download Firefox](https://www.mozilla.org/firefox/all/)
* Extract the `firefox-XX.X.X.tar.bz2` file to your folder of choice<br>
eg `/opt/firefox-XX.X.X` or `/usr/local/bin/firefox-XX.X.X`<br>
or somewhere under your home folder (may be `/home/USER/.local/usr/bin/firefox-XX.X.X` ??)<br>
or in an encrypted container `/media/veracrypt1/firefox-XX.X.X`
* To run Firefox, either:
    * run from the command line<br>
    eg `/PATH/firefox-XX.X.X/firefox --no-remote --profile /PATH/MYFIREFOXPROFILENAME`
    * run with a .desktop file<br>
    eg copy the `/usr/share/applications/firefox.desktop` to `/home/USER/.local/share/applications/firefox-XX.XX.X.desktop`<br>
    edit the file and set the `name=firefox-XX.X.X (profile: /PATH/MYFIREFOXPROFILENAME)`<br>
    and `exec=/PATH/firefox-XX.X.X/firefox --no-remote --profile /PATH/MYFIREFOXPROFILENAME`
* if the profile path ever changes you will have to edit the `extensions.json` file in the profile folder

#### Linux Option 2 - Use the Firefox installed

(rough example)

* To run Firefox, either:
    * run from the command line<br>
    eg `firefox --no-remote --profile /PATH/MYFIREFOXPROFILENAME`
    * run with a .desktop file<br>
    eg copy the `/usr/share/applications/firefox.desktop` to `/home/USER/.local/share/applications/firefox-XX.XX.X.desktop`<br>
    edit the file and set the `name=firefox (profile: /PATH/MYFIREFOXPROFILENAME)`<br>
    and `exec=firefox --no-remote --profile /PATH/MYFIREFOXPROFILENAME`
* if the profile path ever changes you will have to edit the `extensions.json` file in the profile folder
