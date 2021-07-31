import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import Todo from "./Todo";
import AddItemPopup from "./AddItemPopup";

import { getPostList } from "../actions/todoActions";
import { ReduxState } from "../reducers";
import { ITodo } from "../utils/interfaces";

const useStyles = makeStyles((theme) => ({
  buttonsContainer: {
    padding: 20
  },
  table: {
    minWidth: 650
  }
}));

export default function Todos() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todoData = useSelector((state: ReduxState) => state.post);
  const postSuccess = useSelector(
    (state: ReduxState) => state.post.postSuccess
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (postSuccess) handleClose();
  }, [postSuccess]);

  useEffect(() => {
    dispatch(getPostList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h1>Todos</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Content</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoData?.orderedPosts?.map((row: ITodo, index) => (
              <Todo key={row._id} index={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.buttonsContainer}>
        <Button variant="contained" color="primary">
          Download CSV
        </Button>
        <Button onClick={handleOpen} variant="contained" color="secondary">
          Add Item
        </Button>
      </div>

      <AddItemPopup open={open} handleClose={handleClose} />
    </Container>
  );
}
