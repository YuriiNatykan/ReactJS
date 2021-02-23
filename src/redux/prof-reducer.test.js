import profReducer, {addPostActionCreator, deletePost} from "./prof-reducer";
import React from 'react';

//1. test data
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'Hi, how are you man', likesCount: 20},
        {id: 3, message: 'DADA', likesCount: 3},
        {id: 4, message: 'BLABLA', likesCount: 4}
    ]}

it ('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kam");
    //2. action
    let newState = profReducer(state, action);

    //3. expectation
    expect (newState.posts.length).toBe(5);
});

it ('message of new post should be correct', () => {
    let action = addPostActionCreator("it-kam");
    //2. action
    let newState = profReducer(state, action);

    //3. expectation
    expect (newState.posts[4].message).toBe("it-kam");
});
it ('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    //2. action
    let newState = profReducer(state, action);

    //3. expectation
    expect (newState.posts.length).toBe(3);
});
it ("after deleting length shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(100);
    //2. action
    let newState = profReducer(state, action);

    //3. expectation
    expect (newState.posts.length).toBe(4);
});