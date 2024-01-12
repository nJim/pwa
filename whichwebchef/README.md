# Which Webchef: Setup and Initialization

Running a Progressive Web App (PWA) through the file protocol (opening HTML files directly from your local file system without a web server) can lead to certain issues. PWAs often rely on features that are available when served over HTTP or HTTPS, and accessing them through the file protocol may not provide the necessary environment. We are using a Express as an NPM package to serve the files for this application.

```bash
# Clone this repository and download dependencies
git clone https://github.com/nJim/pwa
cd whichwebchef
npm install
# Start Express to serve the application
npm start
```
