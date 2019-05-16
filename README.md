# Most Common Three Path Sequence


## Explanation
You are given a log file of unknown length which contains a list of user `ids` and the `path` of a web application they have visited. The logs are in order but multiple users are simultaneously using the application. The objective is to write an algorithm that returns the most common three path sequence as efficiently as possible.

The log file will be in this format:
```
1 /home
1 /cart
1 /dragon
2 /dashboard
2 /home
2 /cart
3 /home
3 /cart
3 /dragon
```
and we have already read the file in for you.

The return value for this example would be: `['/home', '/cart', '/dragon']`

User `1` and `3` both went to the path `home cart dragon`.

We have written a unit test to prove your solution. Before committing the code to your own repo, be sure to run the test to verify your code matches with `jasmine`.

## Instructions
1. `npm install` at root of project.
1. Familiarize  yourself with the existing code, then write your solution in MostCommonPathFinder.js.
1. Run tests with `npm run test` to make sure your code returns matching expected format and criteria.

## Extra Credit
* Rewrite with async/await and remove IIFE module.
* Write more unit tests to further prove your algorithm.
* Include benchmarking with different solutions.
* Allow parameterized length of sequence.