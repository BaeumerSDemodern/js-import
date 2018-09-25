// Import scripts here, e.g.:
// importScript("src/App.js");

window.onload = function(){
    console.log("onload");
    // "main()" function
}

function importScript(path){
    var root = document.documentElement;
    for(var i = 0; i < root.children.length; i++){
        var child = root.children[i];
        if(child=="[object HTMLHeadElement]"){
            var head = child;
            var script = document.createElement("script");
            script.setAttribute("src", path);
            head.append(script);
        }
    }
}