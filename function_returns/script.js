console.log('*****');
//Part 1: Checking if the number is big
console.log('Part 1: Checking if the number is big:');
const checkNumber = function(number){
    if (number > 100){
        return 'true';
    }else {
        return 'false';
    } 
};

console.log(checkNumber(38));
console.log(checkNumber(150));
console.log(checkNumber(38));
console.log(checkNumber(1.285));
console.log(checkNumber(15862.256));
//This function produces the word to the console(result) of a number check
console.log('*****');

//Part 2: Bouncer at club
console.log('Part 2: Bouncer at club:');

const bouncerBot = function (maxNum, currNum, age){ 
  
    if (currNum < maxNum & age > 18){
        return 'Come in!';
    } else if (currNum >= maxNum & age > 18){
        return "It's too busy now, please come back later";
    } else{
        return "This is club for adults";
    }
}
//Come in!
console.log(bouncerBot(500, 250, 25));
//It's too busy now, come back later
console.log(bouncerBot(500, 503, 25));
//This is club for adults
console.log(bouncerBot(500, 600, 13));
//This function produces the right result after the calculation
console.log('*****');

//Part 3: Calculating the average
console.log('Part 3: Calculating the average:');

const averageNumber = function(number1,number2,number3,number4,number5){
    return Math.round((number1+number2+number3+number4+number5)/5);
};

console.log(averageNumber(1,8,6,4,20));
console.log(averageNumber(3,50,6,2,0));
console.log(averageNumber(1.25635,1588,6,4,20.85));
//If we add extra argument, function still reads only first 5 of them
console.log(averageNumber(1,8,6,4,20,10));
//This function does something(math calculation)
console.log('*****');