import "./Pokecard.css";

const padToThree = (number) =>
    number < 999 ? `00${number}`.slice(-3) : number;

function Pokecard({ id, name, type, exp }) {
    const imgsrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(
        id
    )}.png`;
    return (
        <div className="Pokecard">
            <h1 className="Pokecard-title">{name}</h1>
            <div className="Pokecard-image">
                <img src={imgsrc} />
            </div>
            <div className="Pokecard-data">Type : {type}</div>
            <div className="Pokecard-data">EXP : {exp}</div>
        </div>
    );
}

export default Pokecard;
