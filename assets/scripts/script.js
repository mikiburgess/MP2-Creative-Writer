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
    console.log("function called successfully: initialiseWritingPrompt()");

    writingPrompt.genre = "";
    writingPrompt.hero = "";
    writingPrompt.heroMood = "";
    writingPrompt.villain = ""; 
    writingPrompt.villainMood = "";
    writingPrompt.item = "";
    writingPrompt.setting = ""; 
    writingPrompt.obstacle = "";
    writingPrompt.ending = "";

    console.log("Writing prompt is currently: " + Object.values(writingPrompt));
}

/**
 * Initialise site to be able to generate a new writing prompt.
 */ 
function initialiseSite(){
    console.log("function called successfully: initialiseSite()");

    $("#upper-section").html(`
        <div class="site-text text-writing-guidance">
            Insert - text to welcome vititors to the site.
            <br>
            Insert - guidance how to use the site.
        </div>
        <div class="site-text text-prompt-genre">
        </div>
    `);

    $("#middle-section").empty();

    $("#lower-section").html(`
        <button type="button" class="btn site-btn btn-begin" onclick="buildGenreCardsSection()">
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
    console.log("function called successfully: generatePrompt()");

    let chosenGenre = writingPrompt.genre;
    if (chosenGenre == "Just Write!")  {
        chosenGenre = "General";
    } else if (chosenGenre == "Experiment") {
        chosenGenre = "General";  // Further development - select from any genre
    }

    try {
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

    writingPrompt.hero = storyHeroes[Math.floor(Math.random() * storyHeroes.length)];
    writingPrompt.villain = storyVillains[Math.floor(Math.random() * storyVillains.length)];
    writingPrompt.heroMood = storyHeroMoods[Math.floor(Math.random() * storyHeroMoods.length)];
    writingPrompt.villainMood = storyVillainMoods[Math.floor(Math.random() * storyVillainMoods.length)];
    writingPrompt.item = storyItems[Math.floor(Math.random() * storyItems.length)];
    writingPrompt.obstacle = storyObstacles[Math.floor(Math.random() * storyObstacles.length)];
    writingPrompt.setting = storySettings[Math.floor(Math.random() * storySettings.length)];
    writingPrompt.ending = storyEndings[Math.floor(Math.random() * storyEndings.length)];

    console.log("Writing prompt is currently: " + Object.values(writingPrompt));
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
    console.log("function called successfully: createPrompt()");

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
    console.log("function called successfully: refresh(" + promptData + ")");

    let chosenGenre = writingPrompt.genre;
    if (chosenGenre == "Just Write!")  {
        chosenGenre = "General";
    } else if (chosenGenre == "Experiment") {
        chosenGenre = "General";  // Further development - select from any genre
    }

    if (promptData == '') {
        createPrompt();
        populateWritingPromptBoxes();
    } else {
        switch(promptData) {
            case 'hero': {
                console.log ("Hero selected");

                let storyElements = heroes.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.hero = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#hero").val("Hero: " + writingPrompt.hero.name);
                break;
            } 
            case 'heroMood': {
                console.log ("Hero Mood selected");

                let storyElements = heroMoods.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.heroMood = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#heroMood").val("Hero's Mood: " + writingPrompt.heroMood.name);
                break;
            } 
            case 'villain': {
                console.log ("Villain selected");

                let storyElements = villains.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.villain = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#villain").val("Villain: " + writingPrompt.villain.name);
                break;
            } 
            case 'villainMood': {
                console.log ("Villain Mood selected");
                
                let storyElements = villainMoods.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.villainMood = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#villainMood").val("Villain's Mood: " + writingPrompt.villainMood.name);
                break;
            } 
            case 'item': {
                console.log ("Item selected");

                let storyElements = items.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.item = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#item").val("Item: " + writingPrompt.item.name);
                break;
            } 
            case 'setting': {
                console.log ("Setting selected");

                let storyElements = settings.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.setting = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#setting").val("Setting: " + writingPrompt.setting.name);
                break;
            } 
            case 'obstacle': {
                console.log ("Obstacle selected");

                let storyElements = obstacles.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.obstacle = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#obstacle").val("Obstacle: " + writingPrompt.obstacle.name);
                break;
            } 
            case 'ending': {
                console.log ("Ending selected");

                let storyElements = endings.filter((i) => {
                    return i.genre.includes(chosenGenre);
                });
                writingPrompt.ending = storyElements[Math.floor(Math.random() * storyElements.length)];
                $("#ending").val("Ending: " + writingPrompt.ending.name);
                break;
            } 
            default:
                console.log ("Unknown entry: " + promptData);
        }
        
    } 
}

/**
 * Display selected genre to the user, and update writingPrompt object.
 * 
 * @param {string} selectedGenre dirplay name of the selected genre.
 */ 
function displaySelectedGenre(selectedGenre) {
    console.log("function called successfully: displaySelectedGenre()");
    if (selectedGenre) {
        writingPrompt.genre = selectedGenre;
        $(".text-prompt-genre").text(selectedGenre);
        console.log("Selected genre = ", selectedGenre);
    } else {
        $(".text-prompt-genre").text("chosen genre ...");
        console.log("No genre selected");
    }
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

    console.log("function called successfully: buildGenreCardsSection()");

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
                <button class="btn btn-genre-card-select site-btn" role="button" onclick="displaySelectedGenre('${genreCards[i].displayName}')">
                    Select ${genreCards[i].displayName}!
                </button>
              </div>
            </div>
        `);
        
    }

    $("#lower-section").html(`
        <div class="row">
            <div class="col">
                <button class="btn btn-genre-inspire site-btn" type="button" onClick="createPrompt()">Inspire me ...</button>
             </div>
        </div>
    `);
}

