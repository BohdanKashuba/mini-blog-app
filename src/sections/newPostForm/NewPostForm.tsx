import { ChangeEvent, useState } from "react";
import { CreatePostData } from "../../contexts/BlogDataContext";
import Button from "../../components/Button";
import { CreatePostFormWrapper } from "./newPostForm.style";
import TextField from "../../components/TextField";

interface IProps {
  onSubmit: (data: CreatePostData) => void;
}

const defaultFormData = {
  title: "",
  body: "",
};

const NewPostForm = ({ onSubmit }: IProps) => {
  const [formData, setFormData] = useState<CreatePostData>(defaultFormData);

  const isValid = formData.title && formData.body;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(
      (prevState) =>
        ({
          ...prevState,
          [event.target.name]: event.target.value,
        }) as Pick<CreatePostData, keyof CreatePostData>
    );
  };

  const handleOnCreate = () => {
    if (!isValid) {
      return;
    }
    onSubmit(formData);
  };

  return (
    <CreatePostFormWrapper>
      <TextField name="title" onChange={handleOnChange} />
      <TextField name="body" multiline onChange={handleOnChange} />
      <Button disabled={!isValid} onClick={handleOnCreate}>
        Create Post
      </Button>
    </CreatePostFormWrapper>
  );
};

export default NewPostForm;
