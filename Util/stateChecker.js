var states=require('../Json/state.json');

function check(state){
    if(states[state]!=undefined)
        return true;
}

module.exports={check};

//console.log(check('34AABCB5576G1ZQ'));