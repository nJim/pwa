Issue: Need to run from a web server as the registration fails with file:// protocal
https://stackoverflow.com/questions/44564888/service-worker-with-file-origin-doesnt-work

Plan to use simple NodeJS server
node server.js

Step 2: Initialize a new Node.js project
Run the following command to create a package.json file:

bash
Copy code
npm init -y
Step 3: Install Express
Run the following command to install Express:

bash
Copy code
npm install express --save
Step 4: Create a public folder
Inside your project folder, create a folder named public. This is where you'll place your HTML, CSS, and service worker files.


Credits:
Text effect: https://codepen.io/boldfacedesign/pen/DpXjzY
Games: https://gist.github.com/straker/81b59eecf70da93af396f963596dfdc5


Todo: cache strategies
https://developer.chrome.com/docs/workbox/caching-strategies-overview
