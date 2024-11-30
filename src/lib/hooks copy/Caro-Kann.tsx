import { createContext, ReactNode } from "react";
import { Board, UseBoard } from "./types/Types";
import { createBoard } from "./funcs/createBoard";
import { useStore } from "./funcs/useBoard";

export const playTartakower = <T,>(initialState: T) => {
  const Board = createContext<Board<T>>(createBoard(initialState));

  const useBoard: UseBoard<T> = <S,>(selector?: (state: T) => S, picker: boolean = false) => {
    return selector ? useStore(Board, selector, picker) : useStore(Board);
  }

  const BoardContext = ({ value, children }: { value: T; children: ReactNode }) => {
    return <Board.Provider value={createBoard(value)}>{children}</Board.Provider>;
  };

  return { useBoard, BoardContext };
};
