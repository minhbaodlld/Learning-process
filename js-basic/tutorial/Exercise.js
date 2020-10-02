/* Write a JavaScript program to display the
current day and time in the following format.
Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38 */
var today = new Date();
var day = today.getDay();
var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log('Today is : ' + daylist[day] + '.' );
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >=12)? ' PM' : ' AM'; 
hour = (hour >= 12)? hour - 12 : hour;
if (hour === 0 & prepand === 'PM'){
    if (minute === 0 & second === 0){
        hour = 12;
        prepand = 'Noon';
    }
    else{
        hour = 12
        prepand = 'PM';
    } 
}
if (hour === 0 & prepand === 'AM'){
    if (minute === 0 & second === 0){
        hour = 12;
        prepand = 'Midnight';
    }
    else {
        hour = 12
        prepand = 'AM';
    }
}
console.log('Current time: ' + hour + prepand + ' : ' + minute + ' : ' + second);




// Print Current window
function print_current_page(){
    window.print();
}


/* Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if (date < 10){
    dd = '0' + dd;
}
if (month < 10){
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);


/*Write a JavaScript function to find the area of a triangle 
where lengths of the three of its sides are 5, 6, 7. */

var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 +side3)/2;
var area = Math.sqrt(s*(s - side1)*(s - side2) *(s - side3));
console.log(area);


/*Write a JavaScript program to find which 1st January 
is being a Sunday between 2014 and 2050.*/

for (var year = 2014; year <= 2050; year++){
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0){
        console.log('1st of January being a Sunday ' +year);
    }
}   





/*Write a JavaScript program to determine whether a given year  
/is a leap year in the Gregorian calendar. */

function leapYear(year){
    return (year % 100 === 0 ) ? (year % 400 === 0) : (year % 4 === 0); //
};
console.log(leapYear(2018));
console.log(leapYear(2020));
console.log(leapYear(2343));
console.log(leapYear(2099));
console.log(leapYear(2012));
