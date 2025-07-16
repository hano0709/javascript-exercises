const findTheOldest = function(arr) {
    const curr = new Date().getFullYear();
    let value = arr.reduce((oldest, person) => {
        let oldestAge;
        if(oldest.yearOfDeath){
            oldestAge = oldest.yearOfDeath  - oldest.yearOfBirth;
        } else {
            oldestAge = curr - oldest.yearOfBirth;
        }
        let personAge;
        if(person.yearOfDeath){
            personAge  = person.yearOfDeath  - person.yearOfBirth;
        } else {
            personAge = curr - person.yearOfBirth;
        }

        return personAge > oldestAge ? person : oldest;
    }, arr[0]);

    return value;
};

// Do not edit below this line
module.exports = findTheOldest;
