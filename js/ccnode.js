document.addEventListener('startSearchBtnClicked', function(e) {
    console.log('startSearchBtnClicked');
    showRightUI();
});

function showRightUI() {
    // if (isRightUIShown()) {
    //     hideRightUI();
    //     return;
    // }
    var body = document.getElementsByTagName("BODY")[0];
    var rightUI = document.createElement("DIV");
    rightUI.id = "ccNodeHelperRightUI";
    rightUI.style.height = "800px";
    rightUI.style.width = "20%";
    rightUI.style.float = "right";
    rightUI.style.background = "pink";
    body.appendChild(rightUI);
    // triggerResize();
}

function triggerResize() {
    // 为了触发一下，让canvas适应一下
    var e = new Event("resize", { "bubbles": true, "cancelable": true });
    window.dispatchEvent(e);
}