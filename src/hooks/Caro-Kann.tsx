import { createContext, useContext, useSyncExternalStore } from "react";
import { Board, InitFn, UseBoard } from "./types/Types";
import { createBoard } from "./funcs/createBoard";
import { useStore } from "./funcs/useStore";

export const playTartakower = <T extends object>(initFn: InitFn<T>) => {
  const Board = createContext<Board<T>>(createBoard(initFn));

  const useBoard: UseBoard<T> = <S,>(selector?: (state: T) => S) => {
    return selector ? useStore(Board, selector) : useStore(Board);
  }

  return { useBoard };
};
