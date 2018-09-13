$(document).ready(function () {
    var introguide = new introJs();
    introguide .setOptions({
        exitOnEsc:false,
        exitOnOverlayClick: false,
        showProgress: true,
        keyboardNavigation: true,
        scrollToElement: true,
        steps: example_steps
    });

    introguide.onbeforechange(function(targetElement)
    {
        // console.log(this._currentStep);
        $('.float-mobil').attr('disabled', introguide._currentStep == "2"?true:false);
    }).oncomplete(function() {
        $('.float-mobil').attr('disabled', false);
    }).start();
});