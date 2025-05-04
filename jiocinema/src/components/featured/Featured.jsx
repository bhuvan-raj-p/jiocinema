import classes from "./featured.module.css";
import FeaturedShow from '../featured-show/FeaturedShow';

export default function Featured(props) {
  return (
    <>
      <section className={classes.featured}>
        <h1 className={classes.sectionTitle}>Hot Right Now&#128293;</h1>

        <div className={classes.shows}>

         {
          props.movies.map((movie) => {
            return <FeaturedShow movie={movie}/>
          })
         }          
        </div>
      </section>
    </>
  );
}
