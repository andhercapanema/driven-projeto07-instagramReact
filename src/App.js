import React from "react";

function App() {
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

            <main class="c-content">
                <section class="c-stories-and-feed">
                    <section class="c-stories">
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/9gag.svg"
                                    alt="Logo 9gag"
                                />
                            </div>
                            <p>9gag</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/meowed.svg"
                                    alt="Logo meowed"
                                />
                            </div>
                            <p>meowed</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/barked.svg"
                                    alt="Logo barked"
                                />
                            </div>
                            <p>barked</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/nathanwpylestrangeplanet.svg"
                                    alt="Foto de perfil nathanwpylestrangeplanet"
                                />
                            </div>
                            <p>nathanwpyle...</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/wawawiwacomics.svg"
                                    alt="Logo wawawiwacomics"
                                />
                            </div>
                            <p>wawawiwac...</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/respondeai.svg"
                                    alt="Logo respondeai"
                                />
                            </div>
                            <p>respondeai</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/filomoderna.svg"
                                    alt="Foto de perfil filomoderna"
                                />
                            </div>
                            <p>filomoderna</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/memeariagourmet.png"
                                    alt="Foto de perfil memeariagourmet"
                                />
                            </div>
                            <p>memeriago...</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/best_ducks_of_insta.png"
                                    alt="Logo best_ducks_of_insta"
                                />
                            </div>
                            <p>best_duck...</p>
                        </div>
                        <div class="c-stories__storie">
                            <div>
                                <img
                                    src="./img/stories-bar/stories_background.jpg"
                                    alt="Fundo dos stories"
                                />
                                <img
                                    src="./img/profile-pictures/ducks.ig.png"
                                    alt="Foto de perfil ducks.ig"
                                />
                            </div>
                            <p>ducks.ig</p>
                        </div>
                        <div class="c-stories__button">
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                    </section>

                    <section class="c-feed">
                        <div class="c-post">
                            <div class="c-post__top">
                                <div>
                                    <img
                                        src="./img/profile-pictures/meowed.svg"
                                        alt="Logo meowed"
                                    />
                                    <p>meowed</p>
                                </div>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                            <img
                                src="./img/feed/gato-telefone.svg"
                                alt="Gatinho mexendo no smartphone"
                                class="c-post__media"
                            />
                            <div class="c-post__reaction">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                            <div class="c-post__likes">
                                <img
                                    src="./img/profile-pictures/respondeai.svg"
                                    alt="Logo respondeai"
                                />
                                <p>
                                    Curtido por <strong>respondeai</strong> e
                                    <strong>outras 101.523 pessoas</strong>
                                </p>
                            </div>
                            <div class="c-post__caption">
                                <p>
                                    <strong>meowed </strong>Just scrolling...
                                    <ion-icon name="logo-octocat"></ion-icon>
                                    <ion-icon name="phone-portrait-outline"></ion-icon>
                                    <br />
                                    <br />
                                    <em>#meowed #focus #chatting #scrolling</em>
                                </p>
                            </div>
                            <div class="c-post__show-comments">
                                <p>Ver todos os 54.698 comentários</p>
                            </div>
                            <div class="c-post__comments">
                                <div>
                                    <p>
                                        <strong>adorable_animals </strong>OMG
                                        he's so cute!! S2
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                                <div>
                                    <p>
                                        <strong>barked</strong> woof woof woof
                                        woof
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                            </div>
                            <p class="c-post__time">HÁ 5 HORAS</p>
                            <div class="c-post__input-comment">
                                <ion-icon name="happy-outline"></ion-icon>
                                <input
                                    type="text"
                                    placeholder="Adicione um comentário..."
                                />
                                <button>Publicar</button>
                            </div>
                        </div>
                        <div class="c-post">
                            <div class="c-post__top">
                                <div>
                                    <img
                                        src="./img/profile-pictures/barked.svg"
                                        alt="Logo barked"
                                    />
                                    <p>barked</p>
                                </div>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                            <img
                                src="./img/feed/dog.svg"
                                alt="Cachorrinho dormindo"
                                class="c-post__media"
                            />
                            <div class="c-post__reaction">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                            <div class="c-post__likes">
                                <img
                                    src="./img/profile-pictures/adorableanimals.svg"
                                    alt="Logo adorable_animals"
                                />
                                <p>
                                    Curtido por{" "}
                                    <strong>adorable_animals</strong> e
                                    <strong>outras 99.159 pessoas</strong>
                                </p>
                            </div>
                            <div class="c-post__caption">
                                <p>
                                    <strong>barked </strong>Am not sleeping!
                                    Just resting my eyes
                                    <ion-icon name="bed-outline"> </ion-icon>
                                    <ion-icon name="paw-outline"></ion-icon>
                                    <br />
                                    <br />
                                    <em>#barked #dog #doggo #justarest</em>
                                </p>
                            </div>
                            <div class="c-post__show-comments">
                                <p>Ver todos os 45.854 comentários</p>
                            </div>
                            <div class="c-post__comments">
                                <div>
                                    <p>
                                        <strong>meowed</strong> he is sleeping,
                                        how lazy he is hahaha
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                                <div>
                                    <p>
                                        <strong>adorable_animals </strong>he's
                                        not resting, he's too busy beeing
                                        PERFECT &lt3
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                            </div>
                            <p class="c-post__time">HÁ 8 HORAS</p>
                            <div class="c-post__input-comment">
                                <ion-icon name="happy-outline"></ion-icon>
                                <input
                                    type="text"
                                    placeholder="Adicione um comentário..."
                                />
                                <button>Publicar</button>
                            </div>
                        </div>
                        <div class="c-post">
                            <div class="c-post__top">
                                <div>
                                    <img
                                        src="./img/profile-pictures/nathanwpylestrangeplanet.svg"
                                        alt="Foto de perfil nathanwpylestrangeplanet"
                                    />
                                    <p>nathanwpylestrangeplanet</p>
                                </div>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                            <img
                                src="./img/feed/dog-shapes.png"
                                alt="Fotos de cachorros de diversos ângulos em formas engraçadas"
                                class="c-post__media"
                            />
                            <div class="c-post__reaction">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                            <div class="c-post__likes">
                                <img
                                    src="./img/profile-pictures/barked.svg"
                                    alt="Logo barked"
                                />
                                <p>
                                    Curtido por <strong>barked</strong> e
                                    <strong>outras 84.556 pessoas</strong>
                                </p>
                            </div>
                            <div class="c-post__caption">
                                <p>
                                    <strong>nathanwpylestrangeplanet </strong>s
                                    h a p e s
                                </p>
                            </div>
                            <div class="c-post__show-comments">
                                <p>Ver todos os 36.104 comentários</p>
                            </div>
                            <div class="c-post__comments">
                                <div>
                                    <p>
                                        <strong>meowed </strong>Now do cats
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                                <div>
                                    <p>
                                        <strong>wawawiwacomics</strong> the last
                                        one. mildly concerned commentary.
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                            </div>
                            <p class="c-post__time">HÁ 10 HORAS</p>
                            <div class="c-post__input-comment">
                                <ion-icon name="happy-outline"></ion-icon>
                                <input
                                    type="text"
                                    placeholder="Adicione um comentário..."
                                />
                                <button>Publicar</button>
                            </div>
                        </div>
                        <div class="c-post">
                            <div class="c-post__top">
                                <div>
                                    <img
                                        src="./img/profile-pictures/best_ducks_of_insta.png"
                                        alt="Foto de perfil best_ducks_of_insta"
                                    />
                                    <p>best_ducks_of_insta</p>
                                </div>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                            <video autoplay muted loop>
                                <source
                                    src="./img/feed/A-cat-eating-rice-and-a-duck-messing-around.mp4"
                                    type="video/mp4"
                                />
                                <source
                                    src="./img/feed/A-cat-eating-rice-and-a-duck-messing-around.ogg"
                                    type="video/ogg"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <div class="c-post__reaction">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                            <div class="c-post__likes">
                                <img
                                    src="./img/profile-pictures/9gag.svg"
                                    alt="Logo 9gag"
                                />
                                <p>
                                    Curtido por <strong>9gag</strong> e
                                    <strong>outras 987.364 pessoas</strong>
                                </p>
                            </div>
                            <div class="c-post__caption">
                                <p>
                                    <strong>best_ducks_of_insta </strong>DUCKS
                                    RULE!!
                                    <ion-icon name="restaurant-outline">
                                        {" "}
                                    </ion-icon>
                                    <br />
                                    <br />
                                    Follow
                                    <em> @best_ducks_of_insta</em> S2
                                </p>
                            </div>
                            <div class="c-post__show-comments">
                                <p>Ver todos os 160.875 comentários</p>
                            </div>
                            <div class="c-post__comments">
                                <div>
                                    <p>
                                        <strong>adorable_animals</strong> hahaha
                                        that's so funny!
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                                <div>
                                    <p>
                                        <strong>meowed </strong>DISLIKED!!
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                            </div>
                            <p class="c-post__time">HÁ 10 HORAS</p>
                            <div class="c-post__input-comment">
                                <ion-icon name="happy-outline"></ion-icon>
                                <input
                                    type="text"
                                    placeholder="Adicione um comentário..."
                                />
                                <button>Publicar</button>
                            </div>
                        </div>
                    </section>
                </section>

                <aside class="c-side-bar">
                    <div class="c-side-bar__user">
                        <img
                            src="./img/profile-pictures/catanacomics.svg"
                            alt="Sua foto de perfil"
                        />
                        <p>
                            <strong>
                                catanacomics
                                <br />
                            </strong>
                            Catana
                        </p>
                    </div>
                    <div class="c-side-bar__sugestions-header">
                        <p>Sugestões para você</p>
                        <p>Ver tudo</p>
                    </div>
                    <div class="c-side-bar__sugestion">
                        <div>
                            <img
                                src="./img/profile-pictures/badvibesmemes.svg"
                                alt="Foto de perfil bad.vibe.memes"
                            />
                            <p>
                                <strong>bad.vibe.memes</strong>
                                <br />
                                Segue você
                            </p>
                        </div>
                        <button>Seguir</button>
                    </div>
                    <div class="c-side-bar__sugestion">
                        <div>
                            <img
                                src="./img/profile-pictures/chibirdart.svg"
                                alt="Foto de perfil chibirdart"
                            />
                            <p>
                                <strong>chibirdart</strong>
                                <br />
                                Segue você
                            </p>
                        </div>
                        <button>Seguir</button>
                    </div>
                    <div class="c-side-bar__sugestion">
                        <div>
                            <img
                                src="./img/profile-pictures/razoesparaacreditar.svg"
                                alt="Foto de perfil razoesparaacreditar"
                            />
                            <p>
                                <strong>razoesparaacreditar</strong>
                                <br />
                                Novo no Instagram
                            </p>
                        </div>
                        <button>Seguir</button>
                    </div>
                    <div class="c-side-bar__sugestion">
                        <div>
                            <img
                                src="./img/profile-pictures/adorableanimals.svg"
                                alt="Foto de perfil adorable_animals"
                            />
                            <p>
                                <strong>adorable_animals</strong>
                                <br />
                                Segue você
                            </p>
                        </div>
                        <button>Seguir</button>
                    </div>
                    <div class="c-side-bar__sugestion">
                        <div>
                            <img
                                src="./img/profile-pictures/smallcutecats.svg"
                                alt="Foto de perfil smallcutecats"
                            />
                            <p>
                                <strong>smallcutecats</strong>
                                <br />
                                Segue você
                            </p>
                        </div>
                        <button>Seguir</button>
                    </div>
                    <p class="c-side-bar__info">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade
                        • Termos • Localizações • Contas mais relevantes •
                        Hashtags • Idioma
                    </p>
                    <p class="c-side-bar__info">© 2021 INSTAGRAM DO FACEBOOK</p>
                </aside>
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

export default App;
