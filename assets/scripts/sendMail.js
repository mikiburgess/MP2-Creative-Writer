/* JAVASCRIPT file for THE CREATIVE WRITER
    Code Institute Milestone Project 2
    Author: Mikhaila Burgess, 2023

    JS version - ES6
*/

/*jshint esversion: 6 */

/**
 * Send content of writing area to the entered email address.
 * Using EmailJS https://www.emailjs.com/
 * 
 * @param {address}
 * @param {prompt}
 * @param {writing}
 */ 

function emailWriting(address, prompt, writing ) {
    
    console.log("function called successfully: emailWriting()");

    let successful = false;
    // console.log(address + "\n" + prompt + "\n" + writing);

    emailjs.send("service_jfvl49m", "mp2_creative_writer", {
        "siteVisitor": address,
        "writing": writing,
        "genre": writingPrompt.genre,
        "hero": writingPrompt.hero.name,
        "heroMood": writingPrompt.heroMood.name,
        "villain:": writingPrompt.villain.name,
        "villainMood": writingPrompt.villainMood.name,
        "item": writingPrompt.item.name,
        "setting": writingPrompt.setting.name,
        "obstacle": writingPrompt.obstacle.name,
        "ending": writingPrompt.ending.name
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    
}