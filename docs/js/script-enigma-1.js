$("p").click(function() {
     /*console.log(document.cookie)
     var testObj = JSON.parse(document.cookie)
     console.log("test = " + testObj.test)
     document.cookie = "{ test: "+ (testObj.test + 1) +" }"*/
     alert( Cookies.get('name') );
 })

$("img").click(function() {
    Cookies.set('name', 'value', { expires: 7 });
})