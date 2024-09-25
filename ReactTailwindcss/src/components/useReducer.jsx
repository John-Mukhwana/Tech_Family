

import { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case 'incremented_age':{
            return{
                name: state.name,
                age: state.age + 1

            };
        }
        case 'changed_name':{
            return{
                name:action.nextName,
                age: state.age
            };
        }
    }
    throw Error('Unknown actio:'+ action.type);
}
const initialState ={name:'Bradley', age: 21};

export default function Form(){

    const [state,dispatch]= useReducer(reducer,initialState);
     
    const handleButtonClick=()=>{
       dispatch({type:'incremented_age'});
    }

    const handleInputChange=(e)=>{
        dispatch({
            type:'changed_name',
            nectName:e.target.value
        });
    }

    return(
        <div className="flex flex-col bg-gray-500 w-80 h-40">
        <input
           
           value={state.name}
           onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>
            increment Age
        </button>

        <p>Hello,{state.name}.You are {state.age} Years Old</p>
        </div>
    )
    
}