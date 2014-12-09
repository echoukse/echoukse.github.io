// The LEZ comments here say that the test function should ALWAYS be optimized
/*LEZ
test, 0;
test2, 0;
*/
var abc = 20;

function test() {
    b = 24 * 1334 + 434;
    return b;
    //window.alert();
}
function test2(obj){
    var b = obj*2+obj + 77;
    c = 91;
    b = 24 * 1334 + 434;
    b = c + 32;
    b = c - b;
    return b * 2 / 4;
}
  
for(i=1; i < 100; i++)
  test();
for(i=1; i < 2000; i++)
  test2(i);

