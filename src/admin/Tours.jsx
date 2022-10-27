import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

import { getAllTours } from './AdminFetch';
import Pagination from '../components/Pagination';

const Tours = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ tours, setTours ] = useState();

    const [ itemsPerPage, setItemsPerPage ] = useState( 2 )
    const [ currentPage, setCurrentPage ] = useState( 0 ) //Vis side 1 = index 0


    useEffect( () => {
        setLoading( true )
        getAllTours()
            .then( ( toursdata ) => {
                setTours( toursdata.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setTours()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [] )



    return (
        <div>

            <h1>Alle tours - med pagination</h1>

            <div>
                <p>Antal items pr. side:</p>
                <button onClick={ () => setItemsPerPage( 2 ) } className={itemsPerPage === 2 ? "amount-active" : null}>2</button>
                <button onClick={ () => setItemsPerPage( 4 ) } className={itemsPerPage === 4 ? "amount-active" : null}>4</button>
                <button onClick={ () => setItemsPerPage( 5 ) } className={itemsPerPage === 5 ? "amount-active" : null}>5</button>
            </div>

            <br />

            { loading && <Loader /> }
            { error && <ErrorMessage /> }

            {
                tours &&
                <div>

                    {/* <div className="pagination">
                        <button disabled={ currentPage <= 0 } onClick={ () => setCurrentPage( currentPage - 1 ) }>&lt;&lt;Prev</button>
                        {
                            [ ...Array( numberOfPages ) ].map( ( x, i ) =>
                                <button className={i === currentPage ?"pagination-active" : null} key={ i } onClick={() => setCurrentPage( i ) }>{ i + 1 }</button>
                            )
                        }
                        <button disabled={ currentPage >= numberOfPages - 1 } onClick={ () => setCurrentPage( currentPage + 1 ) }>Next&gt;&gt;</button>
                    </div> */}

                    <Pagination itemsPerPage={ itemsPerPage } itemsLength={ tours.length } currentPage={ currentPage } setCurrentPage={ setCurrentPage } />

                    <br />

                    <div className="card-container">

                        { tours.slice( ( currentPage * itemsPerPage ), ( ( currentPage * itemsPerPage ) + itemsPerPage ) ).map( t =>
                            <div className='card' key={ t._id }>
                                <h2>{ t.title }</h2>
                            </div>
                        ) }

                    </div>
                </div>
            }
        </div>
    )
}

export default Tours