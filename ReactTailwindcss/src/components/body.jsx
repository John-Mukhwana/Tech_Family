
import {useState} from 'react';
import Form from './useReducer';

function Body(){
    const[color , setColor] = useState("green");

    const changeColor= () =>{
        setColor(prevColor => prevColor ==="green"? "blue": "yellow");
    };
    return (
        <div className="container  flex-column gap-10  mx-auto p-4  w-full h-80 item-center justify-between" style={{backgroundColor:color}} >
            <h1 className="text-2xl font-bold">Body</h1>
            <button className="border "   onClick={changeColor} >
                Click me
               
            </button>
            <p className="text-lg">This is the body of the page.</p>


            <div className='mt-10' >
            <Form/>
            </div>
            
        </div>
    );
}


export default Body;
