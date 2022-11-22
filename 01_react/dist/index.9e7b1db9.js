const Pet = (args)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, args.name),
        React.createElement("h2", {}, args.animal),
        React.createElement("h2", {}, args.breed)
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {
            id: "brand"
        }, "Adopt me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanian"
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Parrot",
            breed: "Cockatiel"
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Cat",
            breed: "Persian"
        })
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
