import React, { useState } from "react";

function Media(props) {
    const {
        media: { type, src: mediaSrc, alt: mediaAlt },
    } = props;

    if (type === "img") {
        return (
            <img
                src={`./img/feed/${mediaSrc}`}
                alt={mediaAlt}
                class="c-post__media"
            />
        );
    } else if (type === "video") {
        return (
            <video autoPlay muted loop>
                <source src={`./img/feed/${mediaSrc}.mp4`} type="video/mp4" />
                <source src={`./img/feed/${mediaSrc}.ogg`} type="video/ogg" />
                {mediaAlt}
            </video>
        );
    }
}

function Comment(props) {
    const { name, text } = props;

    return (
        <div>
            <p>
                <strong>{name} </strong>
                {text}
            </p>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    );
}

function Post(props) {
    const {
        user: { name: userName, profileImgSrc: userImg },
        media,
        likes: {
            profileImgSrc: likesImg,
            profileName: likesName,
            amount: likesAmount,
        },
        caption,
        commentsAmount,
        comments,
        time,
    } = props;

    const [saved, setSaved] = useState(false);

    return (
        <div class="c-post">
            <div class="c-post__top">
                <div>
                    <img
                        src={`./img/profile-pictures/${userImg}`}
                        alt={`Logo ${userName}`}
                    />
                    <p>{userName}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <Media media={media} />
            <div class="c-post__reaction">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon
                    name={saved ? "bookmark" : "bookmark-outline"}
                    onClick={() => (saved ? setSaved(false) : setSaved(true))}
                ></ion-icon>
            </div>
            <div class="c-post__likes">
                <img
                    src={`./img/profile-pictures/${likesImg}`}
                    alt={`Logo ${likesName}`}
                />
                <p>
                    Curtido por <strong>{likesName}</strong> e
                    <strong>
                        outras {likesAmount.toLocaleString()} pessoas
                    </strong>
                </p>
            </div>
            <div class="c-post__caption">{caption}</div>
            <div class="c-post__show-comments">
                <p>
                    Ver todos os {commentsAmount.toLocaleString()} comentários
                </p>
            </div>
            <div class="c-post__comments">
                {comments.map((c) => (
                    <Comment name={c.name} text={c.text} />
                ))}
            </div>
            <p class="c-post__time">HÁ {time} HORAS</p>
            <div class="c-post__input-comment">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <button>Publicar</button>
            </div>
        </div>
    );
}

function Posts() {
    const postsArray = [
        {
            user: {
                name: "meowed",
                profileImgSrc: "meowed.svg",
            },
            media: {
                type: "img",
                src: "gato-telefone.svg",
                alt: "Gatinho mexendo no smartphone",
            },
            likes: {
                profileImgSrc: "respondeai.svg",
                profileName: "respondeai",
                amount: 101523,
            },
            caption: (
                <p>
                    <strong>meowed </strong>Just scrolling...
                    <ion-icon name="logo-octocat"></ion-icon>
                    <ion-icon name="phone-portrait-outline"></ion-icon>
                    <br />
                    <br />
                    <em>#meowed #focus #chatting #scrolling</em>
                </p>
            ),
            commentsAmount: 54698,
            comments: [
                {
                    name: "adorable_animals",
                    text: "OMG he's so cute!! S2",
                },
                {
                    name: "barked",
                    text: "woof woof woof woof",
                },
            ],
            time: 5,
        },
        {
            user: {
                name: "barked",
                profileImgSrc: "barked.svg",
            },
            media: {
                type: "img",
                src: "dog.svg",
                alt: "Cachorrinho dormindo",
            },
            likes: {
                profileImgSrc: "adorableanimals.svg",
                profileName: "adorable_animals",
                amount: 99159,
            },
            caption: (
                <p>
                    <strong>barked </strong>Am not sleeping! Just resting my
                    eyes
                    <ion-icon name="bed-outline"></ion-icon>
                    <ion-icon name="paw-outline"></ion-icon>
                    <br />
                    <br />
                    <em>#barked #dog #doggo #justarest</em>
                </p>
            ),
            commentsAmount: 45854,
            comments: [
                {
                    name: "meowed",
                    text: "he is sleeping, how lazy he is hahaha",
                },
                {
                    name: "adorable_animals",
                    text: "he's not resting, he's too busy beeing PERFECT <3",
                },
            ],
            time: 8,
        },
        {
            user: {
                name: "nathanwpylestrangeplanet",
                profileImgSrc: "nathanwpylestrangeplanet.svg",
            },
            media: {
                type: "img",
                src: "dog-shapes.png",
                alt: "Fotos de cachorros de diversos ângulos em formas engraçadas",
            },
            likes: {
                profileImgSrc: "barked.svg",
                profileName: "barked",
                amount: 84556,
            },
            caption: (
                <p>
                    <strong>nathanwpylestrangeplanet </strong>s h a p e s
                </p>
            ),
            commentsAmount: 36104,
            comments: [
                {
                    name: "meowed",
                    text: "Now make with cats",
                },
                {
                    name: "wawawiwacomics",
                    text: "the last one. mildly concerned commentary.",
                },
            ],
            time: 10,
        },
        {
            user: {
                name: "best_ducks_of_insta",
                profileImgSrc: "best_ducks_of_insta.png",
            },
            media: {
                type: "video",
                src: "A-cat-eating-rice-and-a-duck-messing-around",
                alt: "Pato interrompendo a refeição de um gato e fazendo uma bagunça",
            },
            likes: {
                profileImgSrc: "9gag.svg",
                profileName: "9gag",
                amount: 987364,
            },
            caption: (
                <p>
                    <strong>best_ducks_of_insta </strong>DUCKS RULE!!
                    <ion-icon name="restaurant-outline"> </ion-icon>
                    <br />
                    <br />
                    Follow
                    <em> @best_ducks_of_insta</em> S2
                </p>
            ),
            commentsAmount: 160875,
            comments: [
                {
                    name: "adorable_animals",
                    text: "hahaha that's so funny!",
                },
                {
                    name: "meowed",
                    text: "DISLIKED!!",
                },
            ],
            time: 10,
        },
    ];

    return (
        <>
            <section class="c-feed">
                {postsArray.map((p) => (
                    <Post
                        user={p.user}
                        media={p.media}
                        likes={p.likes}
                        caption={p.caption}
                        commentsAmount={p.commentsAmount}
                        comments={p.comments}
                        time={p.time}
                    />
                ))}
            </section>
        </>
    );
}

export default Posts;
