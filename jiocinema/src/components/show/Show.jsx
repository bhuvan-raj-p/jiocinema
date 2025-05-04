import classes from "./show.module.css";

export default function Show(props) {
  return (
    <>
      <div className={classes.show}>
        <img
          src={props.movie.imageUrl}
          alt="poster"
        />
        <div className={classes.movieTitle}>
          {props.movie.name}
        </div>
      </div>
    </>
  );
}
