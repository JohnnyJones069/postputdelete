import React, { useState, useEffect } from 'react'

import { getToursTeaser, deleteTour } from './AdminFetch';

const AdminTours = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ tours, setTours ] = useState();

    const [ message, setMessage ] = useState();

    useEffect( () => {
        setLoading( true )
        getToursTeaser()
            .then( ( toursdata ) => {
                setTours( toursdata.data )
            } )
            .catch( ( err ) => {
                setError( true )
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [ 2000, message ] )

    const handleDelete = ( id, title ) => {

        if ( window.confirm( "Er du sikker på at du vil slette denne tur?" ) ) {

            setLoading( true )
            deleteTour( id )
                .then( ( toursdata ) => {
                    setMessage( "Tour med id'en " + title + " (" + id + ") er nu slettet" )

                } )
                .catch( ( err ) => {
                    setError( true )
                    console.log( err )
                } )
                .finally( () => {
                    setLoading( false )
                } )
        }
    }




    return (
        <div className='AdminTours'>
            { message && <h2>{ message }</h2> }
            { loading && <h2>Loading...</h2> }
            { error && <h2>Error...</h2> }
            {
                tours && tours.map( t =>
                    <div key={ t._id }>
                        <h2>{ t.title }</h2>
                        <p>{ new Date( t.traveldate ).toLocaleDateString( "da", { day: "numeric", month: "long", year: "numeric" } ) }</p>
                        <p>{ t.teaser }</p>
                        <button onClick={ () => handleDelete( t._id, t.title ) }>Slet element</button>
                    </div>
                )
            }
        </div>
    )
}

export default AdminTours