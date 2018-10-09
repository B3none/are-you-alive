if (typeof confirmButton === 'undefined') {
    let confirmButton;
}
if (typeof children === 'undefined') {
    let children;
}

confirmButton = document.getElementById('confirm-button');

if (confirmButton) {
    children = confirmButton.childNodes;
    if (!!children.length) {
        children[0].click();
    }
}