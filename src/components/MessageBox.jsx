import React from 'react'


const MessageBox = ( props ) => {
    return (
        <div className='MessageBox'>
            <h1>{ props.messagetitle }</h1>

            <button onClick={() => props.emptyMessage()}>&#10006;</button>
        </div>
    )
}

export default MessageBox