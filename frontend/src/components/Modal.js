import React from 'react';
import { exampleURLFetch, tutorialfetch} from '../codeinjection';

export default function Modal(props)
{
    const {displayModal, onExit, onSubmit} = props;
    const bookmark = {            
        title: "Placeholder",
        image: '/images/distorted2.png',
        description: 'This is where the description of the card can be found. This will provide more context than the title but would still be limited to a short number of characters, maybe 150.',
        tags: '#funny #weird #art',
        url: 'https://www.youtube.com'
    }

    const submission = () => {
        onSubmit(bookmark);
        onExit();
    }

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