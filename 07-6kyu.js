// https://www.codewars.com/kata/56548dad6dae7b8756000037/train/javascript

function WhatIsTheTime(timeInMirror) {
   let realHour, realMinutes
   let [mirrorHour, mirrorMinutes] = timeInMirror.split(":")
   realMinutes = 60 - mirrorMinutes
   if (realMinutes === 60) realMinutes = 0
   realHour = 12 - mirrorHour
   if (realMinutes > 0) realHour -= 1 //если минуты не равны нулю, убавляем час
   if (realHour == 0) realHour = 12 //если получилось реальные 0 часов, меняем на 12
   if (mirrorHour == 12 && mirrorMinutes != "00") realHour = 11
   realHour < 10 ? (realHour = "0" + realHour) : (realHour = realHour)
   realMinutes < 10 ? (realMinutes = "0" + realMinutes) : (realMinutes = realMinutes)
   return `${realHour}:${realMinutes}`
}

console.log(WhatIsTheTime("06:35"))
console.log(WhatIsTheTime("11:59"))
console.log(WhatIsTheTime("12:02"))
console.log(WhatIsTheTime("04:00"))
console.log(WhatIsTheTime("06:00"))
console.log(WhatIsTheTime("12:00"))

//best practice

let WhatIsTheTime = t => {
   let [h, m] = t.split(':');
   h = (+m ? 11 : 12) - h % 12 || 12;
   m = (60 - m) % 60;
   return [h, m].map(e => e > 9 ? e : '0' + e).join(':');
 }


 Number.prototype.mod = function(n) {
   return ((this % n) + n) % n;
 };
 
 function whatIsTheTime(mirrored) {
   const [mh, mm] = mirrored.split(':').map(Number);
   const m = (-mm).mod(60);
   const h = (-mh - (m && 1)).mod(12) || 12;
   return [h, m].map(n => ('0' + n).slice(-2)).join(':');
 }
 const WhatIsTheTime = whatIsTheTime;


 const WhatIsTheTime = timeInMirror => {
   let [hh, mm] = timeInMirror.split(`:`);
   mm = `${(60 - mm) % 60}`.padStart(2, `0`);
   hh = `${12 - (+mm ? ++hh : hh) % 12}`.padStart(2, `0`);
   return `${hh}:${mm}`;
 };