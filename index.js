// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(stringName, eventName) {
    const newArray = [];
    for (let i = 0; i < stringName.length; i++) {
        newArray.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
};

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
};