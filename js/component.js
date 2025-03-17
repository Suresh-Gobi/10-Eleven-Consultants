document.addEventListener("DOMContentLoaded", function () {
    if (typeof jQuery === "undefined") {
        console.error("jQuery is not loaded. Make sure to include jQuery before this script.");
        return;
    }

    $("#footer-placeholder").load("/components/footer.html", function (response, status, xhr) {
        if (status === "error") {
            console.error("Error loading footer: ", xhr.status, xhr.statusText);
        } else {
            console.log("Footer loaded successfully.");
        }
    });
});
