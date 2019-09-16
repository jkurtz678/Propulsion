
function buildPage(slides) {
    const app = document.getElementById('root');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(container);
    
    slides.forEach( element => {
        const slide = document.createElement('div');
        slide.setAttribute('class', 'slide');

        const h1 = document.createElement('h1');
        h1.textContent = element.name;

        const p = document.createElement('p');
        p.textContent = element.description;

        container.appendChild(slide);

        slide.appendChild(h1);
        slide.appendChild(p);
    });
}

