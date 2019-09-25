function buildHeader(container, levelName) {
    const header = document.createElement("header");
    const h3 = document.createElement("h3");
    h3.setAttribute("id", "header-title");
    h3.textContent = levelName;

    header.appendChild(h3);
    container.appendChild(header);
}

function buildPage(slides) {
    const app = document.getElementById("root");

    const container = document.createElement("div");
    container.setAttribute("id", "page-container");

    app.appendChild(container);

    buildHeader(container, "sample level name");

    buildSlides(slides, container);

    buildNav(container, slides);

    buildFooter(container, "test track name", "test track author");

    const location_icon = document.getElementById("location-icon");

    const nav_lines = document.getElementsByClassName("nav-line");
    const nav_titles = document.getElementsByClassName("nav-title");

    //update navbar with upon scrolling
    container.addEventListener("scroll", function() {
        const header_title = document.getElementById("header-title");
        const song_name_label = document.getElementById("song-name-label");
        const song_author_label = document.getElementById("song-author-label");

        const percScroll = scrollUpdate(this);
        location_icon.style.top = String(percScroll) + "%";
        let index;
        for (index = 0; index < nav_lines.length; index++) {
            if (
                Math.abs((100 / (nav_lines.length - 1)) * index - percScroll) <
                1
            ) {
                nav_lines[index].style.backgroundColor = "white";
                nav_titles[index].style.color = "white";

                // if not already triggered
                if (header_title.innerHTML != slides[index].name) {
                    header_title.innerHTML = slides[index].name;
                    song_name_label.innerHTML = slides[index].song_name;
                    song_author_label.innerHTML = slides[index].song_author;
                    playSong(slides[index].song_url);
                }
            } else {
                nav_lines[index].style.backgroundColor = "black";
                nav_titles[index].style.color = "black";
            }
        }
    });
}