import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import { updatePost } from "../actions/todoActions";
import { ITodo } from "../utils/interfaces";

interface EditItemFormProps {
  data: ITodo;
}

type Inputs = {
  title: string;
  content: string;
};

const EditItemForm: React.FC<EditItemFormProps> = ({ data: initialValues }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ mode: "onChange" });

  useEffect(() => {}, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(updatePost({ ...data, _id: initialValues._id }));
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* include validation with required or other standard HTML validation rules */}
        <TextField
          defaultValue={initialValues.title}
          {...register("title")}
          id="title"
          label="title"
          fullWidth
        />

        {/* errors will return when field validation fails  */}
        {errors.title && <span>This field is required</span>}
      </div>

      <div>
        <TextField
          defaultValue={initialValues.content}
          {...register("content")}
          id="content"
          label="content"
          fullWidth
        />

        {errors.content && <span>This field is required</span>}
      </div>

      <Button
        style={{ float: "right" }}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Update Item
      </Button>
    </form>
  );
};

export default EditItemForm;
