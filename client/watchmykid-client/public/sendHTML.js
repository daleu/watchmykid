// var itemString = localStorage.getItem('watchmykid');
// console.log("BEFORE");
// if(item!=null){
//     var item = JSON.parse(itemString);
//     var mobile = item.mobilenumber;
//     var markup = document.documentElement.innerHTML;

//     var xhr = new XMLHttpRequest();
//     xhr.open('PUT', 'localhost:8081/manage');

//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             console.log("END 1");
//             alert("done");
//         }
//         else {
//             console.log("END 2");
//             alert("mec...");
//         }
//     };

//     xhr.send(JSON.stringify({
//         page_html: markup,
//         tlf: 606953209,
//         url: window.location.href
//     }));
// }
console.log("BEFORE");
chrome.storage.local.get(['watchmykid'], (item) => {
    console.log("NOT NULL",item);
    var mobile = item.watchmykid.mobilenumber;
    var markup = document.documentElement.innerHTML;
    console.log("NOT NULL 2");

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8081/manage');
    console.log("NOT NULL 3");

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.onload = function(e) {
        console.log("NOT NULL 5");
        if (xhr.status === 200) {
            console.log("END 1");
        }
        else {
            console.log("END 2",e);
        }
    };

    console.log("NOT NULL 4");
    xhr.send(JSON.stringify({
        page_html: markup,
        tlf: "+34606953209",
        url: window.location.href
    }));
});