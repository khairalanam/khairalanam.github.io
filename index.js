var toggle_event_listener =
    document.getElementById("toggle-input");

function dark_mode() {
    if (toggle_event_listener.checked == true) {
        var main_header = document.body;
        main_header.classList.add("dark-mode-main-header");
    }
}