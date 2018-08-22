
const renderApp = ()=>{
    const template = (
        <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>{
            count++;
            renderApp();
        }}>Add One</button>
    
        <button onClick={()=>{
           count=0;
           renderApp();
        }}>Reset</button>
    
        </div>
    );

    ReactDOM.render(template,divid);
}

renderApp();