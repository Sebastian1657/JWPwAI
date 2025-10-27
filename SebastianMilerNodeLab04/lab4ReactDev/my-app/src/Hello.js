function HelloWithProps(props){
    return <h1>Witaj, {props.name}</h1>;
}

function App(){
    return (
        <div>
            <HelloWithProps name="Sebastian" />
            <HelloWithProps name="Anna" />
            <HelloWithProps name="Bartek" />
        </div>
    );
}

export default App;