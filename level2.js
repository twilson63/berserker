import R from 'ramda'

/**
 * Level 2 - Challenge 1
 *
 * READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 * Challenge create a promise that wraps a setTimeout and when the setTimeout function runs
 * call resolve and return true
 */
function challenge1() {
  return null
}
/**
 * Level 2 - Challenge 2
 *
 * Use the promise then and promise catch methods to
 * handle the happy path and the sad path.
 *
 * In the happy path return true
 * In the sad path return false
 *
 */
function challenge2(promise) {
  return null
}
/** Level 2 - Challenge 3
 *
 *  Nested Promises
 *  Call promise1 then call promise2 when the result of promise 1 is complete
 *  passing the result in to promise2. And returning the final result.
 */
function challenge3(promise1, promise2) {
  return null
}
/** Level 2 - Challenge 4
 *
 * use promise all to execute both promises in Parallel
 * and return the result to the caller.
 */
function challenge4(promise1, promise2) {
  return null
}

/* ------------------- do not touch ----------------*/

export default () => {
  const test = tape
  test('Level 2 - Challenge 1', t => {
    t.plan(1)
    challenge1()
      .then(v => {
        t.ok(v)
      })
      .catch(err => {
        t.ok(false)
      })
  })

  test('Level 2 - Challenge 2', t => {
    t.plan(2)
    challenge2(
      new Promise(function(resolve, reject) {
        setTimeout(() => resolve(true), 100)
      })
    ).then(v => t.ok(v))

    challenge2(
      new Promise(function(resolve, reject) {
        setTimeout(() => reject(false), 100)
      })
    ).then(v => {
      t.notOk(v)
    })
  })

  test('Level 2 - Challenge 3', t => {
    t.plan(1)
    const promise1 = () => Promise.resolve(20)
    const promise2 = v => Promise.resolve(v + 22)
    challenge3(promise1, promise2).then(total => {
      t.equals(42, total)
    })
  })

  test('Level 2 - Challenge 4', t => {
    t.plan(1)
    const promise1 = Promise.resolve('green')
    const promise2 = Promise.resolve('blue')
    challenge4(promise1, promise2).then(results =>
      t.deepEquals(results, ['green', 'blue'])
    )
  })
}
