import {useState}from 'react';
import './style.css';

export function Comp1()
{

    const [res,setRes] = useState("")
    const handleChange = (event) =>{
        setRes(res.concat(event.target.value));
    }

    const handleClear = () =>{
        setRes('');
    }

    const handleCalc = () => {
        let x = eval(res);
        setRes(x);
    }

    const handleDel = () => {
        let x = res;
        x = x.slice(0,x.length-1);
        setRes(x);
    }

    return (
        <div class="container">
            <div class="display-4 text-primary">Calculator</div><br></br>
            <div><textarea class="bg-primary"value={res}></textarea></div>
            <div class="disp" id="disp"></div>
            <div class="keypad">
                <button onClick={handleClear}  class="btn btn-primary  my-2" >Clear</button>
                <button onClick={handleDel} class="btn btn-primary  my-2" >C</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="(">(</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value=")">)</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="9">9</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="8">8</button>
                <button onClick={handleChange} class="btn btn-primary my-2" value="7">7</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="*">*</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="6">6</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="5">5</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="4">4</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="/">/</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="3">3</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="2">2</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="1">1</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="+">+</button>
                <button onClick={handleCalc} class="btn btn-primary  my-2" value="=">=</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="0">0</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value=".">.</button>
                <button onClick={handleChange} class="btn btn-primary  my-2" value="-">-</button>
            </div>
        </div>
    )
}