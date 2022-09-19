import React from "react";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

function SideBar() {
    return (
        <>
            <aside class="c-side-bar">
                <Usuario />
                <Sugestoes />
                <p class="c-side-bar__info">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </p>
                <p class="c-side-bar__info">© 2021 INSTAGRAM DO FACEBOOK</p>
            </aside>
        </>
    );
}

export default SideBar;
