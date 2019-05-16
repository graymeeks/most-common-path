"use strict";

/*
  Within this file, write your complete solution. As you can see, we read in the log file for you.
*/

const fsp = require('fs-promise');

/**
 * We have written the basics here for you.
 * This is a JS module called MostCommonPathFinder.
 * It contains a single method `findPath` which is
 * where most of your code will go.
 *
 */
const MostCommonPathFinder = (() => {

   // Initialize answers
   var commonPath = [-9999, -9999, -9999];
   var commonPathFrequency = -9999;

   // Initialize data structures
   var userDict = {};
   var pathDict = {};

   // Variable npath instead of fixed 3path
   var n = 3;

  return {
    findPath: (logFilePath) => {
      return fsp.readFile(logFilePath, 'utf8').then((logfileString) => {

         // Split log on newline 
         var strSplit = logfileString.split("\n")

         // Error checking phase 1: should be at least 3 "records"
         if (strSplit.length >= n)
         {

          // For each line found in the log
          for (var i = 0; i < strSplit.length; i++) {

            // Parse the current record
            var currRecord = strSplit[i];
            var logSplit = currRecord.split(" ");
            var user = logSplit[0];
            var path = logSplit[1];

            // Error checking phase 2: Must be a valid record.
            // (else skip this iteration of the for loop)
            if ( (logSplit.length > (n-1)) || (user === undefined) || (path === undefined) ) {
              continue;
            }

            // "Outer" dictionary construction
            // Key: user
            // Value: list of paths
            if (userDict[user] === undefined) {
              var initValue = [path];
              userDict[user]  = initValue;
            }
            else {
              // Pull current value based on key
              var currValue = userDict[user];

              // Add latest path
              currValue.push(path);

              // "Inner" dictionary construction
              // Key: unique 3path
              // Value: frequency
              var listLen = currValue.length;
              if (listLen >= n) {
                //var curr3path = [currValue[listLen-3], currValue[listLen-2], path]; curr3path 'fixed' declaration instead of variable npath
                var curr3path = []
                // ****** NPATH IMPROVEMENT ******
                for (var j=(listLen - n); j < (listLen); j++ ) {
                  curr3path.push(currValue[j])
                }
                var freq = pathDict[curr3path];
                // Determine frequency value
                if (freq === undefined) {
                  freq = 1;
                }
                else {
                  freq = freq + 1;
                }
                pathDict[curr3path] = freq;

                // Update answer if applicable
                if (freq > commonPathFrequency) {
                  commonPath = curr3path;
                  commonPathFrequency = freq;
                }
              }
            }
          } // end 'foreach' line in log
         } // end error check 1

         // Spit out answer
         if (commonPathFrequency === -9999) {
          return 'No answer';
         }
         else {
          console.log(commonPath);
          return commonPath;
         }
      });
    }
  };
})();

module.exports = MostCommonPathFinder;
