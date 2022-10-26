import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from 'store/counter';
import Counter from 'components/units/Counter';

const CounterContainers = () => {
    const number = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}

export default CounterContainers;