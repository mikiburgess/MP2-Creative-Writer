/* JAVASCRIPT file for THE CREATIVE WRITER
    Code Institute Milestone Project 2
    Author: Mikhaila Burgess, 2023

    JS version - ES6
*/

/*jshint esversion: 6 */


/**
 * Initialise a new, empty writing prompt object.
 */ 
function initialiseWritingPrompt(){
    writingPrompt.genre = "";
    writingPrompt.hero = "";
    writingPrompt.heroMood = "";
    writingPrompt.villain = ""; 
    writingPrompt.villainMood = "";
    writingPrompt.item = "";
    writingPrompt.setting = ""; 
    writingPrompt.obstacle = "";
    writingPrompt.ending = "";
}


/**
 * Initialise site to be able to generate a new writing prompt.
 */ 
function initialiseSite(){
    $("#upper-section").html(`
        <div class="row justify-content-center">
          <div class="col-11 col-md-8 col-xl-6 site-text site-introduction">
            <p > 
                Welcome to The Creative Writer! Your passport to creativity. Your trusty companion to imaginative brilliance. 
            </p>
            <p> 
                From fantasy sagas to heartwarming tales, The Creative Writer is here to spark your imagination and 
                banish writer's block. 
            </p>
            <p>
                Click below to dive into a world of endless possibilities, unleashing your storytelling potential and 
                jumpstarting your next literary adventure.
            </p>
            <p>
                Ready, set, create!
            </p>
          </div>
        </div>
    `);

    $("#middle-section").empty();

    $("#lower-section").html(`
        <button type="button" class="btn site-btn btn-begin" 
            aria-label="Click to start and go to writing genre selection page" 
            onclick="buildGenreCardsSection()">
            Click here to begin ...
        </button>
    `);

    initialiseWritingPrompt();
}


/**
 * Generate a new prompt according to passed 'genre'.
 * 
 * @return {boolean} Confirm of generation
 */ 
function generatePrompt() {
    let chosenGenre = writingPrompt.genre;

    // Process the two non-specific genre options
    if (chosenGenre == "Just Write!")  {
        chosenGenre = "General";
    } else if (chosenGenre == "Experiment") {
        chosenGenre = "General";  // Future development - select from any genre
    }

    // Include prompt generation in try..catch block in case the data file has failed to load
    try {
        // Step 1: Create an array of options for each element, comprising those relevant to selected genre
        let storyHeroes = heroes.filter((i) => {
            return i.genre.includes(chosenGenre);
        });
        let storyHeroMoods = heroMoods.filter((i) => {
            return i.genre.includes(chosenGenre);
        });
        let storyVillains = villains.filter((i) => {
            return i.genre.includes(chosenGenre);
        });
        let storyVillainMoods = villainMoods.filter((i) => {
            return i.genre.includes(chosenGenre);
        });
        let storyItems = items.filter((i) => {
            return i.genre.includes(chosenGenre);
        });
        let storyObstacles = obstacles.filter((i) => {
            return i.genre.includes(chosenGenre);
        });
        let storySettings = settings.filter((i) => {
            return i.genre.includes(chosenGenre);
        });
        let storyEndings = endings.filter((i) => {
            return i.genre.includes(chosenGenre);
        });

        // Step 2: For each element & associated array, select a random option
        writingPrompt.hero = storyHeroes[Math.floor(Math.random() * storyHeroes.length)];
        writingPrompt.villain = storyVillains[Math.floor(Math.random() * storyVillains.length)];
        writingPrompt.heroMood = storyHeroMoods[Math.floor(Math.random() * storyHeroMoods.length)];
        writingPrompt.villainMood = storyVillainMoods[Math.floor(Math.random() * storyVillainMoods.length)];
        writingPrompt.item = storyItems[Math.floor(Math.random() * storyItems.length)];
        writingPrompt.obstacle = storyObstacles[Math.floor(Math.random() * storyObstacles.length)];
        writingPrompt.setting = storySettings[Math.floor(Math.random() * storySettings.length)];
        writingPrompt.ending = storyEndings[Math.floor(Math.random() * storyEndings.length)];

        return true;

    } catch(err) {
        console.log("Error generating prompt: " + err);
        return false;
    }
    
} 


