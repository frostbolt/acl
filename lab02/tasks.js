console.clear();
//1 задание
function first(b) {
    console.log( 'Z1 =  ' + Math.sqrt( 2*b+2*Math.sqrt(b*b-4) ) / ( Math.sqrt(b*b-4) + b + 2 ) );
  console.log( 'Z2 =  ' + 1 / Math.sqrt(b+2));
}
first(3);
console.log('\n');
first(6);
console.log('\n');
//2 задание
function second (r, x, y) {
    return ( (x>=-r) && (y<=r) && (x<=0) && (y>=0) && (Math.pow(x-r,2)+Math.pow(y-r,2)>Math.pow(r,2)) ) || ((Math.pow(x,2)+Math.pow(y,2)>Math.pow(y,2)&&(x>=0)&&(y<=0)));
}
console.log( second(2,1,1) ); //=false
console.log( second(2,-1,5) );//=false
console.log( second(2,1,-1) );//=true
console.log( second(2,-1,1) );//=true
console.log('\n');
//3 задание
function third(eps) {
    var result=1, denominator=3;  
  while (Math.abs(1/denominator) > eps) {
      result-=1/denominator;
    denominator+=(denominator>0)?2:-2;
    denominator*=-1;
  }  
  return result*4;  
}
console.log(third(0.0000001));
console.log('\n');
// 4 задание
function fourth(str) {
    return ((str.split(' ')).reverse()).join(' ');
}
console.log(fourth('аргентина манит негра'));
