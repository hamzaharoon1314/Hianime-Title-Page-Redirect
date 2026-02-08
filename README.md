# HiAnime Title Redirect (Tampermonkey Script)

Easily convert messy episode watch links into clean anime title pages on HiAnime.

This script automatically transforms `/watch/` episode links into their main anime title pages when browsing the **/user/continue-watching** section.

---

## ✨ Overview

- 🧹 Converts episode links to clean title pages  
- 🔁 Persistent ON/OFF toggle  
- 🖱 Supports normal clicks, Ctrl+click, and middle-click  
- 🌐 Works across HiAnime mirror domains  

No more jumping into individual episode pages—go straight to the main anime page with a single click.

---

## 🔧 Features

- ✅ Simple toggle button to enable or disable the script  
- ✅ Remembers your preference between sessions  
- ✅ Automatically cleans URLs like:

  ```
  /watch/series-name-episode-5?...  
  ```

  into:

  ```
  /series-name-12345
  ```

- ✅ Full mouse support:
  - Left-click → Open in same tab  
  - Ctrl+click → Open in new tab  
  - Middle-click → Open in new tab  

---

## 🚀 Installation

1. Install the **Tampermonkey** browser extension:  
   👉 https://www.tampermonkey.net/

2. Install the script directly from GitHub:  
   👉 **[Install HiAnime Title Redirect](https://github.com/hamzaharoon1314/hianime-title-page-redirect/raw/main/hianime-title-toggle.user.js)**

3. Open any HiAnime page containing:

   ```
   /user/continue-watching
   ```

4. Click the on-screen toggle button to activate the script.

5. Enjoy cleaner navigation—click any episode link and go straight to the main anime page!

---

## 📂 Example

### Before:

```
https://hianime.to/watch/attack-on-titan-episode-5?ref=continue
```

### After:

```
https://hianime.to/attack-on-titan
```

Simple, clean, and convenient.

---

## 🛠 Compatibility

Works with all major HiAnime mirrors and domains that include:

```
/user/continue-watching
```

---

## 📜 License

This project is released under the MIT License.
