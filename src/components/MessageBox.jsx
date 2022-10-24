import React from 'react'



const MessageBox = ( props ) => {


    document.addEventListener( "keydown", ( e ) => {
        if ( e.key === "Escape" ) {
            props.emptyMessage()
        }
    } )
    return (
        <>
            <div className='MessageBox'>
                <span onClick={ () => props.emptyMessage() } className="close">&#10006;</span>

                <div className="header">
                    <h1 className='title'>{ props.messagetitle }</h1>
                </div>
            </div>
            <div className="message-bg-overlay"></div>
        </>

    )
}

export default MessageBox