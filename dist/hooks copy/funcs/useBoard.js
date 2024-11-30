import { useContext, useSyncExternalStore } from "react";
export const useStore = (Board, selector, picker) => {
    const { getBoard, setBoard, subscribe } = useContext(Board);
    if (typeof selector === "function") {
        const board = useSyncExternalStore(subscribe, () => selector(getBoard()), () => selector(getBoard()));
        if (picker)
            return board;
        else
            return [board, setBoard];
    }
    const board = useSyncExternalStore(subscribe, getBoard, getBoard);
    if (selector === true)
        return setBoard;
    else
        return [board, setBoard];
};
