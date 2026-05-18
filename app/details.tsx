import {ScrollView, StyleSheet, Text } from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import {useEffect} from "react";


export default function Details(){
    const params = useLocalSearchParams();
    // console.log(params.name);
    async function fetchPokemonByName(name: string){
        // TODO
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            const data = await response.json();

            //console.log(data);

        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemonByName(params.name as string);
    }, []);

    return (
        <>
            <Stack.Screen options={{ title: params.name as string }}/>

            <ScrollView contentContainerStyle={{
                gap: 16,
                padding: 16,
                backgroundColor: "#96D9D6",
            }}>
                <Text style={{textAlign: "center"}}>{params.name}</Text>
                <Text>Details</Text>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});