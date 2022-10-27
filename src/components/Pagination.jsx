import React from 'react'

const Pagination = ( {currentPage, setCurrentPage, itemsPerPage, itemsLength} ) => {

    // Props fra parrent som skal "pagineres" hvis du ikke vil skrive den i "props" positionen.
    // let currentPage = props.currentPage;        // Besked fra parrent om hvilken side der er den aktuelle lige nu
    // let setCurrentPage = props.setCurrentPage;  // Mulighed for at ændre i currentPage-state i parent
    // let itemsPerPage = props.itemsPerPage;      // Hvor mange items pr. side
    // let itemsLength = props.itemsLength;        // Hvor mange items der er  i alt

    // Beregn hvor mange "sider" det giver ud fra hvor mange items der er i alt divideret i hvor mange items der skal på hver side.
    let numberOfPages = Math.ceil( itemsLength / itemsPerPage )


    return (

        <div className="pagination">
            <button disabled={ currentPage <= 0 } onClick={ () => setCurrentPage( currentPage - 1 ) }>&lt;&lt;Prev</button>
            {
                [ ...Array( numberOfPages ) ].map( ( x, i ) =>
                    <button className={ i === currentPage ? "pagination-active" : null } key={ i } onClick={ () => setCurrentPage( i ) }>{ i + 1 }</button>
                )
            }
            <button disabled={ currentPage >= numberOfPages - 1 } onClick={ () => setCurrentPage( currentPage + 1 ) }>Next&gt;&gt;</button>
        </div>
    )
}

export default Pagination