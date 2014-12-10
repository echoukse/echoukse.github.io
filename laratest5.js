// The LEZ comments here say that the test function should ALWAYS be optimized
/*LEZ
test, 2, 10;
test, 3, 5;
test2, 2, 10;
test3, 2, 10;
*/
var abc = 20;

function test(obj) {
    var b = obj*2+obj + 77;
    c = 91;
    b = 24 * 1334 + 434;
    b = c + 32;
    var i = 0;
    while(i < 10)
      i++;
    b = c - b;
    return b * 2;

}
function test3(obj) {
    var b = obj*2+obj + 77;
    c = 91;
    b = 24 * 1334 + 434;
    b = c + 32;
    var i = 0;
    while(i < 100000)
      i++;
    b = c - b;
    return b * 2;
}

for(i=1; i < 1000; i++)
  j=test(i);

for(i=1; i<100; i++)
  k = test3(i);

for (i =1; i<1000; i++)
  if(i == 3)
     console.log("a");

