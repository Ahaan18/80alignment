function make1p(){
    var p1 = [];
    for(i = 1 ; i <=6 ; i++){
        p1.push(document.getElementById("p1" + i).value);
        document.getElementById("showp1").innerHTML = p1.join(". ");
    }
}
function make2p(){
    var p2 = [];
    for(iL = 1 ; iL <=6 ; iL++){
        p2.push(document.getElementById("p2" + iL).value);
        document.getElementById("showp2").innerHTML = p2.join(". ");
    }
}