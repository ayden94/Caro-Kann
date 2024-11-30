import { Context, useContext, useSyncExternalStore } from "react";
import { Board, setBoard, UseStore } from "../types/Types";

export const useStore: UseStore = <T, S>(Board: Context<Board<T>>, selector?: (state: T) => S | boolean, picker?: boolean) => {
  const { getBoard, setBoard, subscribe } = useContext(Board);

  if (typeof selector === "function") {
    const board = useSyncExternalStore(subscribe, () => selector(getBoard()), () => selector(getBoard()));

    if (picker) return board;
    else return [board, setBoard] as const;
  }

  const board = useSyncExternalStore(subscribe, getBoard, getBoard);

  if (selector === true) return setBoard;
  else return [board, setBoard] as const;
}