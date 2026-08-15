# Developer + Photography Portfolio

A fast, dependency-free portfolio designed for GitHub Pages. It includes a developer work section, a dedicated photography page, subtle motion, keyboard-friendly photo previews, and editable social links.

## Make it yours

1. Open `site-data.js` and update the `profile`, `projects`, and `photos` lists.
2. Put your images in `photos/`, then set each photo's `image` value to a matching path such as `photos/chicago-dawn.jpg`.
3. Replace `public/og.png` with a social-sharing image bearing your name when you are ready.

## Private contact form

The contact box is ready but needs your Formspree form ID before it can deliver mail. Create a free form with your Gmail as the recipient, then paste only its opaque ID into `formspreeFormId` in `site-data.js`. Your Gmail address is never published in the site source. [Formspree's HTML-form guide](https://help.formspree.io/articles/building-your-form/building-an-html-form/) covers the one-time setup.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. In the repository's **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push to `main`. The included workflow publishes the site automatically.

Because this is a static site, GitHub Pages is a good long-term home: simple, free, and no server maintenance required.
