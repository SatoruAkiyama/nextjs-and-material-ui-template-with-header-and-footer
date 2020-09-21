# Template - Next.js and Material-UI with Header and Footer

This is a Template using Next.js and Material-UI with Header and Footer.

Demo (https://nextjs-and-material-ui-template-with-header-and-footer.vercel.app/)

![demo image](https://i.imgur.com/rmAVYIR.png)

# How to use

Download the example [or clone the repo](https://github.com/SatoruAkiyama/nextjs-and-material-ui-template-with-header-and-footer):

```bash
git clone https://github.com/SatoruAkiyama/nextjs-and-material-ui-template-with-header-and-footer.git
cd nextjs-and-material-ui-template-with-header-and-footer
npm install
```

## Set your social media URL.

Open /data/socialMedia.js. By default , the URLs are Instagram, Facebook, GitHub and Homepage, so replace your default URL with your URL. You also can delete or add.

```bash
// socialMedai.js


// replace default with your URL

export const socialMedia = {
  instagram: "https://www.instagram.com/developer_satoru_akiyama/",
  facebook: "https://www.facebook.com/satoruakiyama1998",
  github: "https://github.com/SatoruAkiyama/blog-with-nextjs-and-contentful",
  homepage: "https://satoruakiyama.com",
  //if you want to add, you can do like following code
  // twitter: "https://twitter.com",
};
```

If you changed here, go to /components/Social.js, and edit the file. You can see details of Material-icon here.

```bash
// Social.js


// example. If you add Twitter , add following code

// line 8
import TwitterIcon from '@material-ui/icons/Twitter';

// line 32 (just add ‘twitter’)
const { instagram, facebook, github, homepage, twitter } = socialMedia;

// and paste following code under the line 98
<Grid
  item
  component={"a"}
  target="_blank"
  rel="noreferrer noopener"
  href={twitter}
>
  <TwitterIcon className={classes.snsIcon} />
</Grid>
```

Then you can see the Twitter icon in the footer and the about page.

## meta tag, title tag

Set "title" and "page description" In this template, the value of "head tag" is given to /components/layout/Layout.js as props. Open /pages/index.js and /pages/about.js. Change the page title and page description.

```bash
// index.js


// line 27　value of <title> tag
title="Page title"

// line 28　value of <meta name="description" content=""/> tag
description="Page description"
```

```bash
//about.js


// line 35　value of <title> tag
title="Page title"

// line 36　value of <meta name="description" content=""/> tag
description="Page title"
```

# Author

Satoru Akiyama(https://satoruakiyama.com)

# License

"Template - Next.js and Material-UI with Header and Footer" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
