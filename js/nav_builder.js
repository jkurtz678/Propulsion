//from: https://stackoverflow.com/questions/19614069/get-percentage-scrolled-of-an-element-with-jquery
function scrollUpdate(container)
{    
    var scrollPercentage = 100 * container.scrollTop / (container.scrollHeight-container.clientHeight); 
    //console.log("horizontal_width: ", scrollPercentage);
    return scrollPercentage;
}

//left side of container
function buildNavLines(nav_bar_container, slides) {
    //let i;
    //for(i = 0; i < numSlides; i++) {
    for( let [index, val] of slides.entries()) { 
        const nav_anchor = document.createElement('a');
        nav_anchor.setAttribute('class', 'nav-anchor');
        nav_anchor.style.top = String(index * (100/(slides.length-1))) +'%';  

        const nav_line = document.createElement('div');
        nav_line.setAttribute('class', 'nav-line');
        nav_line.style.top ='50%'; 

        nav_anchor.onclick = function() {
            console.log("trying to scroll to slide: " + index);
            const slideElements = document.getElementsByClassName('slide');
            slideElements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        nav_anchor.appendChild(nav_line);
        nav_bar_container.appendChild(nav_anchor);
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