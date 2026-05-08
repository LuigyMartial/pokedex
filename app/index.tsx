import {ScrollView, Text, View, Image} from "react-native";
import { useEffect, useState } from "react";
import {deferTask} from "expo-server";

interface Pokemon {
    name: string;
    image: string;
    imageBack: string;
}
export default function Index() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    async function fetchPokemons(){
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
            const data = await response.json();

            // Fetch detailed info for each pokémon in parallel
            const datailedPokemons = await Promise.all(
                data.results.map(async (pokemon: any) => {
                    const res = await fetch(pokemon.url);
                    const details = await  res.json();

                    return {
                        name: pokemon.name,
                        image: details.sprites.front_default, // main sprite
                        imageBack: details.sprites.back_default,
                    };
                })
            );
            //console.log(data);
            setPokemons(datailedPokemons);

        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        // fetch pokemons
        fetchPokemons();
    }, []);

    return (
        <ScrollView>
            {pokemons.map((pokemon) => (
                <View key={pokemon.name}>
                    <Text>{pokemon.name}</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image source={{ uri: pokemon.image}} style={{ width: 150, height: 150 }} />
                        <Image source={{ uri: pokemon.imageBack }} style={{ width: 150, height: 150 }} />
                    </View>
                </View>
            ))}
        </ScrollView>

    );
}
