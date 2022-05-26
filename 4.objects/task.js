function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  
}

Student.prototype.addMark = function (mark){
  if(this.marks === undefined){ 
    let arr = []
    arr.push(mark)
    this.marks = arr;
    } else {
      let arr = Object.values(this.marks)
      arr.push(mark)
      this.marks = arr
    }
}

Student.prototype.addMarks = function(...marks){
  this.marks = marks; 
}

Student.prototype.getAverage = function(){

let sum = this.marks.reduce(function(acc, rate){
  return acc + rate;
});
this.getAverage = sum / this.marks.length;
return this.getAverage
}


Student.prototype.exclude = function(reason){
  delete this.subjectName;
  this.marks = null;
  this.excluded = reason;
}

// ваш код для остальных методов