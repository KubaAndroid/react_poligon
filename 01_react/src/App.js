import React from "react";
import ReactDOM from "react-dom";
import Pet from './Pet';



const App = () => {
    return (
        <div>
            <h1>Adopt me!</h1>
            <Pet name="Luna" animal="CoW!" breed="Milky" />
            <Pet name="Ooink" animal="a pig!" breed="Piglet" />
            <Pet name="LeChonk" animal="pokemon" breed="Hog" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
