import { useRef, useEffect } from 'react';

interface TextAreaProps {
  placeholder: string;
  maxLength: number;
  text: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export function TextArea({
  placeholder,
  maxLength,
  text,
  state,
  setState,
}: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value);
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
    window.addEventListener('resize', adjustTextareaHeight);
    return () => {
      window.removeEventListener('resize', adjustTextareaHeight);
    };
  }, [state]);

  const renderTextWithColoredOverflow = () => {
    if (state.length <= maxLength) {
      return state;
    }
    return (
      <>
        <span>{state.slice(0, maxLength)}</span>
        <span className="text-error">{state.slice(maxLength)}</span>
      </>
    );
  };

  return (
    <div className={`relative flex flex-col gap-2 ${text}`}>
      <div className="relative">
        <div
          className={`min-h-[1.5em] w-full overflow-hidden break-words bg-black text-white`}
          style={{
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
          }}
        >
          {renderTextWithColoredOverflow()}
        </div>
        <textarea
          ref={textareaRef}
          className="absolute inset-0 resize-none bg-transparent text-transparent caret-main-500"
          onChange={handleChange}
          value={state}
          rows={1}
        />
      </div>
      {state === '' && (
        <div className="pointer-events-none absolute left-0 top-0">
          <span className={`text-gray-300`}>{placeholder}</span>
          <span className="text-body3 text-gray-300">
            {' '}
            (최대 {maxLength}글자)
          </span>
        </div>
      )}
      {state.length > 0 && (
        <p
          className={`text-label ${state.length > maxLength ? 'text-error' : 'text-main-500'}`}
        >
          {state.length}/{maxLength}
        </p>
      )}
    </div>
  );
}
