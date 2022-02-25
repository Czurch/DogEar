import React from 'react';
import { exampleURLFetch, tutorialfetch} from '../codeinjection';

export default function Modal(props)
{
    const {displayModal, onExit} = props;
    return(
        <div className={displayModal ? 'modal-bg display-flex' : 'modal-bg display-none'}>
            <div className='create-post-modal'>
                <button onClick={onExit}>Cancel</button>
                <h2>Create a New Post</h2>
                <div className='input-field'>
                    <h3>Url:</h3>
                    <input autoComplete='url' id='url' placeholder='url'></input>
                </div>
                <button onClick = {() => tutorialfetch()}>Example URL Fetch</button>
            </div>
        </div>
    )
}