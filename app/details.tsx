import {ScrollView, StyleSheet, Text } from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import {useEffect} from "react";


export default function Details(){
    const params = useLocalSearchParams();
    // console.log(params.name);
    async function fetchPokemonByName(name: string){
        // TODO
        /*try {

        } catch(error){}*/
    }

    useEffect(( ) => {}, [])

    return (
        <>
            <Stack.Screen options={{ title: params.name as string }} />

            <ScrollView contentContainerStyle={{
                gap: 16,
                padding: 16,
                backgroundColor: "red",
            }}>
                <Text>{params.name}</Text>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});