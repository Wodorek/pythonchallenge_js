import { createRef, useState } from 'react';
import Button from './Button';

interface IProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  challengeFunc: Function;
  initText: string;
}

const UploadForm: React.FC<IProps> = (props) => {
  const [value, setValue] = useState(props.initText);

  const fileInput = createRef<HTMLInputElement>();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (fileInput.current?.files?.length === 0) {
      setValue('Upload a file first!');
      return;
    }
    if (fileInput.current?.files) {
      const result = await props.challengeFunc(fileInput.current.files[0]);

      setValue(result);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <form
        className="flex flex-col gap-y-5 items-center"
        onSubmit={(e) => submitHandler(e)}
      >
        <input type="file" ref={fileInput} accept=".txt" />
        <Button type="submit">Try it!</Button>
      </form>
      <p className="bg-white w-4/5 text-center">{value}</p>
    </div>
  );
};

export default UploadForm;
