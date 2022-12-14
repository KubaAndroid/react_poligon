import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setstatus] = useState("unloaded");

    useEffect(() => {
        alert(status);
    }, [status]);

    useEffect(() => {
        if(!animal) {
            setBreedList([]);
        } else if(localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        async function requestBreedList(){
            setBreedList([]);
            setstatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            console.log(`json: ${json}`)
            console.log(`breeds: ${json.breeds}`)
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setstatus("loaded");
        }
    }, [animal]);

    return [breedList, status];
}