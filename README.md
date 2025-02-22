# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![Mobile](/public/images/Screenshot_Mobile.jpg)
![Desktop](/public/images/Screenshot_Desktop.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Typescript
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

### What I learned

When I was scaling the company logos down for mobile screens, I ran into the issue that the images seemed to longer be left-aligned, i.e. they seemed to have some margin or padding on the left that I couldn't figure out how to get rid of. I learned that this happened because scaling always happens from the center, so the image will shift visually. I learned to prevent this by applying the CSS transform-origin property (in my case, transform-origin: left):

```js
<img
  src={listing.logo}
  alt="Company logo"
  className="logo origin-left translate-y-[-50%] scale-[0.6] md:relative md:-translate-y-0 md:scale-100"
/>
```

I also initially rendered the role, level, languages, and tools separately because I didn't realize I could map over all of them at once by putting them in an array together:

```jsx
{
  ;[listing.role, listing.level, ...listing.languages, ...listing.tools].map(
    (skill, index) => (
      <button
        key={index}
        className="skill transition-colors hover:bg-primary hover:text-white"
        onClick={() => addFilter(skill)}
        aria-label={`Add ${skill} to filters`}
      >
        {skill}
      </button>
    ),
  )
}
```

Lastly, I learned how to dynamically change the padding-top of the main content so that it wouldn't overlap with the background image at the top of the page. Instead of assigning fixed pixel values, I learned to calculate it based on the viewport:

```js
  <main className="m-auto flex min-h-[92vh] w-[85vw] max-w-[1000px] justify-center pt-[calc(100vh/3)] md:pt-[calc(100vh/6)] lg:pt-[calc(100vh/4)]">
```

### Continued development

In future projects, I would like to dive deeper into CSS and familiarize myself with more advanced techniques. I am also thinking I should probably learn Sass. At the moment, I work with Tailwind but I think it would be good to be able to use a preprocessor.

## Author

- Frontend Mentor - [@Jenny-Eikens](https://www.frontendmentor.io/profile/Jenny-Eikens)
- GitHub - [Jenny-Eikens](https://github.com/Jenny-Eikens)
