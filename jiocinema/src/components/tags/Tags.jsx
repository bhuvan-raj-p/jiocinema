import { useState } from "react";
import classes from "./tags.module.css";

export default function Tags() {
  let [tags, setTags] = useState([
    "For you",
    "Action",
    "Drama",
    "Comedy",
    "Science Fiction",
    "Thriller",
    "Romantic",
    "Fantasy",
    "Crime",
    "Mystery",
    "Adventure",
    "Superhero",
    "Psychological",
  ]);

  return (
    <>
      <div className={classes.tags}>
        {tags.map((tag) => {
          return <p className={classes.tag}>{tag}</p>;
        })}
      </div>
    </>
  );
}
