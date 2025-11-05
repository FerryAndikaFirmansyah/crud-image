import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Counter Redux with Toolkit</h1>
                <h2>Counter : {count} </h2>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <div style={{ marginTop: '20px' }}>
                    <input
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    <button onClick={() => dispatch(incrementByAmount(amount))}>Add Amount</button>
                </div>
            </div>
        </>
    )
}