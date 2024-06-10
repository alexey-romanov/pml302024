import React from 'react';
import { Messages } from './messages';
import './MessageList.css';
// import { css } from 'astroturf';

// const btn = css`
//     color: black;
//     border: 1px solid black;
//     background-color: white;
// `;

function MessageListEntry(props: { textEntry: string }) {
    const mystyle = {
        color: 'black',
        // backgroundColor: 'DodgerBlue',
        padding: '10px',
        fontFamily: 'Arial',
        // opacity: 0.0,
        animation: 'fadeIn 5s'
    };

    return (
        <>
            <style>
                {`
                .PropText{
                    font-Size: 50px;
                    font-family: fantasy;
                    text-align: center;
                    opacity: 0.5;
                    animation: mymove 1s;
                }
                .PropText:hover {
                    transition: opacity .2s ease-out;
                }
                
                @keyframes mymove {
                    0%   {opacity: 0;}
                    100% {opacity: 0.5;}
                }
            `}
            </style>
            <p className="PropText">{props.textEntry}</p>
            <br></br>
        </>
    );
}

export function MessageList(props: { messages: string[] }) {
    function mapMessages(messages: string[]) {
        return messages.map((msg) => {
            return <MessageListEntry textEntry={msg}></MessageListEntry>;
        });
    }

    return <>{mapMessages(props.messages)}</>;
}
