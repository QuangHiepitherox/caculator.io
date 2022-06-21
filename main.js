  for(var i = 0 ; i < 14; i++){
    let a = document.getElementById(`num${i}`);
    a.addEventListener('click',function(e,num){
      let inner = e.target.value;
      let prevvalue = document.getElementById('manipulation').value;

      num = `${prevvalue}${inner}`
      document.getElementById('manipulation').value = num;
      
    })
}
function ac(){
  document.getElementById('resual').value='0';
  document.getElementById('manipulation').value='';
}
function deletes(){
  let xsm = document.getElementById('manipulation').value;
  let deletes = Array.from(document.getElementById('manipulation').value);
  deletes.splice(xsm.length-1 ,1 );  
  document.getElementById('manipulation').value = deletes.join('')
}
function sum(){
  let xsm = document.getElementById('manipulation').value;
  let ouput = eval(xsm)
  document.getElementById('resual').value = ouput;
  }
