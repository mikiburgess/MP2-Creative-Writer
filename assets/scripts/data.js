/* JAVASCRIPT file for THE CREATIVE WRITER
     - DATA ONLY
    Code Institute Milestone Project 2
    Author: Mikhaila Burgess, 2023

    JS version - ES6
*/

/*jshint esversion: 6 */

// Maximum number of columns for displaying the writing prompt
const numColumns = 2;


// Current writing prompt content
var writingPrompt = {
        genre: "", 
        hero: "", 
        heroMood: "",
        villain: "", 
        villainMood: "",
        item: "", 
        setting: "", 
        obstacle: "", 
        ending: ""
};


// All available genres (to be used in future development)
const genres = ["General", "Historical", "Fantasy", "Adventure", "Scary"];


// Data for the genre selection cards
const genreCards = [
	{id: "adventure", image: "ai-generated-hiker.jpg", altText: "Image of a bear", displayName: "Adventure", 
        description: "Dive in and take an exciting adventure into places and situations unknown."},
    {id: "historical", image: "castle.jpg", altText: "Image of a bear", displayName: "Historical", 
        description: "Revisit the past and use your imagination to explore alternatives to historical events (global or personal)."},
    {id: "fantasy", image: "floating-home.jpg", altText: "Image of a bear", displayName: "Fantasy", 
        description: "Witches and wizzards. Dragons and goblins. Forests, castles and haunted houses. Where will your imagination take you?"},
    {id: "scary", image: "full-moon.jpg", altText: "Image of a bear", displayName: "Scary", 
        description: "Dare you face your fears? Or would you prefer to create someone else's nightmare? Select this option ... if you dare!"},
    {id: "justwrite", image: "ai-generated-library.jpg", altText: "Image of a bear", displayName: "Just Write!", 
        description: "Can't decide? Want to be surprised? Select this option for a random writing prompt."},
    {id: "experiment", image: "books.jpg", altText: "Image of a bear", displayName: "Experiment", 
        description: "To have full control and create a prompt unrestricted by genre, choose this option."}
];


// Details for each of the writing prompt elements
const promptDetails = [
    {id:"hero", placeholder: "Hero - character", aria:"Type of character for the hero of the story"},
    {id:"heroMood", placeholder: "Hero - mood", aria:"Mood of the story hero"},
    {id:"villain", placeholder: "Villain - character", aria:"Type of character for the villain of the story"},
    {id:"villainMood", placeholder: "Villain - mood", aria:"Mood of the story villian"},
    {id:"obstacle", placeholder: "Obstacle", aria:"The obstacle or challenge facing the hero"},
    {id:"item", placeholder: "Item", aria:"An item to be integrated into the story"},
    {id:"setting", placeholder: "Setting", aria:"The setting, or scene, for the story"},
    {id:"ending", placeholder: "Ending", aria:"The type of ending to be aimed for"}
];


/** PROMPT DATA
 * 
 * Data structure: {name: "", icon: "fa-solid ", emojisym: "", genre: []}
 * To use FontAwesome icons: <i class="icon"></i>
 *     eg  <i class="fa-solid fa-person"></i>
 * To use emojis: &#emojisym;   
 *     eg,   &#128540;
*/


const heroes = [
    {name: "man", icon: "fa-solid fa-person", emojisym: "128104", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "old man", icon: "fa-solid fa-person-cane", emojisym: "128116", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "woman", icon: "fa-solid fa-person-dress", emojisym: "128105", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "old woman", icon: "fa-solid fa-person-cane", emojisym: "128117", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "prince", icon: "fa-solid fa-crown", emojisym: "129332", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "princess", icon: "fa-solid fa-crown", emojisym: "128120", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "cowboy", icon: "fa-solid fa-hat-cowboy", emojisym: "", genre: ["Fantasy", "Historical", "Adventure"]},
    {name: "young boy", icon: "fa-solid fa-child", emojisym: "128102", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "young girl", icon: "fa-solid fa-child-dress", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "nurse", icon: "fa-solid fa-user-nurse", emojisym: "", genre: ["General", "Historical", "Scary"]},
    {name: "doctor", icon: "fa-solid fa-user-doctor", emojisym: "", genre: ["General", "Historical", "Scary"]},
    {name: "cat", icon: "fa-solid fa-cat", emojisym: "128049", genre: ["General", "Adventure", "Fantasy"]},
    {name: "dog", icon: "fa-solid fa-dog", emojisym: "", genre: ["General", "Adventure", "Fantasy"]},
    {name: "astronaut", icon: "fa-solid fa-user-astronaut", emojisym: "128054", genre: ["Fantasy", "Adventure", "General"]},
    // {name: "superhero", icon: "fa-solid ", emojisym: "129464", genre: []}
];

