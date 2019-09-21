function buildPlayButton(player_container) {
	const play_btn_anchor = document.createElement('a');
	play_btn_anchor.setAttribute('href', '#');
	play_btn_anchor.setAttribute('id', 'play-btn');
	player_container.appendChild(play_btn_anchor);

	const play_btn_icon = document.createElement('i');
	play_btn_icon.setAttribute('class', 'fas fa-play-circle');
	play_btn_icon.style.fontFamily = "Font Awesome 5 Free";
	play_btn_anchor.appendChild(play_btn_icon);
}

function buildProgressBar(player_container) {
	const progress_div = document.createElement('div');
	progress_div.setAttribute('class', 'progress-div');

	const curr_time_label = document.createElement('p');
	curr_time_label.setAttribute('class', 'progress-label');
	curr_time_label.textContent = "curr_time"


	const progress_container = document.createElement('div');
	progress_container.setAttribute('class', 'progress-container');

	const progress_bar = document.createElement('div');
	progress_bar.setAttribute('class', 'progress-bar');

	const duration_label = document.createElement('p');
	duration_label.setAttribute('class', 'progress-label');
	duration_label.textContent = "duration"

	player_container.appendChild(progress_div);

	progress_div.appendChild(curr_time_label);
	progress_div.appendChild(progress_container);
	progress_div.appendChild(duration_label);

	progress_container.appendChild(progress_bar);


	//<audio id='audioPlayer'><source id='audioSource' src=''></audio>"
  	//+ "<div id='progressDiv'><p id='curr_time_label' class='progressLabel'></p><div id='progressContainer' class='shadowAnimated'><div id='progressBar'></div></div>"
  	//+ "<p id='duration_label' class='progressLabel'></p></div></div>
}

function buildVolumeSlider(player_container) {

}

function buildAudioSource(player_container) {
	const audio_element = document.createElement('audio');
	audio_element.setAttribute('id', 'audio-player');

	const source_element = document.createElement('source');
	source_element.setAttribute('id', 'audio-source');
	source_element.setAttribute('src', '');

	player_container.appendChild(audio_element);
	audio_element.appendChild(source_element);

	return audio_element;
}

function buildPlayer(player_container) {

	const audio_element = buildAudioSource(player_container);
	buildPlayButton(player_container);
	buildProgressBar(player_container);
	//buildVolumeSlider(player_container);
	
}