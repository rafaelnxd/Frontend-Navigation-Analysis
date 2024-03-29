var  initialTime;


// Func to register permanence time on page when leaving it

function registerPermanenceTime(){
    
    var finalTime = new  Date().getTime();
    var timePermanence = finalTime - initialTime;

    
    console.log('Time spent on page:', timePermanence, 'milisegundos')

    saveDataCSV(timePermanence);

}

// Event triggered when page loads
window.addEventListener('load', function() {
    initialTime = new Date().getTime(); // Register the initial time when loading the page
})


// Event triggered when leaving page

window.addEventListener('beforeunload', function() {
    registerPermanenceTime();
})



// function saveDataCSV(timePermanence){

//     var csvLine = timePermanence + '\n';

//     var blob = new  Blob([csvLine], { type: 'text/csv' });

//     var url = window.URL.createObjectURL(blob);

//     var link = document.createElement('a');
//     link.href = url;
//     link.download = 'data.csv'

//     document.body.appendChild(link);
//     link.click();

//     document.body.removeChild(link)
// }

function saveDataCSV(timePermanence) {

    // Create an XMLHttpRequest
    var xhr = new XMLHttpRequest();

    var url = 'update_csv.php'

    var params = 'tempo=' + timePermanence;

    // Request Setup

    xhr.open('POST', url, True);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // What to do when  request  is done
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.send(params);



}