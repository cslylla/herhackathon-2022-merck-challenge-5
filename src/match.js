function displayPatient(event) {
    let val = document.getElementById('patient').value
    switch (val) {
    case 'patient1':
        document.querySelector("#p1").style.display='block';
        document.querySelector("#p2").style.display='none';
        document.querySelector("#p3").style.display='none';
        document.querySelector("#p4").style.display='none'; 
        break;
    case 'patient2':
        document.querySelector("#p1").style.display='none';
        document.querySelector("#p2").style.display='block';
        document.querySelector("#p3").style.display='none';
        document.querySelector("#p4").style.display='none';
        break;
    case 'patient3':
        document.querySelector("#p1").style.display='none';
        document.querySelector("#p2").style.display='none';
        document.querySelector("#p3").style.display='block';
        document.querySelector("#p4").style.display='none';
        break;
    case 'patient4':
        document.querySelector("#p1").style.display='none';
        document.querySelector("#p2").style.display='none';
        document.querySelector("#p3").style.display='none';
        document.querySelector("#p4").style.display='block';
        break;
    default: 
        document.querySelector("#p1").style.display='none';
        document.querySelector("#p2").style.display='none';
        document.querySelector("#p3").style.display='none';
        document.querySelector("#p4").style.display='none';
}};

function displayTrial(event) {
    let val = document.getElementById('trial').value
    switch (val) {
    case 'trial1':
        document.querySelector("#t1").style.display='block';
        document.querySelector("#t2").style.display='none';
        document.querySelector("#t3").style.display='none';
        document.querySelector("#t4").style.display='none'; 
        break;
    case 'trial2':
        document.querySelector("#t1").style.display='none';
        document.querySelector("#t2").style.display='block';
        document.querySelector("#t3").style.display='none';
        document.querySelector("#t4").style.display='none';
        break;
    case 'trial3':
        document.querySelector("#t1").style.display='none';
        document.querySelector("#t2").style.display='none';
        document.querySelector("#t3").style.display='block';
        document.querySelector("#t4").style.display='none';
        break;
    case 'trial4':
        document.querySelector("#t1").style.display='none';
        document.querySelector("#t2").style.display='none';
        document.querySelector("#t3").style.display='none';
        document.querySelector("#t4").style.display='block';
        break;
    default: 
        document.querySelector("#t1").style.display='none';
        document.querySelector("#t2").style.display='none';
        document.querySelector("#t3").style.display='none';
        document.querySelector("#t4").style.display='none';
}};

document.querySelector("#patient").addEventListener('change', displayPatient);
document.querySelector("#trial").addEventListener('change', displayTrial);



