import React from 'react';
import { useSelector } from 'react-redux';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const { increaseLoading, decreaseLoading } = useSelector(state => ({
        increaseLoading: state.counter.currentState.increaseLoading,
        decreaseLoading: state.counter.currentState.decreaseLoading,
    }))

    const onChange = (e) => {
        onSetDiff(parseInt(e.target.value, 10));
    }

    let str = ''
    str = increaseLoading
        ? 'increaseLoading 로딩중'
        : decreaseLoading
            ? 'decreaseLoading 로딩중'
            : ''

    return (
        <div>
            <h2>{number}</h2>
            <br />
            <input
                type='number'
                value={diff}
                onChange={onChange}
            />
            <br />
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <div>
                {str}
            </div>
        </div>
    );
}

export default Counter;