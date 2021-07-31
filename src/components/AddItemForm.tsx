import { Button, TextField } from "@material-ui/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/todoActions";

type Inputs = {
  title: string;
  content: string;
};

export default function AddItemForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { title, content } = data;
    dispatch(createPost({ title, content }));
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* include validation with required or other standard HTML validation rules */}
        <TextField
          {...register("title", { required: true })}
          id="title"
          label="title"
          fullWidth
        />

        {/* errors will return when field validation fails  */}
        {errors.title && <span>This field is required</span>}
      </div>

      <div>
        <TextField
          {...register("content", { required: true })}
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
        Add Item
      </Button>
    </form>
  );
}
