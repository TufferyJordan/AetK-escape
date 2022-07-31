const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let levelId = params.levelId;

const level1Id = "level1-xy";
const level2Id = "level2-ml";
const level3Id = "level3-po";
const level4Id = "level4-ex";
const level5Id = "level5-zz";

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
            Cookies.set(
                name,
                JSON.stringify({ finishedLevels: [level1Id, level2Id] }),
                { expires: 7, path: "/" }
            );
            return true;
            break;
        case level2Id :
            if(finishedLevels.includes(level2Id)) {
                Cookies.set(
                    name,
                    JSON.stringify({ finishedLevels: [level1Id, level2Id, level3Id] }),
                    { expires: 7, path: "/" }
                );
                return true;
            }
            break;
        case level3Id :
            if(finishedLevels.includes(level3Id)){
                Cookies.set(
                    name,
                    JSON.stringify({ finishedLevels: [level1Id, level2Id, level3Id, level4Id] }),
                    { expires: 7, path: "/" }
                );
                return true;
            }
            break;
        case level4Id :
            if(finishedLevels.includes(level4Id)){
                Cookies.set(
                    name,
                    JSON.stringify({ finishedLevels: [level1Id, level2Id, level3Id, level4Id, level5Id] }),
                    { expires: 7, path: "/" }
                );
                return true;
            }
            break;
        case level5Id :
            if(finishedLevels.includes(level5Id)){
                return true;
            }
            break;
    }
    return false;
}

function redirect(language) {
    const root = "Kelly-escape-hugo/"
    if(!isLastLevelCorrect()) {
        handleRedirect("/"+ root +"error/error-", language);
        return;
    }
    switch(levelId) {
        case level1Id :
            handleRedirect("/"+ root +"enigma1-xy/enigma1-", language);
            break;
        case level2Id :
            handleRedirect("/"+ root +"enigma2-ml/enigma2-", language);
            break;
        case level3Id :
            handleRedirect("/"+ root +"enigma3-po/enigma3-", language);
            break;
        case level4Id :
            handleRedirect("/"+ root +"enigma4-ex/enigma4-", language);
            break;
        case level5Id :
            handleRedirect("/"+ root +"enigma5-zz/enigma5-", language);
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