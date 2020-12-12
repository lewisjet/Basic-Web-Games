console.log("Hello world!");

var timesClicked = 0;


function Click()
{
     timesClicked++;
    document.getElementById('Clicky').innerHTML = '<h2>' + timesClicked +'</h2>';
}
    
