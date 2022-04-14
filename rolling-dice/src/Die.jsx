import "./Die.css";

function Die({ face, rolling }) {
    return (
        <i
            className={`Die fa-solid fa-dice-${face} ${rolling && "rolling"}`}
        ></i>
    );
}

export default Die;
