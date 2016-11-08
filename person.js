// Given this Person type:
function Person(name, greet) {
  this.name = name;
  this.greet = function(other) {
    console.log("Hello " + other.name + "! My name is " + this.name + ".");
  };
}
// Rewrite the above type by inlining it's greet method into it's constructor.
var bob = new Person('bob');

console.log(bob.greet('pony'));
// Person.prototype.greet = function(other) {
//   console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
// };
