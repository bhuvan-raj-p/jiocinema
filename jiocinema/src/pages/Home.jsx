import Shows from "../components/shows/Shows";
import Carousel from "../components/carousel/Carousel";
import Channels from "../components/channels/Channels";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";
import Tags from "../components/tags/Tags";
import { useEffect, useState } from "react";
import ImageSlider from "../../ImageSlider";

export default function Home() {

  let [movies, setMovies] = useState([]);
  let [featuredMovies, setFeaturedMovies] = useState([]);
  let [dramaMovies, setDramaMovies] = useState([]);
  let [hindiMovies, setHindiMovies] = useState([]);
  let [topMovies, setTopMovies] = useState([]);
  let [japaneseMovies, setJapaneseMovies] = useState([]);

  useEffect(async () => {

    try{
    let response = await fetch("http://localhost:3000/movies");
    let movies = await response.json();
    setMovies(movies);

   let featMovies = movies.filter((movie) => {return movie.featured === true})
   setFeaturedMovies(featMovies.slice(0,4));

   let draMovies = movies.filter((movie) => {return movie.genre.includes('Drama')})
   setDramaMovies(draMovies.slice(0,6));

   let hinMovies = movies.filter((movie) => {return movie.language === 'Hindi'})
   setHindiMovies(hinMovies.slice(0,6));   

   let topRatedMovies = movies.filter((movie) => {return movie.imdb >= 8.5})
   setTopMovies(topRatedMovies.slice(0,6));

   let japMovies = movies.filter((movie) => {return movie.country === 'Japan'})
   setJapaneseMovies(japMovies.slice(0,6));

    }
    catch(err){
        console.log(err);
    }
  }, []);

  return (
    <>
      <Header movies={movies}/>
      <Tags />
      {/* <Carousel /> */}
      <ImageSlider />
      <Channels />
      <Featured movies={featuredMovies}/>
      <Shows title='Action Movies' movies={dramaMovies}/>
      <Shows title='Hindi Movies' movies={hindiMovies}/>
      <Shows title='Highly Rated Movies' movies={topMovies}/>
      <Shows title='Japanese Movies' movies={japaneseMovies}/>
    </>
  );
}
