// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat() {
    return cats.shift(name);
}


function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
}


function prependCat(name) {
    const moreCats = [name, ...cats];
    return moreCats;
}


function removeLastCat() {
    // return cats.slice(0, cats.length - 1);
    return cats.slice(0, -1);
}



function removeFirstCat() {
    return cats.slice(1);
}