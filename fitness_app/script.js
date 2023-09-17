document.addEventListener("DOMContentLoaded", function () {
    const gifList = [
        "Preparation.gif",
        "Jumpin_Jacks.gif",
        "High_Knees.gif",
        "Lunges.gif",
        "Push-Ups.gif",
        "Leg-Raises.gif",
        "Burpees.gif",
        "Dumbell_Jumping_Lunges.gif",
        "Push-Up_Bars.gif",
        "Dumbell_Squat_Jump.gif",
        "Push-Ups_Dumbbell_Rows.gif",
        "Lunges_Dumbbell_Curls.gif",
        "Push-Ups.gif",
        "Quick_leg_movement.gif",
        "Bicycle_Crunches.gif",
        "Mountain_Climbers.gif",
        "Russian_Twist.gif",
        "Plank_with_arm_movement.gif",
        "Plank.gif",
    ];
    let currentIndex = 0;
    let countdownInterval;
    let countdown = 5; // Start with 5-second wait
    let isPaused = false;
    let isWaiting = true; // Flag to track if we are in the wait state
    let isLastGif = false; // Flag to check if the last GIF has been reached

    const gifElement = document.getElementById("gif");
    const countdownElement = document.getElementById("countdown");
    const gifNameElement = document.getElementById("gifName");
    const gifNumberElement = document.getElementById("gifNumber");
    const pauseButton = document.getElementById("pauseButton");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    // Add GIF button click event
    const addGifButton = document.getElementById("addGifButton");
    const gifFilesInput = document.getElementById("gifFiles");

    addGifButton.addEventListener("click", () => {
        // Trigger the file input to open the file selection dialog
        gifFilesInput.click();
    });

    // Handle selected GIF files when the user chooses them
    gifFilesInput.addEventListener("change", (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            // Iterate through selected files and add them to the gifList
            for (let i = 0; i < selectedFiles.length; i++) {
                const fileName = selectedFiles[i].name;
                gifList.push(fileName);
            }
            // Reset the current index and flags
            currentIndex = 0;
            isLastGif = false;
            isWaiting = true;
            // Start the timer with the newly added GIFs
            startTimer();
        }
    });

    // New settings-related elements
    const settingsButton = document.getElementById("settingsButton");
    const settingsWindow = document.getElementById("settingsWindow");
    const pauseTimeInput = document.getElementById("pauseTime");
    const timerTimeInput = document.getElementById("timerTime");
    const saveSettingsButton = document.getElementById("saveSettingsButton");
    const continueMessage = document.getElementById("continueMessage");
    function showContinueMessage() {
        const continueMessage = document.getElementById("continueMessage");
        continueMessage.style.display = "block";
    }
    
    // Function to hide the continue message
    function hideContinueMessage() {
        const continueMessage = document.getElementById("continueMessage");
        continueMessage.style.display = "none";
    }
    
    // Event listeners for repeat and exit buttons
    const repeatButton = document.getElementById("repeatButton");
    const exitButton = document.getElementById("exitButton");
    
    repeatButton.addEventListener("click", handleRepeatClick);
    exitButton.addEventListener("click", handleExitClick);
    
    // Function to handle clicking the repeat button
    function handleRepeatClick() {
        // Reset the current index and flags
        currentIndex = 0;
        isLastGif = false;
        isWaiting = true;
        hideContinueMessage();
        // Start the timer with the GIFs from the beginning
        startTimer();
    }
    
    // Function to handle clicking the exit button
    function handleExitClick() {
        // Hide the continue message
        hideContinueMessage();
        // You can add any additional actions here if needed
    }


    
    function showContinueMessage() {
        continueMessage.style.display = "block";
    }
    
    function hideContinueMessage() {
        continueMessage.style.display = "none";
    }
    
    // Function to handle clicking the repeat button
    function handleRepeatClick() {
        // Reset the current index and flags
        currentIndex = 0;
        isLastGif = false;
        isWaiting = true;
        hideContinueMessage();
        // Start the timer with the GIFs from the beginning
        startTimer();
    }
    
    // Function to handle clicking the exit button
    function handleExitClick() {
        // Hide the continue message
        hideContinueMessage();
        // You can add any additional actions here if needed
    }
    
    // Event listeners for repeat and exit buttons
    repeatButton.addEventListener("click", handleRepeatClick);
    exitButton.addEventListener("click", handleExitClick);
    

    function updateGif() {
        gifElement.src = gifList[currentIndex];
        const gifName = gifList[currentIndex].replace(".gif", "").replace(/_/g, " ");
        gifNameElement.innerHTML = `<h1>Exercise number <span id="gifNumber">${currentIndex + 1}</span> :</h1><h2>${gifName}</h2>`;
    }

    function resetTimer() {
        clearInterval(countdownInterval);
        countdown = isWaiting ? parseInt(pauseTimeInput.value) : parseInt(timerTimeInput.value); // Update countdown based on input values
        countdownElement.textContent = `${isWaiting ? "Pause" : "Timer"}: ${countdown} seconds`;
        if (!isPaused) {
            startTimer();
        }
    }

    function startTimer() {
    countdownInterval = setInterval(() => {
        if (countdown > 0) {
            countdown--;
            countdownElement.textContent = `${isWaiting ? "Pause" : "Timer"}: ${countdown} seconds`;
        } else {
            if (isWaiting) {
                isWaiting = false; // Transition to normal timer
                resetTimer();
            } else {
                if (currentIndex === gifList.length - 1) {
                    // Pause the timer at 0 when the last GIF is reached
                    isLastGif = true;
                    clearInterval(countdownInterval);
                    countdownElement.textContent = `${isWaiting ? "Pause" : "Timer"}: 0 seconds`;
                    showContinueMessage(); // Show the continue message and buttons
                } else {
                    currentIndex = (currentIndex + 1) % gifList.length;
                    updateGif();
                    isWaiting = true; // Transition back to wait state
                    resetTimer();
                }
            }
        }
    }, 1000);
}

    updateGif();
    startTimer();

    pauseButton.addEventListener("click", () => {
        if (isPaused) {
            pauseButton.innerHTML = '<i class="bi bi-pause-circle-fill bootrstrap-icons"></i>';
            startTimer();
        } else {
            pauseButton.innerHTML = '<i class="bi bi-play-circle-fill bootrstrap-icons"></i>';
            clearInterval(countdownInterval);
        }
        isPaused = !isPaused;
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + gifList.length) % gifList.length;
        updateGif();
        isWaiting = true; // Ensure we start with a wait timer
        resetTimer();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % gifList.length;
        updateGif();
        isWaiting = true; // Ensure we start with a wait timer
        resetTimer();
    });

    // Settings button click event
    settingsButton.addEventListener("click", () => {
        settingsWindow.style.display = "block";
    });

    // Save settings button click event
    saveSettingsButton.addEventListener("click", () => {
        const newPauseTime = parseInt(pauseTimeInput.value);
        const newTimerTime = parseInt(timerTimeInput.value);

        // Validate input values to ensure they are greater than or equal to 1
        if (newPauseTime >= 1 && newTimerTime >= 1) {
            // Update the countdown values and hide the settings window
            countdown = newPauseTime;
            pauseTimeInput.value = newPauseTime;
            countdownElement.textContent = `Wait: ${countdown} seconds`;

            // If currently in the wait state, reset the timer
            if (isWaiting) {
                clearInterval(countdownInterval);
                startTimer();
            }

            // Update the timer time
            timerTimeInput.value = newTimerTime;

            // Close the settings window
            settingsWindow.style.display = "none";
        } else {
            // Display an error message or handle invalid input as needed
            alert("Invalid input. Please enter values greater than or equal to 1.");
        }
    });

    // Existing code...

    const playPauseButton = document.getElementById("playPause");
    const prevSongButton = document.getElementById("prevSong");
    const nextSongButton = document.getElementById("nextSong");
    const songNameElement = document.getElementById("songName");
    const addAudioButton = document.getElementById("addAudio");
    const audioFilesInput = document.getElementById("audioFiles");

    let isPlaying = false;
    let currentSongIndex = 0;
    let songList = [

    ]; // Replace with your initial list of songs

    const audio = new Audio(songList[currentSongIndex]);

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songList.length;
        audio.src = songList[currentSongIndex];
        if (isPlaying) {
            audio.play();
        }
        updateSongName();
    }

    function updateSongName() {
        // Extract the song name from the MP3 file name and replace underscores with spaces
        const songFileName = songList[currentSongIndex];
        const songName = songFileName.replace(".mp3", "").replace(/_/g, " ");
        songNameElement.textContent = songName;
    }

    audio.addEventListener("ended", () => {
        playNextSong();
    });

    playPauseButton.addEventListener("click", () => {
        if (isPlaying) {
            // Pause the music
            audio.pause();
            playPauseButton.innerHTML = '<i class="bi bi-play-circle-fill bootrstrap-icons"></i>';
        } else {
            // Resume playing
            audio.play();
            playPauseButton.innerHTML = '<i class="bi bi-pause-circle-fill bootrstrap-icons"></i>';
        }
        isPlaying = !isPlaying;
    });

    prevSongButton.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
        audio.src = songList[currentSongIndex];
        if (isPlaying) {
            audio.play();
        }
        updateSongName();
    });

    nextSongButton.addEventListener("click", () => {
        playNextSong();
    });

    addAudioButton.addEventListener("click", () => {
        // Trigger the file input to open the file selection dialog
        audioFilesInput.click();
    });

    // Handle selected audio files when the user chooses them
    audioFilesInput.addEventListener("change", (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            // Iterate through selected files and add them to the songList
            for (let i = 0; i < selectedFiles.length; i++) {
                const newAudio = URL.createObjectURL(selectedFiles[i]);
                // Extract the file name from the full path
                const fileName = selectedFiles[i].name;
                songList.push(fileName);
            }
            // If no song is currently playing, start playing the newly added song
            if (!isPlaying) {
                currentSongIndex = songList.length - selectedFiles.length;
                audio.src = songList[currentSongIndex];
                audio.play();
                playPauseButton.innerHTML = '<i class="bi bi-pause-circle-fill bootrstrap-icons"></i>';
                isPlaying = true;
            }
            // Update the song name
            updateSongName();
        }
    });

    // Initialize the song name
    updateSongName();

});