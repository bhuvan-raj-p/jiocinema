import classes from "./Header.module.css";
import JCLOGO from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import SearchIcon from "../../assets/ic_search.svg";
import voiceSearchIcon from "../../assets/voice-search.svg";
import userIcon from "../../assets/usericon.webp";
import { useEffect, useState } from "react";
import Show from "../show/Show";

export default function Header(props) {
  let navLinks = ["Home", "Sports", "Movies", "Tv Shows", "More"];

  let [searchText, setSearchText] = useState("");

  let [filteredMovies, setFiteredMovies] = useState([]);

  useEffect(() => {
    if (searchText !== "") {
      let filterMovies = props.movies.filter((movie) => {
        return movie.name.toUpperCase().indexOf(searchText.toUpperCase())==0
      });

      setFiteredMovies(filterMovies);
    } else {
      setFiteredMovies([]);
    }
  }, [searchText]);

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navigation}>
          <div className={classes.logo}>
            <img src={JCLOGO} />
            <div className={classes.premium}>
              <img src={crown} alt="crown image" /> <p>Go Premium</p>
            </div>
          </div>

          <ul className={classes.navLinks}>
            {navLinks.map((link) => {
              return <li className={classes.navLink}>{link}</li>;
            })}
          </ul>
        </nav>

        <div className={classes.search}>
          <div className={classes.searchbox}>
            <div className={classes.headerIcon}>
              <img src={SearchIcon} alt="search icon" />
            </div>
            <input
              type="text"
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              className={classes.searchInput}
              placeholder="Movies Shows and more"
            />

            <div className={classes.headerIcon}>
              <img
                src={voiceSearchIcon}
                alt="voice search icon"
                className={classes.headerIcon}
              />
            </div>
          </div>
          <img src={userIcon} alt="userIcon" className={classes.userIcon} />
        </div>
      </header>

      {filteredMovies.length !== 0 && (
        <div className={classes.searchResults}>
          {filteredMovies.map((movie) => {
            return <Show movie={movie} />;
          })}
        </div>
      )}
    </>
  );
}
