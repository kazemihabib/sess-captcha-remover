if (document.getElementById('edCode')) {
    //delete capcha from page
    var edcCode = document.getElementById('edcCode');
    edcCode.parentNode.removeChild(edcCode);
    chrome.runtime.sendMessage({
        action: "deleteCaptcha"
    });
    //reload page
    location.reload();
}
