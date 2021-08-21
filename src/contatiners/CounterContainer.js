import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../compontents/Counter';
import { decrease, increase, setDiff } from '../reducer/conter';

function CounterContainer() {
    const dispatch = useDispatch()

    const { number, diff } = useSelector(state => ({
        number: state.counter.currentDataState.number,
        diff: state.counter.currentDataState.diff
    }))

    const onIncrease = () => {
        console.log('increase action function')
        dispatch(increase())
    }

    const onDecrease = () => {
        dispatch(decrease())
    }

    const onSetDiff = (data) => {
        dispatch(setDiff(data))
    }

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;