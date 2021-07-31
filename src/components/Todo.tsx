import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { ITodo } from "../utils/interfaces";
import { deletePost } from "../actions/todoActions";
import EditItemPopup from "./EditItemPopup";
import { ReduxState } from "../reducers";
import { useEffect } from "react";

interface RowProps {
  row: ITodo;
  index: number;
}

const Todo: React.FC<RowProps> = ({ row, index }) => {
  const dispatch = useDispatch();
  const postSuccess = useSelector(
    (state: ReduxState) => state.post.postSuccess
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (postSuccess) handleClose();
  }, [postSuccess]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow>
        <TableCell style={{ fontWeight: "bolder" }} component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell align="left">{row.title?.slice(0, 50)}</TableCell>
        <TableCell align="left">{row.content?.slice(0, 50)}</TableCell>
        <TableCell align="left">
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button onClick={handleOpen} variant="contained" color="primary">
              Edit
            </Button>
            <Button
              onClick={() => dispatch(deletePost(row))}
              variant="contained"
              color="secondary"
            >
              Del
            </Button>
          </div>
        </TableCell>
      </TableRow>
      <EditItemPopup data={row} open={open} handleClose={handleClose} />
    </>
  );
};

export default Todo;
