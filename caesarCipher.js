function caesarCipher(input) {
//input:
//'n'
//'information'
//'k'
    //n = length of the unencrypted string argument
    //information = unencrypted string argument
    //k = the number of letters to rotate the alphabet by

    //split method returns an array containing substrings after //dividing the input string argument according to every newline character
    //the value is contained in data    
    var data = input.split('\n');

    //parseInt returns an index of the array found in the array value //of variable data and assign each instance after the newline
    //character to n, information, and k, respectively
    var n = parseInt(data[0]);
    var information = data[1];
    var k = parseInt(data[2]);

    //variable encoded is where the result of solving our encryption is //going to be stored
    var encoded = '';

    //for how many times the iteration goes for, going through each
    //charcter in the string. starting from zero until the length of //the unencrypted string argument stored in n
    for (var i = 0, get, code; i < n; i += 1) {

        //substring is extracted from information,
        //starting from current iteration to index 1, but for each 
        //iteration i > 1, the substring extraction starts from index //1.  
        get = information.substr(i,1);

        //The charCodeAt() method returns an integer between 0 and //65535 representing the UTF-16 code unit at the given index,
        //and in this case the given index is zero
        code = get.charCodeAt(0);

        //if the value is less than 65 and 90, the condition is true
        if (code >= 65 && code <= 90) {
            //ceasar cipher gets applied
            get = String.fromCharCode((65 + ((code - 65) + k) % 26));
        } else if (code >= 97 && code <= 122) {
            //ceasar cipher gets applied
            get = String.fromCharCode((97 + ((code - 97) + k) % 26));
        }
        //the new get value gets added to encoded
        encoded += get;
    }
    //output encoded
    console.log(encoded);
} 