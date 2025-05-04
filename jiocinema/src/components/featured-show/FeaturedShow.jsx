import classes from "./featured-show.module.css";

export default function featuredShow(props) {
  return <>
      <div className={classes.featuredShow}>
            <img
              src={props.movie.imageUrl}
              alt="featured movie"
            />
            <div className={classes.movieTitle}>
              {props.movie.name}
            </div>
          </div>
  </>;
}
