let a = ['Fikrim Yok'];
let b = $("label").map(function(){
  let labelValue = $(this).text();
  if (a.includes(labelValue)) {
    $(this).click();
  } else {
    return labelValue;
  }
}).get();
console.log(b); 
