import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eat } from "store/calculate";
import AllocDalloc from "./AllocDalloc";

const AllocDallocContainer = () => {
    const livein = useSelector((state) => state.calculate.at_it_was);
    const sadako = useSelector((state) => state.calculate.causeOf);

    const dispatch = useDispatch();

    const yammi = (sadako) => {
        dispatch(
            eat(sadako)
        )
    }
    return (
        <AllocDalloc
            livein={livein}
            sadako={sadako}
            yammi={yammi}
        />
    );
};

export default AllocDallocContainer;