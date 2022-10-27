import React from 'react'

// Tilhøre Pagination/Tours.jsx

const AmountPerPage = ( props ) => {

    let setItemsPerPage = props.setItemsPerPage;
    let options = props.options



    return (

        <div>
            
            <p>Antal items pr. side:</p>
            {/* <button onClick={ () => setItemsPerPage( 2 ) } className={ itemsPerPage === 2 ? "amount-active" : null }>2</button>
            <button onClick={ () => setItemsPerPage( 4 ) } className={ itemsPerPage === 4 ? "amount-active" : null }>4</button>
            <button onClick={ () => setItemsPerPage( 5 ) } className={ itemsPerPage === 5 ? "amount-active" : null }>5</button> */}

            <select onChange={ ( e ) => setItemsPerPage( +e.target.value ) }>
                {
                    options.map( o =>
                        <option value={ o } key={ o }>{ o }</option>

                    )
                }
                {/* <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option> */}
            </select>
        </div>
    )
}

export default AmountPerPage