

function startCal(theme){
  
}
//check to see if calendar div is availible,if so, populate with calendar

  let cal=_("#calendar");
if(cal){
  cal.innerHTML = calendar();
}
let c = _("#calevent");

// short queySelector
function _(elm) {
  return document.querySelector(elm);
}
function start() {
  let days = [];
  return days;
}

function calendar() {
  let day_of_week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"),
    month_of_year = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ),
    Calendar = new Date(),
    year = Calendar.getFullYear(),
    month = Calendar.getMonth(),
    today = Calendar.getDate(),
    weekday = Calendar.getDay(),
    html = "";
  days = day_of_week;
  // start in 1 and this month
  Calendar.setDate(1);
  Calendar.setMonth(month);
  function tblpart(t) {
    return document.createElement(t);
  }
  // console.log(tblpart());
  // template calendar
  html = "<table style='z-index:900' onloaded='onstart()'>";
  // head
  html += "<thead>";
  html += `<tr class="head_cal"><th colspan="7"> 
    ${month_of_year[month]} ${year}
    </th></tr>`;
  
  html += '<tr class="week_cal">';
 
  for (index = 0; index < 7; index++) {
    if (weekday == index) {
      days.push(day_of_week[index]);
      html += '<th class="week_event">' + day_of_week[index] + "</th>";
    } else {
      html += "<th>" + day_of_week[index] + "</th>";
    }
  }
  html += "</tr>";
  html += "</thead>";

  // body
  html += '<tbody class="days_cal">';
  html += "</tr>";
  // white zone
  for (index = 0; index < Calendar.getDay(); index++) {
    html += '<td class="white_cal"> </td>';
  }

  for (index = 0; index < 31; index++) {
    if (Calendar.getDate() > index) {
      week_day = Calendar.getDay();

      if (week_day === 0) {
        html += "</tr>";
      }
      if (week_day !== 7) {
        // this day
        let day = Calendar.getDate();
        let info =
          Calendar.getMonth() + 1 + "/" + day + "/" + Calendar.getFullYear();

        if (today === Calendar.getDate()) {
          html +=
            '<td><span class="span today_cal" href="#" data-id=${date}' +
            info +
            '" onclick="showInfo(\'' +
            info +
            "')\">" +
            day +
            "</span></td>";
        } else {
          html +=
            '<td><span class="span" href="#"data-daynum="' +
            day +
            '" data-day="' +
            day_of_week[week_day] +
            '" data-id="' +
            info +
            '" onclick="showInfo(\'' +
            info +
            "')\">" +
            day +
            "</span></td>";
        }
      }
      if (week_day == 7) {
        html += "</tr>";
      }
    }
    Calendar.setDate(Calendar.getDate() + 1);
  } // end for loop
  return html;
}
function close(elm) {
  elm = event.target;
 
  c.classList.remove("cals");
  c.innerHTML = "";
  return c;
}
let rs;
async function onstart(a,b,c){const options = {
  // method: 'GET',
  // url:`https://holidays.abstractapi.com/v1/?api_key=20ce71078ee446a09d133a51169bd906&country=US&year=${a}&month=${b}&day=${c}`,
 
};

try {
  var response = await axios.request(options);
  rs=response.data[0].name;
  console.log(response.data[0].name,"c",a);
} catch (error) {
  console.error(error);
}}
function showInfo() {

  c.classList.add("cals");
  let Calendar = new Date();
  let cl = days[Calendar.getDay()];
  let reult = (c.innerHTML = " ");
  let year= Calendar.getFullYear();
  let month = Calendar.getMonth();
  let day = Calendar.getDate();
  let data = event.target.dataset.id;
  let dy = event.target.dataset.day;
  
  onstart(year,month+1,event.target.dataset.daynum);

  // const api_url =`{https://holidays.abstractapi.com/v1/?day=25}} `;
  // async function getholiday() {
  //   const response = await fetch(api_url);
  //   const data = await response.json();
  //   console.log(data);
  // }
  // getholiday();

 async function onstart(a,b,c){const options = {
    // method: 'GET',
    // url:`https://holidays.abstractapi.com/v1/?api_key=20ce71078ee446a09d133a51169bd906&country=US&year=${a}&month=${b}&day=${c}`,
   
  };
  
  try {
    const response = await axios.request(options);
    if(response.data[0].name !== undefined){ document.getElementById("response").innerHTML=""+response.data[0].name;
    console.log(response.data[0].name,"c",a);}
  } catch (error) {
     
    
document.getElementById("response").innerHTML="No holiday today";
  }}


  
  let span = `<span>${dy}</span><div id="xx"> <h1>Days Events</h1><p><h3>On ${dy} <span>${data}</span></h3>
  <h3 id="response"></h3>
  Well hello Thank you so much for visiting, at the moment this date is open for schedualing. if your interested in securing this date for your project Give us a call and we will be happy to talk and get some information about you and your project.Then we can get you set up on the shcedual or a time to meet and discuss your project further</p> </div><br/>
 <h5>Click the page to close and click the call today button at the bottom of the page. We look forward to chatting about your project</h5> `;

  c.innerHTML += span;
  c.addEventListener("click", close);
  return c;

 
}

