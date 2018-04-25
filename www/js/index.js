var chek1 = document.getElementById('box1');
var chek2 = document.getElementById('box2');
var chek3 = document.getElementById('box3');
var value1 = 0;
var value2 = 0;
var value3 = 0;
var result = 0; 

function submit() {

    

    if (document.getElementById('box1').checked) {
        this.value1 = document.getElementById('box1').value;
    }
    if (document.getElementById('box2').checked) {
        this.value2 = document.getElementById('box3').value;
    }

    if (document.getElementById('box3').checked) {
        this.value3 = document.getElementById('box3').value;
    }

     this.result = parseFloat(value1) + parseFloat(value2) + parseFloat(value3);
    
    alert(result);
}

