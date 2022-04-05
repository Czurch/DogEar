import React from 'react';
import { exampleURLFetch, tutorialfetch} from '../codeinjection';

export default function Modal(props)
{
    const {displayModal, onExit} = props;
    return(
        <div className={displayModal ? 'modal-bg display-flex' : 'modal-bg display-none'}>
            <div className='create-post-modal'>
                <button className='close-button' onClick={onExit}>
                    <img src='/images/plus.png'/>
                </button>
                <h2>Create a New Post</h2>
                <div className='input-field'>
                    <h3>Url:</h3>
                    <input type='text' autoComplete='url' id='url' placeholder='https://www.example.com'></input>
                </div>
                <div>
                    <button className= 'add-button' onClick = {() => tutorialfetch()}>Example URL Fetch</button>
                </div>
            </div>
        </div>
    )
}