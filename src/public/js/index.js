(function () {
    const langSelect = document.getElementById("lang-select")

    langSelect.addEventListener("change", function () {
        window.location = "/index-" + langSelect.value + ".html"
    })

})();