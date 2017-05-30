// To check if we get a busted rule error

let test;

function foo () { return true; }
if (test) {
  foo();
  test = [[1]];
  test = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
