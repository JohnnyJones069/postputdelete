import React from 'react'

// Tilhøre Pagination/Tours.jsx

const AmountPerPage = ( props ) => {

    let options = props.options;
    let itemsPerPage = props.itemsPerPage;
    let setItemsPerPage = props.setItemsPerPage;
    let setCurrentPage = props.setCurrentPage;



    return (

        <div>

            <p>Antal items pr. side:</p>

            <select defaultValue={itemsPerPage} onChange={ ( e ) => {setItemsPerPage( parseInt( e.target.value ) ); setCurrentPage(0);}}>
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