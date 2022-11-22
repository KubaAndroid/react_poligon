import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rat"];

const SearchParams = () => {

    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = ["poodle", "bitcoin"]

    return (
        <div className="search-params">
            <form onSubmit={(e) => setLocation(e.target.value)}>
                <label htmlFor="location">
                    Location: {location}
                    <input 
                        id="location" 
                        value={location} 
                        placeholder="location" 
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                    id="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }}
                    onBlur={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            )
                        )};
                    </select>
                </label>
                <label htmlFor="breed">
                    Animal
                    <select
                    id="breed"
                    value={breed}
                    onChange={(e) => {
                        setBreed(e.target.value);
                    }}
                    onBlur={(e) => {
                        setBreed(e.target.value);
                    }}
                    >
                        <option />
                        {breeds.map((alllBreeds) => (
                            
                            <option key={alllBreeds} value={alllBreeds}>
                                {alllBreeds}
                            </option>
                        ))};
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;