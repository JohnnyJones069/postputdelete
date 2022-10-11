import React, { useState } from 'react'
import ReactQuill from 'react-quill'

import { createTour } from './AdminFetch'

import 'react-quill/dist/quill.snow.css';
const modules = {
    toolbar: [
        [ 'bold', 'italic', 'underline', 'strike' ],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]
    ]

}



const AdminToursCreate = () => {

    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false )
    const [ message, setMessage ] = useState()

    const [ content, setContent ] = useState()
    const [ roomtype, setRoomtype ] = useState()


    const handleSubmit = ( e ) => {
        e.preventDefault() // Forhindre reload af side

        setLoading( true )

        let formData = new FormData( e.target )
        formData.append( "content", content );



        createTour( formData )
            .then( ( response ) => {
                e.target.reset() // Tømmere formularfelterne
                setMessage( "ny tur er oprettet! id nummer: " + response.data._id )

            } )
            .catch( ( err ) => {
                setError( true )
                console.log( err )
            } )
            .finally( () => {
                setLoading( false )
            } )

    }


    return (
        <div className='AdminToursCreate'>

            <h1>Opret en ny tur</h1>

            { message && <h2>{ message }</h2> }
            <form onSubmit={ handleSubmit }>

                {/* Title */ }
                <div>
                    <label htmlFor='inpTitle'>Turens titel:</label>
                    <br />
                    <input type="text" name="title" placeholder='Skriv din titel her' id="inpTitle" required />
                </div>

                {/* Teser */ }
                <div>
                    <label htmlFor='inpTeaser'>Turens teaser:</label>
                    <br />
                    <textarea name="teaser" placeholder='Skriv din teaser her' id="inpTeaser" required />

                </div>


                {/* Content */ }
                <div>
                    <label htmlFor='inpContent'>Turens Content:</label>
                    <br />
                    {/* <textarea name="content" id="inpContent" required /> */ }
                    <ReactQuill theme="snow" modules={modules} placeholder='Beskriv turen' onChange={ setContent } />
                </div>

                {/* Room Type */ }
                <div>
                    <label htmlFor='txtRoom'>Turens Værelses type:</label>
                    <br />
                    {/* <textarea name="roomtype" placeholder='Skriv din værelses type her' id="txtRoom" required /> */}
                    <ReactQuill theme="snow" modules={modules} placeholder='Beskriv turen' onChange={ setRoomtype } />

                </div>

                {/* Travel date */ }
                <div>
                    <label htmlFor='inpDate'>Turens Værelses type:</label>
                    <br />
                    <input type="date" min={ new Date().toISOString().slice( 0, 10 ) } name="traveldate" id="inpDate" required />
                </div>

                {/* Duration */ }
                <div>
                    <label htmlFor='inpDuration'>Varighed i dage</label>
                    <br />
                    <input type="number" name="duration" min="1" max="150" id="inpDuration" required />
                </div>

                {/* Priceminimum */ }
                <div>
                    <label htmlFor='inpPricemin'>Minimumspris i kr</label>
                    <br />
                    <input type="number" name="priceminimum" min="0" id="inpPricemaximum" required />
                </div>

                {/* Pricemaximum */ }
                <div>
                    <label htmlFor='inpPricemax'>Maximumspris i kr</label>
                    <br />
                    <input type="number" name="pricemaximum" min="0" id="inpPricemax" required />
                </div>

                {/* image */ }
                <div>
                    <label htmlFor='inpImg'>Vælg et coverbilled</label>
                    <br />
                    <input type="file" accept='image/*' name="image" id="inpImg" required />
                </div>

                {/* Gallery */ }
                <div>
                    <label htmlFor='inpGallery'>Vælg evt. galleribilleder</label>
                    <br />
                    <input type="file" multiple accept='image/*' name="galleryimages" id="inpGallery" />
                </div>

                <button type='submit'>Opret tur</button>




            </form>
        </div>
    )
}

export default AdminToursCreate