chrome.runtime.onMessage.addListener(function(request, sender, sendRequest) {
    if (request.action == "deleteCaptcha") {
        //remove cookie
        chrome.cookies.remove({
            "url": "https://sess.shirazu.ac.ir",
            "name": "ASP.NET_SessionId"
        });
    }
});
