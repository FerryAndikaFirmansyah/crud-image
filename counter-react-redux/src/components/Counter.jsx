import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/action';

export default function Counter() {
    const count = useSelector((state) => state.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    return (
        <>
            <h1>Counter with React Redux</h1>
            <div style={{ textAlign: 'center' }}>
                <h1>Counter : {count} </h1>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>

                {/* untuk tambah +2 */}
                <div style={{ marginTop: '20px' }}>
                    <input
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    <button onClick={() => dispatch(incrementByAmount(amount))}> Add Amount</button>
                </div>
            </div>
        </>
    )
}