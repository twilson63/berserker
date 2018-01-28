import R from 'ramda'
import fetch from 'isomorphic-fetch'
/**
 * Level 4 - Challenge 1
 *
 *
 *
 */
async function challenge1(fetch) {
  const response = await fetch('http://numbersapi.com/24')
  const result = await response.text()
  return result
}
/**
 * Level 4 - Challenge 2
 *
 * READ:
 */
async function challenge2(fetch) {
  const response = await fetch(
    'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
  )
  const result = await response.json()

  return result
}
/** Level 3 - Challenge 3
 *
 *  Nested Promises
 */
async function challenge3(fetch) {
  const response = await fetch(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  )
  const { deck_id } = await response.json()
  const response2 = await fetch(
    `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
  )
  const results = await response2.json()
  return results
}
/** Level 3 - Challenge 4
 *
 * promise all
 */
async function challenge4() {
  const response = await fetch(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  )
  const { deck_id } = await response.json()
  const hands = await Promise.all([
    fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`).then(
      res => res.json()
    ),
    fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`).then(
      res => res.json()
    )
  ])
  return hands
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
