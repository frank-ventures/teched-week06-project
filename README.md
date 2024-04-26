# Week Six Project

## Project - Recreate the Cookie Clicker app in React!

**Link to project:**

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

### User Stories

- As a user, I want to be able to click the cookie and increment the counter
- As a user, I want to see the counter automatically increment using an interval timer
- As a user, I want to purchase items I can afford in the shop and increase the number of cookies every time the interval passes

## The Outcome!

### Features!

-

### What went well

- To do

**Planning**

- To do

**Functionality**

- To do

**User Interface and Design**

- To do

### Sticky points and Difficulties

**You have paused the interval, congratulations!**

- The first small bug I encountered was to do with a user buying upgrades.

Bying an upgrade increases the 'Harriots Per Second' the user receives.

However, the 'useEffect' which holds the interval depends on the harriotsPerSecond variable and therefore the interval gets reset everytime harriotsPerSecond changes.

This means that if a user rapidly clicked an upgrade button, the 'Total Harriots' count would stall.

I thought that a fix would be to add some code before the interval is set:

`setHarriotsNumber((currentHarriots) => currentHarriots + harriotsPerSecond);`

However this just introduces a new bug where a user can rapidly click an update button and get cookies in a faster way! Game breaking!

**Difficulty 2**

- To do

### Future improvements

- To do

### Resources

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

Sound Effects - Beautiful Ainsley Harriott!
