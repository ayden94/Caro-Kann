import { createContext, useContext, useSyncExternalStore } from "react";
import createBoard from "./funcs/createBoard";
export const playTartakower = (initFn) => {
    const Board = createContext(createBoard(initFn));
    function useBoard(selector) {
        const { getBoard, subscribe } = useContext(Board);
        const notationSnapshot = () => (selector ? selector(getBoard()) : getBoard());
        const board = useSyncExternalStore(subscribe, notationSnapshot, notationSnapshot);
        return board;
    }
    return { useBoard, Board };
};
