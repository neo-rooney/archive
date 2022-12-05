export const usePreventLeave = () => {
    const listener = e => {
        e.preventDefault();
        e.returnValue = "";
    };
    const enablePrevent = () =>
        window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
        window.removeEventListener("beforeprint", listener);

    return { enablePrevent, disablePrevent };
};
