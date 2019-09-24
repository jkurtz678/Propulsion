//introduce site and 
function enterSite() {
    console.log("enter clicked...");

    //fade in elements
    const nav_container = document.getElementById('nav-container');
    nav_container.style.opacity = 1;
    const header = document.querySelector('header');
    header.style.opacity = 1;
    const footer = document.querySelector('footer');
    footer.style.opacity = 1;

    //enable scroll
    const container = document.getElementById('page-container');
    container.style.overflow = 'scroll';

    //scroll to first slide
    const slideElements = document.getElementsByClassName('slide');
    slideElements[1].scrollIntoView({ behavior: 'smooth', block: 'center' }); 

    //trigger music
    playSong('sleep.mp3');
}

function buildIntro(slide, data) {
    slide.style.backgroundColor = "purple";
    slide.classList.add('intro-slide');
    const enter_btn = document.createElement('button');
    enter_btn.classList.add('enter-btn');
    enter_btn.textContent = "enter";
    enter_btn.addEventListener('click', enterSite);
    slide.appendChild(enter_btn);
}

function buildContent1(slide, data) {
    slide.style.backgroundColor = "red";
    /*
    const h1_tag = document.createElement('h1');
    h1_tag.setAttribute('class', 'tagline');
    h1_tag.textContent = data.name;

    const text_container = document.createElement('div');
    text_container.setAttribute('class', 'text-container');

    const p = document.createElement('p');
    p.textContent = data.description;

    text_container.appendChild(p);
    //slide.append(h1_tag);
    //slide.append(text_container);*/
}
function buildContent2(slide, data) {
    slide.style.backgroundColor = "blue";
}

function buildCredits(slide, data) {
    slide.style.backgroundColor = "green";
}

function buildSlides(slides, container) {
    slides.forEach( element => {
        const slide = document.createElement('div');

        slide.setAttribute('class', 'slide');

        if( element.layout === "intro") {
            buildIntro(slide, element);
        }
        else if( element.layout === "content_1") {
            buildContent1(slide, element);
        }
        else if( element.layout === "content_2")  {
            buildContent2(slide, element);
        }
        else if(element.layout === "credits") {
            buildCredits(slide, element);
        }

        container.appendChild(slide);
    });
}