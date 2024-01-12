# Getting started with Progressive Web Apps (PWAs)

This project serves as a demonstration of Progressive Web Apps (PWAs) features by enjoing some fun retro JavaScript games. PWAs offer a seamless, app-like experience across devices, offline functionality through service workers, and efficient caching strategies. Together, we'll explore:

- The lifecycle and limitations of service workers.
- Caching strategies and their respective business cases.
- Debugging PWAs using browser developer tools.

## Example 1: Which Webchef

An variation of 'Guess Who'  with familiar faces, this demonstration walks through the scaffolding for setting up a progressive web app. We will utilize this example to showcase the app-like experience across various devices. [Try it on Github Pages](https://njim.github.io/pwa/)

![Which Webchef](/whichwebchef/public/assets/screenshot.jpg 'Which Webchef')

## Example 2: PWArcade

This vintage arcade project showcases advanced caching strategies, with images and other assets being fetched asynchronously through background workers. Whenever a new game is loaded, a duplicate is stored, allowing for offline gameplay. It's an exhilarating experience, although unfortunately, playing the Chrome Dino game is not in the cards.

![PWArcade](/pwarcade/public/assets/screenshot.jpg 'PWArcade')

## Next Steps

This example is a small look at how to register a service worker and setup a basic caching strategy. This is useful for a site of static content but is not a great usecase for developing a webapp. If I wanted to build a more feature rich PWA then I may consider adding:

* Cache Strategies: Prefetching popular games and other assets to deliver content faster and in offline modes.
* Push Notifications: Using the service worker to send push notifications anytime a new game is added to the library.
* Background Sync: Storing top game scores and syncing this information with a central database when online.

## Credits

This project is all about digging into, fixing, and showing off cool stuff about progressive web apps. Instead of creating everything from scratch, I borrowed and showcased ideas from other awesome developers.

- JavaScript games by straker: [Bomberman](https://gist.github.com/straker/769fb461e066147ea16ac2cb9463beae), [Frogger](https://gist.github.com/straker/82a4368849cbd441b05bd6a044f2b2d3), [Missile Command](https://gist.github.com/straker/afc4e2a30b6df772a5f9f6ef01751d41), [Pong](https://gist.github.com/straker/81b59eecf70da93af396f963596dfdc5), [Snake](https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4), [Tetris](https://gist.github.com/straker/3c98304f8a6a9174efd8292800891ea1)
- Codepen by boldfacedesign [Brand retro text effect](https://codepen.io/boldfacedesign/pen/DpXjzY)
- Codepen by nxworld [Navigation shine effect](https://codepen.io/nxworld/pen/ZYNOBZ)
- Codepen by ruidovisual [Guess Who Game](https://codepen.io/ruidovisual/pen/KoRgGR#)
- Font are provided and hosted by Google Fonts
- Icons were designed by DALL·E 3 Generative AI

## Workshop

This project is part of a larger session on getting starting with PWAs. The presentation script and other assets can be found in the [workshop presenter's notes](./workshop/presentation.md) in GitHub.
