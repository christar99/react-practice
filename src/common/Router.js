import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/units/Home";
import CalculatorContainer from "components/units/CalculatorContainer";
import CounterContainer from "components/units/CounterContainer";
import AllocDallocContainer from "components/units/AllocDallocContainer";
import PostListContainer from "components/units/PostListContainer";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Calculate" element={<CalculatorContainer />} />
                <Route path="/Counter" element={<CounterContainer />} />
                <Route path="/AllocDalloc" element={<AllocDallocContainer />} />
                <Route path="/PostList" element={<PostListContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;