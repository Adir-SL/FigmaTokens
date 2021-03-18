// 9RHnWMKTbB3kwMrboNxMrmmu2Inj1R
//https://adir-sl.github.io/FigmaTokens/

function testLink(){
    // window.location.replace("https://api.figma.com/v1/files/hb3RO2j2NG55RGChNokQJQ");
    getFigmaObjTree(9RHnWMKTbB3kwMrboNxMrmmu2Inj1R, hb3RO2j2NG55RGChNokQJQ);
}

async function getFigmaObjTree(figmaApiKey, figmaId) {
    let result = await fetch("https://api.figma.com/v1/files/" + figmaId, {
        method: "GET",
        headers: {
            "X-Figma-Token": figmaApiKey
        }
    });
    let figmaTreeStructure = await result.json();
    console.log(figmaTreeStructure);
}