import React, { useState } from "react";

function Usuario(props) {
    const [username, setUsername] = useState(props.user.username);
    const [nickname, setNickname] = useState(props.user.nickname);

    function changeUser(username, nickname) {
        setUsername(prompt("Insira seu novo nome de usuário:"));
        setNickname(prompt("Insira seu novo nome de exibição:"));
    }

    return (
        <>
            <div class="c-side-bar__user">
                <img
                    src="./img/profile-pictures/catanacomics.svg"
                    alt="Sua foto de perfil"
                />
                <p>
                    <strong>
                        {username}
                        <br />
                    </strong>
                    {nickname}
                    <ion-icon
                        name="create-outline"
                        onClick={() => changeUser(username, nickname)}
                    ></ion-icon>
                </p>
            </div>
        </>
    );
}

export default Usuario;
