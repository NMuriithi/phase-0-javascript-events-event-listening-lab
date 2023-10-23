const inputs = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

inputs.addEventListener('click', clickAlert);

function addingEventListener() {
    let inputs = document.getElementById('input');
    for (let input of inputs){
        input.addEventListener('click',addingEventListener);
    }
}
