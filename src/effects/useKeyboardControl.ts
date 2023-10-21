import { useEffect, ChangeEvent } from 'react';

type KeyboardControl = {
  keyCode: number;
  callback: () => void;
};

const useKeyboardControl = ({ keyCode, callback }: KeyboardControl) => {
  const handleKeyDownAction = (event: KeyboardEvent) => {
    if (event.keyCode === keyCode) {
      event.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownAction);

    return () => {
      document.removeEventListener('keydown', handleKeyDownAction);
    };
  }, [keyCode, callback]);
};

export { useKeyboardControl };
