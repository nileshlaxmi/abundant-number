const clickFunction = () => {
    var str = document.getElementById('ipText').value;
    let num = parseInt(str);
    let sum = 0;
    for(let i=1; i<=num; i++){
        if(num%i === 0){
            sum = sum + i;
        }
    }

    if(sum > 2*num)
        document.getElementById('opText').innerHTML = "Abundant Number";
    else
        document.getElementById('opText').innerHTML = "Not an Abundant Number";
}   

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
