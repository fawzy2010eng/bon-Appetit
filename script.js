function bonAppetit(bill, k, b) {
    if (k > -1) {
        bill.splice(k, 1);
    }
    var sum = 0;
    for(var i in bill){
        sum = sum + bill[i]
    }
    var share = sum*.5;
    if(share == b){
        console.log('Bon Appetit')
    }else{
        console.log(b-share)
    }    

}
