const calculate = () =>{
    var num = Number(document.getElementById("num1").value);
    var nums = Number(document.getElementById("num2").value);

    var multi = num * nums;
    return multi;
}
document.getElementById("calculate").addEventListener("click", () =>{
    document.getElementById("answer").innerHTML = calculate();
})