import React from "react";

function Sugestao(props) {
    const { imgSrc, user, detail } = props;

    return (
        <div class="c-side-bar__sugestion">
            <div>
                <img
                    src={`./img/profile-pictures/${imgSrc}`}
                    alt={`Foto de perfil ${user}`}
                />
                <p>
                    <strong>{user}</strong>
                    <br />
                    {detail}
                </p>
            </div>
            <button>Seguir</button>
        </div>
    );
}

function Sugestoes() {
    const sugestoes = [
        {
            imgSrc: "badvibesmemes.svg",
            user: "bad.vibe.memes",
            detail: "Segue você",
        },
        {
            imgSrc: "chibirdart.svg",
            user: "chibirdart",
            detail: "Segue você",
        },
        {
            imgSrc: "razoesparaacreditar.svg",
            user: "razoesparaacreditar",
            detail: "Novo no Instagram",
        },
        {
            imgSrc: "adorableanimals.svg",
            user: "adorable_animals",
            detail: "Segue você",
        },
        {
            imgSrc: "smallcutecats.svg",
            user: "smallcutecats",
            detail: "Segue você",
        },
    ];

    return (
        <>
            <div class="c-side-bar__sugestions-header">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            {sugestoes.map((s) => (
                <Sugestao imgSrc={s.imgSrc} user={s.user} detail={s.detail} />
            ))}
        </>
    );
}

export default Sugestoes;
