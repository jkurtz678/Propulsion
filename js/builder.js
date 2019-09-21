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

//left side of container
function buildNavLines(nav_bar_container, slides) {
    //let i;
    //for(i = 0; i < numSlides; i++) {
    for( let [index, val] of slides.entries()) { 
        const nav_line = document.createElement('div');
        nav_line.setAttribute('class', 'nav-line');
        nav_line.style.top = String(index * (100/(slides.length-1))) +'%';  
        nav_line.onclick = function() {
            console.log("trying to scroll to slide: " + index);
            const slideElements = document.getElementsByClassName('slide');
            slideElements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        nav_bar_container.appendChild(nav_line);

    }
}

//right side of nav container
function buildNavTitles(nav_container, slides) {
    const nav_titles_container = document.createElement('div');
    nav_titles_container.setAttribute('class', 'nav-titles-container');
    nav_container.appendChild(nav_titles_container);

    for( let [index, val] of slides.entries()) { 
        const slide_item = document.createElement('li');
        slide_item.setAttribute('class', 'nav-title');
        slide_item.textContent = val.name
        slide_item.style.top = String(index * (100/(slides.length-1))) +'%';
        slide_item.onclick = function() {
            console.log("trying to scroll to slide: " + index);
            const slideElements = document.getElementsByClassName('slide');
            slideElements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        nav_titles_container.appendChild(slide_item);

        console.log( "element height: " + slide_item.offsetHeight);
        slide_item.style.marginTop = String(slide_item.offsetHeight/2 * -1) + "px";
    }   
}

function buildNavBar( nav_container, slides)  {
    const nav_bar_container = document.createElement('div');
    nav_bar_container.setAttribute('class', 'nav-bar-container');

    nav_container.appendChild(nav_bar_container);

    const vertical_nav_line = document.createElement('div');
    vertical_nav_line.setAttribute('class', 'vertical-nav-line');
    nav_bar_container.appendChild(vertical_nav_line);

    buildNavLines(nav_bar_container, slides);

    const location_icon = document.createElement('div');
    location_icon.setAttribute('class', 'location-icon');
    location_icon.setAttribute('id', 'location-icon');

    nav_bar_container.appendChild(location_icon);
}

function buildNav(container, slides) {
    const nav_container = document.createElement('div');
    nav_container.setAttribute('class', 'nav-container');

    container.appendChild(nav_container);

    buildNavBar(nav_container, slides);

    buildNavTitles(nav_container, slides);
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

    buildSlides(slides, container);

    buildNav(container, slides);

    buildFooter(container, "test track name", "test track author");


    const location_icon = document.getElementById('location-icon');

    const nav_lines = document.getElementsByClassName('nav-line');
    const nav_titles = document.getElementsByClassName('nav-title');

    //update navbar with upon scrolling
    container.addEventListener("scroll", function () {
        const percScroll = scrollUpdate(this);
        location_icon.style.top = String(percScroll) + '%';
        let index;
        for( index = 0; index < nav_lines.length; index++ ) {  
            if( Math.abs(((100/(nav_lines.length-1)) * index) - percScroll) < 1 ) {
                nav_lines[index].style.backgroundColor = "red";
                nav_titles[index].style.color = "red";

            }
            else {
                nav_lines[index].style.backgroundColor = "black";
                nav_titles[index].style.color = "black";
            }
        }
    });


}

