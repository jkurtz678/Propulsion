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

    buildPlayer(player_div);

    footer.appendChild(player_div);
    footer.appendChild(credit_div);

    container.appendChild(footer)
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
                nav_lines[index].style.backgroundColor = "white";
                nav_titles[index].style.color = "white";

            }
            else {
                nav_lines[index].style.backgroundColor = "black";
                nav_titles[index].style.color = "black";
            }
        }
    });
}

