import React from 'react';
import "./pokemon.css"

interface Props {
    abilities: {
        name: string;
        ability: string;
    }[] | undefined,
    name: string,
    id: number,
    image: string,
}

const PokemonList: React.FC<Props> = (props) => {
    const {name, id, image, abilities} = props;
    return (
        <div>
            <section className="pokemon-list-container">
                <p className="pokemon-name"> {name} </p>
                <img src={image} alt="pokemon"/>
                <div className="detail-skill">
                    <p className="detail-ability"> Abilities:</p>
                    {abilities?.map((ab) => {
                        return (
                            <div> {ab.ability.name}</div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
};

export default PokemonList;
