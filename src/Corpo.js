import React from "react";
import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

function Corpo() {
    return (
        <>
            <main class="c-content">
                <section class="c-stories-and-feed">
                    <Stories />
                    <Posts />
                </section>

                <SideBar />
            </main>

            <nav class="c-bottom-bar">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </nav>
        </>
    );
}

export default Corpo;
