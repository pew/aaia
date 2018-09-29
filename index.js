const abc = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu"
};

aaia = function(char) {
    var char = char.toUpperCase().trim().split('');
    var output = '';
    for (let index = 0; index < char.length; index++) {
        const element = char[index];
        if(element === ' '){
            // console.log();
            //output += '';
        }
        if(!isNaN(element)){
            // console.log(element);
            output += element + '\n';
        }
        if(abc[element]) {
            // console.log(abc[element]);
            output += abc[element] + '\n';
        }
    }
    return output.trim()
}

// aaia('jonas 23 wagner')
// console.log(aaia('sup sup 44 sup'));
