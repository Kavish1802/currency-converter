import React from 'react'
import './style.css'
import { useState } from "react";

function Converter() {
 
    const [amt, setamt] = useState(0)
    const [from, setfrom] = useState('dollar')
    const [too, settoo] = useState('rupee')
    let mp = {
        dollar: {
            'dollar': 1,
            'rupee': 80.97,
            'euro': 0.92,
            'pound': 0.81,
            'ruble': 68.25
        },
        'rupee': {
            'rupee': 1,
            'dollar': 0.012,
            'euro': 0.011,
            'pound': 0.0100,
            'ruble': 0.84
        },
        'euro': {
            'euro': 1,
            'dollar': 1.09,
            'rupee': 88.08,
            'pound': 0.88,
            'ruble': 74.24
        },
        'pound': {
            'pound':1,
            'dollar': 1.24,
            'rupee': 100.32,
            'euro': 1.14,
            'ruble': 84.55
        },
        'ruble': {
            'ruble': 1,
            'dollar': 0.015,
            'rupee': 1.19,
            'euro': 0.013,
            'pound': 0.012
        }

    }
    function handle(currency) {
        setfrom(currency.target.value)
    }
    function handle2(currency) {
        settoo(currency.target.value)
    }
   
    return (
        <>
            <div className='container' >
                <input style={{ borderWidth: "5px", borderStyle:"solid",fontSize:"2.3rem", marginTop:"1.5rem"}} onChange={(input) => { setamt(input.target.value) }} type={'Number'} value={amt} />
            </div>
            {console.log(amt)}
            <div style={{display:"flex",justifyContent:"center"}}>
                <div className='container' style={{ marginTop: "3rem", fontSize: "2rem" , width:"45%"}}>
                    <form>
                        <div>
                            <input type={'radio'} value={'dollar'} checked={from === 'dollar'} onChange={handle}></input>
                            Dollar
                        </div>
                        <div>
                            <input type={'radio'} value={'rupee'} checked={from === 'rupee'} onChange={handle}></input>
                            Rupee
                        </div>
                        <div>
                            <input type={'radio'} value={'euro'} checked={from === 'euro'} onChange={handle}></input>
                            Euro
                        </div>
                        <div>
                            <input type={'radio'} value={'pound'} checked={from === 'pound'} onChange={handle}></input>
                            Pound
                        </div>
                        <div>
                            <input type={'radio'} value={'ruble'} checked={from === 'ruble'} onChange={handle}></input>
                            Ruble
                        </div>

                    </form>

                    <form>
                        <div>
                            <input type={'radio'} value={'dollar'} checked={too === 'dollar'} onChange={handle2}></input>
                            Dollar
                        </div>
                        <div>
                            <input type={'radio'} value={'rupee'} checked={too === 'rupee'} onChange={handle2}></input>
                            Rupee
                        </div>
                        <div>
                            <input type={'radio'} value={'euro'} checked={too === 'euro'} onChange={handle2}></input>
                            Euro
                        </div>
                        <div>
                            <input type={'radio'} value={'pound'} checked={too === 'pound'} onChange={handle2}></input>
                            Pound
                        </div>
                        <div>
                            <input type={'radio'} value={'ruble'} checked={too === 'ruble'} onChange={handle2}></input>
                            Ruble
                        </div>

                    </form>
                </div>
            </div>
            {/* <div className='container' style={{ marginTop: "3rem" }} >
                <button onClick={change} style={{ fontSize: "2rem" }}>
                    Convert
                </button>
            </div> */}
            <div className='container' style={{marginTop:"2rem",fontSize:"2.5rem",fontWeight:"600"}}>
                {(amt * mp[from][too]).toFixed(3)} {too[0].toUpperCase()}{too.slice(1)}s
            </div>
           
        </>     
    )
    
}

export default Converter;

