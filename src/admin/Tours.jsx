import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

import { getAllTours } from './AdminFetch';
import Pagination from '../components/Pagination';
import AmountPerPage from '../components/AmountPerPage';
import Slider from '../components/Slider';

const Tours = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ tours, setTours ] = useState();

    const [ itemsPerPage, setItemsPerPage ] = useState( 4 )
    const [ currentPage, setCurrentPage ] = useState( 0 ) //Vis side 1 = index 0

    let sliderContent = [
        {
            _id: " 5f95dc56595ad72688f95515",
            sliderimage: "f1_ (16).jpg",
            alttext: "Super fed pc i god kvalitet til en rimelig pris"
        },
        {
            _id: " 5f95dc56595ad72688f95516",
            sliderimage: "f1_ (17).jpg",
            alttext: "Noget andet tekst"
        },
        {
            _id: " 5f95dc56595ad72688f95517",
            sliderimage: "f1_ (18).jpg",
            alttext: "Super fed tredje tekst"
        },
    ]

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






            <br />

            { loading && <Loader /> }
            { error && <ErrorMessage /> }

            {
                tours &&
                <div>


                    {/* <Slider sliderImages={ tours[ 0 ].gallery } imagePath="http://localhost:5099/images/tours/" /> */}
                    <Slider sliderImages={ sliderContent } imagePath="http://localhost:5099/images/tours/" />


                    <AmountPerPage itemsPerPage={ itemsPerPage } setItemsPerPage={ setItemsPerPage } setCurrentPage={ setCurrentPage } options={ [ 2, 3, 4, 5 ] } />



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
                                <p>{ t.teaser }</p>
                            </div>
                        ) }

                    </div>
                </div>
            }
        </div>
    )
}

export default Tours