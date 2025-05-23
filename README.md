# Hack Club CSS

[Hack Club](https://hackclub.com/)'s [theme](https://theme.hackclub.com) implemented as CSS.
- Use our [css-starter](https://github.com/hackclub/css-starter) for a blank but ready website template that already includes our theme CSS.
- View the [contribute](https://github.com/hackclub/contribute) repository for an example of our CSS theme [in action](https://contribute.hackclub.com/).

## Getting Started with Hack Club CSS

1. Create a new folder for your site
2. Add a `style.css` file inside your folder
3. Add an `index.html` page inside your folder
4. Link to the CSS files in the `<head>` tag of your HTML:
 ```html
 <link rel="stylesheet" href="https://css.hackclub.com/theme.css">
 <link rel="stylesheet" href="https://css.hackclub.com/fonts.css"> <!-- HQ-only. -->
 ```
5. View https://theme.hackclub.com/ for a visual representation of our theme
6. View https://github.com/hackclub/css#usage for the documentation of the tags in our theme
7. Run your static site locally with `python -m SimpleHTTPServer` and view it at `http://localhost:8000/`
8. Have fun and get creative making websites!

## Development

To run the site locally, follow the steps below:

1. Clone the repository:
```sh
git clone https://github.com/hackclub/css.git
```

2. Start up a server (or open the `index.html` file in your browser):

```sh
python -m SimpleHTTPServer #Python 2
python3 -m http.server #Python 3
```

And then visit http://0.0.0.0:8000 to see the site!

## Accessing The Stylesheets

Get the latest theme stylesheet: [`css.hackclub.com/theme.css`](https://css.hackclub.com/theme.css)

Get the latest minified theme stylesheet: [`css.hackclub.com/theme.min.css`](https://css.hackclub.com/theme.min.css)

(HQ-only) Get the latest fonts stylesheet: [`css.hackclub.com/fonts.css`](https://css.hackclub.com/fonts.css)

(HQ-only) Get the latest minified fonts stylesheet: [`css.hackclub.com/fonts.min.css`](https://css.hackclub.com/fonts.min.css)

### Archives

To access `theme.css` at commit ID `d0888dc` use [`css.hackclub.com/d0888dc/theme.css`](https://css.hackclub.com/d0888dc/theme.css).

Similarly, to access `fonts.min.css` at commit SHA `cbe01ca9a4de7bc7a5b1048d887287dfedba0a07` use [`css.hackclub.com/cbe01ca9a4de7bc7a5b1048d887287dfedba0a07/fonts.min.css`](https://css.hackclub.com/cbe01ca9a4de7bc7a5b1048d887287dfedba0a07/fonts.min.css).

This can be done for every commit in this repository.

## Usage

The stylesheet places light styling on the following tags: `<button />`, `<input />`, `<textarea />`, `<select />`, `<label />`, `<h1 />`, `<h2 />`, `<h3 />`, `<h4 />` , `<h5 />`, `<h6 />`, `<p />`, `<img />`, `<hr />`, `<a />`, `<pre />`, `<code />`, `<li />`, `<table />`, `<th />` & `<td />`.

More opinionated theming is provided by addition classes. CSS variables enable more refined styling by the developer.

### Classes

#### Cards

To create a card element use the `.card` class.

The following modifcations are available:

- `.sunken` a card without shadows and uses the `--sunken` colour
- `.interactive` a card that grows on hover, to indicate the ability to click it

#### Headings

Headings should be created using standard `<h1..>` tags.

The following modifcations are available (through classes):

- `.ultratitle` a very large title
- `.title` a moderatly large title
- `.subtitle` a smaller title
- `.headline` for use in large bodies of text, provides margins around the title
- `.subheadline` smaller version of `.headline`
- `.eyebrow` a gray, all-caps title for use as an alternative visually
- `.lead` has a font weight of `400`
- `.caption` is for image captions

#### Badges

These are small rounded objects to highlight key information.

The following variants are available:

- `.pill` this is the standard badge with a colour background
- `.outline-badge` a transparent badge

#### Buttons

A standard button can be created with the `<button />` element.

The following variants are available:

- `.lg` larger button
- `.outline` a transparent button
- `.cta` a button with a gradient background to provide more emphasis

#### Containers

These are boxes are varying length to hold content in. Create one with the `.container` class.

The widths available are: `wide`, `.container` (the standard without a modifier class), `.copy` & `.narrow`.

For containers of different widths use both the `.container` class and the width modifier class (e.g `.copy`).

### CSS Variables

The CSS vars made available are as follows:

#### Colours

```css
--darker: #121217;
--dark: #17171d;
--darkless: #252429;
--black: #1f2d3d;
--steel: #273444;
--slate: #3c4858;
--muted: #8492a6;
--smoke: #e0e6ed;
--snow: #f9fafc;
--white: #ffffff;
--red: #ec3750;
--orange: #ff8c37;
--yellow: #f1c40f;
--green: #33d6a6;
--cyan: #5bc0de;
--blue: #338eda;
--purple: #a633d6;
--text: var(--black);
--background: var(--white);
--elevated: var(--white);
--sheet: var(--snow);
--sunken: var(--smoke);
--border: var(--smoke);
--primary: #ec3750;
--secondary: #8492a6;
--accent: #5bc0de;
--twitter: #1da1f2;
--facebook: #3b5998;
--instagram: #e1306c;
```

#### Breakpoints

```css
--breakpoint-xs: 32em;
--breakpoint-s: 48em;
--breakpoint-m: 64em;
--breakpoint-l: 96em;
--breakpoint-xl: 128em;
```

#### Spacing

```css
--spacing-0: 0px;
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 16px;
--spacing-4: 32px;
--spacing-5: 64px;
--spacing-6: 128px;
--spacing-7: 256px;
--spacing-8: 512px;
```

#### Font Sizes

```css
--font-1: 12px;
--font-2: 16px;
--font-3: 20px;
--font-4: 24px;
--font-5: 32px;
--font-6: 48px;
--font-6: 64px;
--font-7: 96px;
--font-8: 128px;
--font-9: 160px;
--font-10: 192px;
```

#### Line Heights

```css
--line-height-limit: 0.875;
--line-height-title: 1;
--line-height-heading: 1.125;
--line-height-subheading: 1.25;
--line-height-caption: 1.375;
--line-height-body: 1.5;
```

#### Font Weights

```css
--font-weight-body: 400;
--font-weight-bold: 700;
--font-weight-heading: var(--font-weight-bold);
```

### Letter Spacing

```css
--letter-spacing-title: -0.009em;
--letter-spacing-headline: 0.009em;
```

#### Box Sizes (Widths)

```css
--size-wide-plus: 2048px;
--size-wide: 1536px;
--size-layout-plus: 1200px;
--size-layout: 1024px;
--size-copy-ultra: 980px;
--size-copy-plus: 768px;
--size-copy: 680px;
--size-narrow-plus: 600px;
--size-narrow: 512px;
```

### Border Radii

```css
--radii-small: 4px;
--radii-default: 8px;
--radii-extra: 12px;
--radii-ultra: 16px;
--radii-circle: 99999px;
```

#### Shadows

```css
--shadow-text: 0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125);
--shadow-small: 0 1px 2px rgba(0, 0, 0, 0.0625),
  0 2px 4px rgba(0, 0, 0, 0.0625);
--shadow-card: 0 4px 8px rgba(0, 0, 0, 0.125);
--shadow-elevated: 0 1px 2px rgba(0, 0, 0, 0.0625),
  0 8px 12px rgba(0, 0, 0, 0.125);
```
