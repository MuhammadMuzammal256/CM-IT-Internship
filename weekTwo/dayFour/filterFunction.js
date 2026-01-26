console.log(`Find duplicate characters in a string`);



function findDuplicate(){
    var str = "fgfsdfadfsgdfafdfagsfasf";
    var chars = str.split('');
    var charCount = chars.reduce(function(a,c){
        if(a[c]){
            a[c] = a[c] + 1;
        } else {
            a[c] = 1;
        }
        return a; 
    },{});


    console.log(charCount) ;
let dub = Object.keys(charCount).filter(function(key, b) {
    console.log(key, b); // dekhte hain
    return charCount[key] > 1;
});




    console.log(dub) ;



}

findDuplicate();
