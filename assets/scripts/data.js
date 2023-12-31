/* JAVASCRIPT file for THE CREATIVE WRITER
     - DATA ONLY
    Code Institute Milestone Project 2
    Author: Mikhaila Burgess, 2023

    JS version - ES6
*/

/*jshint esversion: 6 */


// Maximum number of columns for displaying the writing prompt
const numColumns = 2;

// All available genres (to be used in future development)
const genres = ["General", "Historical", "Fantasy", "Adventure", "Scary"];

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

// Data for the genre selection cards
const genreCards = [
	{id: "adventure", image: "ai-generated-hiker.jpg", altText: "AI-generated sketch of a man wearing a backpack, hiking through rocky mountains.", 
        displayName: "Adventure", description: "Dive in and take an exciting adventure into places and situations unknown."},
    {id: "historical", image: "castle.jpg", altText: "Drawing of a path leading to a medieval castle with turrets, surrounded by hills and trees. ", 
        displayName: "Historical", description: "Revisit the past and use your imagination to explore alternatives to historical events (global or personal)."},
    {id: "fantasy", image: "floating-home.jpg", altText: "Drawing of a lake with a backdrop of rocky mountains. Suspended in the air above the lake is a small rock, with a house and some trees perched on top.", 
        displayName: "Fantasy", description: "Witches and wizards. Dragons and goblins. Forests, castles and haunted houses. Where will your imagination take you?"},
    {id: "scary", image: "full-moon.jpg", altText: "Dark and creepy drawing of a person in a long red cloak walking through a dark, misty wood towards a cottage with one light in the window, underneath a full moon. A wolf watches from behind a tree.", 
        displayName: "Scary", description: "Dare you face your fears? Or would you prefer to create someone else's nightmare? Select this option ... if you dare!"},
    {id: "justwrite", image: "ai-generated-library.jpg", altText: "AI-generated sketch of a person sitting by a window in a library, at a desk covered in books, holding a blank notebook. ", 
        displayName: "Just Write!", description: "Can't decide? Want to be surprised? Select this option for a random writing prompt."},
    {id: "experiment", image: "books.jpg", altText: "Sketch of a pile of books, a pocket-watch, penknife and a pipe.", 
        displayName: "Experiment", description: "To have full control and create a prompt unrestricted by genre, choose this option."}
];

// Details for each of the writing prompt elements
const promptDetails = [
    {id:"hero", placeholder: "Hero - character", aria:"Type of character for the hero of the story"},
    {id:"heroMood", placeholder: "Hero - mood", aria:"Mood of the story hero"},
    {id:"villain", placeholder: "Villain - character", aria:"Type of character for the villain of the story"},
    {id:"villainMood", placeholder: "Villain - mood", aria:"Mood of the story villain"},
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
 * 
 * NOTE: Icons and emojis planned for use in future development
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
    {name: "superhero", icon: "fa-solid fa-person", emojisym: "129464", genre: ["General", "Fantasy", "Adventure"]},
    {name: "explorer", icon: "fa-solid fa-person", emojisym: "128104", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "time-traveler", icon: "fa-solid fa-person", emojisym: "128104", genre: ["General", "Historical", "Fantasy"]}
];

