//Variabili

    var i;

    //Div contenitori

        var navbar = document.getElementById ("nav_div");
        var box1   = document.getElementById ("box1");
        var centro = document.getElementById ("div_centrale");
        var giochi = document.getElementById ("giochi");
        var scuola = document.getElementById ("scuola");
        var footer = document.getElementById ("footer_div")
        var rights = document.getElementById ("rights");

    //NavBar

        var btn_home = document.getElementById ("btn_home")

        var i_box   = document.getElementById ("i_box");

        var i_theme = document.getElementById ("icona_tema");
        var refresh = document.getElementById ("refre");

//Eventi

        window.addEventListener ("load", check_theme_sto);

    //NavBar
        btn_home.addEventListener ("click", () => {location.replace ("Index.html")})
        refresh.addEventListener  ("click", () => {location.replace (location.href)});
        i_theme.addEventListener  ("click", check_theme);

    //Centro
        giochi.addEventListener ("click", () => {location.href = "giochi.html"});
        scuola.addEventListener ("click", () => {location.href = "scuola.html"});
    
    //Footer
        rights.addEventListener  ("dblclick", () => {open ("https://it.pornhub.com/")});

//Funzioni

    function change_theme (k) {
        if (k) {
            i_theme.className = "fas fa-moon fa-2x";
            localStorage.tema = "dark";
            navbar.classList.replace ("l_container", "d_container");
            box1.classList.replace   ("l_box", "d_box");
            i_box.classList.replace  ("l_icon", "d_icon");
            centro.classList.replace ("l_container", "d_container");
            giochi.classList.replace ("l_giochi", "d_giochi");
            scuola.classList.replace ("l_scuola", "d_scuola");
            footer.classList.replace ("l_container", "d_container");
            console.log ("dark");
        } else {
            i_theme.className = "far fa-lightbulb fa-2x";
            localStorage.tema = "light";
            navbar.classList.replace ("d_container", "l_container");
            box1.classList.replace   ("d_box", "l_box");
            i_box.classList.replace  ("d_icon", "l_icon");
            centro.classList.replace ("d_container", "l_container");
            giochi.classList.replace ("d_giochi", "l_giochi");
            scuola.classList.replace ("d_scuola", "l_scuola");
            footer.classList.replace ("d_container", "l_container");
            console.log ("light");
        }
    }

    function link_rights () {
        e.stopPropagation();
    }

    function check_theme () {
        if (localStorage.tema === "light") {
            i = 1;
        } else {
            i = 0;
        }
        change_theme (i);
    }

    function check_theme_sto () {
        if (localStorage.tema === "dark") {
            i = 1
            change_theme (i);
        }
    }

