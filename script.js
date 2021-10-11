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
// 3c Destructuring does not change the value of the disneyJunior Array. So although the mickey variable is now has the value of "Mickey Mouse Clubhouse" and the spidey variable is now has the value of "Spidey and His Amazing Friends," the two shows are still the disneyJunior Array too.
console.log(disneyJunior);
// or console.log(mickey, spidey);


// 4a
const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner"
};
// 4b
const {warMachine, theHulk} = avengers;
// 4c
// console.log(avengers); This will get the object value pairs. to get the values of the two new variables, we must do this:
console.log(warMachine, theHulk);
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
// const {first, second, third} = bonus;
// const all = [...first, ...second, ...third];
// console.log(all);
// Better to do it this way:
const all = [
    ...bonus["first"],
    ...bonus["second"],
    ...bonus["third"]
];
console.log(all);
/* OR:
const all = [
    ...bonus.first,
    ...bonus.second,
    ...bonus.third
] */
// 5b He said this was not right because he was wanting the "bonus" object and not the "all"
// const [one, two, three, four, five, six, seven, eight, nine] = all;
// This destructures all values of the keys within the object.
// const {first, second, third} = bonus;
// This destructures all values of arrays within the bonus object:
// const [one, two, three] = first;
// const [four, five, six] = second;
// const [seven, eight, nine] = third;

// BUT THIS WILL DO IT ALL IN LESS LINES:
const [one, two, three] = bonus.first;
const [four, five, six] = bonus.second;
const [seven, eight, nine] = bonus.third;
console.log(one, two, three, four, five, six, seven, eight, nine);
