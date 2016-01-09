<<<<<<< HEAD
## meshblu-raspicam

[![Build Status](https://travis-ci.org/octoblu/meshblu-raspicam.svg?branch=master)](https://travis-ci.org/octoblu/meshblu-raspicam)
[![Code Climate](https://codeclimate.com/github/octoblu/meshblu-raspicam/badges/gpa.svg)](https://codeclimate.com/github/octoblu/meshblu-raspicam)
[![Test Coverage](https://codeclimate.com/github/octoblu/meshblu-raspicam/badges/coverage.svg)](https://codeclimate.com/github/octoblu/meshblu-raspicam)
[![npm version](https://badge.fury.io/js/meshblu-raspicam.svg)](http://badge.fury.io/js/meshblu-raspicam)
[![Gitter](https://badges.gitter.im/octoblu/help.svg)](https://gitter.im/octoblu/help)

A Meshblu connector for use in Octoblu or with other services.

### meshblu-raspicam
Meshblu Connector for the Raspberry Pi Camera

This is a Meshblu Connector for the Raspberry Pi Camera, it uses node-raspicam (https://github.com/troyth/node-raspicam) which is 
a node wrapper for raspistill - the default software for taking images on the RPi Camera.

For more information about Octoblu visit http://www.octoblu.com and connect all the things!

meshblu-raspicam sends a JPG image or a Base64 encoded message (for use with Twitter) to your Octoblu flow!
This connector is still under testing so expect bugs.

Whilst node-raspicam outputs all the things, this meshblu connector only outputs a single JPG image at the moment, but can be 
easily modified to output all the image formats and video. The connector is a script you need to run on your RPi, it is not a gateblu pluggin (at the moment!).

## Pre-Reqs:
1. Raspberry Pi, Raspberry Pi Camera ;-)
2. Configured Raspberry Pi for Octoblu - the simplest thing to do is configure your RPi as a Gateblu (https://gateblu.readme.io/docs/raspberry-pi)

## Usage:
1. npm install meshblu-raspicam
2. Create a Generic Device, grab the UUID and Token and add to meshblu.json
3. From the meshblu-raspicam directory, do: npm start
4. meshblu-raspicam will then connect to Octoblu.
5. Create your flow, add in your new connector
6. Take photos!

## Options
The vast majority of the options provided with node-raspicam are included.  You can configure these from within your flow.  
There are lots of options and image effects you can apply to your image.  
For a break down of the options, this document is useful: https://www.raspberrypi.org/wp-content/uploads/2013/07/RaspiCam-Documentation.pdf

# Notes
Based in part on https://github.com/octoblu/meshblu-cam by @virgilvox
Uses node-raspicam https://github.com/troyth/node-raspicam

# Auto generated instructions below

### Setup Instructions

### Travis

1. `gem install travis`
1. `travis login`

#### Travis (S3)

For use if you need to push your browserified version

1. `travis encrypt [S3_ACCESS_KEY_SECRET]`
1. add the generated key to the .travis.yml file under `secret_access_key` in the s3 deploy section.
1. also add the s3 `access_key_id` to the same section

End result should look like this:

```yml
deploy:
  - provider: s3
    access_key_id: [S3_ACCESS_KEY]
    secret_access_key:
      secure: [S3_ACCESS_KEY_SECRET]
    bucket: [UPLOAD_BUCKET] # octoblu-cdn
    region: us-west-2
    skip_cleanup: true
    detect_encoding: true
    local-dir: deploy
    upload-dir: [UPLOAD_FOLDER] # js
    on:
      tags: true
      all_branches: true
      node: '0.10'
```

#### Travis (NPM Deploy)[http://docs.travis-ci.com/user/deployment/npm/]

1. `travis encrypt [NPM_ACCESS_KEY]` - this key is found in `~/.npmrc`
1. add the generated key to the .travis.yml file under `api_key` in the npm deploy section.
1. also add the npm `email` to the same section

End result should look like this:

```yml
deploy:
  - provider: npm
    skip_cleanup: true
    clean_up: false
    email: [NPM_EMAIL]
    api_key:
      secure: [NPM_ACCESS_KEY]
    on:
      tags: true
      all_branches: true
      node: '0.11'
```

### Usage

#### Gateblu Installation

Use (gateblu)[https://gateblu.octoblu.com/] to run this as a device.

#### Manual Installation

1. `npm install meshblu-util -g`
1. `npm install meshblu-raspicam` or `git clone [GIT_URL]`
1. go into connector folder
1. `meshblu-util register -t device:meshblu-raspicam > meshblu.json`
1. `meshblu-util claim`
1. `npm start` or to start with debug `DEBUG='meshblu-raspicam*' npm start`


### Platform Dependencies

Edit the package.json to change the platformDependencies. This will show up when installing the connector in Octoblu and Gateblu.




>>>>>>> 7521555bf46f4af1c12ff19520968da17fa5ebf4
