import Pokedex from "./Pokedex";

function Pokegame() {
    const defaultPokemons = [
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ];

    let hand1 = [...defaultPokemons];
    let hand2 = [];

    while (hand2.length < hand1.length) {
        let randIdx = Math.floor(Math.random() * hand1.length);
        let pokeRand = hand1.splice(randIdx, 1)[0];
        hand2.push(pokeRand);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <div>
            <Pokedex pokemons={hand1} exp={exp1} won={exp1 > exp2} />
            <Pokedex pokemons={hand2} exp={exp2} won={exp1 < exp2} />
        </div>
    );
}

export default Pokegame;