/**
 * Check if genre has been selected.
 *    if yes - create prompt then build prompt section
 *    if no - tell user they need to select a genre
 * 
 */ 
function createPrompt() {
    if (writingPrompt.genre) {
        if (generatePrompt()) {
            buildPromptSection();
            populateWritingPromptBoxes();
        };
    } else {
        window.alert("Please make a selection before proceeding")
    }
}


/**
 * Generate a new item for the selected promt, according to passed 'genre'.
 * 
 * @param {string} promptData the prompt element selected by the user for refreshing.
 */ 
function refresh(promptData) {
    let chosenGenre = writingPrompt.genre;
    if (chosenGenre == "Just Write!")  {
        chosenGenre = "General";
    } else if (chosenGenre == "Experiment") {
        chosenGenre = "General";  // Further development - select from any genre
    }

    if (promptData == '') { // Check if prompt has been generated. If empty, then generate a new prompt
        createPrompt();
        populateWritingPromptBoxes();
    } else {
        switch(promptData) {  // Based on the button selected, generate a new random prompt element
            case 'hero': {
                let storyElements = heroes.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.hero = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#hero").val("Hero: " + writingPrompt.hero.name);
                break;
            } 
            case 'heroMood': {
                let storyElements = heroMoods.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.heroMood = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#heroMood").val("Hero's Mood: " + writingPrompt.heroMood.name);
                break;
            } 
            case 'villain': {
                let storyElements = villains.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.villain = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#villain").val("Villain: " + writingPrompt.villain.name);
                break;
            } 
            case 'villainMood': {                
                let storyElements = villainMoods.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.villainMood = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#villainMood").val("Villain's Mood: " + writingPrompt.villainMood.name);
                break;
            } 
            case 'item': {
                let storyElements = items.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.item = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#item").val("Item: " + writingPrompt.item.name);
                break;
            } 
            case 'setting': {
                let storyElements = settings.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.setting = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#setting").val("Setting: " + writingPrompt.setting.name);
                break;
            } 
            case 'obstacle': {
                let storyElements = obstacles.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.obstacle = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#obstacle").val("Obstacle: " + writingPrompt.obstacle.name);
                break;
            } 
            case 'ending': {
                let storyElements = endings.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.ending = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#ending").val("Ending: " + writingPrompt.ending.name);
                break;
            } 
            default:
                // do nothing
        }
        
    } 
}


/**
 * Display selected genre to the user, and update writingPrompt object.
 * 
 * @param {string} selectedGenre dirplay name of the selected genre.
 */ 
function displaySelectedGenre(selectedGenre) {
    if (selectedGenre) {
        writingPrompt.genre = selectedGenre;
        $(".text-prompt-genre").text(selectedGenre);
    } else {
        $(".text-prompt-genre").text("chosen genre ...");    }
}


/**
 * Build and display the genre cards section.
 * 
 */ 
