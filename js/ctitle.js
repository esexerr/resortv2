//to add more titles do ,"yourtitle" etc.
const rrr = ["resort.lol", "@resort", "howdy :3", "peak the ig"];
let vvv = 0;
function yyy() {
  document.title = rrr[vvv];
  vvv = (vvv + 1) % rrr.length;
}
setInterval(yyy, 250);
