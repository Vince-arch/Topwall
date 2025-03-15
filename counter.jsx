import { Button } from '@/components/ui/button';
import React from 'react'
import { useReducer } from 'react'

const initialState = {count:0}

//Define Reducer function
function countReducer(state,action){{
    switch (action.type){
        //type
        case 'increment':
            //action
            return {count:state.count+1};
        
        case 'decrement':
            
            return {
                 count:state.count -1
                };
                
        case 'reset':
            return {count:0};
        
        default:
            return state;
    }
}
}

function Counter(){
    const [state,dispatch]=useReducer(countReducer, initialState)


    const increaseCount = ()=>{
        dispatch({type:'increment'})
    }

    const decreaseCount= ()=>{
         dispatch({type:'decrement'})
    }

    const resetCount=()=>{
        dispatch({type: 'reset'})
    }

    return(
        <div name='counter' >
            <div className='flex flex-row m-10 mb-0'>
            <Button onClick={increaseCount} className='pr-5'>+</Button>
            
            <p>Count:{state.count}</p>
            <button onClick={decreaseCount} className='pl-5'>-</button>
            </div>
            
            <button onClick={resetCount} className=' flex flex-row ml-20 bg-red-500'>RESET</button>
        </div>
    )
}
export default Counter