import 'react-slideshow-image/dist/styles.css';
import { Fade, Zoom, Slide } from 'react-slideshow-image';
import './styles.css';

const slideImages = [
    {
        url: 'https://musicart.xboxlive.com/7/276e5100-0000-0000-0000-000000000002/504/image.jpg',
        // caption: 'Third slide'
    },
    {
        url: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/GtEAAOSw1W9eN1cY/$_57.JPG?set_id=8800005007',
        // caption: 'First slide'
    },
    {
        url: 'https://rukminim2.flixcart.com/image/850/1000/kt0enww0/poster/r/t/n/medium-crowe-gladiator-movie-matte-finish-poster-original-imag6ghspeugdwng.jpeg?q=20&crop=false',
        // caption: 'Second slide'
    },
    {
        url: 'https://dessineart.com/cdn/shop/products/Movie-Posters-Black-Frame-Parasite-2019-Movie-Posters-Art.jpg?v=1642613257',
        // caption: 'Third slide'
    },
    {
        url: 'https://planete-vintage.com/cdn/shop/products/affiche-film-interstellar.jpg?v=1622462316',
        // caption: 'Third slide'
    },
    {
        url: 'https://i.pinimg.com/736x/0e/84/d5/0e84d580eb24bffc3dabc017412d7a4d.jpg',
        // caption: 'Third slide'
    },
]

 const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
     height: '400px',
     backgroundSize: 'cover',
     borderRadius: '12px',
     backgroundColor: '#060707',
 }

const spanStyle = {
    fontSize: '20px',
     background: '#efefef',
    color: '#000000',
}

export default function ImageSlider({}){
    return (
        <>
        <div className='slide-container'>
             <Fade>
                {slideImages.map((img, index) => {
                    return (
                        <div key={index}>
                            <div style={{...divStyle, backgroundImage:`url(${img.url})`}}>
                                <span style={spanStyle}>{img.caption}</span>
                            </div>
                        </div>
                    )
                })}
             </Fade>
        </div>
        </>
    )
}

