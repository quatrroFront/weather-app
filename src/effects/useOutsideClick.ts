import { useEffect, RefObject } from 'react';

const useOutsideClick = (
  element: HTMLInputElement | null,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    // NOTE: Check if it's not a material popover/popup
    const muiPopover = (e.target as HTMLElement).closest('.MuiPopover-root');
    const muiDialog = (e.target as HTMLElement).closest('.MuiDialog-container');
    const reactModal = (e.target as HTMLElement).closest('.ReactModalPortal');
    if (
      element &&
      !element.contains(e.target as HTMLElement) &&
      !muiPopover &&
      !muiDialog &&
      !reactModal
    )
      callback();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

export { useOutsideClick };
