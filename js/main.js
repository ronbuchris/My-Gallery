'use strict';
console.log('Starting up');

function onInit() {
  renderProjs();
}

function renderProjs() {
  var projs = getProjs();
  var strHtmls = projs.map(function (proj) {
    return `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a onclick="openModal('${proj.id}')"
              class="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
              class="card-img-top"
                src="img/portfolio/${proj.id}.jpg"
                alt=""
              />
            </a>
            <div class="portfolio-caption">
              <h4>${proj.name}</h4>
              <p class="text-muted">${proj.labels[0]}</p>
            </div>
          </div> 
        `;
  });
  document.querySelector('.portfolio-projs').innerHTML = strHtmls.join('');
}

function openModal(projId) {
  var proj = getProjById(projId);
  $('h2').text(proj.name);
  $('.title-proj').text(proj.title);
  $('.title-proj').text(proj.title);
  $('.description-proj').text(makeLorem(20));
  document.querySelector('.proj-img').src = `img/portfolio/${proj.id}.jpg`;
  // $('.proj-img').text(proj.img);
}

//util
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
