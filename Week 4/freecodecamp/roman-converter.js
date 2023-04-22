function convertToRoman(num) {
    var roman = "";
    var romanNumList = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var romanNumeral;
    for(var key in romanNumList){
        romanNumeral = Math.floor(num/romanNumList[key]);
        if(romanNumeral >= 0){
        for(var i=0; i<romanNumeral; i++){
            roman += key;
        }
        }
        num = num % romanNumList[key];
    }
    return roman;
    }

convertToRoman(36);

