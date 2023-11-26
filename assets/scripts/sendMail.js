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
 * @param {address} string Email address to be used
 * @param {writingPrompt} string The writing prompt to be sent
 * @param {writing} string Story written by the user
 */ 

function emailWriting(address, writingPrompt, writing ) {
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
    });
}