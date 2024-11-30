export interface Board<T> {
  getBoard: () => T;
  setBoard: (action: T | ((prev: T) => T)) => void;
  subscribe: (callback: () => void) => () => void;
}

export type setBoard<T> = Pick<Board<T>, "setBoard">["setBoard"];

export type InitFn<T> = (set: (nextState: Partial<T> | ((prev: T) => T)) => void, get: () => T) => T

export type UseBoard<T> = {
  (): T;
  <S>(selector: (state: T) => S): S;
}