# LMS-UI
# RDash rdash-angular
## Responsive, bloat free, bootstrap powered admin style dashboard!
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/rdash/rdash-angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

LMS-UI is based on AngularJS implementation of the RDash admin dashboard.

Release r1

This release shows the basic premise of the LMS dashboard. It includes a navigation bar for services including profiles, rates, sources, and services. The UI is
display only in this initial PoC and will list the contents of the database for profiles, rates, sources, and services. A sample web page is included for adding rates
to show how individual entries would be added to the database.

Note: The UI design is based on the premise of bulk loading ".csv" excel files from a Windows client computer (preferably inside a secure customer network) from
some initial feedback. As such the UI will, in a future release, include a windows pop-up file explorer dialog box to allow the user to select ".csv" files to file
transfer via $http over to a receiving rest api, where they will be subsequenlty loaded into the database by the backend servers.

Development

LMS-UI development environment is Windows 7. In this environment nodejs is required to be installed for server side modules and bower for client side modules.
The present UI architecture is bsaed on angularjs Single Page Applications (SPA). Each html snippet has associated exactly one angularjs controller to it. The "IDE"
used is brackets. Gulp is used to automatically build project changes that occur via brackets. To use the console debugger in the browser remember to enable it using
CTRL-SHIFT-J. Git is used to commit changes to the stash repository.

Note: The UI has only been used in development with Google Chrome and Windows 7.

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone https://github.com/rdash/rdash-angular.git`
2. Install the NodeJS dependencies: `npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp build task: `gulp build`.
5. Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:8888](http://localhost:8888).

Ensure your preferred web server points towards the `dist` directory.

### Development
Continue developing the dashboard further by editing the `src` directory. With the `gulp` command, any file changes made will automatically be compiled into the specific location within the `dist` directory.

#### Modules & Packages
By default, rdash-angular includes [`ui.bootstrap`](http://angular-ui.github.io/bootstrap/), [`ui.router`](https://github.com/angular-ui/ui-router) and [`ngCookies`](https://docs.angularjs.org/api/ngCookies). 

If you'd like to include any additional modules/packages not included with rdash-angular, add them to your `bower.json` file and then update the `src/index.html` file, to include them in the minified distribution output.

## Credits
* [Elliot Hesp](https://github.com/Ehesp)
* [Leonel Samayoa](https://github.com/lsamayoa)
* [Mathew Goldsborough](https://github.com/mgoldsborough)
* [Ricardo Pascua Jr](https://github.com/rdpascua)
