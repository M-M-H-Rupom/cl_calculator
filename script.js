// alert('hello');
let input_val = document.getElementById('display_value');

function add_display(val){
    if(input_val.value.match(/[+\-*]/)) {
        input_val.value += '';
    }
    input_val.value += val;
}
function clear_display(){
    input_val.value = '';
}
function calculate_data() {
    let cl_data = input_val.value;
    let cl_result = eval(cl_data);
    input_val.value = cl_result;
}