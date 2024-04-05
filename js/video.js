var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	console.log("Autoplay is set to false");
	video.loop = false;
	console.log("Loop is set to false");
	video.load();

	var slider = document.getElementById("slider");
	var currentVolume = document.getElementById("volume");

	slider.addEventListener("input", function() {
		var volume = slider.value;
		currentVolume.textContent = volume + "%";
		console.log("Current volume is " + volume + "%");

		video.volume = volume / 100;
	});

	document.querySelector("#mute").addEventListener("click", function() {
		video.volume = 0;
		volume = 0;
		slider.value = volume;
		currentVolume.textContent = volume + "%";
		currentVolume = volume;
		console.log("Volume muted to " + video.volume + "%");
		console.log("Volume muted to " + volume + "%");
		console.log("Volume muted to " + currentVolume);

		



	})

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Vintage style applied");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Original style applied");
	});

	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		console.log("Play Video");
	});
	
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});
	
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate -= 0.1;
		console.log("Speed slowed to " + video.playbackRate);
	});
	
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += 0.1;
		console.log("Speed increased to " + video.playbackRate);
	});
	
	document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime += 10;
		console.log("Video skipped ahead " + video.currentTime);
	});
	
	video.addEventListener("ended", function() {
		video.currentTime = 0;
		console.log("Video has returned to the start at " + video.currentTime + "seconds");
	})

});






