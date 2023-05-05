//UC1- to check weather employee is present or absent
console.log("UC1 OUTPUT");
const IsPresent=1;
let empcheck=Math.floor(Math.random()*10%2)
if(empcheck==IsPresent)
console.log("Employee is present")
else
console.log("Employee is absent")

//UC2-Calculate Employee wage Considering the factors employee is full time or Parttime
console.log("UC2 OUTPUT");
const FullTimeHour=8;
const PartTimeHour=4;
const IsFullTime=1;
const IsPartTime=2;
const WagePerHour=20;

let emphrs=0;
let empcheck1=Math.floor(Math.random()*10%2);
switch(empcheck1){
    case IsFullTime:
        emphrs=FullTimeHour;
        break;
    case IsPartTime:
         emphrs=PartTimeHour;
         break;
    default:
         emphrs=0;
         break;
}
let empwage=emphrs*WagePerHour;
console.log("Total wage:"+empwage);
