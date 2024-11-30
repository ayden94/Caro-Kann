import { createContext } from "react";
import { createBoard } from "./funcs/createBoard";
import { useStore } from "./funcs/useStore";
export const playTartakower = (initFn) => {
    const Board = createContext(createBoard(initFn));
    const useBoard = (selector) => {
        return selector ? useStore(Board, selector) : useStore(Board);
    };
    return { useBoard };
};
