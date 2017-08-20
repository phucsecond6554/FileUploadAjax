window.onload = function(){
    var myform = document.getElementById("myform");
    
    myform.onsubmit = function(event){
        event.preventDefault();
        var formdata = new FormData(myform);
    
        var httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function(){
            if(httpRequest.status === 200 && httpRequest.readyState === 4){
                var rs = document.getElementById("result");

                var json = JSON.parse(httpRequest.response);

                console.log(json);
            }
        }
    
        httpRequest.open("POST","proccess.php");
        httpRequest.send(formdata);
    }
}