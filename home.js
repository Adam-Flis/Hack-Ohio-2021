
function main(){
    loadData()
    loadPrescriber()
}

var dataArray

function loadData() {
    var str
    str = fetch("Prescriber_Data.csv").then(res => 
        {
            return res.text()
        })
    console.log(str)
    delimiter = ","

    // const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    // const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    // const arr = row.map(function (row) {
    //     const values = row.split(delimiter);
    //     const heads = headers.reduce(function (object, header, index) {
    //         object[header] = values[index];
    //         return object;
    //     }, {});
        
    //     return heads;
    // });
    // console.log(arr)
    // return arr;
   
    
}

function loadPrescriber() {
    var data = ['Herr','Frau'];
    var list = document.getElementById("prescriber");
    data.forEach(function(item){
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
     });
}