function buildGenreCardsSection() {
    // 1. Add display for currently selected genre (upper section)
    // 2. iterate though each genre card 
    //      generate content
    // 3. update HTML section content (middle section)
    // 4. add the 'inspire me' button (lower section)

    // Clear previous content from upper section
    $("#upper-section").html(`
        <img src="assets/images/scroll.png" class="scroll"/>
        <div class="text-prompt-genre"></div>
    `);
    displaySelectedGenre();
    
    $("#middle-section").html(`
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center genre-cards">
        </div>
    `);

    // Build HTML for the middle section
    for (let i = 0; i < genreCards.length; i++) {
        $(".genre-cards").append(`
            <div class="col col-genre-card">
                <div class="card genre-card shadow h-100" id="${genreCards[i].id}">
                    <img src="assets/images/${genreCards[i].image}" class="card-img-top shadow img-genre-card site-img" alt="${genreCards[i].altText}">
                <div class="card-body">
                  <h5 class="card-title">${genreCards[i].displayName}</h5>
                  <p class="card-text">${genreCards[i].description}</p>
                </div>
                <button class="btn btn-genre-card-select site-btn" role="button" 
                    aria-label="Select the ${genreCards[i].displayName} genre for generating the writing prompt"
                    onclick="displaySelectedGenre('${genreCards[i].displayName}')">
                    Select ${genreCards[i].displayName}!
                </button>
              </div>
            </div>
        `);
        
    }

    $("#lower-section").html(`
        <div class="row">
            <div class="col">
                <button class="btn btn-genre-inspire site-btn" type="button" aria-haspopup="dialog"
                aria-label="Confirm genre selection and proceed to seeing your generated writing prompt"
                onClick="createPrompt()">Show me my writing prompt ...</button>
             </div>
        </div>
    `);
}


/**
 * Build and display the generated writing prompt section.
 * 
 */ 
function buildPromptSection(){
    // Process outline:
    //   1. identify/specify required prompts
    //   2. set number of columns (initially static - in future to be dynamic)
    //   3. iterate though each required prompt element
    //        add text and refresh button
    //   4. append code to appropriate section
    //   5. add the buttons
    
    // Clear HTML content of the middle section
    $("#middle-section").empty();

    // Build HTML for the middle section
    for (let i = 0; i < promptDetails.length; i+= numColumns) {
        let currentHTML = "";
        for (let l=0; l < numColumns; l++) {
            currentHTML += (`
                <div class="col-8 col-md-4 col-text-prompt">
                    <input type="text" class="form-control text-prompt" id="${promptDetails[i+l].id}" 
                        placeholder="${promptDetails[i+l].placeholder}" aria-label="${promptDetails[i+l].aria}" readonly/>
                </div>
                <div class="col-2 col-sm-1 col-btn-refresh">
                    <button class="btn btn-refresh btn-refresh-${promptDetails[i+l].id}" role="button" 
                        aria-label="Refresh the prompt item ${promptDetails[i+l].placeholder}"
                        onClick="refresh('${promptDetails[i+l].id}')"><i class="fa-solid fa-arrows-rotate"></i>
                    </button>
                </div>    
            `);
        }

        // Update section content
        $("#middle-section").append(`
            <div class="row justify-content-center">
                ${currentHTML}
            </div>`);
    }

    // Add interactive buttons to the lower section
    $("#lower-section").html(`
        <div class="row">
          <div class="col">
            <button class="btn btn-regenerate site-btn" type="button" 
                aria-label="Generate a different writing prompt"  onclick="refresh('')">
                I'm not happy. Regenerate
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button class="btn btn-lets-write site-btn" type="button" 
                aria-label="Accept the prompt and proceed to the writing page" onclick="buildWritingSection()">
                I'm happy. Lets write!
            </button>
          </div>
        </div>
    `);
}


/**
 * Add the current prompt to the writing prompt section
 *   - populates the prompt input boxes
 */
function populateWritingPromptBoxes() {
    $("#hero").val("Hero: " + writingPrompt.hero.name);
    $("#heroMood").val("Hero's Mood: " + writingPrompt.heroMood.name);
    $("#villain").val("Villain: " + writingPrompt.villain.name);
    $("#villainMood").val("Villain's Mood: " + writingPrompt.villainMood.name);
    $("#obstacle").val("Obstacle: " + writingPrompt.obstacle.name);
    $("#item").val("Item: " + writingPrompt.item.name);
    $("#setting").val("Setting: " + writingPrompt.setting.name);
    $("#ending").val("Ending: " + writingPrompt.ending.name);
}


/**
 * Build and display the writing page.
 * 
 */ 
