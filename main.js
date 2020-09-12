console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var x = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log("> " + x);
console.log("Voici la pyramide :");
function renderPyramid(n) {
    var html = "";
    for (var i = 0; i < n; i++) {
        var str = '';
        var strhtml = '';
        for (var j = 1; j < n - i; j++) {
            str += ' ';
            strhtml += '&nbsp;&nbsp;';
        }
        for (var k = 1; k <= (2 * i + 1); k++) {
            str += '#';
            strhtml += '#';
        }
        console.log(str);
        html+=strhtml+"<br>";
    }
    setTimeout(function(){ document.getElementById("test").innerHTML=html; }, 1000);
    
}
if (x <= 25) { renderPyramid(x); }
else console.log(" ");