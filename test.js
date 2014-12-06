// Have some comments in the js file! LARAC
/*LEZ
test,2,2000;
docool,1;
finOpt,0;
*/
function test(obj) {
   var a = obj.prop + obj.prop;
   return a * 2;
}
function test2(obj){
    var b = obj.prop*2+obj.prop + 77;
    return b * 2;
}
function docool(fish){
  return fish + 123/3;
}
function nerd(fish, dish) {
  return fish + dish;
}

function done(note){
   return note + note;
}

function finOpt (hi){
   return hi + hi * 2;
}

function finNoOpt(hi){
   return hi + (hi+1) * 34;
}

function shouldOpt(hey){
   return 3 + hey + 3 * 2;
}

var a = { prop: 2}, b = { prop:1}, i = 0;
while( i++ <= 800) {
  test(Math.random() > .999 ? a : b);
}
i = 0;
while( i++ <= 1000) {
  test2(Math.random() > .999 ? a : b);
}


i=0;
while( i++ <= 209) {
  done(i);
}

i=0;
n = done(5);
while( i++ <= n) {
  finOpt(i);
}

i=0;
n = done(5);
while( i++ <= n) {
  finNoOpt(i+1);
}

while( i++ <= 900) {
   shouldOpt(i);
}

docool(0);
test(docool(32));
docool(100);


j = 0;
for(i = 0; i < 10000; i++){
    j = docool(j);
}   

