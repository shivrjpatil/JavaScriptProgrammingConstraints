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

//UC3-Refactor code to write fuction for daily working hours
console.log("UC3 OUTPUT");

function GetWorkingHours(empcheck3){
    switch(empcheck3){
        case IsFullTime:
            return FullTimeHour;
        case IsPartTime:
             return PartTimeHour;
        default:
             return 0;         
    }    
}
let emphrs3=0;
let empcheck3=Math.floor(Math.random()*10%2);
emphrs3=GetWorkingHours(empcheck3);
let empwage3=emphrs3*WagePerHour;
console.log("Total Wage:"+empwage3);

//UC4-Calculating Wages For Month
console.log("UC4 OUTPUT");
const NumOfWorkingDays=2;
let emphrs4=0;
for(let day=0;day<NumOfWorkingDays;day++){
    let empcheck4=Math.floor(Math.random()*10%2);
    emphrs4 += GetWorkingHours(empcheck4);    
}
let empwage4=emphrs4*WagePerHour;
console.log("Total hrs"+emphrs4+ "Emp Wage" +empwage4);

//UC5-Calculating Wages For Month
console.log("UC5 OUTPUT");
const MaxWorkingHoursMonth=160;
const NumberOfWorkinDays=20;
let TotalEmpHrs=0;
let TotalWorkingDays=0;
while(TotalEmpHrs<=MaxWorkingHoursMonth && TotalWorkingDays< NumberOfWorkinDays){
    TotalWorkingDays++;
    let empcheck5=Math.floor(Math.random()*10%3);
    TotalEmpHrs+=GetWorkingHours(empcheck5);
}
let empwage5=TotalEmpHrs*WagePerHour;
console.log("Total Days"+TotalWorkingDays+"Total hours"+TotalEmpHrs+"Employee wage"+empwage5);
