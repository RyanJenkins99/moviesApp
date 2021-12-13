import React, {useState} from "react";
import Header from "../headerPeopleList";
import FilterCard from "../filterPeopleCard";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import PeopleList from "../peopleList";
//import Paginator from "../Paginator";


const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
});

function PeopleListPageTemplate({people, title, action}) {
    const classes = useStyles();
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);

    let displayedPeople = people
        .filter((m) => {
            return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter((m) => {
            return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    };

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header title={title}/>
            </Grid>
            <PeopleList action={action} people={displayedPeople}/>
            <Grid item container spacing={5}>
                <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FilterCard
                        onUserInput={handleChange}
                        titleFilter={nameFilter}
                        genreFilter={genreFilter}
                    />
                </Grid>
            </Grid>
        </Grid>

        
    );
}

export default PeopleListPageTemplate;