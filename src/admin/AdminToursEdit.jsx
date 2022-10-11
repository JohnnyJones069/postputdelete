import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { getTourByID } from './AdminFetch'
import ErrorMessage from '../components/ErrorMessage'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css';
const modules = {
  toolbar: [
    [ 'bold', 'italic', 'underline', 'strike' ],
    [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
    [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]
  ]

}

const AdminToursEdit = () => {

  const { ID } = useParams()
  console.log( ID );

  const [ tour, setTour ] = useState()
  const [ error, setError ] = useState( false )
  const [ loading, setLoading ] = useState( false )

  const [ content, setContent ] = useState()
  const [ roomtype, setRoomtype ] = useState()

  useEffect( () => {
    setLoading( true )
    getTourByID( ID )
      .then( ( respone ) => {
        setTour( respone.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setTour() // Tøm data
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  return (
    <div className='AdminToursEdit'>

      <h1>Ret Tour</h1>

      { error && <ErrorMessage /> }
      { loading && <Loader /> }

      {
        tour && <div>

          <form>

            {/* Title */ }
            <div>
              <label htmlFor='inpTitle'>Turens titel:</label>
              <br />
              <input type="text" name="title" defaultValue={ tour.title } id="inpTitle" required />
            </div>

            {/* Teser */ }
            <div>
              <label htmlFor='inpTeaser'>Turens teaser:</label>
              <br />
              <textarea name="teaser" defaultValue={ tour.teaser } id="inpTeaser" required />

            </div>


            {/* Content */ }
            <div>
              <label htmlFor='inpContent'>Turens Content:</label>
              <br />
              {/* <textarea name="content" id="inpContent" required /> */ }
              <ReactQuill theme="snow" modules={ modules } defaultValue={ tour.content } onChange={ setContent } />
            </div>

            {/* Room Type */ }
            <div>
              <label htmlFor='txtRoom'>Turens Værelses type:</label>
              <br />
              {/* <textarea name="roomtype" placeholder='Skriv din værelses type her' id="txtRoom" required /> */ }
              <ReactQuill theme="snow" modules={ modules } defaultValue={ tour.roomtype } onChange={ setRoomtype } />

            </div>

            {/* Travel date */ }
            <div>
              <label htmlFor='inpDate'>Turens Værelses type:</label>
              <br />
              <input type="date" name="traveldate" defaultValue={ new Date( tour.traveldate ).toLocaleDateString( "fr-CA" ) } min={ new Date().toISOString().slice( 0, 10 ) } id="inpDate" required />
            </div>

            {/* Duration */ }
            <div>
              <label htmlFor='inpDuration'>Varighed i dage</label>
              <br />
              <input type="number" defaultValue={tour.duration} name="duration" min="1" max="150" id="inpDuration" required />
            </div>

            {/* Priceminimum */ }
            <div>
              <label htmlFor='inpPricemin'>Minimumspris i kr</label>
              <br />
              <input type="number" defaultValue={tour.priceminimum} name="priceminimum" min="0" id="inpPricemaximum" required />
            </div>

            {/* Pricemaximum */ }
            <div>
              <label htmlFor='inpPricemax'>Maximumspris i kr</label>
              <br />
              <input type="number" defaultValue={tour.pricemaximum} name="pricemaximum" min="0" id="inpPricemax" required />
            </div>

            {/* image */ }
            <div>
              <p>Nuværende coverbilled:</p>
              <img src={ "http://localhost:5099/images/tours/" + tour.coverimage} width="200px"/>
              <br />
              <label htmlFor='inpImg'>Vælg evt. et andet coverbilled</label>
              <br />
              <input type="file" accept='image/*' name="image" id="inpImg" required />
            </div>

            {/* Gallery */ }
            <div>
              <p>Nuværende Gallerybilleder:</p>
              {
                tour.gallery.map(g => <img src={ "http://localhost:5099/images/tours/" + g} width="200px"/>)
              }
              <br />
              <label htmlFor='inpGallery'>Vælg evt. nogle nye galleribilleder</label>
              <br />
              <input type="file" multiple accept='image/*' name="galleryimages" id="inpGallery" />
            </div>

            <button type='submit'>Ret tur</button>




          </form>
        </div>
      }



    </div>
  )
}

export default AdminToursEdit