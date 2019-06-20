let xhr = new XMLHttpRequest();
let app = "https://script.google.com/macros/s/AKfycbzvkjQk3zTXIXHFvIgMdFJNiuOMziqTcQUkrrVSW-WLxiQELRWc/exec"; 

let data;

createGroupListbox();

function createGroupListbox() {
    let output = "";

    
    xhr.open('GET', app);
    
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return;
        }
        
        if (xhr.status === 200) {
            try {
                console.log(xhr.response);
                let r = JSON.parse(xhr.responseText);
                data = r.users;
                console.log(data);
                console.log("wqerqwerqewrqw");
                for (var i = 0; i < data.length; i++) {
                    output += "<option>" + data[i][0] + "</option>";
                }
            } catch(e) {

            }
        }
        document.getElementById('people').innerHTML += output; 
    };
    xhr.send();
}

function setResultTable(user) {
    let tbsurname = document.getElementById('surname');
    let tbemail = document.getElementById('email');
    let tbacc = document.getElementById('acc');
 
    
    if(arguments.length === 0) {
        tbsurname.innerHTML = "";
        tbemail.innerHTML = "";
        tbacc.innerHTML = "";
        return;
    }
    tbsurname.innerHTML = user[0];
    tbemail.innerHTML = user[1];
    tbacc.innerHTML = user[2];
}

function fillScore() {
setResultTable();
    
    let users = data;
    let selectedUserName = document.getElementById("people").value;
    for(let per of users) {
        if(per.name === selectedUserName) {
            setResultTable(per);
            break;
        }
    }            
}

function fillUsers() {
    setResultTable();            
    let users = data;
    let output = "";
    for (let i = 0; i < users.length; i++) {
        let userName = users[i][0];
        if(studName !== "") {
            output += "<option>" + studName + "</option>";
        }
    }
    document.getElementById('people').innerHTML += output;
}
