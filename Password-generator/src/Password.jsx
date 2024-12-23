// Import the necessary hooks
import { useState, useCallback, useRef, useEffect } from "react";

// Create and export the Password component
export default function Password() {

    // Initialize the state variables
    let [password, setPassword] = useState("");
    let [length, setLength] = useState(8);
    let [allowNumber, setAllowNumber] = useState(false);
    let [allowCharacters, setAllowCharacters] = useState(false);

    // Generate reference 
    let reference = useRef(null);

    // Create password function
    let newPasword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(allowNumber) {
            str += "0123456789";
        }
        if(allowCharacters) {
            str += "!@#$%^&*(){}[]`?/";
        }
        for (let i = 0; i < length; i++) {
            let charIndex = Math.floor(Math.random()*str.length)+1;
            pass += str[charIndex];            
        }
        setPassword(pass);
    }, [setPassword, length, allowCharacters, allowNumber]);

    // Generate password
    useEffect(() => {
        newPasword();
    },[length, allowNumber, allowCharacters, newPasword]);

    // Copy password
    function copyPassword() {
        reference.current?.select();
        window.navigator.clipboard.writeText(password);                
    }

    return(
        <>
            <div className="flex flex-auto justify-center">
                <div 
                    className="bg-amber-500 w-[550px] h-[155px] m-[30px] text-center border rounded-2xl"
                    style={{boxShadow: "3px 3px 9px black"}}
                >
                    <h1 className="text-2xl font-semibold mt-2">Password generator</h1>
                    <div className="flex shadow rounded-lg overflow-hidden mb-4 w-[300px] m-4 ml-10">
                        <input
                            type="text"
                            className="outline-none w-full py-1 px-3"
                            value={password}
                            placeholder="Password"
                            ref={reference}
                            readOnly
                        />
                        <button
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'
                        onClick={copyPassword}
                        >copy</button>
                    </div>
                    <div className="flex rounded-lg overflow-hidden w-[450px] m-4 ml-10">
                        <input
                            type="range"
                            id="length"
                            value={length}
                            onChange={(event) => setLength(event.target.value)}
                            className="outline-none cursor-pointer mr-2"
                            min={8}
                            max={100}
                            step={1}

                        />
                        <label htmlFor="length" className="text-rose-900 cursor-pointer">Length: {length}</label>
                        <input
                            type="checkbox"
                            id="number"
                            defaultChecked={allowNumber}
                            onClick={() => setAllowNumber((currValue) => !currValue)}
                            className="ml-4 me-2"
                        />
                        <label htmlFor="number" className="text-rose-900 cursor-pointer">Number</label>
                        <input
                            type="checkbox"
                            id="characters"
                            defaultChecked={allowCharacters}
                            onClick={() => setAllowCharacters((currValue) => !currValue)}
                            className="ml-4 me-2"
                        />
                        <label htmlFor="characters" className="text-rose-900 cursor-pointer">Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
}