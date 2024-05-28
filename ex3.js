function separer(){
    var str = document.getElementsByTagName("input")[0].value;
    var ele = document.getElementsByTagName("p");
    var p1 = "";
    var p2 = "";
    for(var i = 0; i < str.length ; i++){
        if (i < str.indexOf(" ")){
            p1 += str[i];
        }
        if(i > str.indexOf(" ")){
            p2 += str[i];
        }
    }
    ele[0].innerHTML = p1;
    ele[1].innerHTML = p2;
}