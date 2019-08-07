var checksum=require('./checksum');
var stateChecker=require('./stateChecker');

function check(gstin){
    if(gstin.length!=15)
        return false;
    var state=stateChecker.check(gstin.substring(0,2));
    if(!state){
        return false;
    }
    var sum=checksum.getParity(gstin);
    if(!sum){
        return false;
    }

    return true;
}

module.exports={check};