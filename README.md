# AngularJS + Flickr

A simple application in AngularJS to fletch images from Flickr.

Click <a href="http://www.malagaenblancoynegro.com/AgileDevelopment_flickr/index.html">here</a> to view online

##The folder structure
```
  /app
      /controllers      
      /directives
      /services
      /partials
      /views
  	  /content
  	  	/css
  	  	/images
  	  	/lib	    
```

## Dependencies
- AngularJS
- Bootstrap
- JQuery

## Usage
### Install global
```
$ npm install -g gulp
$ npm install -g bower
```

### Install local
```
$ bower install
$ npm install

```
### Configuration
```
Gulpfile.js -> Automated tasks
Packege.json -> Dependencies
bower.json -> Module Dependencies
.jshintrc -> Configuration

```

Gulpfile.js tasks
- When there are changes in HTML then browser it reload automatic
- Look for errors in js scripts and show its
- Developer server config
- Include libs installed by Bower
- Minimize CSS files and non used files
- Clean JS files


### Unit Test with karma
```

# Install Karma:
$ [sudo] npm install karma --save-dev

# Install plugins that your project needs:
$ [sudo] npm install karma-jasmine karma-chrome-launcher --save-dev

$ [sudo] npm install -g karma-cli

# Configure karma conf file:
$ karma init karma.conf.js
$ sudo npm install --save-dev angular-mocks

$ gulp unitTest

```
### Launch mode
```
Development -> $ gulp
Production -> $ gulp production

http://localhost:8080/
```


