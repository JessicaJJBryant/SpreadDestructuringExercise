// SPREAD DESTRUCTURING EXERCISE

// 1a
const mcuShows = ["Loki", "What If...?"];
// 1b
const starWarsShows = ["The Mandalorian", "The Bad Batch"];
// 1c
const disneyPlusShows = [...mcuShows, ...starWarsShows, "Monsters At Work"];
// 1d
console.log(disneyPlusShows);


// 2a
const netflixMovies = {
    action: "Extraction",
    crime: "The Irishman"
};
// 2b
const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night in Miami"
};
// 2c
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: "Hamilton"
};
// 2d
console.log(streamingMovies);


// 3a
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];
// 3b
const [mickey, spidey] = disneyJunior
// 3c Destructuring does not change the value of the disneyJunior Array. So although the mickey variable is now an object with the key as mickey and the value of "Mickey Mouse Clubhouse" and the spidey variable is now an object with the key as spidey and the value of "Spidey and His Amazing Friends," the two shows are still the disneyJunior Array too.
console.log(disneyJunior);


// 4a
const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner"
};
// 4b
const {warMachine, theHulk} = avengers;
// 4c
console.log(avengers);
// 4d
const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
};
// 4e
const {blackWidow: nat, ...others} = moreAvengers;
// 4f
console.log(nat, others);


// Bonus
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
};
// 5a
const {first, second, third} = bonus;
const all = [...first, ...second, ...third];
console.log(all);
// 5b
const [one, two, three, four, five, six, seven, eight, nine] = all;
