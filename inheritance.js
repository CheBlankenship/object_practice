var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;

daughter.apply(daughter.firstName, daughter.lastName, daughter.hairColor, daughter.eyeColor);

function showInfo() {
  for (var prop in this) {
    console.log(prop + ': ' + daughter[prop]);
  }
}

showInfo.apply(daughter);
