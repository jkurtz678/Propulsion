function formatSongTime(time) {
  var mind = time % (60 * 60);
  var minutes = Math.floor(mind / 60);

  var secd = mind % 60;
  var seconds = Math.ceil(secd);
  if(seconds < 10) {
    return minutes + ":0" + seconds;
  }
  else {
      return minutes + ":" + seconds;
  }
}

function buildPlayButton(player_container, audio_element) {
	const play_btn_anchor = document.createElement('a');
	play_btn_anchor.setAttribute('href', '#');
	play_btn_anchor.setAttribute('id', 'play-btn');
	player_container.appendChild(play_btn_anchor);

	const play_btn_icon = document.createElement('i');
	play_btn_icon.setAttribute('class', 'fas fa-play-circle');
	play_btn_icon.style.fontFamily = "Font Awesome 5 Free";
	play_btn_anchor.appendChild(play_btn_icon);

	play_btn_anchor.onclick = function () {
		console.log("curr_time: " + audio_element.currentTime )
		console.log("paused: " + audio_element.paused )

		if(!audio_element.paused ) {
			console.log("attempting to pause audio...");
			audio_element.pause();
			play_btn_icon.setAttribute('class', 'fas fa-play-circle');
		}
		else {
			console.log("attempting to play audio...");
			audio_element.play()
			play_btn_icon.setAttribute('class', 'fas fa-pause-circle');
		}
	}
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

	console.log("building audio source... ");
	const audio_element = document.createElement('audio');
	audio_element.setAttribute('id', 'audio-player');
	audio_element.autoplay = true;

	//const source = "http://localhost:3000/sleep.mp3";

	audio_element.addEventListener("load", function() {
		console.log("load listener called");
    	audio_element.play(); 
 	}, true);
	//audio_element.src = source;

	const source_element = document.createElement('source');
	source_element.setAttribute('id', 'audio-source');
	source_element.setAttribute('src', 'http://localhost:3000/sleep.mp3');

	player_container.appendChild(audio_element);
	audio_element.appendChild(source_element);

	audio_element.load();

	//const playPromise = audio_element.play();

	/*if(playPromise !== undefined) {
		playPromise.then(_ => {
			console.log("playback has started...");
		})
		.catch(error => {
			console.log("playback was prevented...");
		})
	}*/
	

	return audio_element;
}

function buildPlayer(player_container) {

	const audio_element = buildAudioSource(player_container);
	buildPlayButton(player_container, audio_element);
	buildProgressBar(player_container);
	//buildVolumeSlider(player_container);
	
}