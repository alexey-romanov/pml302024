import React from 'react';
import { useRef } from 'react';

export function MessageInput(props: { dispatch: any }) {
    const inputRef = useRef(null);

    function onKeyUpValue(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.nativeEvent.key === 'Enter') {
            const val = inputRef.current.value;
            props.dispatch({ type: 'addMessage', payload: val });
            // console.log(event);
        }
    }
    return (
        <div>
            <input
                ref={inputRef}
                name="messageInput"
                onKeyUp={(e) => {
                    onKeyUpValue(e);
                }}
            ></input>
        </div>
    );
}
