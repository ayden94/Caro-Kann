export default function createBoard<T>(initFn: (set: (nextState: Partial<T> | ((prev: T) => T)) => void, get: () => T) => T) {
  let board: T;
  const callbacks = new Set<() => void>();
  const getBoard = () => board;

  const setBoard = (nextState: Partial<T> | ((prev: T) => T)) => {
    board = typeof nextState === "function" ? (nextState as (prev: T) => T)(board) : {...board, ...nextState};
    callbacks.forEach((callback) => callback());
  };

  const subscribe = (callback: () => void) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    };
  };

  board = initFn(setBoard, getBoard);

  return { getBoard, setBoard, subscribe };
};
