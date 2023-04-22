function rot13(str) { 
    var arr = str.split("");
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt() >= 78 && arr[i].charCodeAt() <= 90) {
            arr2.push(String.fromCharCode(arr[i].charCodeAt() - 13));
        } 
        else if(arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 77) {
            arr2.push(String.fromCharCode(arr[i].charCodeAt()+90-65-12));
        }
        else {
            arr2.push(arr[i]);
        }
    }
    return arr2.join(""); 
}

rot13("SERR PBQR PNZC");

