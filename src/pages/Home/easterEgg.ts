export const easterEgg = (node: HTMLDivElement) => {
    let timer: NodeJS.Timeout;
    let number = 0;

    const handleMouseover = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        } else {
            timer = setTimeout(() => {
                number += 1;
                node.dispatchEvent(
                    new CustomEvent<{ number: string }>('easteregg', { detail: { number: number.toString() } })
                    );
                    timer = null;
                    handleMouseover();
                }, 2000);
            }
	};

    node.addEventListener('mouseover', handleMouseover);
    node.addEventListener('mouseleave', handleMouseover);

    return {
        upadte() {

        },
        destroy() {
            node.removeEventListener('mouseover', handleMouseover);
            node.removeEventListener('mouseleave', handleMouseover);
        }
    }

}