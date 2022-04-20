import React, {useState} from 'react';
import { determineUrl } from '../codeinjection';

export default function Modal(props)
{
    const [url, setUrl] = useState("");
    const {displayModal, onExit, onSubmit, debug} = props;

    async function scrapeUrlData()
    {
      if(!url) return;
  
      console.log(url);

      const response = await fetch(determineUrl(debug) + 'scrape', {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({url,}),
      });
  
      const data = await response.json();

      if(data.status === 'ok') {
        //console.log(data.result);
        let dogear = {
          title: data.result.title,
          image: data.result.image,
          description: data.result.description,
          url: url,
        }
        return dogear;
      } else {
        alert(data.error);
      }
    }
  

    async function submission(){
      const dogear = await scrapeUrlData();
      console.log(dogear);
      onSubmit(dogear);
      onExit();
    }

    return(
        <div className={displayModal ? 'modal-bg display-flex' : 'modal-bg display-none'}>
            <div className='create-post-modal'>
                <button className='close-button' onClick={onExit}>
                    <img src='/images/plus.png' alt='close'/>
                </button>
                <h2>Enter a New Dogear</h2>
                <div className='input-field'>
                    <h3>Url:</h3>
                    <input type='text' autoComplete='url' id='url' placeholder='https://www.example.com' value={url} onChange={(e) => setUrl(e.target.value)}></input>
                </div>
                <div className='button-holster'>
                    <button className= 'add-button' onClick = {() => submission()}><h3>POST</h3></button>
                </div>
            </div>
        </div>
    )
}