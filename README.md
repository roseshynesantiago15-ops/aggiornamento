# Aggiornamento

A Netflix-inspired website for the Sine-Teolohiya student film project about Vatican II and the Modern Church. It includes the movie cover, a full-size poster viewer, cast credits, and six film reviews with APA 7 references.

## Open on Windows

Right-click the ZIP, select **Extract All**, then open the extracted `aggiornamento` folder. Double-click `index.html` to preview the website in your browser.

## Edit the film synopsis, reviews, and credits

Open `index.html` in Notepad or VS Code. Search for `film-copy` to find the synopsis, `Film critique` to find the reviews, or `class="cast"` to edit the cast names. Save with **Ctrl + S** and refresh the page.

## Upload to GitHub

1. Create a new public repository named `aggiornamento`. The source folder includes this README.
2. Use **uploading an existing file** on the empty repository page or **Add file → Upload files**.
3. Open the folder containing `index.html`. Drag everything inside it onto the upload page, including the `assets` folder, then click **Commit changes**.
4. Check that `index.html` and `vercel.json` appear at the repository root alongside `assets`.

## Deploy on Vercel

1. In Vercel, choose **Create New → Project** or **Import Project**, then import the `aggiornamento` repository.
2. Use **Other** as the Application Preset and `./` as the Root Directory. The supplied `vercel.json` serves the static files directly.
3. Click **Deploy**. Open the production `.vercel.app` URL and check the poster viewer, navigation, and reviews.
