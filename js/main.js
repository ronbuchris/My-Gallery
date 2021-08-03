'use strict';

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
              <p class="text-muted">${proj.labels}</p>
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
  $('.description-proj').text(proj.desc);
  document.querySelector('.proj-img').src = `img/portfolio/${proj.id}.jpg`;
  $('.url-proj').attr('href', `${proj.url}`);
  // $('.proj-img').text(proj.img);
}

//util
