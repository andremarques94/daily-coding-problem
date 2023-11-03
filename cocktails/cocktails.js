const favourites = {
    0: [1, 2, 4, 7],
    1: [1, 4, 7],
    2: [0, 3, 7, 5],
    3: [0, 3, 5],
    4: [5, 8],
    5: [1]
};

const set = new Set();
const flat_favourites = [];

for(let i = 0; i < Object.keys(favourites).length; i++) {
    
    favourites[i].forEach(elem => set.add(elem));
    flat_favourites[i] = favourites[i];
}

const choices_set = [...set]
const choices_pairs = choices_set.reduce((acc, elem) => {

    choices_set.forEach(n => {
        if(!(n===elem)) {
            acc.push([elem,n]);
        }
    })

    return acc;
}, []);


const answer = choices_pairs.filter(cocktail_number_pair => {
    for(let i = 0; i < flat_favourites.length; i++){
        if(!(flat_favourites[i].includes(cocktail_number_pair[0]) || flat_favourites[i].includes(cocktail_number_pair[1]))){
            return false;
        }
    }
   return true;
})[0];


console.log(answer, "The min nr of cocktails is: " + answer.length);





