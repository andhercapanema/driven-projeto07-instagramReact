import React from "react";

function Usuario(props) {
    const {
        user: { username, nickname },
    } = props;

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
                    <ion-icon name="create-outline"></ion-icon>
                </p>
            </div>
        </>
    );
}

export default Usuario;
