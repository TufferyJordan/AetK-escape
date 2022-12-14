const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let levelId = params.levelId;

const level1Id = "level1-xy";
const level2Id = "level2-ml";
const level3Id = "level3-po";
const level4Id = "level4-ex";
const level5Id = "level5-zz";
const root = "AetK-escape/"

function handleRedirect(levelUrl, language) {
    switch(language) {
        case "english" :
            location.href = levelUrl + "en.html";
            break;
        case "french" :
            location.href = levelUrl + "fr.html";
            break;
    }
}

function isLastLevelCorrect() {
    let name = "level";
    let cookie = JSON.parse(Cookies.get(name) ?? '{"finishedLevels":[]}');
    let finishedLevels = cookie.finishedLevels;

    switch(levelId) {
        case level1Id :
            if(!finishedLevels.includes(level1Id)) {
                finishedLevels.push(level1Id)
            }
            Cookies.set(
                name,
                JSON.stringify({ finishedLevels: finishedLevels }),
                { expires: 7, path: "/" }
            );
            return true;
            break;
        case level2Id :
            if(finishedLevels.includes(level1Id)) {
                if(!finishedLevels.includes(level2Id)) {
                    finishedLevels.push(level2Id)
                }
                Cookies.set(
                    name,
                    JSON.stringify({ finishedLevels: finishedLevels }),
                    { expires: 7, path: "/" }
                );
                return true;
            }
            break;
        case level3Id :
            if(finishedLevels.includes(level2Id)){
                if(!finishedLevels.includes(level3Id)) {
                    finishedLevels.push(level3Id)
                }
                Cookies.set(
                    name,
                    JSON.stringify({ finishedLevels: finishedLevels }),
                    { expires: 7, path: "/" }
                );
                return true;
            }
            break;
        case level4Id :
            if(finishedLevels.includes(level3Id)){
                if(!finishedLevels.includes(level4Id)) {
                    finishedLevels.push(level4Id)
                }
                Cookies.set(
                    name,
                    JSON.stringify({ finishedLevels: finishedLevels }),
                    { expires: 7, path: "/" }
                );
                return true;
            }
            break;
        case level5Id :
            if(finishedLevels.includes(level4Id)){
                return true;
            }
            break;
    }
    return false;
}

function redirect(language) {
    if(!isLastLevelCorrect()) {
        handleRedirect("/"+ root +"error-", language);
        return;
    }
    switch(levelId) {
        case level1Id :
            handleRedirect("/"+ root +"enigma1-xy-", language);
            break;
        case level2Id :
            handleRedirect("/"+ root +"enigma2-ml-", language);
            break;
        case level3Id :
            handleRedirect("/"+ root +"enigma3-po-", language);
            break;
        case level4Id :
            handleRedirect("/"+ root +"enigma4-ex-", language);
            break;
        case level5Id :
            handleRedirect("/"+ root +"enigma5-zz-", language);
            break;
    }
    return;
}

$("#frButton").click(function() {
    redirect("french");
});

$("#enButton").click(function() {
    redirect("english");
});


$("#frButtonError").click(function() {
     handleRedirect("/"+ root +"error-", "french");
});

$("#enButtonError").click(function() {
     handleRedirect("/"+ root +"error-", "english");
});