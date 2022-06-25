function age(event) {
    event.preventDefault();
    document.querySelector("#age").style.display='block';
    document.querySelector("#gender").style.display='none';
    document.querySelector("#ethnicity").style.display='none';
};

function gender(event) {
    event.preventDefault();
    document.querySelector("#age").style.display='none';
    document.querySelector("#gender").style.display='block';
    document.querySelector("#ethnicity").style.display='none';
};

function ethnicity(event) {
    event.preventDefault();
    document.querySelector("#age").style.display='none';
    document.querySelector("#gender").style.display='none';
    document.querySelector("#ethnicity").style.display='block';
};

function phase(event) {
    event.preventDefault();
    document.querySelector("#phase").style.display='block';
    document.querySelector("#divind").style.display='none';
    document.querySelector("#completion").style.display='none';
};

function divind(event) {
    event.preventDefault();
    document.querySelector("#phase").style.display='none';
    document.querySelector("#divind").style.display='block';
    document.querySelector("#completion").style.display='none';
};

function completion(event) {
    event.preventDefault();
    document.querySelector("#phase").style.display='none';
    document.querySelector("#divind").style.display='none';
    document.querySelector("#completion").style.display='block';
};

document.querySelector("#age-button").addEventListener("click", age);
document.querySelector("#gender-button").addEventListener("click", gender);
document.querySelector("#ethnicity-button").addEventListener("click", ethnicity);
document.querySelector("#phase-button").addEventListener("click", phase);
document.querySelector("#divind-button").addEventListener("click", divind);
document.querySelector("#completion-button").addEventListener("click", completion);