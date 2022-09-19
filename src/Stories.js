import React from "react";

function Story(props) {
    const { imgSrc, text } = props;

    return (
        <>
            <div class="c-stories__storie">
                <div>
                    <img
                        src="./img/stories-bar/stories_background.jpg"
                        alt="Fundo dos stories"
                    />
                    <img
                        src={`./img/profile-pictures/${imgSrc}`}
                        alt={`Logo ${text}`}
                    />
                </div>
                <p>{text}</p>
            </div>
        </>
    );
}

function Stories() {
    const Stories = [
        {
            imgSrc: "9gag.svg",
            text: "9gag",
        },
        {
            imgSrc: "meowed.svg",
            text: "meowed",
        },
        {
            imgSrc: "barked.svg",
            text: "barked",
        },
        {
            imgSrc: "nathanwpylestrangeplanet.svg",
            text: "nathanwpyle...",
        },
        {
            imgSrc: "wawawiwacomics.svg",
            text: "wawawiwac...",
        },
        {
            imgSrc: "respondeai.svg",
            text: "respondeai",
        },
        {
            imgSrc: "filomoderna.svg",
            text: "filomoderna",
        },
        {
            imgSrc: "memeariagourmet.png",
            text: "memeriago...",
        },
        {
            imgSrc: "best_ducks_of_insta.png",
            text: "best_duck...",
        },
        {
            imgSrc: "ducks.ig.png",
            text: "ducks.ig",
        },
    ];

    return (
        <>
            <section class="c-stories">
                {Stories.map((s) => (
                    <Story imgSrc={s.imgSrc} text={s.text} />
                ))}

                <div class="c-stories__button">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </section>
        </>
    );
}

export default Stories;