const villains = [
    {name: "zombie", icon: "fa-solid fa-biohazard", emojisym: "129503", genre: ["Fantasy", "Scary", "General", "Adventure"]},
    {name: "evil squirrel", icon: "fa-solid fa-biohazard", emojisym: "128063", genre: ["Scary"]},
    {name: "cow", icon: "fa-solid fa-cow", emojisym: "128004", genre: ["Fantasy", "General", "Adventure"]},
    {name: "spider", icon: "fa-solid fa-spider", emojisym: "128375", genre: ["Historical", "Scary", "General"]},
    {name: "crazy professor", icon: "fa-solid fa-user-graduate", emojisym: "", genre: ["General"]},
    {name: "killer frog", icon: "fa-solid fa-frog", emojisym: "", genre: ["General", "Fantasy", "Scary", "Adventure"]},
    {name: "crow", icon: "fa-solid fa-crow", emojisym: "", genre: ["Fantasy", "Historical", "Scary", "General"]},
    {name: "creepy crawlies", icon: "fa-solid fa-bugs", emojisym: "", genre: ["Fantasy", "Historical", "Scary", "General"]},
    {name: "spy", icon: "fa-solid fa-user-secret", emojisym: "128373", genre: ["General", "Adventure"]},
    {name: "burglar", icon: "fa-solid fa-people-robbery", emojisym: "", genre: ["General"]},
    {name: "market researcher", icon: "fa-solid fa-clipboard-user", emojisym: "", genre: ["General"]},
    {name: "evil alien", icon: "fa-solid fa-ethernet", emojisym: "128126", genre: ["Fantasy", "General", "Adventure"]},
    {name: "psychopath", icon: "fa-solid fa-head-side-mask", emojisym: "", genre: ["General", "Scary"]},
    {name: "alien", icon: "fa-solid fa-ethernet", emojisym: "128125", genre: ["Fantasy", "General", "Adventure", "Scary"]},
    {name: "ghost", icon: "fa-solid fa-ghost", emojisym: "128123", genre: ["Fantasy", "Scary"]},
    {name: "nun", icon: "fa-solid fa-person-dress", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "monk", icon: "fa-solid fa-person", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "dragon", icon: "fa-solid fa-dragon", emojisym: "128050", genre: ["Fantasy", "Scary"]},
    {name: "hippo", icon: "fa-solid fa-hippo", emojisym: "129435", genre: ["General", "Fantasy", "Adventure"]},
    // {name: "robot", icon: "fa-solid ", emojisym: "129302", genre: []},
    // {name: "t-rex", icon: "fa-solid ", emojisym: "129430", genre: []},
    // {name: "badger", icon: "fa-solid ", emojisym: "129441", genre: []},
    // {name: "witch", icon: "fa-solid ", emojisym: "129497", genre: []},
    // {name: "vampire", icon: "fa-solid ", emojisym: "129499", genre: []},
    // {name: "virus", icon: "fa-solid ", emojisym: "129440", genre: []},
    // {name: "supervillan", icon: "fa-solid ", emojisym: "129465", genre: []}
];

