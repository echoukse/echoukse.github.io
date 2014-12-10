// The LEZ comments here say that the test function should ALWAYS be optimized
/*LEZ
test, 1;
*/
var abc = 20;

function test(obj) {
    var b = obj*2+obj + 77;
    c = 91;
    b = 24 * 1334 + 434;
    b = c + 32;
    if(obj == 1)
      return 3;
    var i = 0;
    while(i < 100)
      i++;
    b = c - b;
    return b * 2 / 4;

}
  
for(i=1; i < 200; i++)
  j=test(i);

