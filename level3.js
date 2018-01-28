import R from 'ramda'
import fetch from 'isomorphic-fetch'
/**
 * Level 3 - Challenge 1
 *
 * READ: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 *
 * Use fetch to request text response from http://numbersapi.com/24
 * and return to caller .
 *
 */
function challenge1(fetch) {
  return null
}
/**
 * Level 3 - Challenge 2
 *
 * Use fetch to get 2 cards from a new deck of cards using the deck of cards api:
 *
 * https://deckofcardsapi.com/api/deck/new/draw/?count=2
 */
function challenge2(fetch) {
  return null
}
/** Level 3 - Challenge 3
 *
 *  Nested Promises
 *
 * Use nested promises to shuffle a deck of cards and get the deck_id
 *
 * https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
 *
 * then draw two cards
 *
 * https://deckofcardsapi.com/api/deck/${res.deck_id}/draw/?count=2
 */
function challenge3(fetch) {
  return null
}
/** Level 3 - Challenge 4
 *
 * User Promise.all to get two hands of cards in parallel after getting the deck id.
 *
 * https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
 *
 * https://deckofcardsapi.com/api/deck/${res.deck_id}/draw/?count=2
 */
function challenge4() {
  return null
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
