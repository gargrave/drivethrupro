# DriveThru PRO

## Requirements 

1. Create a visual menu where the drive-thru employee can select menu items to build the order and then send the order to the cooks. 
2. Handle a case where someone has decided to change their order once they get to the window. 
3. Handle a case where someone has decided to cancel an order once they get to the window. 
4. Have a way to view current open orders and then close them when they're handed to our happy customers. 
5. Alert the manager when the total number of open orders goes above 4. 

## Running It

- Do a `git clone` on this repo
- Run `npm install` or `yarn install`
- Run the dev server with `npm run dev` or `yarn dev`
- Run tests in watch mode with `npm run test` or `yarn test`
- To build for deployment, run `npm run build` or `yarn build`
- You can also try a pre-deployed on Netlify version [here](https://drivethrupro.netlify.com/).

## Tech Stuff

- The seed project was built from [Create React App](https://github.com/facebookincubator/create-react-app) and then ejected immediately.
- I did use Redux for this project, which is obviously overkill for such a small app, but I felt that it was important to include it to show the "whole package," so to speak.
- I also wired up Redux-Thunk and wrote all of the action creators as async actions, even though the app does not actually make any async requests to APIs. But in a real app, at some point, it would certainly make async requests, so I figured I would have it ready for future development! I guess when we expand to DriveThru PRO 2.0, we will already have the groundwork for async actions.
- Testing is done via [Jest](https://github.com/facebook/jest) + [Enzyme](https://github.com/airbnb/enzyme).
- I used [Milligram](https://github.com/milligram/milligram) as the baseline CSS, and extended from there. CSS is written and included individually for each component--this is the way CRA sets it up by default, and I felt like it was a good convention to stick with. (If you see random purples anywhere, that is a remnant of Milligram's obsessive use of purple. I got rid of most of it, but it still lingers in a few places.)
- Linting/formatting is done via ESLint with [StandardJS](https://standardjs.com/) settings. FWIW, I am not an anti-semi-colon zealot, and I am fine with any linting settings. This is just the one the one I happened to choose here. I feel obliged to mention that, because I know semi-colons in JS can be a touchy subject. :)

## Some Notes

- File structure is domain-based for the most part, so if you are looking for a component on the "Order Edit" page, you will probably find it in `src/components/Orders/Edit`. The Redux-connected "containers" generally have "Page" in the title (e.g. `OrderEditPage.jsx`), and everything else is a functional/stateless component.
- Given the nature of the app, I put the strongest focus on making a good tablet/desktop experience, rather than mobile. It is fully responsive and _mostly_ nice on mobile--the one exception I can think of right away is that the table showing open orders doesn't quite fit on mobile. I would probably just need to replace it with something else altogether to make it work better (e.g. just use a list of Cards displaying order details), but again, I just didn't have time to make everything _perfect_.
- Test coverage is fairly strong, albeit not 100%. I tried to break things up into small, easily testable components as much as possible, and only connected the very top-level containers/pages to Redux, so that certainly helps make testing more digestible.
- There are a couple places where I have some duplicated CSS that I wanted to pull into a separate component, but I just didn't have time to get it finished.
