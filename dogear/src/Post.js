import React, {useState, useEffect} from 'react';

function Post ({linkImage, title, details, linkURL}) {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
      if (clicked) {
        //window.location.assign({linkURL});
      }
    });

    return (
    <a href={linkURL}>
    <div className="post">
        <img src={linkImage} alt= ""/>
        <h3>{title}</h3>
        <p>{details}</p>
        <p>{linkURL}</p>
    </div>
    </a>
    );
}

export default Post