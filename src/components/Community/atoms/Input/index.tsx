import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
  useState,
} from 'react';

interface CommentData {
  [key: string]: string;
}

interface Props {
  placeholder: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  commentList: CommentData;
  setCommentList: Dispatch<SetStateAction<CommentData>>;
}

const Input = ({
  placeholder,
  inputValue,
  setInputValue,
  commentList,
  setCommentList,
}: Props) => {
  const [composing, setComposing] = useState(false);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addComment = () => {
    if (inputValue.trim() !== '') {
      const newCommentKey = `content${Object.keys(commentList).length + 1}`;
      setCommentList((prevComments) => ({
        ...prevComments,
        [newCommentKey]: inputValue.trim(),
      }));
      setInputValue('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !composing) {
      addComment();
    }
  };

  return (
    <input
      value={inputValue}
      onChange={onChangeInput}
      onKeyDown={handleKeyDown}
      onCompositionStart={() => setComposing(true)}
      onCompositionEnd={() => setComposing(false)}
      className="fixed bottom-0 left-0 right-0 mx-auto mb-6 w-full max-w-[700px] rounded-md border-1 border-solid border-gray-200 bg-black px-5 py-3 text-body1 text-white"
      placeholder={placeholder}
    />
  );
};

export default Input;
