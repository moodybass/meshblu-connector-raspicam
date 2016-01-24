'use strict';
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var debug = require('debug')('meshblu-raspicam');
var RaspiCam = require("raspicam");
var base64Img = require('base64-img');
var _  = require("lodash");
var fs = require('fs');

// Static RaspiCam Options 
var photofile = "piout.jpg";


var MESSAGE_SCHEMA = {
  "type": 'object',
  "properties": {
    "snapshot": {
      "type": "boolean",
      "title": "Take JPEG picture using RaspiCam",
      "default": true
    },
    "send_as_raw": {
      "type": "boolean",
      "title": "Raw base64 (works with twitter)",
      "default": false
    },
    "photowidth": {
      "type": "string",
      "title": "Set Image Width",
      "default": "640"
    },
    "photoheight": {
      "type": "string",
      "title": "Set Image Height",
      "default": "480"
    },
    "photoquality": {
      "type": "string",
      "title": "Set JPEG Quality (0 to 100)",
      "default": "20"
    },
    "photosharpness": {
      "type": "string",
      "title": "Set image sharpness (-100 to 100)",
      "default": "0"
    },
    "photocontrast": {
      "type": "string",
      "title": "Set image contrast (-100 to 100)",
      "default": "0"
    },
     "photobrightness": {
      "type": "string",
      "title": "Set image brightness (0 to 100)",
      "default": "50"
    },
     "photosaturation": {
      "type": "string",
      "title": "Set image saturation (-100 to 100)",
      "default": "0"
    },
      "photoexposure": {
      "type": "string",
      "title": "Set exposure mode (see options in docs)",
      "default": "auto"
    },
	 "photoawb": {
      "type": "string",
      "title": "Set automatic white balance (AWB)",
      "default": "auto" 
    },
    "photoimxfx": {
      "type": "string",
      "title": "Set image effect (see options in docs)",
      "default": "none" 
    },
    "photometering": {
      "type": "string",
      "title": "Set metering mode (see options in docs)",
      "default": "average"
    },
    "photorotation": {
    "type": "string",
    "title": "Set image rotation (only use 0,90,180,270)",
    "default": "0"
    },
  }
};

var OPTIONS_SCHEMA = {
  type: 'object',
  properties: {
    firstExampleOption: {
      type: 'string',
      required: true
    }
  }
};

function Plugin(){
  var self = this;
  self.options = {};
  self.messageSchema = MESSAGE_SCHEMA;
  self.optionsSchema = OPTIONS_SCHEMA;
  return self;
}
util.inherits(Plugin, EventEmitter);


Plugin.prototype.onMessage = function(message){
  var self = this;
  var payload = message.payload;
  if(payload.snapshot){
    var opts = {
        quality: message.payload.photoquality,
        width: message.payload.photowidth,
        height: message.payload.photoheight,
        mode: "photo",
        output: photofile,
	    encoding: "jpg",
	    timeout: 1,
        sharpness: message.payload.photosharpness,
        contrast: message.payload.photocontrast,
        brightness: message.payload.photobrightness,
        saturation: message.payload.photosaturation,
        exposure: message.payload.photoexposure,
        imxfx: message.payload.photoimxfx,
     // colfx: message.payload.photocolfx, // seems to cause green images
        awb: message.payload.photoawb,
        metering: message.payload.photometering,
        rotation: message.payload.photorotation
    };  
// create raspicam object
var camera = new RaspiCam( opts );
// Take photo
var takephoto = camera.start( opts );

//Send it back to Octoblu
    base64Img.base64(photofile, function(err, data) {
        if(payload.send_as_raw == false){
         self.emit('message', { devices: ['*'], "payload": {"pictures": data} });
        }else if(payload.send_as_raw == true){   
               var data = fs.readFileSync(photofile, { encoding: 'base64' });
         self.emit('message', { "devices": ['*'], "payload": {"pictures": data}});
        }});
      }};

Plugin.prototype.onConfig = function(device){
  var self = this;
  self.setOptions(device.options||{});
};

Plugin.prototype.setOptions = function(options){
  var self = this;
  self.options = options;
};

module.exports = {
  messageSchema: MESSAGE_SCHEMA,
  optionsSchema: OPTIONS_SCHEMA,
  Plugin: Plugin
};

