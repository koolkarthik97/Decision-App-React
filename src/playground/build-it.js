class BuildIt extends React.Component{
    
 

    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility : false
        };
    }
    
    render(){
        return(
            <div>
                <h1> Visibility Toggle </h1>
                <button onClick={this.handleToggle}> {!this.state.visibility ? "Show Text " : "Hide Text" } </button>
                <p>{this.state.visibility && "this is the text"}</p>    
            </div>
        );

    }

    handleToggle(){
        this.setState((prevState)=>{
            return({
                visibility : !prevState.visibility
            });
        });

    }

}

ReactDOM.render(<BuildIt/>,document.getElementById("app"));