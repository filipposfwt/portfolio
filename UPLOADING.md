# Adding photos to the site — a guide for obal

You can add and update photos entirely from your web browser — no software to
install. Every time you save (“commit”) a change on GitHub, the website rebuilds
itself and goes live at **https://obal.me** in about 1–2 minutes.

---

## One-time setup

1. Create a free account at **https://github.com** (any username).
2. Send your username to Vangelis. He'll add you as a **collaborator** on the
   `portfolio` repository (GitHub → repo → *Settings → Collaborators → Add people*).
3. Accept the email invite. Done — you now have edit access.

---

## How the site is organised

All content lives in the **`content/`** folder, with one folder per section:

```
content/
├─ ceramics/        ← each piece is its own folder
├─ illustrations/   ← a wall of single images
└─ mixed-media/     ← each piece is its own folder
```

- **Ceramics** and **Mixed Media**: each *piece* is a folder with a short text
  file (`index.md`) that holds the title, plus its photos (`01.jpg`, `02.jpg`, …).
  On the site, the first photo is the thumbnail; clicking opens a slideshow of
  all the photos in that folder.
- **Illustrations**: just single images dropped into one folder. They show in
  order of their filename. They are **not** clickable — each image stands alone.

📸 **Photo tips**
- For **Ceramics**, shoot/export the photos **already on the solid colour
  background** (like the current ones) — the site shows them as-is.
- Keep files a reasonable size: resize the longest side to about **1600 px**
  (roughly under 1 MB each). Big phone photos still work but bloat the site.
- Use `.jpg` (or `.jpeg`). Name them `01.jpg`, `02.jpg`, `03.jpg`… — the numbers
  set the order, and `01` becomes the thumbnail.

---

## Add photos to an EXISTING ceramics / mixed-media piece

1. On GitHub, open `content/ceramics/` (or `content/mixed-media/`) and click the
   folder of the piece (e.g. `satisfaction`).
2. Click **Add file → Upload files**.
3. Drag your images in. Name them so they continue the sequence
   (if the folder already has `01`–`06`, add `07.jpg`, `08.jpg`…).
4. Scroll down, click **Commit changes**. Wait ~2 min — it's live.

*To replace/remove a photo:* click the file → the trash icon (delete), or upload
a new file with the same name to overwrite.

---

## Add a NEW ceramics or mixed-media piece

A piece needs its own folder with a tiny text file plus the photos.

1. Click **Add file → Create new file**.
2. In the name box, type the path — typing `/` creates folders. For example:
   ```
   content/ceramics/my-new-piece/index.md
   ```
   (use lowercase, dashes instead of spaces for the folder name).
3. Paste this into the file, editing the title:
   ```
   ---
   title: "MY NEW PIECE"
   weight: 80
   ---
   ```
   - `title` is what shows under the thumbnail (any spelling/caps you want).
   - `weight` controls order on the page — bigger number = further down.
4. Click **Commit changes**.
5. Now open that new folder, **Add file → Upload files**, drag the photos in
   (`01.jpg`, `02.jpg`, …), and **Commit changes**.

---

## Add images to Illustrations

1. Open `content/illustrations/`.
2. **Add file → Upload files**, drag the images in.
3. Filenames set the order (they sort like `00`, `01`, `02`…). To put one first,
   name it with a low/earlier value (e.g. `00.jpg`); to add at the end, use the
   next number up.
4. **Commit changes**.

---

## After you commit

- The site rebuilds automatically. You can watch progress on the repo's
  **Actions** tab (a green ✓ means it's live).
- Give it 1–2 minutes, then hard-refresh **https://obal.me**
  (Cmd/Ctrl + Shift + R) to see your changes.

If something looks off, don't worry — nothing is permanent; Vangelis can always
roll back. When in doubt, ask.
