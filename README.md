# Berserker

Berserker is 5 levels of practice with javascript async coding concepts.

Asynchronous code happens all the time in programming, you make a request to an
external system, and when it is complete, you want to get notified and process
the result.

## Usage

```
git clone https://github.com/twilson63/berserker.git
cd berserker
npm install browser-sync --global
browser-sync start --server --files level*.js
open localhost:3000
```

## Levels

* Level 1 - Callbacks

  * [x] Challenge 1 - setTimeout
  * [x] Challenge 2 - onClick
  * [x] Challenge 3 - XHR
  * [x] Challenge 4 - Parallel XHR's

* Level 2 - Promises

  * [x] Challenge 1 - resolve
  * [x] Challenge 2 - then/catch
  * [x] Challenge 3 - Nested Promises (Waterfall)
  * [x] Challenge 4 - Promise all

* Level 3 - Fetch

  * [x] Challenge 1 - fetch get
  * [x] Challenge 2 - fetch json get
  * [x] Challenge 3 - fetch post json
  * [x] Challenge 4 - Parallel fetch

* Level 4 - Async/Await

  * [x] Challenge 1 - await
  * [x] Challenge 2 - try/catch
  * [x] Challenge 3 - multiple awaits
  * [x] Challenge 4 - Parallel awaits
