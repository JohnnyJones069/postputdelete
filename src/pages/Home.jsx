import React, { useState, useEffect } from 'react'
import { getAllTours } from '../admin/AdminFetch'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader';
import parser from 'html-react-parser';



const Home = () => {

  const [ tours, setTours ] = useState()
  const [ loading, setLoading ] = useState( false )
  const [ error, setError ] = useState( false )

  useEffect( () => {
    setLoading( true )

    getAllTours()
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
  }, [] )

  // function randomizeArray(arr) {
  //   for (let i = arr.length -1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i+1));
  //     let k = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = k;
  //   }
  //   return arr;
  // }

  return (
    <div className='Home'>

      { error && <ErrorMessage /> }
      { loading && <Loader /> }

      {/* tours.slice(0,2).map gør at jeg ser kun de første 2 */}
      {/* tours.slice(1,2).map gør at jeg ser kun den 2. i rækken */}
      {/* Array.sort(() => 0.5 - Math.random()) React venlig randomizer */}
      {/* randomizeArray(tours).map */}
      {
                tours && tours.map( t =>
                    <div key={ t._id }>
                        <h2>{ t.title }</h2>
                        <p>{ new Date( t.traveldate ).toLocaleDateString( "da", { day: "numeric", month: "long", year: "numeric" } ) }</p>
                        <p>{ t.teaser }</p>
                        <div>{ parser(t.content) }</div>
                        
                    </div>
                )
            }

    </div>
  )
}

export default Home