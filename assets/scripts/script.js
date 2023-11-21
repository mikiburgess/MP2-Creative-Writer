/* JAVASCRIPT file for THE CREATIVE WRITER
    Code Institute Milestone Project 2
    Author: Mikhaila Burgess, 2023
*/




// Details for each of the writing prompt elements
const promptDetails = [
    {id:"heroCharacter", placeholder: "Hero - character", aria:"Type of character for the hero of the story"},
    {id:"heroMood", placeholder: "Hero - mood", aria:"Mood of the story hero"},
    {id:"villainCharacter", placeholder: "Villain - character", aria:"Type of character for the villain of the story"},
    {id:"villainMood", placeholder: "Villain - mood", aria:"Mood of the story villian"},
    {id:"challenge", placeholder: "Challenge", aria:"The challenge facing the hero"},
    {id:"item", placeholder: "Item", aria:"An item to be integrated into the story"},
    {id:"setting", placeholder: "Setting", aria:"The setting, or scene, for the story"},
    {id:"ending", placeholder: "Ending", aria:"The type of ending to be aimed for"}
];

// Current writing prompt content
const writingPrompt = {genre: "", 
    heroCharacter: "", heroMood: "",
    villainCharacter: "", villainMood: "",
    item: "", setting: "", 
    obstacle: "", ending: ""
};

const genreCards = [
	{id: "adventure", image: "placeholder.jpg", altText: "Image of a bear", displayName: "Adventure", 
        description: "Dive in and take an exciting adventure into places and situations unknown."},
    {id: "historical", image: "placeholder.jpg", altText: "Image of a bear", displayName: "Historical", 
        description: "Revisit the past and use your imagination to explore alternatives to historical events (global or personal)."},
    {id: "fantasy", image: "placeholder.jpg", altText: "Image of a bear", displayName: "Fantasy", 
        description: "Witches and wizzards. Dragons and goblins. Forests, castles and haunted houses. Where will your imagination take you?"},
    {id: "scary", image: "placeholder.jpg", altText: "Image of a bear", displayName: "Scary", 
        description: "Dare you face your fears? Or would you prefer to create someone else's nightmare? Select this option ... if you dare!"},
    {id: "justwrite", image: "placeholder.jpg", altText: "Image of a bear", displayName: "Just Write!", 
        description: "Can't decide? Want to be surprised? Select this option for a random writing prompt."},
    {id: "experiment", image: "placeholder.jpg", altText: "Image of a bear", displayName: "Experiment", 
        description: "To have full control and create a prompt unrestricted by genre, choose this option."}
];


/**
 * Initialise a new, empty writing prompt object.
 */ 
function initialiseWritingPrompt(){
    console.log("function called successfully: initialiseWritingPrompt()");

    writingPrompt.genre = "General";
    writingPrompt.heroCharacter = "";
    writingPrompt.heroMood = "";
    writingPrompt.villainCharacter = ""; 
    writingPrompt.villainMood = "";
    writingPrompt.item = "";
    writingPrompt.setting = ""; 
    writingPrompt.obstacle = "";
    writingPrompt.ending = "";

    console.log("Writing prompt is currently: " + Object.values(writingPrompt));
};

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
 * @param {string} genreData the genre that user has selected.
 * @return {object} Populated prompt object.
 */ 
function generatePrompt(genreData) {
    console.log("function called successfully: generatePrompt(" + genreData + ")");
}; 


/**
 * Generate a new item for the selected promt, according to passed 'genre'.
 * 
 * @param {string} promptData the prompt element selected by the user for refreshing.
 */ 
function refresh(promptData) {
    console.log("function called successfully: refresh(" + promptData + ")");
}


function displaySelectedGenre(selectedGenre) {
    $(".text-prompt-genre").text(selectedGenre);
};

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
    $(".text-writing-guidance").empty();
    displaySelectedGenre("Test");
    
    $("#middle-section").html(`
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center genre-cards">
        </div>
    `);

    // Build HTML for the middle section
    for (i = 0; i < genreCards.length; i++) {
        $(".genre-cards").append(`
            <div class="col col-genre-card">
                <div class="card genre-card shadow h-100" id="${genreCards[i].id}">
                    <img src="assets/images/${genreCards[i].image}" class="card-img-top shadow img-genre-card site-img" alt="${genreCards[i].altText}">
                <div class="card-body">
                  <h5 class="card-title">${genreCards[i].displayName}</h5>
                  <p class="card-text">${genreCards[i].description}</p>
                </div>
                <button class="btn btn-genre-card-select site-btn" role="button">Select ${genreCards[i].displayName}!</button>
              </div>
            </div>
        `);
        
    };

    $("#lower-section").html(`
        <div class="row">
            <div class="col">
                <button class="btn btn-genre-inspire site-btn" type="button" onClick="buildPromptSection('Adventure', 2)">Inspire me ...</button>
             </div>
        </div>
    `);
};

