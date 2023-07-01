import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeList = (props) => {
    const [pokeNames, setPokeNames] = useState(["start"]);
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
    const numberPokemon2Extract = 807;

    useEffect(() => {
        axios.get(`${pokeUrl}?limit=${numberPokemon2Extract}`)
            .then(res => {
                // console.log(res.data);
                const names = res.data.results.map(pokemon => pokemon.name);
                setPokeNames(names);
            })
            .catch(err => {
                console.log(err);
            })
        console.log(pokeNames);
    }, [])

    return(
        <ol>
            {pokeNames.map((name, idx) => <li key={idx}>{name}</li>)}
        </ol>
    );
}

export default PokeList;