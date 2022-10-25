import React, { useState, useEffect } from 'react'
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import { searchTours } from './AdminFetch';


const SearchResult = () => {

    // Tjek i App.jsx hvad param hedder - fx searchresult/:q
    let {q} = useParams()

    const [ tours, setTours ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    useEffect( () => {
        searchTours( q )
            .then( ( response ) => {
                setTours( response.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setTours()
            } )
            .finally( () => {
                setLoading( false )
            } )

    }, [q] )




    return (

        <div className='Searchresult'>
            <h1>Søge Resultat</h1>

            { loading && <Loader /> }
            { error && <ErrorMessage /> }

            {
                tours && tours.map( t =>
                    <div key={ t._id }>
                    <h2>{ t.title }</h2>
                    <div>{t.teaser}</div>
                    </div>
                )
            }
        </div>
    )
}

export default SearchResult