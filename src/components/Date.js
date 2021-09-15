const date = new Date();

const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
let stringYear = year.toString();

export const todaydate = date.getDate();
export let currentDay = '';
export let currentMonth = '';
export const yearr = stringYear[2] + stringYear[3];

switch (month) {
     case 0:
          currentMonth = 'Jan.';
          break;
     case 1:
          currentMonth = 'Feb.';
          break;
     case 2:
          currentMonth = 'Mar.';
          break;
     case 3:
          currentMonth = 'Apr.';
          break;
     case 4:
          currentMonth = 'May';
          break;
     case 5:
          currentMonth = 'June';
          break;
     case 6:
          currentMonth = 'July';
          break;
     case 7:
          currentMonth = 'Aug.';
          break;
     case 8:
          currentMonth = 'Sept.';
          break;
     case 9:
          currentMonth = 'Oct.';
          break;
     case 10:
          currentMonth = 'Nov.';
          break;
     case 11:
          currentMonth = 'Dec.';
          break;
     default:
          break;
}

switch (day) {
     case 0:
          currentDay = 'Sunday';
          break;
     case 1:
          currentDay = 'Monday';
          break;
     case 2:
          currentDay = 'Tuesday';
          break;
     case 3:
          currentDay = 'Wednesday';
          break;
     case 4:
          currentDay = 'Thursday';
          break;
     case 5:
          currentDay = 'Friday';
          break;
     case 6:
          currentDay = 'Saturday';
          break;
     default:
          break;
}