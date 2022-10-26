import React from "react";
import styled from "styled-components";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: red;
    color: #fff;
    font-weight: 700;
    font-size: 18px;

    :hover {
        cursor: pointer;
        background-color: green;
    }
`;

const AllocDalloc = ({ livein, sadako, yammi }) => {
    const ghosts = Object.entries(sadako);
    return (
        <Background>
            <div>뭐시기저시기</div>
            <div>
                <span>이 집에 살고 있습니까? : </span>
                <span>{ livein ? '예쓰': '아니야' }</span>
            </div>
            <Button onClick={yammi}>
                야미
            </Button>
            {ghosts.map((sadako) => {
                return (
                    <div key={sadako[0]}>{sadako[0]} 이건? {sadako[1]}</div>
                )
            })}
        </Background>
    );
};

export default AllocDalloc;