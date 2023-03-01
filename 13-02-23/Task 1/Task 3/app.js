let a = prompt('a?', '');
let b = prompt('b?', '');
let c = prompt('c?', '');

if (a < b & b < c ) {
  alert( a +' min');
  alert (c + ' max');

} else if (b < a & a < c) {
    alert( b +' min');
    alert (c + ' max');

} else if (b < c & c < a) {
    alert( b +' min');
    alert (a + ' max');

} else if (c < a & a < b) {
    alert( c +' min');
    alert (b + ' max');

}else if (c < b & b < a) {
    alert( c +' min');
    alert (a + ' max');

}else if (a < c & c < b ) {
    alert( a +' min');
    alert (b + ' max');
}