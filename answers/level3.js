import R from 'ramda'
import fetch from 'isomorphic-fetch'
/**
 * Level 3 - Challenge 1
 *
 * READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 * Challenge create a promise that wraps a setTimeout and when the setTimeout function runs
 * call resolve and return true
 */
function challenge1(fetch) {
  return fetch('http://numbersapi.com/24').then(res => res.text())
}
/**
 * Level 3 - Challenge 2
 *
 * READ:
 */
function challenge2(fetch) {
  return fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2').then(
    res => res.json()
  )
}
/** Level 3 - Challenge 3
 *
 *  Nested Promises
 */
function challenge3(fetch) {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(res => {
      return fetch(
        `https://deckofcardsapi.com/api/deck/${res.deck_id}/draw/?count=2`
      ).then(res => res.json())
    })
    .catch(err => console.log(err))
}
/** Level 3 - Challenge 4
 *
 * promise all
 */
function challenge4() {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(res => {
      return Promise.all([
        fetch(
          `https://deckofcardsapi.com/api/deck/${res.deck_id}/draw/?count=2`
        ).then(res => res.json()),
        fetch(
          `https://deckofcardsapi.com/api/deck/${res.deck_id}/draw/?count=2`
        ).then(res => res.json())
      ])
    })
}

/* ------------------- do not touch ----------------*/

export default () => {
  const test = tape
  test('Level 3 - Challenge 1', t => {
    t.plan(1)
    challenge1(fetch).then(res => {
      t.ok(R.contains('24', res))
    })
  })

  test('Level 3 - Challenge 2', t => {
    t.plan(1)
    challenge2(fetch).then(res => {
      t.equals(2, res.cards.length)
    })
  })

  test('Level 3 - Challenge 3', t => {
    t.plan(1)
    challenge3(fetch).then(res => {
      t.equals(2, res.cards.length)
    })
  })

  test('Level 3 - Challenge 4', t => {
    t.plan(3)
    challenge4(fetch).then(res => {
      t.equals(res.length, 2)
      t.equals(res[0].cards.length, 2)
      t.equals(res[1].cards.length, 2)
    })
  })
}
