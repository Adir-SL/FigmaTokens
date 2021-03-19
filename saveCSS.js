function saveStyles(){
    var a = document.createElement("a");
    a.href="Testing"
    a.download = "some.css"
    document.body.appendChild(a)
    a.click()
    // document.body.removeChild(a)
}