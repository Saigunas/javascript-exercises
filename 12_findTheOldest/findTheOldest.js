const findTheOldest = function(people) {
    const oldest = people.sort(function (a, b) {
        let lastGuy;
        let nextGuy;

        if(!("yearOfDeath" in a)) {
            currentYear = new Date().getFullYear();
            lastGuy = calculateAge(a.yearOfBirth, currentYear);
        } else {
            lastGuy = calculateAge(a.yearOfBirth, a.yearOfDeath);
        }

        if(!("yearOfDeath" in b)) {
            currentYear = new Date().getFullYear();
            nextGuy = calculateAge(b.yearOfBirth, currentYear);
        } else {
            nextGuy = calculateAge(b.yearOfBirth, b.yearOfDeath);
        }
       
        return lastGuy > nextGuy ? -1 : 1;
    });
    return oldest[0];
};

function calculateAge(yb, yd) {
    return yd - yb;
}
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
