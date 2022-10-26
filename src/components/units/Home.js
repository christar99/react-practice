import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    gap: 20px;
`;

const Subject = styled.p`
    font-size: 24px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
`;

const Home = () => {
    return (
        <Background>
            <Subject>아무고토 없구용</Subject>
            <Button>
                <Link to="/Calculate">더하고빼기</Link>
            </Button>
            <Button>
                <Link to="/Counter">카운터</Link>
            </Button>
            <Button>
                <Link to="/AllocDalloc">알록달록~</Link>
            </Button>
            <Button>
                <Link to="/PostList">포스트리스트</Link>
            </Button>
        </Background>
    )
}

export default Home;