const heroMoods = [
    {name: "happy", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "cheerful", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "optimistic", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "pessimistic", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "sad", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "excited", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "melancholic", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy"]},
    {name: "pensive", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy"]},
    {name: "scared", icon: "fa-solid ", emojisym: "", genre: ["General", "Scary"]},
    {name: "frightened", icon: "fa-solid ", emojisym: "", genre: ["General", "Scary"]},
    {name: "aprehensive", icon: "fa-solid ", emojisym: "", genre: ["General", "Adventure", "Scary"]}
];

const villainMoods = [
    {name: "cheerful", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "optimistic", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "pessimistic", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "mischevious", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "wicked", icon: "fa-solid ", emojisym: "", genre: ["General", "Fantasy"]},
    {name: "vengeful", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "angry", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]}
];

const items = [
    {name: "sword", icon: "fa-solid fa-spoon", emojisym: "128481", genre: ["Historical", "Fantasy", "Adventure"]},
    {name: "shield", icon: "fa-solid fa-shield-halved", emojisym: "", genre: ["Historical", "Fantasy", "Adventure"]},
    {name: "lemon", icon: "fa-solid fa-lemon", emojisym: "127819", genre: ["General", "Fantasy", "Adventure", "Scary"]},
    {name: "cactus", icon: "fa-solid fa-spa", emojisym: "127797", genre: ["General", "Fantasy", "Adventure", "Scary"]},
    {name: "sponge", icon: "fa-solid fa-splotch", emojisym: "", genre: ["General", "Scary"]},
    {name: "spatula", icon: "fa-solid fa-spoon", emojisym: "", genre: ["General", "Historical", "Adventure", ]},
    {name: "hotdog", icon: "fa-solid fa-hotdog", emojisym: "127789", genre: ["General"]},
    {name: "balloon", icon: "fa-solid fa-circle",emojisym: "127880", genre: ["General", "Scary"]},
    {name: "pencil", icon: "fa-solid fa-pencil", emojisym: "128221", genre: ["General"]},
    {name: "rugby ball", icon: "fa-solid fa-football", emojisym: "127945", genre: ["General"]},
    {name: "letter", icon: "fa-solid fa-envelope", emojisym: "128232", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "hammer", icon: "fa-solid fa-hammer", emojisym: "128296", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "teacup", icon: "fa-solid fa-mug-saucer", emojisym: "9749", genre: ["General", "Historical"]},
    {name: "cardigan", icon: "fa-solid fa-shirt", emojisym: "", genre: ["General"]},
    {name: "pair of socks", icon: "fa-solid fa-socks", emojisym: "129510", genre: ["General", "Adventure"]},
    {name: "glasses", icon: "fa-solid fa-glasses", emojisym: "128083", genre: ["General"]},
    {name: "cardboard box", icon: "fa-solid fa-box-open", emojisym: "", genre: ["General"]},
    {name: "potion bottle", icon: "fa-solid fa-flask", emojisym: "", genre: ["Fantasy"]},
    {name: "witch's hat", icon: "fa-solid fa-hat-wizard", emojisym: "", genre: [ "Fantasy", "Scary"]},
    {name: "magic wand", icon: "fa-solid fa-wand-magic-sparkles", emojisym: "", genre: ["Fantasy"]}, 
    {name: "broken magic wand", icon: "fa-solid fa-wand-magic", emojisym: "", genre: ["Fantasy"]}, 
    {name: "guitar", icon: "fa-solid fa-guitar", gemojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure"]}, 
    {name: "radio", icon: "fa-solid fa-radio", emojisym: "", genre: ["General", "Adventure", "Scary"]}, 
    {name: "armour", icon: "fa-solid fa-shield-halved", emojisym: "", genre: ["Historical"]},
    {name: "codpiece", icon: "fa-solid fa-shrimp", emojisym: "", genre: ["Historical"]},
    {name: "a carrot", icon: "fa-solid fa-carrot", emojisym: "129365", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "bow and arrow", icon: "fa-solid fa-location-arrow", emojisym: "", genre: ["Historical"]},
    {name: "goblet", icon: "fa-solid fa-wine-glass", emojisym: "127863", genre: ["General", "Historical", "Fantasy"]},
    {name: "camera", icon: "fa-solid fa-camera-retro", emojisym: "", genre: ["General", "Adventure", "Scary"]},
    {name: "photograph", icon: "fa-solid fa-image", emojisym: "", genre: ["General", "Historical", "Adventure", "Scary"]},
    {name: "bicycle", icon: "fa-solid fa-bicycle", emojisym: "", genre: ["General", "Adventure"]},
    {name: "briefcase", icon: "fa-solid fa-briefcase", emojisym: "128188", genre: ["General", "Adventure", "Scary"]}
    // {name: "key", icon: "fa-solid ", emojisym: "128273", genre: ["General", "Adventure", "Scary"]},
    // {name: "key", icon: "fa-solid ", emojisym: "128477", genre: ["Fantasy", "Historical", "Adventure", "Scary"]},
    // {name: "torch", icon: "fa-solid ", emojisym: "128294", genre: ["General"]},
    // {name: "fire extinguisher", icon: "fa-solid ", emojisym: "129519", genre: ["General"]},
    // {name: "compass", icon: "fa-solid ", emojisym: "129517", genre: ["General"]}
];

const settings = [
    {name: "castle", icon: "fa-solid fa-landmark", emojisym: "127984", genre: ["Fantasy", "Historical", "General"]},
    {name: "factory", icon: "fa-solid fa-industry", emojisym: "", genre: ["Historical", "General"]},
    {name: "campsite", icon: "fa-solid fa-tents", emojisym: "127957", genre: ["General", "Adventure", "Scary"]},
    {name: "theatre", icon: "fa-solid fa-landmark-dome", emojisym: "127963", genre: ["General", "Historical", "Scary"]},
    {name: "library", icon: "fa-solid fa-landmark-dome", emojisym: "127963", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "garden", icon: "fa-solid fa-tree", emojisym: "128144", genre: ["General"]},
    {name: "bakery", icon: "fa-solid fa-bread-slice", emojisym: "127838", genre: ["General"]},
    {name: "shop", icon: "fa-solid fa-shop", emojisym: "127978", genre: ["General", "Fantasy", "Adventure"]},
    {name: "school", icon: "fa-solid fa-school", emojisym: "127979", genre: ["General", "Scary"]},
    {name: "hospital", icon: "fa-solid fa-hospital", emojisym: "127973", genre: ["General", "Scary"]},
    {name: "woodland", icon: "fa-solid fa-tree", emojisym: "127795", genre: ["General", "Fantasy", "Adventure", "Scary"]},
    {name: "Las Vegas", icon: "fa-solid fa-city", emojisym: "", genre: ["General", "Adventure", "Scary"]},
    {name: "Switzerland", icon: "fa-solid fa-mountain", emojisym: "128507", genre: ["General", "Adventure"]},
    {name: "cave", icon: "fa-solid fa-mound", emojisym: "", genre: ["Historical", "General", "Scary"]},
    {name: "fairy house", icon: "fa-solid fa-dungeon", emojisym: "", genre: ["Fantasy"]},
    {name: "enchanted forest", icon: "fa-solid fa-tree", emojisym: "127795", genre: ["Fantasy", "Scary"]},
    {name: "battlefield", icon: "fa-solid fa-wheat-awn", emojisym: "", genre: ["Historical"]},
    {name: "dungeon", icon: "fa-solid fa-dungeon", emojisym: "", genre: ["Historical", "Scary"]},
    {name: "tomb", icon: "fa-solid fa-cross", emojisym: "", genre: ["Adventure", "Historical", "Scary"]},
    {name: "cable-car", icon: "fa-solid fa-cable-car", emojisym: "", genre: ["Adventure", "Scary"]},
    {name: "volcano", icon: "fa-solid fa-volcano", emojisym: "127755", genre: ["Adventure", "General", "Scary"]},
    {name: "spaceship", icon: "fa-solid fa-rocket", emojisym: "", genre: ["Adventure", "General", "Scary"]},
    // {name: "house", icon: "fa-solid ", emojisym: "127968", genre: []},
    // {name: "hotel", icon: "fa-solid ", emojisym: "127980", genre: []},
    // {name: "church", icon: "fa-solid ", emojisym: "9962", genre: []},
    // {name: "beach", icon: "fa-solid ", emojisym: "127958", genre: []}
];

const obstacles = [
    // {name: "", icon: "fa-solid ", emojisym: "", genre: []}
    {name: "fire ants", icon: "fa-solid ", emojisym: "", genre: ["General", "Fantasy", "Adventure", "Scary"]},
    {name: "lonliness", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "swamp", icon: "fa-solid ", emojisym: "", genre: ["Fantasy", "Adventure", "Scary"]},
    {name: "confusion", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "feeling lost", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "crocodiles", icon: "fa-solid ", emojisym: "", genre: ["General", "Adventure"]},
    {name: "psychotic cat", icon: "fa-solid ", emojisym: "", genre: ["General", "Scary"]},
    {name: "rabid hamsters", icon: "fa-solid ", emojisym: "", genre: ["General", "Scary"]},
    {name: "no money", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Adventure"]},
    {name: "darkness", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "lost map", icon: "fa-solid ", emojisym: "", genre: ["Adventure"]}
];

const endings = [
    {name: "happy", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "sad", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "surreal", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "inspirational", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "amusing", icon: "fa-solid ", emojisym: "", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]}
];