function buildWritingSection(){
    // Process outline:
    //   1. Add prompt and guidance to upper section
    //   2. Add writing space to middle section
    //   3. Add guidance text and email entry to lower section
    
    let promptText = 
        "GENRE: " + writingPrompt.genre +
        ";<br>HERO: " + writingPrompt.hero.name +
        "; HERO'S MOOD: " + writingPrompt.heroMood.name +
        ";<br>VILLAIN: " + writingPrompt.villain.name +
        "; VILLAIN'S MOOD: " + writingPrompt.villainMood.name +
        ";<br>ITEM: " + writingPrompt.item.name +
        "; SETTING: " + writingPrompt.setting.name +
        ";<br>OBSTACLE: " + writingPrompt.obstacle.name +
        "; ENDING: " + writingPrompt.ending.name;

    // Add prompt and guidance to upper section
    $("#upper-section").html(`
        <div class="row justify-content-center">
            <div class="col-11 col-sm-10 col-md-8 col-lg-6 col-xxl-5">
            <p>Your writing prompt: ...</p>
            <p class="displayed-prompt">${promptText}</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10">
            <p>
                You can take this prompt and use it later, or use the space below now to write your story.
            </p>
            </div>
        </div>
    `);

    // Build and display the interactive writing area, implemented as a form
    $("#middle-section").html(`
    <div class="writing-form-container">
        <!-- <form onsubmit=""> -->
        <form id="writing-form" onsubmit="return false;">
        <div class="row justify-content-center">
            <div class="col writing-area">
                <textarea class="textarea-writing" rows="10" placeholder="Write your story here ..." 
                aria-label="Editable text area for composing your story"></textarea>
            </div>
        </div>
      
        <div class="row justify-content-center">
            <div class="col-8 col-sm-10">
                <p >
                To save a copy of your writing, enter your email address below 
                and your story will fly into your inbox ...
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto my-auto">
                <input type="email" class="site-input form-control" id="input-email"
                    aria-label="Enter your email address" placeholder="Your email address" required/>
            </div>
            <div class="col-auto">
                <button class="btn site-btn" id="btn-email" type="submit" aria-label="Send email to entered email address">
                    Send email
                </button>
            </div>
        </div>
       <!-- </form> -->
       </form>
      </div>
    `);

    $("#lower-section").empty();
    
    document.getElementById("writing-form").addEventListener("submit", sendEmail);
}


/**
 * Send content of writing area to the entered email address.
 * 
 * @return {boolean} Will always return false to block site from reloading
 */ 
function sendEmail(){    
    // retrieve user's email address
    let address = $("#input-email").val();

    // Set lower section to display result
    $("#lower-section").html(`
        <div class="row justify-content-center">
          <div class="col-8 col-md-6 col-lg-4">
            <p class="user-notification">
            </p>
          </div>
        </div>
    `);

    // Construct a formatted prompt for including in email
    let promptText = "GENRE: " + writingPrompt.genre +
    "; HERO: " + writingPrompt.hero.name +
    "; HERO'S MOOD: " + writingPrompt.heroMood.name +
    "; VILLAIN: " + writingPrompt.villain.name +
    "; VILLAIN'S MOOD: " + writingPrompt.villainMood.name +
    "; ITEM: " + writingPrompt.item.name +
    "; SETTING: " + writingPrompt.setting.name +
    "; OBSTACLE: " + writingPrompt.obstacle.name +
    "; ENDING: " + writingPrompt.ending.name;
    
    // Send email to user
    let emailSuccess = emailWriting($("#input-email").val(), writingPrompt, $("textarea").val())

    // Display result notice to the user
    $(".user-notification").html(`
        ACTION COMPLETE! Please check your email (${address})
    `);

    // Return false to block the site from reloading on form submit
    return false;
}


/**
 * Display popup asking user to confirm whether they want to restart from the beginning,
 *  resetting and losing their current prompt.
 */
function restartConfirm() {
    if (window.confirm("Are you sure you want to restart?\n(All data will be lost!)")) {
        initialiseSite();
    } else {
        // do nothing
    }
}


// Starting point - initialise the first stage of the site, function called on script import
initialiseSite();