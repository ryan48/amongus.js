function() {

    const url = prompt("Enter URL of the source to be cited:");

    if (url == null || url == "") {
         alert("Invalid URL citation");
    } else {
        document.body.innerHTML = '<body style="margin:0px;padding:0px;overflow:hidden"><iframe src="' + url + '"id="uberFrame" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></body>'
    }         
} 
