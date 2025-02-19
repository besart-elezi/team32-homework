// 1.Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

const result = names.filter((name) => name !== nameToRemove);

console.log(result); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']   


// 2. When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function convertToHoursAndMinutes(decimalHours) {
    let hours = Math.floor(decimalHours); // Get the whole hours
    let minutes = Math.round((decimalHours - hours) * 60); // Convert the decimal to minutes

    return { hours, minutes };
}

function calcTime(travelInformation) {
    const time = travelInformation.destinationDistance / travelInformation.speed;
    const convertTime = convertToHoursAndMinutes(time);
    return convertTime;
}

const travelTime = calcTime(travelInformation);
console.log(`${travelTime.hours} hours and ${travelTime.minutes} minutes`); // 8 hours and 38 minutes



// 3. Series duration of my life
const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];

const lifeSpan = 80;

function yearsToMinutes(years) {
    const minutesInOneYear = 365 * 24 * 60; // 525600 minutes
    return years * minutesInOneYear;
}

function totalMinutes(days, hours, minutes) {
    return (days * 24 * 60) + (hours * 60) + minutes;
}

function logOutSeriesText() {
    let total = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
        let serial = seriesDurations[i];
        let percentage = totalMinutes(serial.days, serial.hours, serial.minutes) * 100 / yearsToMinutes(lifeSpan);
        let percentageRounded = parseFloat(percentage.toFixed(3));
        total = total + percentageRounded;
        console.log(`${serial.title} took ${percentageRounded}% of my life`);

    }
    console.log(`In total that is ${total}% of my life`);
}

logOutSeriesText(); // logs out the text found above

// 4. Smart-ease - Back to the basics!
const notes = [];

function saveNote(content, id) {
    notes.push({ content: `${content}`, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
    if (!id || typeof (id) !== Number) {
        console.log('id is missing or is not a number');
    }
    for (let i = 0; i < notes.length; i++) {
        let itemId = notes[i].id;
        if (id === itemId) {
            return notes[i];
        }
    }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
    for (i = 0; i < notes.length; i++) {

        console.log(`The note with id: ${notes[i].id} has the following note text: ${notes[i].content}`);
    }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry