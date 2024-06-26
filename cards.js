const cards = document.querySelector(".cards");
let myArticle = "";

arrayCards.forEach((card) => {
	myArticle += `
            <div class="card">
                <img src=${card.src} alt="Foto projeto" width="200px">
                <h3 class="title-card">${card.title}</h3>
                <p class="text-card">${card.summary}</p>
                <div class="icons">
                  <i class="bx bxl-${card.icon1}"></i>
                  <i class="bx bxl-${card.icon2}"></i>
                  <i class="bx bxl-${card.icon3}"></i>
                  <i class="bx bxl-${card.icon4}"></i>
                  <i class="bx bxl-${card.icon5}"></i>
                  <i class="bx bxl-${card.icon6}"></i>
                </div>
                <span>${card.alert}</span>
                <a href="${card.deploy}" target="_blank">Deploy</a>
                <a href="${card.repository}" target="_blank">Repositório</a>
            </div>
            `;
});

cards.innerHTML = myArticle;
