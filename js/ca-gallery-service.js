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
    url: `https://ronbuchris.github.io/-${name}-/`,
    publishedAt: Date.now(),
    labels: ['games'],
  };
}

function _createProjs() {
  var projs = [];
  projs.push(
    _createProj(
      'minesweeper',
      'minesweeper',
      'better not touch the mines',
      'something',
      'games'
    )
  );
  projs.push(
    _createProj(
      'InPicture',
      'In Picture',
      'better not touch the mines',
      'something',
      'games'
    )
  );
  projs.push(
    _createProj(
      'TouchNums',
      'Touch Nums',
      'better not touch the mines',
      'something',
      'games'
    )
  );
  projs.push(
    _createProj(
      'BallBoard',
      'Ball Board',
      'better not touch the mines',
      'something',
      'games'
    )
  );
  projs.push(
    _createProj(
      'Chess',
      'Chess',
      'better not touch the mines',
      'something',
      'games'
    )
  );
  projs.push(
    _createProj(
      'Todos',
      'Todos',
      'better not touch the mines',
      'something',
      'games'
    )
  );
  projs.push(
    _createProj(
      'BooksShop',
      'Books Shop',
      'better not touch the mines',
      'something',
      'games'
    )
  );
  projs.push(
    _createProj(
      'Sokoban',
      'Sokoban',
      'better not touch the mines',
      'something',
      'games'
    )
  );
  projs.push(
    _createProj(
      'Pacman',
      'Pacman',
      'better not touch the mines',
      'something',
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
