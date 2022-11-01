import React, { useState, useEffect } from 'react'
import { getAllTours } from '../admin/AdminFetch'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader';
import parser from 'html-react-parser';
import Modal from '../components/Modal';



const Home = () => {

  const [ tours, setTours ] = useState()
  const [ loading, setLoading ] = useState( false )
  const [ error, setError ] = useState( false )

  // Til styringen af at vis/skjule modal
  const [showModalContent, setShowModalContent] = useState()

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
      {showModalContent && <Modal showModalContent={showModalContent} closeModal={setShowModalContent} />}


      {/* tours.slice(0,2).map gør at jeg ser kun de første 2 */ }
      {/* tours.slice(1,2).map gør at jeg ser kun den 2. i rækken */ }
      {/* Array.sort(() => 0.5 - Math.random()) React venlig randomizer */ }
      {/* randomizeArray(tours).map */ }
      {
        tours && tours


          .filter( t => {
            return ( t.rating > 3 && t.pricemaximum > 14000 ) || ( t.rating == 5 )
          } )

          .map( t =>
            <div key={ t._id }>
              <h2>{ t.title }</h2>
              <p>{ new Date( t.traveldate ).toLocaleDateString( "da", { day: "numeric", month: "long", year: "numeric" } ) }</p>
              <div>Antal stjerner/rating:{ t.rating }</div>
              <div>
                <ul>
                  <li>Min. pris { t.priceminimum }</li>
                  <li>Max. pris { t.pricemaximum }</li>
                </ul>
                <span onClick={() => setShowModalContent(t._id)} style={{cursor: "pointer"}}>Læs mere...</span>
              </div>
            </div>
          )
      }
      {/* //.reverse() for at loope API bagfra */ }

    </div>
  )
}

export default Home