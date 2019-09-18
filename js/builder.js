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

function buildNavLines(nav_bar_container, numSlides) {
    let i;
    console.log("numSlides: " + numSlides);

    for(i = 0; i < numSlides; i++) {
        console.log("building line num: " + i);
        const nav_line = document.createElement('div');
        nav_line.setAttribute('class', 'nav-line');
        nav_line.style.top = String(i * (100/(numSlides-1))) +'%';  
        nav_bar_container.appendChild(nav_line);
    }
}

function buildNav(container, slides) {
    const nav_container = document.createElement('div');
    nav_container.setAttribute('class', 'nav-container');

    const nav_bar_container = document.createElement('div');
    nav_bar_container.setAttribute('class', 'nav-bar-container');

    const nav_titles_container = document.createElement('div');
    nav_titles_container.setAttribute('class', 'nav-titles-container');

    nav_container.appendChild(nav_bar_container);
    nav_container.appendChild(nav_titles_container);

    container.appendChild(nav_container);

    const vertical_nav_line = document.createElement('div');
    vertical_nav_line.setAttribute('class', 'vertical-nav-line');
    nav_bar_container.appendChild(vertical_nav_line);

    buildNavLines(nav_bar_container, slides.length);

    const location_icon = document.createElement('div');
    location_icon.setAttribute('class', 'location-icon');
    location_icon.setAttribute('id', 'location-icon');

    nav_bar_container.appendChild(location_icon);

    for( let [index, val] of slides.entries()) { 
        const slide_item = document.createElement('li');
        slide_item.setAttribute('class', 'nav-title');
        slide_item.textContent = val.name
        nav_titles_container.appendChild(slide_item);
    }

    container.appendChild(nav_container);
}

function buildLayout1(slide, data) {

    const h1_tag = document.createElement('h1');
    h1_tag.setAttribute('class', 'tagline');
    h1_tag.textContent = data.name;

    const text_container = document.createElement('div');
    text_container.setAttribute('class', 'text-container');

    const p = document.createElement('p');
    p.textContent = data.description;

    text_container.appendChild(p);

    //slide.append(h1_tag);
    //slide.append(text_container);
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
    container.setAttribute('id', 'container');

    app.appendChild(container);

    buildHeader(container, "sample level name");

    buildNav(container, slides);

    buildSlides(slides, container);

    buildFooter(container, "test track name", "test track author");


    const location_icon = document.getElementById('location-icon');
    //update navbar with upon scrolling
    container.addEventListener("scroll", function () {
        const percScroll = scrollUpdate(this);
        location_icon.style.top = String(percScroll) + '%';
    });
}

