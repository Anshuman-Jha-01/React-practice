import { useContext } from "react";
import myContext from "../Context/myContext";

function Inner() {
    let {theme, changeTheme} = useContext(myContext); 
    return (
        <>
            <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl">
                <h3 class="text-slate-900 dark:text-white mt-3 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>
            <button className="dark:bg-slate-700 dark:text-white rounded-md p-4 m-4" onClick={changeTheme}>Theme: {theme}</button>
        </>
    );   
}

export default Inner;