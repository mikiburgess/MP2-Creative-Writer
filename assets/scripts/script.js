/* JAVASCRIPT file for THE CREATIVE WRITER
    Code Institute Milestone Project 2
    Author: Mikhaila Burgess, 2023
*/

/**
 * Initialise site to be able to generate a new writing prompt.
 */ 
function initialiseSite(){
    console.log("function called successfully: initialiseSite()");
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


/**
 * Build and display the generated writing prompt section.
 * 
 * @param {object} prompt Object containing all elements of the generated writing prompt.
 * @return {type} description.
 */ 
function buildPromptSection(prompt){
    // 1. identify/specify required prompts
    // 2. set number of columns (initially static - in future to be dynamic)
    // 3. iterate though each required prompt element
    //      add text and refresh button
    // 4. append code to appropriate section
    // 5. add the buttons
    
    console.log("function called successfully: buildPromptSection()");

    generatePrompt("General");
    
    // Clear previous content from upper section
    $("#upper-section").empty();

    // Add boxes for displaying the prompts plus refresh buttons
    let promptDetails = [
        {id:"hero-character", placeholder: "Hero - character", aria:"Type of character for the hero of the story"},
        {id:"hero-mood", placeholder: "Hero - mood", aria:"Mood of the story hero"},
        {id:"challenge", placeholder: "Challenge", aria:"The challenge facing the hero"},
        {id:"item", placeholder: "Item", aria:"An item to be integrated into the story"},
        {id:"setting", placeholder: "Setting", aria:"The setting, or scene, for the story"},
        {id:"ending", placeholder: "Ending", aria:"The type of ending to be aimed for"}
    ];
    // Max number of columns to be included per row (currently static)
    var numColumns = 2;

    // Clear HTML content of the middle section
    $("#middle-section").empty();

    // Build HTML for the middle section
    for (i = 0; i < promptDetails.length; i+= numColumns) {
        let currentHTML = ""
        for (l=0; l < numColumns; l++) {
            console.log("Loop: i = " + i + " and l = " + l);
            currentHTML += (`
                <div class="col-8 col-sm-4 col-text-prompt">
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
            <button class="btn btn-regenerate site-btn" type="button">I'm not happy. Regenerate</button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button class="btn btn-lets-write site-btn" type="button">I'm happy. Lets write!</button>
          </div>
        </div>
    `);

};

