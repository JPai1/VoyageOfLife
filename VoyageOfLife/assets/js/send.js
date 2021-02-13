function get(){
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            localStorage.setItem("got" , req.responseText);
        }
    };
    req.open('GET','https://api.jsonbin.io/b/6028465187173a3d2f5cbf7d/1',true);
    req.setRequestHeader("secret-key", "$2b$10$RKDzv1i3PT3WapmlXJFEYe8DUK5buS00b0A40EZKxhzcX4kOs40F2");
    req.send()
}
function load(){
    obj = JSON.parse(localStorage.getItem("got"));
    for (const key in obj) {
        const element = obj[key];
        document.getElementById('table123').innerHTML += 
        (`<li class="table-header">
        <div class="col col-1">`+key+`</div>
        <div class="col col-2">`+element+`</div>
        </li>`);
    }
    document.getElementById('loadResults').remove();
}
function send(){
    let req=new XMLHttpRequest();
    req.onreadystatechange=()=>{
        if(req.readyState==XMLHttpRequest.DONE){
            console.log(req.responseText)
            if(req.responseText.charAt(11) == 't'){
                window.alert("success");
            }
            else{
                window.alert("that request did not work, please try again")
            }
        }
    };
    req.open('PUT','https://api.jsonbin.io/b/6028465187173a3d2f5cbf7d',true);
    req.setRequestHeader('Content-Type','application/json');
    req.setRequestHeader("secret-key", "$2b$10$RKDzv1i3PT3WapmlXJFEYe8DUK5buS00b0A40EZKxhzcX4kOs40F2");
    req.setRequestHeader('versioning','false');

    let uname=document.getElementById('uName').value;
    let score=document.getElementById('pWord').value;
    document.getElementById('uName').value="";
    document.getElementById('pWord').value="";
    // console.log("{\"" + uname + '": "' + score + '", ' + localStorage.getItem("got").substring(1));
    req.send("{\"" + uname + '": "' + score + '", ' + localStorage.getItem("got").substring(1));
}