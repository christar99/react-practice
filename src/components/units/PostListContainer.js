import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "./PostList";
import styled from "styled-components";
import { getPosts } from "store/posts";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: violet;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
`;

function PostListContainer() {
    const { data, loading, error } = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if(loading) return <Container>로딩중...</Container>
    if(error) return <Container>에러발생</Container>
    if(!data) return null;
    return <PostList posts={data} />
}

export default PostListContainer;