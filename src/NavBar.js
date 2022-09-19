import React from "react";

function NavBar() {
    return (
        <>
            <header class="c-top-bar-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img
                    src="./img/top-bar/instagram_logo.png"
                    alt="Logo do Instagram"
                />
                <ion-icon name="paper-plane-outline"></ion-icon>
            </header>

            <header class="c-top-bar-desktop">
                <div class="c-top-bar-desktop__logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div></div>
                    <img
                        src="./img/top-bar/instagram_logo.png"
                        alt="Logo do Instagram"
                    />
                </div>
                <input
                    type="search"
                    name="Pesquisar"
                    class="c-top-bar-desktop__search"
                    placeholder="Pesquisar"
                />
                <nav class="c-top-bar-desktop__nav">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </nav>
            </header>
        </>
    );
}

export default NavBar;