/**
 * Build and display the generated writing prompt section.
 * 
 * @param {object} chosenGenre 
 * @param {int} numColumns Max number of columns required for the site
 * @return {type} description.
 */ 
function buildPromptSection(chosenGenre, numColumns){
    // 1. identify/specify required prompts
    // 2. set number of columns (initially static - in future to be dynamic)
    // 3. iterate though each required prompt element
    //      add text and refresh button
    // 4. append code to appropriate section
    // 5. add the buttons
    
    console.log("function called successfully: buildPromptSection()");

    generatePrompt(chosenGenre);
    
    // Clear previous content from upper section
    $("#upper-section").empty();

    // Max number of columns to be included per row (currently static)
    // var numColumns = 2;

    // Clear HTML content of the middle section
    $("#middle-section").empty();

    // Build HTML for the middle section
    for (i = 0; i < promptDetails.length; i+= numColumns) {
        let currentHTML = ""
        for (l=0; l < numColumns; l++) {
            console.log("Loop: i = " + i + " and l = " + l);
            currentHTML += (`
                <div class="col-8 col-md-4 col-text-prompt">
                    <input type="text" class="form-control text-prompt" id="${promptDetails[i+l].id}" 
                        placeholder="${promptDetails[i+l].placeholder}" aria-label=""${promptDetails[i+l].aria}" readonly/>
                </div>
                <div class="col-2 col-sm-1 col-btn-refresh">
                    <button class="btn btn-refresh btn-refresh-${promptDetails[i+l].id}" role="button" onClick="refresh('${promptDetails[i+l].id}')"><i class="fa-solid fa-arrows-rotate"></i></button>
                </div>    
            `);
        };

        // Update section content
        $("#middle-section").append(`
            <div class="row justify-content-center">
                ${currentHTML}
            </div>`);
    };

    // Add interactive buttons to the lower section
    $("#lower-section").html(`
        <div class="row">
          <div class="col">
            <button class="btn btn-regenerate site-btn" type="button">
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

};


/**
 * Build and display the writing page.
 * 
 * @param {object} prompt Object containing all elements of the generated writing prompt.
 * @return {type} description.
 */ 
function buildWritingSection(){
    // 1. Add prompt and guidance to upper section
    // 2. Add writing space to middle section
    // 3. Add guidance text and email entry to lower section
    
    console.log("function called successfully: buildWritingSection()");

    // Add prompt and guidance to upper section
    $("#upper-section").html(`
        <div class="row justify-content-center">
            <div class="col">
            <p>Your writing prompt: ...</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col">
            <p>
                You can take this prompt and use it later, or use the space below now to write your story.
            </p>
            </div>
        </div>
    `);

    $("#middle-section").html(`
        <div class="row justify-content-center">
            <div class="col-8 col-sm-10 writing-area">
                <textarea class="textarea-writing" rows="5" placeholder="Write your story here ..." aria-label="Editable text area for composing your story"></textarea>
            </div>
        </div>
    `);

    $("#lower-section").html(`
        <div class="row justify-content-center">
            <div class="col-8 col-sm-6 ">
            <p>
                To save a copy of your writing, enter your email address below 
                and your story will fly into your inbox ...
            </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-8 col-sm-10 col-lg-8">
                <input type="email" class="site-input input-email" placeholder="Your email address" />
                <button class="btn btn-email site-btn" type="button">Send email</button>
            </div>
        </div>
    `);

}

/**
 * Send content of writing area to the entered email address.
 * 
 * @param {string} emailAddress User-entered email address.
 * @return {number} Response/Success code.
 */ 
function emailPrompt(emailAddress){
    console.log("function called successfully: emailPrompt(" + emailAddress + ")");
}

// Starting point - initialise the first stage of the site
initialiseSite();

