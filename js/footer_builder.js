/** footer_builder **/

function buildCredits(credit_div) {
	console.log('building credits...');
	const song_name_label = document.createElement('p');
	song_name_label.setAttribute('id', 'song-name-label');
	song_name_label.innerHTML = "song name";
	
	const song_author_label = document.createElement('p');
	song_author_label.setAttribute('id', 'song-author-label');
	song_author_label.innerHTML = "song author";

	const line_break = document.createElement('br');

	credit_div.appendChild(song_name_label);
	credit_div.appendChild(line_break);
    credit_div.appendChild(song_author_label);
}

function buildFooter(container, trackName, trackAuthor) {
	console.log('building footer...');

    const footer = document.createElement('footer');
    const player_div = document.createElement('div');
    player_div.setAttribute('class', 'player-container');
    const credit_div = document.createElement('div');
    credit_div.setAttribute('class', 'credit-container');

    buildPlayer(player_div);
    buildCredits(credit_div);

    footer.appendChild(player_div);
    footer.appendChild(credit_div);

    container.appendChild(footer);
}