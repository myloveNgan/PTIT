const myNodeList = document.querySelectorAll('p');
  const nds =[0,0,0,0,0,0,0,0,0,0,0,0];
  const das =[0,0,0,0,0,0,0,0,0,0,0,0];
  const ass =[0,0,0,0,0,0,0,0,0,0,0,0];
  setInterval(function(){
    let nd1 = Math.floor(Math.random()*100);//hàm làm tròn xuống số nguyên gần nhất(math.floor)
    let da1 = Math.floor(Math.random()*100);   
    let as1 = Math.floor(Math.random()*100);

    function fsRandomNhietDo(){
                       
      if(nd1<20){
        document.getElementById('nhietDo').style.background='#FF7F50';//random cho nhiệt độ các khoảng khi x,20.40
      }else if(nd1<40){
        document.getElementById('nhietDo').style.background='#FF7256';
      }else if(nd1<60){
        document.getElementById('nhietDo').style.background='#EE5C42';
      }else if(nd1<80){
        document.getElementById('nhietDo').style.background='#FF0000';
      }else {
        document.getElementById('nhietDo').style.background='#8B3626';
      }
  }
                
    function fsRandomDoAm(){ 
                        if(da1<20){
                            document.getElementById('doAm').style.background='#BBFFFF';//random cho độ ẩm
                        }else if(da1<40){
                            document.getElementById('doAm').style.background='#AFEEEE';
                        }else if(da1<60){
                            document.getElementById('doAm').style.background='#7AC5CD';
                        }else if(da1<80){
                            document.getElementById('doAm').style.background='#5F9EA0';
                        }else {
                            document.getElementById('doAm').style.background='#53868B';
                        }
                    }
                    
                    function fsRandomAnhSang(){
                        
                        if(as1<20){
                            document.getElementById('anhSang').style.background='#9AFF9A';//random cho ánh sáng
                        }else if(as1<40){
                            document.getElementById('anhSang').style.background='#7CCD7C';
                        }else if(as1<60){
                            document.getElementById('anhSang').style.background='#00FF7F';
                        }else if(as1<80){
                            document.getElementById('anhSang').style.background='#00CD66';
                        }else {
                            document.getElementById('anhSang').style.background='#2E8B57';
                        }
                    }
               
                    fsRandomNhietDo();
                    fsRandomDoAm();
                    fsRandomAnhSang();

                    function bieuDo(){
                        nds.push(nd1); nds.shift();//hàm push để thêm nhiều phần tử trong mảng
                        das.push(da1); das.shift();//hàm shift loại bỏ phần tử đầu tiên của mảng và trả về giá trị như biểu đồ
                        ass.push(as1); ass.shift();
                        console.log(nds);
                        console.log(das);
                        console.log(ass);
                    }
                    bieuDo();
                for(var i = 0; i < nds.length;i++){
                       myNodeList[0].textContent = `${nd1} °C`;
                       myNodeList[1].textContent = da1 + ' %';
                       myNodeList[2].textContent = as1 +' lux';
                    }; 
            
               

                    Highcharts.chart('container', {

                        title: {
                          text: 'BIỂU ĐỒ NHIỆT ĐỘ, ĐỘ ẨM, ÁNH SÁNG TẠI HÀ NỘI NĂM 2022'
                        },
                        
                        
                        yAxis: {
                            min:0,
                            max:100
                        },
                        
                        xAxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                          
                        },
                        
                        options: {
                            scales: {
                              y: {
                                beginAtZero: true,     
                            }
                          },},
                        
                        series: [{
                          name: 'Nhiệt độ',
                          data: nds,
                          lineColor: 'red',
                          color: 'red',
                          marker: {
                            Symbol: 'circle',
                            lineColor: 'pink',
                            borderColor: 'pink',
                          }
                        },{
                          name: 'Độ ẩm',
                          data: das,
                          lineColor: 'darkBlue',
                          color: 'darkBlue',
                          marker: {
                            Symbol: 'diamiond',
                            lineColor: 'blue',
                            borderColor: 'blue',
                        },},
                        {
                          name: 'Ánh sáng',
                          data: ass,
                          lineColor: 'gold',
                          color: 'gold',
                          marker: {
                            Symbol: 'triangle',
                            lineColor: 'yellow',
                            borderColor: 'yellow',
                          },
                        },],
                        
                        });
                                    },2000);
      //nút on và off                            
  function on() {
   document.getElementById("myImage").src= "bongdentoi.png"
   //confirm('bật đèn không?')
      }
  function off() {
   document.getElementById("myImage").src= "bongdensang.png"
      }
                                   

           //nút toogle switch 
function led2(){
  if(confirm('Bật đèn không')==true){
        a = document.getElementById('led2').src='bongdentoi.png';
  }else {
        a = document.getElementById('led2').src='bongdensang.png'
    }
  }