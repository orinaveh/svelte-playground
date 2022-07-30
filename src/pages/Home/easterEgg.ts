import type { ActionReturn } from 'svelte/action';

export const easterEgg = (node: HTMLDivElement): ActionReturn => {
  let timer: NodeJS.Timeout;
  let number = 0;

  const handleMouseover = (): void => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      timer = setTimeout(() => {
        number += 1;
        node.dispatchEvent(
          new CustomEvent<{ number: string }>('easteregg', {
            detail: { number: number.toString() },
          }),
        );
        timer = null;
        handleMouseover();
      }, 2000);
    }
  };

  node.addEventListener('mouseover', handleMouseover);
  node.addEventListener('mouseleave', handleMouseover);

  return {
    destroy(): void {
      node.removeEventListener('mouseover', handleMouseover);
      node.removeEventListener('mouseleave', handleMouseover);
    },
  };
};
