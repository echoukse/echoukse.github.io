// The LEZ comments here say that the test function should ALWAYS be optimized
/*LEZ
test1, 1;
*/
var abc = 20;

function test1(obj) {
    var b = obj*2+obj + 77;
    c = 91;
    b = 24 * 1334 + 434;
    b = c + 32;
    b = c - b;
    return b * 2 / 4;

}
  
for(i=1; i < 1001; i++)
  j=test1(i);
