
function showDisply(){
    let str = "Muzammal";
    let char = str.split('');

    let count = char.reduce(function(acc,cur){
            if(acc[cur]){
                acc[cur] = acc[cur] + 1;
            }else{
                  acc[cur] = 1;
            }

            return acc;
     },{});
    console.log("\n", count);


        let dub = Object.keys(count).filter(function(key,ind){
     
    return count[key]>1;
  })
console.log(dub)
}showDisply();