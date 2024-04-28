# Week Six Project

## Project - Recreate the Cookie Clicker app in React!

**Link to project:** https://ainsley-clicksiott-ready-steady-click.vercel.app/

This week we built knowledge with React, and were tasked to recreate our original [Cookie Clicker Clone](https://frank-ventures.github.io/TechEd-WeekTwo-Project/) in the framework.

I kept track of my ideas, planning and progress here: [Planning](https://frankjs.notion.site/Day-Twenty-Eight-Project-Planning-React-Cookie-Clicker-b0f7bd0ff1aa4491b50086d9286f6428?pvs=4)

### Requirements & Deliverables

- Create state variables to store the current number of cookies and the cookiesPerSecond value.
- Set up a timer to increment the number of cookies by the cookiesPerSecond value. Be sure to handle clearing the timer.
- Set up an array of objects containing the items available for purchase in the store, their cost, and their increment increase value. Map through these and create buttons for each.
- Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

**Stretch Goals**

- Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes.
- Excellent UI styling.

**Optional Goals**

- Make Ainsley Harriots head spin like a record on a turntable.

### User Stories

- As a user, I want to be able to click the cookie and increment the counter
- As a user, I want to see the counter automatically increment using an interval timer
- As a user, I want to purchase items I can afford in the shop and increase the number of cookies every time the interval passes

## The Outcome!

### Features!

- Optional background music.
- On-theme artwork and sound effects.
- User progress is saved and retrieved between page loads.
- A selection of upgrades.
- A cosmetic upgrade of Extra Ainsleys.

### What went well

**Planning**

- Getting multiple ideas down allowed me to hone in on the apps theme.
- Using Notion to keep track of my tasks really helped, especially between sessions.
- Using figma to draw up a 'tree' helped with visualising splitting the app into components, and also the relationship between data flow.

**Functionality**

- I'm really pleased with how the components take care of a lot of the repeatability, especially the display of 'upgrade buttons', and mapping through the 'extra Ainsleys' array.
- It was fairly simple to include a 'new game display' before the user gets to the main app, and also the conditional to only show the upgrades once they've started play.
- I found it easier to code a part of the app within the main App.jsx, and only after it was working, move it into a separate component. This worked really well for creating the 'upgrade-details' section.
- I'm very pleased with the 'increaseHPS' function which acts as a central function for handling upgrades being purchased. It takes the parameters of any upgrade from the upgrades object and works out if a user can afford it. Nice.

**User Interface and Design**

- I'm **very** pleased with the theme of the app, and the UI in general.
- Including the upgrades within a scrollable section on screen was a fun feature to implement, and was only possible thanks to previous projects.

I made use of various tools so that I could include rich media within my project including:

- [Flaticon](https://www.flaticon.com).
- YouTube audio converters
- [Clideo](https://clideo.com/cut-audio) to cut downn MP3s.
- [Audacity](https://www.audacityteam.org/) to edit mp3 volumes.

### Sticky points and Difficulties

**You have paused the interval, congratulations!**

- The first small bug I encountered was to do with a user buying upgrades.

Buying an upgrade increases the 'Harriots Per Second' the user receives.

However, the 'useEffect' which holds the interval depends on the harriotsPerSecond variable and therefore the interval gets reset everytime harriotsPerSecond changes.

This means that if a user rapidly clicked an upgrade button, the 'Total Harriots' count would stall.

I thought that a fix would be to add some code before the interval is set:

`setHarriotsNumber((currentHarriots) => currentHarriots + harriotsPerSecond);`

However this just introduces a new bug where a user can rapidly click an update button and get cookies in a faster way! Game breaking!

A class mate figured out a solution which makes use of Reacts useRef, so this would be good to implement in future

**Local Storage**

- I think I overcomplicated the handling of user stats in the local storage.

My code just has a bit too much 'setSomethingState' all over the place, and I would do well to try to refactor some update code into a central function.

While I did eventually get my code working to save a users progress, parts felt "hacky" and not as clean or clear as I'd like them to be!

**Keep scrolling, scrolling, scrolling**

- I wanted to make smaller versions of the main clicker scroll across the screen. I had to settle for the current version, which actually works well.

There's an "Extra Ainsley" 'upgrade' which makes a smaller version of Ainsley appear in the background, and scrolls him as a 'marquee' from right to left.

I played around with a few different versions of this, and spent a good chunk of fiddling with the CSS to get a decent working version.

The current implementation isn't 100% what I set out to achieve, but, actually works quite well across different screen sizes.

The inclusion of an 'overlay' really tidied the effect up.

### Future improvements

- Would like to fix the bug which pauses the interval with some 'useRef' usage.
- Would like to write in some calculations so that the cost of upgrades increases with each purchase.
- More game progression for a user to experience, such as cosmetics, or higher earning upgrades, or achievements!

### Resources

Figma for planning - [My board](https://www.figma.com/file/bHTrqGcXTpRfj3uvtULefv/week-06-react-clicker?type=whiteboard&node-id=0%3A1&t=fSpAvSpIglDEhxUr-1)

Image Background Remover - https://www.remove.bg/

Icons - https://www.flaticon.com

- Pepper: https://www.flaticon.com/free-icon/pepper_684752

- Tomato: https://www.flaticon.com/free-icon/food_11696427

Tool to cut MP3s - https://clideo.com/cut-audio

Slide from left animations - https://stackoverflow.com/questions/6805482/css3-transition-animation-on-load

Put your image/audio assets in your public folder for deployment - https://stackoverflow.com/questions/74912353/i-just-deployed-my-vite-react-site-but-my-icons-images-arent-deployed

Create a 'scroll effect' (for the extra Ainsleys to scroll across the page) - https://stackoverflow.com/questions/45847392/pure-css-continuous-horizontal-text-scroll-without-break
and https://blog.hubspot.com/website/scrolling-text-css

Overlay for the scrolling Ainsleys - https://www.w3schools.com/howto/howto_css_overlay.asp

"Robot Duck" for quickly checking syntax, and keeping my sanity when working through multiple layers of a functionality. - [Good Ol' P.T.](https://chat.openai.com/)

Sound Effects - Beautiful Ainsley Harriott!
