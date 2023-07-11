(function () {
    /* Gestion de la traduction de la page */

    const langSelect = document.getElementById("lang-select")

    const langs = [
        {name: "Français", tag: "fr"},
        {name: "English", tag: "en"},
        {name: "Espanol", tag: "es"},
        {name: "Italiano", tag: "it"},
        {name: "Deutsch", tag: "de"}
    ]
    let currentLang = "fr"

    function getTradElementsGroupByTranslationKey() {
        const tradElementsByKey = {}
        document.querySelectorAll("[data-trad]").forEach((el) => {
            if (!tradElementsByKey[el.dataset.trad]) {
                tradElementsByKey[el.dataset.trad] = []
            }
            tradElementsByKey[el.dataset.trad].push(el)
        })
        return tradElementsByKey;
    }

    function replaceHTMLInTrad(txt) {
        const regex = /\$\{(a|sub|code);([^;}]*)(;([^\}]*))?\}/
        let result
        let backup = 10
        while ((result = txt.match(regex)) !== null && backup > 0) {
            switch (result[1]) {
                case "a":
                    txt = txt.replace(result[0], `<a class="facteurs__link" href="${result[4]}">${result[2]}</a>`)
                    break
                case "sub":
                    txt = txt.replace(result[0], `<sub>${result[2]}</sub>`)
                    break
                default:
                    txt = txt.replace(result[0], `<span class="${result[1]}">${result[2]}</span>`)
            }
            backup--
        }
        return txt
    }

    function tradPage() {
        const tradElementsByKey = getTradElementsGroupByTranslationKey();
        fetch(`/api/${currentLang}`).then(res => {
           return res.text();
        })
        .then(response => {
            const parsed = JSON.parse(response);
            for (let key in parsed) {
                tradElementsByKey[key].forEach((el => {
                    el.innerHTML = replaceHTMLInTrad(parsed[key])
                }))
            }
        });
    }


    langSelect.addEventListener("change", function () {
        currentLang = this.value
        tradPage()
    })

    langs.forEach(lang => {
        const el = langSelect.appendChild(document.createElement("option"))
        el.value = lang.tag
        el.innerText = lang.name
    })

    tradPage();
})();