/**
 * Build and display the generated writing prompt section.
 * 
 * @param {object} chosenGenre 
 * @param {int} numColumns Max number of columns required for the site
 * @return {type} description.
 */ 
function buildPromptSection(){
    // 1. identify/specify required prompts
    // 2. set number of columns (initially static - in future to be dynamic)
    // 3. iterate though each required prompt element
    //      add text and refresh button
    // 4. append code to appropriate section
    // 5. add the buttons
    
    console.log("function called successfully: buildPromptSection()");

    // generatePrompt(chosenGenre);
    
    // Clear previous content from upper section
    // $("#upper-section").empty();

    // Max number of columns to be included per row (currently static)
    // var numColumns = 2;

    // Clear HTML content of the middle section
    $("#middle-section").empty();

    // Build HTML for the middle section
    for (let i = 0; i < promptDetails.length; i+= numColumns) {
        let currentHTML = "";
        for (let l=0; l < numColumns; l++) {
            // console.log("Loop: i = " + i + " and l = " + l);
            currentHTML += (`
                <div class="col-8 col-md-4 col-text-prompt">
                    <input type="text" class="form-control text-prompt" id="${promptDetails[i+l].id}" 
                        placeholder="${promptDetails[i+l].placeholder}" aria-label=""${promptDetails[i+l].aria}" readonly/>
                </div>
                <div class="col-2 col-sm-1 col-btn-refresh">
                    <button class="btn btn-refresh btn-refresh-${promptDetails[i+l].id}" role="button" onClick="refresh('${promptDetails[i+l].id}')"><i class="fa-solid fa-arrows-rotate"></i></button>
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
            <button class="btn btn-regenerate site-btn" type="button" onclick="refresh('')">
                I'm not happy. Regenerate
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button class="btn btn-lets-write site-btn" type="button" onclick="buildWritingSection()">
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
    // 1. Add prompt and guidance to upper section
    // 2. Add writing space to middle section
    // 3. Add guidance text and email entry to lower section
    
    console.log("function called successfully: buildWritingSection()");

    let promptText = 
        "<br>Genre: " + writingPrompt.genre +
        ";<br>Hero: " + writingPrompt.hero.name +
        "; Hero's Mood: " + writingPrompt.heroMood.name +
        ";<br>Villain: " + writingPrompt.villain.name +
        "; Villain's Mood: " + writingPrompt.villainMood.name +
        ";<br>Item: " + writingPrompt.item.name +
        "; Setting: " + writingPrompt.setting.name +
        ";<br>Obstacle: " + writingPrompt.obstacle.name +
        "; Ending: " + writingPrompt.ending.name;

    // Add prompt and guidance to upper section
    $("#upper-section").html(`
        <div class="row justify-content-center">
            <div class="col-8 ">
            <p>Your writing prompt: ...
            ${promptText}</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-8">
            <p>
                You can take this prompt and use it later, or use the space below now to write your story.
            </p>
            </div>
        </div>
    `);

    $("#middle-section").html(`
    <div class="writing-form">
      <form onsubmit="">
        <div class="row justify-content-center">
            <div class="col writing-area">
                <textarea class="textarea-writing" rows="5" placeholder="Write your story here ..." 
                    aria-label="Editable text area for composing your story">
                </textarea>
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
                <input type="email" class="site-input input-email form-control" 
                    placeholder="Your email address" required/>
            </div>
            <div class="col-auto">
                <button class="btn btn-email site-btn" type="button" onclick="sendEmail()">Send email</button>
            </div>
        </div>
      </form>
    </div>
    `);

    $("#lower-section").empty();

}


/**
 * Send content of writing area to the entered email address.
 * 
 * @param {string} emailAddress User-entered email address.
 * @return {number} Response/Success code.
 */ 
function sendEmail(formData){
    console.log("function called successfully: sendEmail(" + emailAddress + ")");
    // get data from form
    // send email
    // add information to lower section of page (confirmation or issue)
}


/**
 * Display popup asking user to confirm whether they want to restart from the beginning,
 *  resetting and losing their current prompt.
 */
function restartConfirm() {
    if (window.confirm("Are you sure you want to restart?\n(All data will be lost!)")) {
        console.log("User confirms they want to restart");
        initialiseSite();
    } else {
        console.log("User says no, they do not want to restart");
    }
}


// Starting point - initialise the first stage of the site
initialiseSite();

