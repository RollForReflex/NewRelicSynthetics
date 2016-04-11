"use strict"
let semver = require('semver');
let oauth = require('oath');
let httpClient = require('request');

let Options = require('./options');

const MIN_NODE_VERSION = "4.0.0";
const BASE_SYNTHETICS_URI = "https://synthetics.newrelic.com/api/v1/";

class Synthetics {
  constructor(){
    if(semver.lt(process.version, MIN_NODE_VERSION)){
      throw new Error("This package is not supported by any version of node lower than " + MIN_NODE_VERSION);
    }

    console.log(semver.gt(process.version, "4.0.0"));
    console.log("Hit that constructor");

    this.options = Options.mergeOptions(options);
  }


}

module.exports = new Synthetics();
