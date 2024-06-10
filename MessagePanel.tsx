import React from 'react';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';
import { Messages } from './messages';
import { useReducer } from 'react';
import _, { cloneDeep } from 'lodash';
type ListProps = {
    text: string;
};

function splitLines(t: string) {
    return t.split(/\r\n|\r|\n/);
}

interface Action {
    type: 'addMessage';
    payload: string;
}

function reducer(state: Messages, action: Action) {
    if (action.type === 'addMessage') {
        const newState = _.cloneDeep(state);

        newState.messages.push(action.payload);
        // const newState: Messages = {messages:}
        return newState;
    }

    return state;
}

export function MessagePanel(props: ListProps) {
    const [state, dispatch] = useReducer(reducer, new Messages());

    return (
        <div>
            <MessageList messages={state.messages}></MessageList>
            <MessageInput dispatch={dispatch}></MessageInput>
        </div>
    );
}
