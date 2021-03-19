function saveStyles(){
    styleVars = ":root{\n"
    var x = document.querySelectorAll("button");
    var i;
    for (i = 0; i < x.length; i++) {
        styleVars += "    --"+x[i].title.replace(/\s/g, '')+": ";
        styleVars += x[i].style.backgroundColor+";\n";
    }
    styleVars += "}"
    
    var text = styleVars,
    blob = new Blob([text], { type: 'text/plain' }),
    anchor = document.createElement('a');
    anchor.download = "variables.css";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
}