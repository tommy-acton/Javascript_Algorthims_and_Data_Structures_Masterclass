/*
Write a function which takes in a string and returns counts of each character in the String
* */



// checking / advanced questions

// "my phone number is 182763. My skill's" -
/**
 * 1. Should the function be able to handle numbers/ how should it handle it
 * 2. How do you handle spaces
 * 3. How do you handle special characters
 * 4. How to count for lower and upper cases
 * */

/*The interviewer said that we only care about the following */

/**
 * We take numbers into consideration
 * We take all lowercase alphabets into consideration
 */

function charCount(str) {
    // Make object to return at end
    let result = {} ;
    // Loop over string, for each character....
    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND key in the object then add 1 to it
        if (result[char] > 0 ){ // meaning the character is in the object
            result[char] ++;

            // if the char is a number/letter AND not in the object , add it and set value to 1
        } else {
            result[char] = 1;
        };
    }

        // if the char is something else (space, period, etc.) don'st do anything
    // return object at end
    return result;
}

console.log(charCount("booomMMMM!")); // {a:4}

console.log(charCount("hello")); // {h:1, e:1, l:2, 0:1}