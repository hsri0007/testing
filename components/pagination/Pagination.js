import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {
  getAllCourses,
  getAllCategories,
  getAllCourseOffers,
} from "../../apiCalls";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationOutlined({ totalPage, setCurrPage, currPage }) {
  const classes = useStyles();
  const handlePagination = async (e, page) => {
    // setloading(true);
    window.scroll(0, 300);
    setCurrPage(page);
  };

  return (
    <div style={{ margin: "auto" }} className={classes.root}>
      <Pagination count={totalPage} page={currPage} onChange={handlePagination} variant="outlined" color="primary" />
    </div>
  );
}
