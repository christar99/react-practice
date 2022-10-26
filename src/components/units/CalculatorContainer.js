import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, subs } from "store/calculate";
import Calculator from "./Calculator";

const CalculatorContainer = () => {
    const number = useSelector((state) => state.calculate.value);
    
    const dispatch = useDispatch();

    const addNumber = (number) => dispatch(add(number));
    const subsNumber = (number) => dispatch(subs(number));

    return (
        <Calculator
            number={number}
            addNumber={addNumber}
            subsNumber={subsNumber}
        />
    );
};

export default CalculatorContainer;