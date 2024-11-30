import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import { createBoard } from "./funcs/createBoard";
import { useStore } from "./funcs/useBoard";
export const playTartakower = (initialState) => {
    const Board = createContext(createBoard(initialState));
    const useBoard = (selector, picker = false) => {
        return selector ? useStore(Board, selector, picker) : useStore(Board);
    };
    const BoardContext = ({ value, children }) => {
        return _jsx(Board.Provider, { value: createBoard(value), children: children });
    };
    return { useBoard, BoardContext };
};
