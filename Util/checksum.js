var placeValues=require('../Json/charval.json');


function getParity(gstin){
    var sum = 0;
    for(i=0;i<gstin.length-1;i++){
        var letter=gstin[i];
        var val=placeValues.charval[letter]; 
        //console.log(letter+":"+val);
        if((i+1)%2==0){
            val=val*2;
        }
        var q=Math.floor(val/36);
        var rem=val%36;
        sum=sum+q+rem;
    }
    var parity=(36-sum%36)%36;
    return placeValues.valchar[parity]===gstin[gstin.length -1];
}

module.exports={getParity};