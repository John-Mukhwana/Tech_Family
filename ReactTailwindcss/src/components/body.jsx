
import {useState} from 'react';

function Body(){
    const[color , setColor] = useState("green");

    const changeColor= () =>{
        setColor(prevColor => prevColor ==="green"? "blue": "yellow");
    };
    return (
        <div className="container mx-auto p-4  w-full h-80 item-center justify-center" style={{backgroundColor:color}} >
            <h1 className="text-2xl font-bold">Body</h1>
            <button className="border "   onClick={changeColor} >
                Click me
               
            </button>
            <p className="text-lg">This is the body of the page.</p>
        </div>
    );
}

export default Body;
