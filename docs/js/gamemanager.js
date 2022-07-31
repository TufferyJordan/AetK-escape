/*Cookies.set('progress', '{ "level"=1 }', { expires: 7 });

$("p").click(function() {
     console.log(document.cookie)
     var testObj = JSON.parse(document.cookie)
     console.log("test = " + testObj.test)
     document.cookie = "{ test: "+ (testObj.test + 1) +" }"
     alert( Cookies.get('name') );
 })

$("img").click(function() {
    Cookies.set('name', 'value', { expires: 7 });
})*/
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let levelId = params.levelId;

const level1Id = "level1-xy";
const level2Id = "level2-ml";
const level3Id = "level3-po";
const level4Id = "level4-ex";
const level5Id = "level5-zz";

function chooseLanguage(language) {
    let name = "level";
    let futureJson = {
        finishedLevels: [
            levelId
        ]
    };
    Cookies.set(name, JSON.stringify(futureJson), { expires: 7 });
}

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

    var futureLevels;
    if(finishedLevels == null) {
        futureLevels = [];
    } else {
        futureLevels = finishedLevels;
    }
    futureLevels.push(levelId);

    let futureJson = {
        finishedLevels: futureLevels
    };

    switch(levelId) {
        case level1Id :
            Cookies.set(name, JSON.stringify(futureJson), { expires: 7 });
            return true;
            break;
        case level2Id :
            if(finishedLevels == [level1Id]) {
                Cookies.set(name, JSON.stringify(futureJson), { expires: 7 });
                return true;
            }
            break;
        case level3Id :
            if(finishedLevels == [level1Id, level2Id]){
                Cookies.set(name, JSON.stringify(futureJson), { expires: 7 });
                return true;
            }
            break;
        case level4Id :
            if(finishedLevels == [level1Id, level2Id, level3Id]){
                Cookies.set(name, JSON.stringify(futureJson), { expires: 7 });
                return true;
            }
            break;
        case level5Id :
            if(finishedLevels == [level1Id, level2Id, level3Id, level4Id]){
                Cookies.set(name, JSON.stringify(futureJson), { expires: 7 });
                return true;
            }
            break;
    }
    return false;
}

function redirect(language) {
    const root = "Kelly-escape-hugo/"
    if(!isLastLevelCorrect()) {
        handleRedirect("/error/error-", language);
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