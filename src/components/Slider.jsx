import React, { useState, useEffect } from 'react'

const Slider = ( props ) => {

    const [ slideIndex, setSlideIndex ] = useState( 0 ) // Start med at vise image 1 = index 0

    let sliderImages = props.sliderImages;
    let imagePath = props.imagePath;
    // Navn til timeout - så den ikke bliver dublikeret og stopper.
    let t;

    useEffect( () => {

        let i;
        let slides = document.getElementsByClassName( "mySlides" );

        // Så man ikke kan "bladre for langt frem" - Gå til første slide/image
        if ( slideIndex > slides.length - 1 ) {
            setSlideIndex( 0 )
            return;
        }

        // Så man ikke kan "bladre for langt tilbage" - Gå til sidste slide/image
        if ( slideIndex < 0 ) {
            setSlideIndex( slides.length - 1 )
            return;
        }

        // Skjuler alle slides/images
        for ( i = 0; i < slides.length; i++ ) {
            slides[ i ].style.display = "none";
        }

        // kend til den udvalgte image/slide
        slides[ slideIndex ].style.display = "block";
        // dots[ slideIndex - 1 ].className += " active";


        t = setTimeout( () => setSlideIndex( slideIndex + 1 ), 4000 ) // Nedtæller til ændring ad slideIndex (næste image/slide)


        // Finally - clean-up-function
        return () => {
            clearTimeout( t ) //Slet overflødelige/ekstra timeout

        }
    }, [ slideIndex ] ) // Når ændring i slideIndex skal ny slide/image vises - Øvrige skjulles


    return (
        // https://www.w3schools.com/howto/howto_js_slideshow.asp
        <div className='Slider'>

            <h1>Slider Her</h1>

            <div className="slideshow-container">

                {/* Full-width images with number and caption text */ }

                {
                    sliderImages && sliderImages.map( ( s, i ) =>

                        <div className="mySlides fade" key={ "slider" + i }>
                            <div className="numbertext">{ i + 1 } / { sliderImages.length }</div>
                            <img src={ imagePath + s.sliderimage } style={ { width: "100%" } } />
                            <div className="text">{s.alttext}</ div>
                        </div>


                    )
                }
                
                {/* Next and previous buttons */ }
                <span className="prev" onClick={ () => setSlideIndex( slideIndex - 1 ) }>&#10094;</span>
                <span className="next" onClick={ () => setSlideIndex( slideIndex + 1 ) }> &#10095;</span>

                {/* The dots/circles */ }
                <div className='dot-container'>
                    {
                        sliderImages && sliderImages.map( ( s, i ) =>
                            <span onClick={() => setSlideIndex(i)} className={i === slideIndex ? "dot active" : "dot"} key={"dot" + i}></span>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Slider