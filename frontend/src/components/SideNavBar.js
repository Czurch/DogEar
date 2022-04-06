import React from 'react';

export default function SideNavBar(props)
{
    return(
        <section className="leftnavmenu">
        <div className="page-icon">
        <button>
            <img src="/images/distorted2.png" alt="icon"/>
        </button>
        </div>
        <div className="page-icon">
        <button>
            <img src="/images/distorted2.png" alt="icon"/>
        </button>
        </div>
        <div className="page-icon">
        <button>
            <img src="/images/distorted2.png" alt="icon"/>
        </button>
        </div>
        <div className="page-icon">
        <button>
            <img src="/images/more.png" alt="add page"/>
        </button>
        </div>
    </section>
    )
}