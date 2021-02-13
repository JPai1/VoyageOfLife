function versions(){
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            sessionStorage.setItem("versions" , JSON.parse(req.responseText).versionCount);
        }
    };
    req.open('GET','https://api.jsonbin.io/e/60285887435c323ba1c5ee3c/versions',true);
    req.setRequestHeader("secret-key", "$2b$10$RKDzv1i3PT3WapmlXJFEYe8DUK5buS00b0A40EZKxhzcX4kOs40F2");
    req.send()
}
function get(){
    //while(sessionStorage.getItem("versions") == null){}; fatal line of code
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            sessionStorage.setItem("got" , req.responseText);
        }
    };
    console.log('https://api.jsonbin.io/b/60285887435c323ba1c5ee3c/'+sessionStorage.getItem("versions"));
    
    req.open('GET','https://api.jsonbin.io/b/60285887435c323ba1c5ee3c/'+sessionStorage.getItem("versions"),true);
    req.setRequestHeader("secret-key", "$2b$10$RKDzv1i3PT3WapmlXJFEYe8DUK5buS00b0A40EZKxhzcX4kOs40F2");
    req.send()
}
function load(){
    obj = JSON.parse(sessionStorage.getItem("got"));
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
    req.open('PUT','https://api.jsonbin.io/b/60285887435c323ba1c5ee3c',true);
    req.setRequestHeader('Content-Type','application/json');
    req.setRequestHeader("secret-key", "$2b$10$RKDzv1i3PT3WapmlXJFEYe8DUK5buS00b0A40EZKxhzcX4kOs40F2");
    req.setRequestHeader('versioning','false');

    let uname=document.getElementById('uName').value;
    let score=document.getElementById('pWord').value;
    document.getElementById('uName').value="";
    document.getElementById('pWord').value="";
    // console.log("{\"" + uname + '": "' + score + '", ' + localStorage.getItem("got").substring(1));
    req.send("{\"" + uname + '": "' + score + '", ' + sessionStorage.getItem("got").substring(1));
}
