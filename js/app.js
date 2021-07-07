'use strict'

/**
 * The starting point of the application.
 *
 * @author Mattis Erkensten <m.erkensten@icloud.com>
 * @version 1.0
 */

const players = [
  'Mattis',
  'Hanna',
  'Ami',
  'Peter',
  'Märta',
  'Cassandra',
  'Nicole',
  'Sven',
  'Lillemor',
  'David',
  'Emanuel',
  'Lowa',
  'Agnes',
]

/**
 *
 *
 * @param {*} arr
 * @param {*} item
 */
function removeItemsFromArray(arr, item) {
  const index = arr.indexOf(item)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

/**
 *
 * @param {*} playerA
 * @param {*} playerB
 * @returns
 */
function checkRandomPlayers(playerA, playerB) {
  if (playerA === playerB && playerA === 0) {
    playerB++
  } else if (playerB === playerA && playerB === players.length - 1) {
    playerB--
  } else if (playerA === playerB) {
    playerB++
  }

  return playerB
}

/**
 *
 * @param {Array} arr
 * @returns
 */
function generateRandomNumberOnArray(arr) {
  const playerNumber = Math.floor(Math.random() * arr.length)
  return playerNumber
}

let teams = []

/**
 *
 */
function createTeam() {
  let playerA = generateRandomNumberOnArray(players)
  let playerB = generateRandomNumberOnArray(players)

  playerB = checkRandomPlayers(playerA, playerB)

  teams.push(`Laget är ${players[playerA]}, ${players[playerB]}`)

  removeItemsFromArray(players, playerA)
  removeItemsFromArray(players, playerB)
}

createTeam()
console.log(teams)
console.log(players)
