import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import Loader from '../components/Loader';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

import { deleteTour, getAllTours } from './AdminFetch';

const AdminTours = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ tours, setTours ] = useState();

    const [ message, setMessage ] = useState();

    useEffect( () => {
        setLoading( true )
        getAllTours()
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
            { loading && <Loader /> }
            { error && <h2>Error...</h2> }
            {
                tours && tours.map( t =>
                    <div key={ t._id }>
                        <h2>{ t.title }</h2>
                        <p>{ new Date( t.traveldate ).toLocaleDateString( "da", { day: "numeric", month: "long", year: "numeric" } ) }</p>
                        <p>{ t.teaser }</p>
                        <div>{ parser(t.content) }</div>
                        <AiFillDelete size='2em' color='red' title='Delete button' onClick={ () => handleDelete( t._id, t.title ) } />
                        <Link to={"/admin/admintoursret/" + t._id}>
                            <AiFillEdit size='2em' color='green' title='Edit button' />
                        </Link>
                        
                    </div>
                )
            }
        </div>
    )
}

export default AdminTours