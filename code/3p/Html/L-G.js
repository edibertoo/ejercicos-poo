function convert() {
    let t = document.getElementById("temp").value
    let o = (t)/20
    document.getElementById("out").innerHTML = o.toFixed(2) + " Galon"
}