async function getFigmaObjTree(figmaApiKey, figmaId) {
    let result = await fetch("https://api.figma.com/v1/files/" + figmaId, {
        method: "GET",
        headers: {
            "X-Figma-Token": figmaApiKey
        }
    });
    let figmaTreeStructure = await result.json();
    console.log(figmaTreeStructure);
    window.myDoc = figmaTreeStructure;
    document.getElementById("demo").innerHTML = "";
    for (x in myDoc.styles) {
        document.getElementById("demo").innerHTML += "<span>"+myDoc.styles[x]["name"]+"</span>"
        document.getElementById("demo").innerHTML += "<br/>";
    }
    for (x in myDoc.document.children[0].children) {
        document.getElementById("demo").innerHTML += "<button style='background-color:rgba("+myDoc.document.children[0].children[x].fills[0].color.r*255+","+myDoc.document.children[0].children[x].fills[0].color.g*255+","+myDoc.document.children[0].children[x].fills[0].color.b*255+","+myDoc.document.children[0].children[x].fills[0].color.a+")' title='"+document.querySelectorAll("span")[x].innerText+"'>Click me</button>";
        document.getElementById("demo").innerHTML += "<br/>";
    }
}


setInterval(function(){
	getFigmaObjTree("figd_or8c8jVNaKZJQYwW-v3nwadNZtrLMXSAxtcKIv2l", "QAaTBuBDhbwFXbzVfIIUmU");
}, 300);

// getFigmaObjTree("166075-78ab5635-40a7-4092-af8d-e9eb40574bbf", "QAaTBuBDhbwFXbzVfIIUmU");
// "figd_or8c8jVNaKZJQYwW-v3nwadNZtrLMXSAxtcKIv2l"