const villains = [
    {name: "zombie", icon: "fa-solid fa-biohazard", emojisym: "129503", genre: ["Fantasy", "Scary", "General", "Adventure"]},
    {name: "evil squirrel", icon: "fa-solid fa-biohazard", emojisym: "128063", genre: ["General", "Scary"]},
    {name: "cow", icon: "fa-solid fa-cow", emojisym: "128004", genre: ["Fantasy", "General", "Adventure"]},
    {name: "spider", icon: "fa-solid fa-spider", emojisym: "128375", genre: ["Historical", "Scary", "General"]},
    {name: "crazy professor", icon: "fa-solid fa-user-graduate", emojisym: "", genre: ["General"]},
    {name: "killer frog", icon: "fa-solid fa-frog", emojisym: "", genre: ["General", "Fantasy", "Scary", "Adventure"]},
    {name: "crow", icon: "fa-solid fa-crow", emojisym: "", genre: ["Fantasy", "Historical", "Scary", "General"]},
    {name: "creepy crawlies", icon: "fa-solid fa-bugs", emojisym: "", genre: ["Fantasy", "Historical", "Scary", "General", "Adventure"]},
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
    {name: "otter", icon: "fa-solid fa-otter", emojisym: "129446", genre: ["General", "Adventure"]},
    {name: "robot", icon: "fa-solid fa-circle-exclamation", emojisym: "129302", genre: ["General", "Fantasy"]},
    {name: "t-rex", icon: "fa-solid fa-circle-exclamation", emojisym: "129430", genre: ["General", "Fantasy", "Scary"]},
    {name: "badger", icon: "fa-solid fa-circle-exclamation", emojisym: "129441", genre: ["General", "Adventure"]},
    {name: "witch", icon: "fa-solid fa-circle-exclamation", emojisym: "129497", genre: ["Fantasy"]},
    {name: "vampire", icon: "fa-solid fa-circle-exclamation", emojisym: "129499", genre: ["Fantasy", "Scary"]},
    {name: "virus", icon: "fa-solid fa-virus", emojisym: "129440", genre: ["General", "Scary"]},
    {name: "supervillain", icon: "fa-solid fa-circle-exclamation", emojisym: "129465", genre: ["General", "Fantasy", "Adventure"]},
    {name: "minotaur", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["Fantasy"]},
    {name: "goblin", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["Fantasy"]},
    {name: "dalek", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Fantasy", "Adventure", "scary"]}
];

const heroMoods = [
    {name: "happy", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "cheerful", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "optimistic", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "pessimistic", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "sad", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "excited", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "melancholic", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy"]},
    {name: "pensive", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy"]},
    {name: "scared", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Scary"]},
    {name: "frightened", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Scary"]},
    {name: "nervous", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Scary", "Fantasy"]},
    {name: "apprehensive", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Adventure", "Scary", "Fantasy"]}
];

const villainMoods = [
    {name: "cheerful", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "optimistic", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "pessimistic", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "mischievous", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "wicked", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Fantasy"]},
    {name: "vengeful", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "angry", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "excited", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "confused", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "annoyed", icon: "fa-solid fa-brain", emojisym: "129504", genre: ["General", "Historical", "Fantasy", "Adventure"]}
];

const items = [
    {name: "sword", icon: "fa-solid fa-spoon", emojisym: "128481", genre: ["Historical", "Fantasy", "Adventure"]},
    {name: "dagger", icon: "fa-solid fa-spoon", emojisym: "128481", genre: ["Historical", "Fantasy", "Adventure"]},
    {name: "kitchen knife", icon: "fa-solid fa-spoon", emojisym: "128481", genre: ["General", "Historical", "Scary", "Adventure"]},
    {name: "shield", icon: "fa-solid fa-shield-halved", emojisym: "", genre: ["Historical", "Fantasy", "Adventure"]},
    {name: "lemon", icon: "fa-solid fa-lemon", emojisym: "127819", genre: ["General", "Fantasy", "Adventure", "Scary"]},
    {name: "cactus", icon: "fa-solid fa-spa", emojisym: "127797", genre: ["General", "Fantasy", "Adventure", "Scary"]},
    {name: "sponge", icon: "fa-solid fa-splotch", emojisym: "", genre: ["General", "Scary"]},
    {name: "spatula", icon: "fa-solid fa-spoon", emojisym: "128280", genre: ["General", "Historical", "Adventure", ]},
    {name: "hotdog", icon: "fa-solid fa-hotdog", emojisym: "127789", genre: ["General"]},
    {name: "balloon", icon: "fa-solid fa-circle",emojisym: "127880", genre: ["General", "Scary", "Adventure"]},
    {name: "pencil", icon: "fa-solid fa-pencil", emojisym: "128221", genre: ["General", "Adventure", "Historical"]},
    {name: "rugby ball", icon: "fa-solid fa-football", emojisym: "127945", genre: ["General"]},
    {name: "letter", icon: "fa-solid fa-envelope", emojisym: "128232", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "sealed envelope", icon: "fa-solid fa-envelope", emojisym: "128232", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "hammer", icon: "fa-solid fa-hammer", emojisym: "128296", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "teacup", icon: "fa-solid fa-mug-saucer", emojisym: "9749", genre: ["General", "Historical", "Fantasy"]},
    {name: "cardigan", icon: "fa-solid fa-shirt", emojisym: "128280", genre: ["General", "Adventure", "Scary"]},
    {name: "sweatshirt", icon: "fa-solid fa-shirt", emojisym: "128280", genre: ["General", "Adventure", "Scary"]},
    {name: "t-shirt", icon: "fa-solid fa-shirt", emojisym: "128280", genre: ["General", "Adventure"]},
    {name: "pair of socks", icon: "fa-solid fa-socks", emojisym: "129510", genre: ["General", "Adventure", "Scary"]},
    {name: "glasses", icon: "fa-solid fa-glasses", emojisym: "128083", genre: ["General"]},
    {name: "cardboard box", icon: "fa-solid fa-box-open", emojisym: "128280", genre: ["General", "Scary"]},
    {name: "potion bottle", icon: "fa-solid fa-flask", emojisym: "128280", genre: ["Fantasy"]},
    {name: "witch's hat", icon: "fa-solid fa-hat-wizard", emojisym: "128280", genre: [ "Fantasy", "Scary"]},
    {name: "magic wand", icon: "fa-solid fa-wand-magic-sparkles", emojisym: "128280", genre: ["Fantasy"]}, 
    {name: "broken magic wand", icon: "fa-solid fa-wand-magic", emojisym: "128280", genre: ["Fantasy"]}, 
    {name: "guitar", icon: "fa-solid fa-guitar", emojisym: "128280", genre: ["General", "Historical", "Fantasy", "Adventure"]}, 
    {name: "radio", icon: "fa-solid fa-radio", emojisym: "128280", genre: ["General", "Adventure", "Scary"]}, 
    {name: "armour", icon: "fa-solid fa-shield-halved", emojisym: "128280", genre: ["Historical"]},
    {name: "codpiece", icon: "fa-solid fa-shrimp", emojisym: "128280", genre: ["Historical"]},
    {name: "helmet", icon: "fa-solid fa-shrimp", emojisym: "128280", genre: ["Historical"]},
    {name: "a carrot", icon: "fa-solid fa-carrot", emojisym: "129365", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "bow and arrow", icon: "fa-solid fa-location-arrow", emojisym: "128280", genre: ["Historical"]},
    {name: "goblet", icon: "fa-solid fa-wine-glass", emojisym: "127863", genre: ["General", "Historical", "Fantasy"]},
    {name: "camera", icon: "fa-solid fa-camera-retro", emojisym: "128280", genre: ["General", "Adventure", "Scary"]},
    {name: "photograph", icon: "fa-solid fa-image", emojisym: "128280", genre: ["General", "Historical", "Adventure", "Scary"]},
    {name: "bicycle", icon: "fa-solid fa-bicycle", emojisym: "128280", genre: ["General", "Adventure"]},
    {name: "briefcase", icon: "fa-solid fa-briefcase", emojisym: "128188", genre: ["General", "Adventure", "Scary"]},
    {name: "key", icon: "fa-solid fa-key", emojisym: "128273", genre: ["General", "Adventure", "Scary"]},
    {name: "a rusty key", icon: "fa-solid fa-key", emojisym: "128477", genre: ["Fantasy", "Historical", "Adventure", "Scary"]},
    {name: "torch", icon: "fa-solid fa-circle-exclamation", emojisym: "128294", genre: ["General", "Adventure", "Scary"]},
    {name: "candle", icon: "fa-solid fa-circle-exclamation", emojisym: "128294", genre: ["General", "Adventure", "Historical", "Fantasy", "Scary"]},
    {name: "fire extinguisher", icon: "fa-solid fa-fire-extinguisher", emojisym: "129519", genre: ["General"]},
    {name: "compass", icon: "fa-solid fa-compass", emojisym: "129517", genre: ["General", "Adventure"]}
];

const settings = [
    {name: "castle", icon: "fa-solid fa-landmark", emojisym: "127984", genre: ["Fantasy", "Historical", "General"]},
    {name: "warehouse", icon: "fa-solid fa-industry", emojisym: "127984", genre: ["General", "Scary"]},
    {name: "factory", icon: "fa-solid fa-industry", emojisym: "127984", genre: ["Historical", "General"]},
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
    {name: "chocolate mountain", icon: "fa-solid fa-mountain", emojisym: "128507", genre: ["Fantasy"]},
    {name: "dragon's mountain", icon: "fa-solid fa-mountain", emojisym: "128507", genre: ["Fantasy"]},
    {name: "fairy house", icon: "fa-solid fa-dungeon", emojisym: "128280", genre: ["Fantasy"]},
    {name: "gingerbread house", icon: "fa-solid fa-dungeon", emojisym: "128280", genre: ["Fantasy"]},
    {name: "enchanted forest", icon: "fa-solid fa-tree", emojisym: "127795", genre: ["Fantasy", "Scary"]},
    {name: "battlefield", icon: "fa-solid fa-wheat-awn", emojisym: "128280", genre: ["Historical"]},
    {name: "dungeon", icon: "fa-solid fa-dungeon", emojisym: "128280", genre: ["Historical", "Scary"]},
    {name: "tomb", icon: "fa-solid fa-cross", emojisym: "128280", genre: ["Adventure", "Historical", "Scary"]},
    {name: "cable-car", icon: "fa-solid fa-cable-car", emojisym: "128280", genre: ["Adventure", "Scary"]},
    {name: "volcano", icon: "fa-solid fa-volcano", emojisym: "127755", genre: ["Adventure", "General", "Scary"]},
    {name: "spaceship", icon: "fa-solid fa-rocket", emojisym: "128280", genre: ["Adventure", "General", "Scary"]},
    {name: "house", icon: "fa-solid fa-house", emojisym: "127968", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "hotel", icon: "fa-solid fa-hotel", emojisym: "127980", genre: ["General", "Adventure", "Scary"]},
    {name: "church", icon: "fa-solid fa-church", emojisym: "9962", genre: ["General", "Historical", "Scary"]},
    {name: "beach", icon: "fa-solid fa-umbrella-beach", emojisym: "127958", genre: ["General", "Adventure"]}
];

const obstacles = [
    {name: "fire ants", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Fantasy", "Adventure", "Scary"]},
    {name: "loneliness", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "swamp", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["Fantasy", "Adventure", "Scary"]},
    {name: "confusion", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "feeling lost", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "crocodiles", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Adventure"]},
    {name: "psychotic cat", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Scary"]},
    {name: "rabid hamsters", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Scary"]},
    {name: "no money", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Historical", "Adventure"]},
    {name: "darkness", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Historical", "Fantasy", "Adventure", "Scary"]},
    {name: "lost map", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["Adventure"]},
    {name: "broken leg", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Adventure", "Scary"]},
    {name: "flood", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Historical", "Fantasy", "Adventure"]},
    {name: "escaped lion", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["General", "Fantasy", "Adventure"]},
    {name: "goblin army", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["Fantasy"]},
    {name: "corn maze", icon: "fa-solid fa-exclamation", emojisym: "128280", genre: ["Scary"]}
];

const endings = [
    {name: "happy", icon: "fa-solid fa-circle-exclamation", emojisym: "128161", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "sad", icon: "fa-solid fa-circle-exclamation", emojisym: "128161", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "surreal", icon: "fa-solid fa-circle-exclamation", emojisym: "128161", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "inspirational", icon: "fa-solid fa-circle-exclamation", emojisym: "128161", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "melancholic", icon: "fa-solid fa-circle-exclamation", emojisym: "128161", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "educational", icon: "fa-solid fa-circle-exclamation", emojisym: "128161", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "optimistic", icon: "fa-solid fa-circle-exclamation", emojisym: "128161", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]},
    {name: "pessimistic", icon: "fa-solid fa-circle-exclamation", emojisym: "128161", genre: ["General", "Historical", "Adventure", "Fantasy", "Scary"]}
];
