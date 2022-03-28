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
                <button onClick={onExit}>Cancel</button>
                <h2>Create a New Post</h2>
                <div className='input-field'>
                    <h3>Url:</h3>
                    <input autoComplete='url' id='url' placeholder='url'></input>
                </div>
                <button onClick = {submission}>Example URL Fetch</button>
            </div>
        </div>
    )
}