class DecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        }
    }

    componentDidMount(){

        try {
            const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
        this.setState(()=>{
            return({
                options : options
            });
        });
    }

        } catch(e){
            console.log("error");
        }

        
    }

    componentDidUpdate(prevProps, prevState){
       if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }

    }

    componentWillUnmount(){
        console.log('unmounting data');

    }


    handlePick(){
        const option = Math.floor(Math.random() * this.state.options.length);
        const ans = this.state.options[option];
        alert(ans);
    }


    handleRemoveAll(){
        this.setState(()=>({options : []}));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>{
            return(
                {
                    options : prevState.options.filter((option)=>{
                         return option!=optionToRemove   
                    })
                }
            );
        });
    }

    handleAddOption(option){

        if(!option){
            return 'Please enter a vaild option...';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists...';
        }


        this.setState((prevState)=>{
            return {
                options : prevState.options.concat([option])
            };
        });
        
    }


   render(){
        return(
         <div>
             <Header/>
             <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
             <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleDeleteOption={this.handleDeleteOption}/>
             <AddOption handleAddOption={this.handleAddOption}/>
         </div>
        );
    }
}





const Header = (props) => {
        return (
            <div>
                <h1> {props.title} </h1>
                {props.subtitle &&  <h2> {props.subtitle} </h2> }
            </div>
        );
    }

        
Header.defaultProps = {
    title : "Decision App",
    subtitle : ' Decide which friend to get a gift !'
}


const Action = (props)=>{
        return (
            <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            
            
            Whom should i get a gift ?
            
            </button>
            </div>
        );
    }


    const Options = (props)=>{
        return (
            <div>
            <button onClick={props.handleRemoveAll}> Remove all Options </button>
                {props.options.length === 0 && <p> Please add an option to get started. </p>}
                {props.options.map((option)=> <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>) }
               
            </div>
        );
    }





const Option = (props) => {
        return(
            <div>
                 Option : {props.optionText} 
                 <button 
                    onClick={(e)=>{
                        props.handleDeleteOption(props.optionText)
                    }}
                >
                 Remove
                 </button>
                
            </div>
        )
    }



class AddOption extends React.Component{
  
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error : undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();

        const opt= e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(opt);
        this.setState(()=>{ return {error} });
        if(!error){
            e.target.elements.option.value = '';
        }
    }
  
    render(){
        return (
            <div>
            {this.state.error && <p> {this.state.error} </p> }
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button> Add Option</button>
            </form>
            </div>
        );
    }

}


ReactDOM.render(<DecisionApp />, document.getElementById('app'));