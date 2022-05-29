import React, {useState} from "react";

// Functions to get Fibonacci numbers
const FibonacciApp = () => {
    const [message, setMessage] = useState('');

    const handleState = event => {
        setMessage(event.target.value);
    };

    const calculateFibo = () => {
        let fibonacci = [0, 1];

        function getFibonacci(num) {
            for (let i = 2; i < num; i++) {
                fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
            }
            return fibonacci;
        }

        // Push into the array
        getFibonacci(message);

        // Sum last two values of the array and return it
        let newfibonacci = fibonacci.slice(-2), returnNumberFibonacci = newfibonacci[0] + newfibonacci[1];

        getFibonacciNumber(returnNumberFibonacci);
    }

    // Print the fibonacci number obtained
    function getFibonacciNumber(data){
        document.getElementsByClassName('fibo-container-result__results')[0].innerHTML = data;
    }

    return (
        <div>
            <p className='fibo-container-title'>Calculate Fibonacci!</p>
            <div className='fibo-container-buttons'>
                <input name="message" value={message} onChange={handleState} className="fibo-container-input" type="number" placeholder='Add number...' ></input>
                <button className="fibo-container-submit" onClick={calculateFibo}>Calculate</button>
            </div>
            <p className='fibo-container-result'>Fibonacci Result: <span className="fibo-container-result__results">0</span></p>
        </div>
    );
}

export default FibonacciApp;