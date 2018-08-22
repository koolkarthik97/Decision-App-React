import React from 'react';

import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js';
class DecisionApp extends React.Component{

    state = {
            options : [],
            selectedOption : undefined
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

    handleSelectedOption = ()=>{
        this.setState(()=>({
            selectedOption : undefined
        }));
    }

    handlePick=()=>{
        const option = Math.floor(Math.random() * this.state.options.length);
        const ans = this.state.options[option];
        this.setState(()=>({
            selectedOption : ans
        }));
    }


    handleRemoveAll=()=>{
        this.setState(()=>({options : []}));
    }

    handleDeleteOption=(optionToRemove)=>{
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

    handleAddOption=(option)=>{

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
             <div className='container'>
             <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
             <div className='widget'>
             <Options 
                options={this.state.options} 
                handleRemoveAll={this.handleRemoveAll} 
                handleDeleteOption={this.handleDeleteOption}
                />
             <AddOption handleAddOption={this.handleAddOption}/>
            </div>
             </div>
            <OptionModal selectedOption={this.state.selectedOption} handleSelectedOption={this.handleSelectedOption} />
             </div>
        );
    }
}



export default DecisionApp;
