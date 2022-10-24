import React, { useState, useEffect } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { getAbout, editAbout } from './AdminFetch'


import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import MessageBox from '../components/MessageBox'
const modules = {
  toolbar: [
    [ 'bold', 'italic', 'underline', 'strike' ],
    [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
    [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]
  ]
}

const AdminAbout = () => {

  const [ about, setAbout ] = useState()
  const [ error, setError ] = useState( false )
  const [ loading, setLoading ] = useState( false )

  const [ content, setContent ] = useState()


  useEffect( () => {
    setLoading( true )
    getAbout()
      .then( ( response ) => {
        setAbout( response.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( err )
        setAbout()
      } )
      .finally( () => {
        setLoading( false )
      } )

  }, [] )


  const handleSubmit = ( e ) => {
    e.preventDefault()

    setLoading( true )

    let formData = new FormData( e.target )

    formData.append( "content", content )

    editAbout( formData )
      .then( ( response ) => {
        console.log( response.data )
        setMessage( "Om os er rettet!" )

      } )
      .catch( ( err ) => {
        setError( true )
        console.log( err )
      } )
      .finally( () => {
        setLoading( false )
        window.scrollTo( 0, 0 ) //Scroll to top of page
      } )

  }


  return (
    <div>
      <h1>Ret About segmentet</h1>
      { error && <ErrorMessage /> }
      { loading && <Loader /> }

      { about && <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="inpTitle">Titel</label>
            <br />
            <input type="text" defaultValue={ about.title } name="title" id="inpTitle" placeholder="Indtast title" />
          </div>
          <div>
            <label htmlFor="inpContent">Content</label>
            <br />
            <ReactQuill theme="snow" modules={ modules } defaultValue={ about.content } onReady={ !content ? setContent( about.content ) : null } onChange={ setContent } />
          </div>
          <div>
            <p>Nuværende Billed:</p>
            <img src={ "http://localhost:5099/images/about/" + about.image } alt="Om os billed" width="300px" />
            <br />
            <label htmlFor='inpImg'>Vælg evt. et andet billed</label>
            <br />
            <input type="file" accept='image/*' name="image" id="inpImg" />
          </div>
          <button type='submit'>Ret About segment</button>
        </form>
      </div>
      }

    </div>
  )
}

export default AdminAbout