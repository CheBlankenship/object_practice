function like() {
  this.timesLiked++;
}
var pic1 = {
  url: 'lolcat.jpg',
  timesLiked: 1,
  like: function () {
    this.timesLiked++;
  }
};
var pic2 = {
  url: 'chucknorris.jpg',
  timesLiked: 0,
  hate : function() {
    this.timesLiked--;
  }
};
// 1.Add or modify the above code to attach to the like function to pic1 and pic2 and then call it as a method to increment the timesLiked counters of those pics.
console.log(pic1.timesLiked);
pic1.like();
console.log(pic1.timesLiked);
pic1.like();
console.log(pic1.timesLiked);

// 2.
function hate() {
  this.timesLiked--;
}

var pic1 = {
  url: 'lolcat.jpg',
  timesLiked: 5
};

hate.apply(pic1);
hate.apply(pic1);

console.log(pic1.timesLiked);
