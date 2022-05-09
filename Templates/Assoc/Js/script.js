
let ScrollToTop = document.getElementById("scrollToTop");

window.onscroll = function () {showButton();};

function showButton() {
    ScrollToTop.style.display = ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none");
}
ScrollToTop.addEventListener("click", isOnTop);

function isOnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

    if(document.getElementById('videoPlayerModal')){
    var videoPlayerModal = document.getElementById('videoPlayerModal');
    videoPlayerModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        var recipient = button.getAttribute('data-bs-title');
        var videoLink = button.getAttribute('data-bs-video');
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = videoPlayerModal.querySelector('.modal-title');
        //var modalBodyInput = videoPlayerModal.querySelector('.modal-body input');
        modalTitle.textContent = 'Replay : ' + recipient;
        //modalBodyInput.value = recipient;

        document.getElementById('playerVideo').src = videoLink;
    });
}


if(document.getElementById('inscriptionConferenceModal')){
    var inscriptionConferenceModal = document.getElementById('inscriptionConferenceModal');
    inscriptionConferenceModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        var recipient = button.getAttribute('data-bs-title');
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = inscriptionConferenceModal.querySelector('.modal-title');
        var modalBodyInput = inscriptionConferenceModal.querySelector(".modal-body input[name='conf']");
        modalTitle.textContent = 'Inscription le ' + recipient;
        //if(modalBodyInput)
            modalBodyInput.value = recipient;
        //else
        //    alert("fail");
    });
}
