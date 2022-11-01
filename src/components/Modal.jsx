import React, { useEffect, useState } from 'react'
import parser from 'html-react-parser';
import { getTourByID } from '../admin/AdminFetch';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import { AiFillStar } from 'react-icons/ai';

const Modal = ( props ) => {

    let closeModal = props.closeModal;
    let contentId = props.showModalContent;

    const [ tour, setTour ] = useState()
    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false )

    useEffect( () => {
        setLoading( true )
        getTourByID( contentId )
            .then( response => {
                setTour( response.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setTour()
            } )
            .finally( () => {
                setLoading( false )
            } )

    }, [] )



    document.addEventListener( "keydown", ( e ) => {

    } )


    return (
        <>
            <div className="Modal">
                <span onClick={ () => props.closeModal() } className="close">&#10006;</span>

                { loading && <Loader /> }
                { error && <ErrorMessage /> }

                {tour && 
                <div>
                    <h2>{tour.title}</h2>
                    <p><i>{tour.teaser}</i></p>
                    <div>{parser(tour.content)}</div>

                    <p>{tour.rating} stjerner</p>
                    <p style={{color:"red"}}>{parser("&#9733;".repeat(tour.rating))}</p>
                    {
                        [...Array(tour.rating)].map((s,i) =>
                         <AiFillStar key={i}/>
                        )
                    
                    }
                    <br />
                    {
                        [...Array(tour.rating)].map((s,i) =>
                         <span style={{color:"red"}}>&#9733;</span>
                        )
                    
                    }
                    <br />
                    {
                        tour.gallery.map((g, i) => 
                            <img src={"http://localhost:5099/images/tours/" + g} key={"g" + i} alt="foto" width="100px" />
                        )
                    }
                    

                </div>
                
                }


            </div>

            <div className="message-bg-overlay"></div>
        </>
    )
}

export default Modal

// inspireret af https://www.youtube.com/watch?v=MBaw_6cPmAw


