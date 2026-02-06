let filter_anagram=(str1,str2)=>{
    if(str1.length!==str2.length){
        return false;
    }

    let map = new Map();
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();

    for(let c of str1){
        map.set(c, (map.get(c)||0)+1);
    }

    for(let c of str2){
        if(!map.has(c))
            return false;
        map.set(c,map.get(c)-1);
        if(map.get(c)<0)
            return false;
    }
    return true;
};

console.log(filter_anagram("ehreho","heeroh"))
console.log(filter_anagram("Harsho","Yogesh"));
