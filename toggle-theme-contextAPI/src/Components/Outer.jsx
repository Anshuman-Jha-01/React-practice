import Inner from "./Inner";

function Outer() {
    return (
        <div className="text-center">
            <p className="mb-4 mt-2">This is a simple example of context API in React</p>        
            <Inner />
        </div>
    );   
}

export default Outer;