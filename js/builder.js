

function buildHeader(container, levelName) {
    const header = document.createElement('header');
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'header-title');
    h3.textContent = levelName;

    header.appendChild(h3);
    container.appendChild(header);
}

function buildFooter(container, trackName, trackAuthor) {
    const footer = document.createElement('footer');
    const player_div = document.createElement('div');
    player_div.setAttribute('class', 'player-container');
    const credit_div = document.createElement('div');
    credit_div.setAttribute('class', 'credit-container');

    footer.appendChild(player_div);
    footer.appendChild(credit_div);

    container.appendChild(footer)
}

function buildLayout1(slide, data) {
        const h1 = document.createElement('h1');
        h1.textContent = data.name;

        const p = document.createElement('p');
        p.textContent = data.description;
 
        slide.appendChild(h1);
        slide.appendChild(p);
}

function buildSlides(slides, container) {
    let i = 0;
    slides.forEach( element => {
        const slide = document.createElement('div');

        if(i % 2 == 0) {
            slide.setAttribute('style', 'background-color: red;');
        }
        else
            slide.setAttribute('style', 'background-color: blue;');

        slide.setAttribute('class', 'slide');

        container.appendChild(slide);

        buildLayout1(slide, element);

        i++;
    });
}

function buildPage(slides) {
    const app = document.getElementById('root');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(container);

    buildHeader(container, "sample level name");

    buildSlides(slides, container);

    buildFooter(container, "test track name", "test track author");

}

