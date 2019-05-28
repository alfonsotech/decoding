$(function() {
    fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let unit;
    myJson.forEach(function(element) {
      if(element.type === 'capstone') {
        unit = `
        <div class="card capstone" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <p class="card-text tech-stack">${element.tech}</p>
        <a href="${element.repo}" target="_blank" class="btn btn-primary">Learn More</a>
        </div>
        </div>
        `
      } else {
        unit = `
        <div class="card project" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <p class="card-text tech-stack">${element.tech}</p>
        <a href=${element.repo} target="_blank" class="btn btn-primary">Learn More</a>
        </div>
        </div>
        `
      }
    $('#curriculum').append(unit)
    });

  });
});
