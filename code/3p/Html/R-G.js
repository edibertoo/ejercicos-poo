function convert() {
    let t = document.getElementById("temp").value
    let o = (t*180)/3.14159265359
    document.getElementById("out").innerHTML = o.toFixed(2) + " Grados"
}