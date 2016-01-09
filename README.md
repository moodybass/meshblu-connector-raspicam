# meshblu-raspicam
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


