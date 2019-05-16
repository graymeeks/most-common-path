"use strict";

/*
  Within this file, write your complete solution. As you can see, we read in the log file for you.
*/

const fsp = require('fs-promise');

const MostCommonPathFinder = (() => {
  let findPath = (logFilePath) => {
    return fsp.readFile(logFilePath, 'utf8').then((logfileString) => { // read the log file

      return `The Answer`;
    });
  }

  // return exposed methods
  return {
    findPath: findPath
  };
})();

module.exports = MostCommonPathFinder;
