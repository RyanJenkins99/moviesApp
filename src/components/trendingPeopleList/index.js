import React  from "react";
import { useQuery } from 'react-query'
import Spinner from '../../components/spinner'
import {getTrending, getTrendingPeople} from '../../api/tmdb-api.js'
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import TrendingPeople from "../trendingPeople";



const useStyles = makeStyles(theme=>({
    root: {
      padding: "40px",
    },
    tableCell:{
    color:"white",
    backgroundColor:"black",
    fontWeight:"normal"
    },
    tableCell1:{
    fontSize:12,
    fontWeight:"normal",
    backgroundColor:"grey",
    },
    tableCell2:{
    backgroundColor:"black",
    color:"white",
    fontSize:20,
    },

}));






    
