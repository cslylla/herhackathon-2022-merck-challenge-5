function displayPicture(event) {
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

document.querySelector("#patient").addEventListener('change', displayPicture);



