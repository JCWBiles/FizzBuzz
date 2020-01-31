const Fizzbuzz = function(){};

Fizzbuzz.prototype.isDivisibleByThree = function(number){
  // if (number % 3 === 0){
  //   console.log('Fizz');
  // }
  // else {
  //   console.log(number);
  // }
  return this._isDivisibleBy(number, 3);
};

Fizzbuzz.prototype.isDivisibleByFive = function(number){
  // if (number % 5 === 0){
  //   console.log('Buzz');
  // }
  // else {
  //   console.log(number);
  // }
  return this._isDivisibleBy(number, 5);
};

Fizzbuzz.prototype.isDivisibleByThreeAndFive = function(number){
  // if (number % 3 === 0 && number % 5 === 0){
  //   console.log('FizzBuzz');
  // }
  // else {
  //   console.log(number);
  // }
  return this._isDivisibleBy(number, 15)
};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor){
  return (number % divisor === 0);
};

Fizzbuzz.prototype.says = function(number){
  if (this.isDivisibleByThreeAndFive(number)){
    return 'FizzBuzz';
  }
  else if (this.isDivisibleByThree(number)){
    return 'Fizz';
  }
  else if (this.isDivisibleByFive(number)){
    return 'Buzz';
  }
  else {
    return number;
  }
};