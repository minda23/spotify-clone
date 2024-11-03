import React, { useReducer } from 'react';

// first will be 1,2,3,4,5,6,7,8,9,10 a potom by sme prešli do if statement a spustili vnutorny return
// 0,0,0,0,0,0,0,0,0,0  by bola 10,10,10,10,10 a až potom by bolo 20 
function reducer(state, action) {
    switch (action.type) { // ak action.type button 1 je tak return....
        case 'USE_BUTTON_1': // case je vlastne return ...
            if (state.count === 10) {
                return {
                    number: state.number + 10,
                    count: 5  // najprv by išiel cyklus po 10  a potom by to skočilo na 5 a išlo 5,6,7,8,9,10 
                    // a potom by išlo 10,20,30 
                }
            }
            return {
                count: state.count + 1,
                number: state.number  // stale ked nieje ta hodnota 10 bude stale hodnota aká bola 
                // nemenime ju.  čiže ostava 0 , až dokym nieje if pravdivy

            };// tento cely objekt je náš novy state.

        case 'USE_BUTTON_2':
            return { count: state.count - 1 };// vracia new state ako novy objekt 
        default:
            throw new Error();
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0, number: 10 }); // toto je stary state

    return (
        <div>
            <p style={{ color: "white" }} >Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'USE_BUTTON_1' })}>Button 1</button>
            <button onClick={() => dispatch({ type: 'USE_BUTTON_2' })}>Button 2</button>
        </div>
    );
}

