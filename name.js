var lists = {
    singers: [
        "Olivia Rodrigo",
        "Sabrina Carpenter",
        "Benson Boone",
        "Nessa Barrett",
        "Tate McRae",
        "Madison Beer",
        "Joshua Bassett",
        "Billie Eilish",
        "Ariana Grande",
        "Taylor Swift",
        "Dua Lipa",
        "Justin Bieber",
        "Demi Lovato",
        "Maroon 5",
        "Reneé Rapp",
        "Dove Cameron",
        "Drex Carter",
        "Avicii",
        "Neffex",
        "Yuston XIII",
        "Orelsan",
        "T3NZU",
        "Imagine Dragons",
        "OneRepublic",
        "David Guetta",
        "TheFatRat",
        "Avril Lavigne",
        "Celine Dion",
        "Kurt Kobain",
        "Rihanna",
        "Emily Osment",
        "Ethan Cutkosky",
        "Ben Barnes",
        "Conan Grey"
    ],
    actors: [
        "Ariana Greenblatt",
        "Drew Starkey",
        "Jennifer Aniston",
        "Sydney Sweeney",
        "Madelyn Cline",
        "Pierre Niney",
        "Adèle Exarchopoulos",
        "Timothée Chalamet",
        "Alexandra Demi",
        "Dylan O'brien",
        "Emma Watson",
        "Will Smith",
        "Jenna Ortega",
        "Nina Dobrev",
        "Candice Accola",
        "Emily Osment",
        "Tania Raymonde",
        "Chrisopher Masteron",
        "Ethan Cutkosky",
        "Noel Fisher",
        "Emmy Rossum",
        "Emmy Kenney",
        "Shanola Hampton",
        "Eliza Taylor",
        "Bob Marley",
        "Marie Avgeropoulos",
        "Lindsey Morgan",
        "Thomas McDonell",
        "Ricky Whittle",
        "Devon Bostick",
        "Ben Barnes",
        "Andrew Garfield",
        "Chris Wood",
        "Claire Holt",
        "Joseph Morgan",
        "Seth MacFarlane",
        "Daniel Gilies",
        "Benjamin Wadsworth",
        "Phoebe Tonkin",
        "Lola Flanery",
        "Nicole Wallace",
        "Kylie Cantrall",
    ],
    fashion_models: [
        "Vinnie Hacker",
        "Kendall Jenner",
        "Hailey Bieber",
    ],
    all: []
}



var categories = []

if (localStorage.getItem("custom_category")) {
    Object.keys(JSON.parse(localStorage.getItem("custom_category"))).forEach(function(key) {
        if (lists[key]) {
            delete lists[key];
        }
        lists[key] = JSON.parse(localStorage.getItem("custom_category"))[key];
    });
}

Object.keys(lists).forEach(function(key) {
    categories.push(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
    lists.all = [...new Set(lists.all.concat(lists[key]))];
});