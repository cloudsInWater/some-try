
// https://jsfiddle.net/w9gFj
$(document).ready(function () {

    function onMouseUp(e) {
        var outputElement = document.getElementById('output-element');
        var outputText = document.getElementById('output-text');
        var selectedTextArea = document.activeElement;
        var selection = selectedTextArea.value.substring(
        selectedTextArea.selectionStart, selectedTextArea.selectionEnd);
        outputElement.innerHTML = selectedTextArea.id;
        outputText.innerHTML = selection;
    }

    document.getElementById("ta-example-one").addEventListener("mouseup", onMouseUp, false);
    document.getElementById("ta-example-two").addEventListener("mouseup", onMouseUp, false);
});
