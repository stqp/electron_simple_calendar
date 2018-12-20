

var today = new Date();
console.log(today)
var data = {
  year: today.getFullYear(),
  month: today.getMonth()
}

function to_prev_month(){
  if(data.month === 0 ){
    data.year--;
    data.month = 11; 
  }else{
    data.month--;
  }
  refresh_table(data.year, data.month);
}

function to_next_month(){
  if(data.month === 11 ){
    data.year++;
    data.month = 0; 
  }else{
    data.month++;
  }
  refresh_table(data.year, data.month);
}

function refresh_table(year, month){
  document.getElementById("current_date").innerText = year+"年 " + (month+1) + "月" ;

  var start = new Date(year, month, 1);
  var end  = new Date(year, month + 1 , 0);
  var start_day = start.getDay()+1;// 曜日
  var end_date = end.getDate(); // 日にち
  console.log(start_day);
  var count = 1;
  var html = "";

  while(count <= 42){
    if(count % 7 === 1) html += "<tr>";

    if(count < start_day || end_date < (count-start_day+1)){
      html +="<td></td>";
    }else{
      //今日だったら色つけて目立つようにしたい。
      if(today.getFullYear() === year 
        && today.getMonth() === month
        && today.getDate() === (count-start_day+1)){
        html += ("<td class='today'>"+(count - start_day + 1)+"</td>");
      }else{
        html += ("<td>"+(count - start_day + 1)+"</td>");
      }
      
    }
    if(count % 7 === 0) html += "</tr>";
    count++;
  }
  document.getElementById("calendar").innerHTML = html;
}


function e_bind(){
  document.getElementById("to_prev_month").addEventListener("click",to_prev_month);
  document.getElementById("to_next_month").addEventListener("click",to_next_month);
}

e_bind();
refresh_table(data.year, data.month);
console.log(data.month)



