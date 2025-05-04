import classes from './shows.module.css';
import Show from '../show/Show';

export default function Shows(props) {
    return (<>
    <section className={classes.shows}>
        <h1>{props.title}</h1>

        <div className={classes.showsParent}>

            {
                props.movies.map((movie) => {
                    return <Show movie={movie}/>
                })
            }           
        </div>
    </section>
    </>)
}