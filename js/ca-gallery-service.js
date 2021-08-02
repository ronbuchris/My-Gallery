'use strict';
var gProjs;

_createProjs();

function getProjs() {
  return gProjs;
}

function _createProj(id, name, title, desc, url, labels) {
  return {
    id,
    name,
    title,
    desc,
    url,
    publishedAt: Date.now(),
    labels,
  };
}

function _createProjs() {
  var projs = [];
  projs.push(
    _createProj(
      'minesweeper',
      'minesweeper',
      'better not touch the mines',
      'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighbouring mines in each field. The game originates from the 1960s, and it has been written for many computing platforms in use today. It has many variations and offshoots.',
      'https://ronbuchris.github.io/-minesweeper-/',
      'games'
    )
  );
  projs.push(
    _createProj(
      'InPicture',
      'In Picture',
      'what in the picture ?',
      `${makeLorem(20)}`,
      'https://ronbuchris.github.io/InPicture/',
      'games'
    )
  );
  projs.push(
    _createProj(
      'TouchNums',
      'Touch Nums',
      'try to break the record',
      `${makeLorem(20)}`,
      'https://ronbuchris.github.io/TouchNums/',
      'games'
    )
  );
  projs.push(
    _createProj(
      'BallBoard',
      'Ball Board',
      'try to eat all the balls',
      `${makeLorem(20)}`,
      'https://ronbuchris.github.io/BallBoard/',
      'games'
    )
  );
  projs.push(
    _createProj(
      'Chess',
      'Chess',
      'do you think you smart ?',
      `${makeLorem(20)}`,
      'https://ronbuchris.github.io/Chess/',
      'games'
    )
  );
  projs.push(
    _createProj(
      'Todos',
      'Todos',
      'todos list',
      `${makeLorem(20)}`,
      'https://ronbuchris.github.io/Todos/',
      'games'
    )
  );
  projs.push(
    _createProj(
      'BooksShop',
      'Books Shop',
      'buy, sell and rate books ',
      `${makeLorem(20)}`,
      'https://ronbuchris.github.io/BooksShop/',
      'games'
    )
  );
  projs.push(
    _createProj(
      'Sokoban',
      'Sokoban',
      'move the box to the pins',
      `${makeLorem(20)}`,
      'https://ronbuchris.github.io/Sokoban/',
      'games'
    )
  );
  projs.push(
    _createProj(
      'Pacman',
      'Pacman',
      'do you afraid of ghosts?',
      `${makeLorem(20)}`,
      'https://ronbuchris.github.io/Pacman/',
      'games'
    )
  );

  gProjs = projs;
}

function getProjById(projId) {
  var proj = gProjs.find(function (proj) {
    return projId === proj.id;
  });
  return proj;
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ];
  var txt = '';
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  return txt;
}
