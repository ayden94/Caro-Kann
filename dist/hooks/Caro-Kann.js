import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import { useStore } from "./funcs/useStore";
import { createBoard } from "./funcs/createBoard";
export function playTartakower(initialState) {
    const Board = createContext(createBoard(initialState));
    function useBoard(selector) {
        return selector ? useStore(initialState, Board, selector) : useStore(initialState, Board);
    }
    ;
    const useDerivedBoard = (selector) => {
        return useStore(initialState, Board, selector)[0];
    };
    const BoardContext = ({ value, children }) => {
        return _jsx(Board.Provider, { value: createBoard(value), children: children });
    };
    return { useBoard, useDerivedBoard, BoardContext };
}
;
