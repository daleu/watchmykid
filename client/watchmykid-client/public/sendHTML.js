var markup = document.documentElement.innerHTML;
console.log(":)",markup);

var itemString = localStorage.getItem('watchmykid');
if(item!=null){
    var item = JSON.parse(itemString);
    console.log("CALL API",item);
}