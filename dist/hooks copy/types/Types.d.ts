import { Context } from "react";
export interface Board<T> {
    getBoard: () => T;
    setBoard: (action: T | ((prev: T) => T)) => void;
    subscribe: (callback: () => void) => () => void;
}
export type setBoard<T> = Pick<Board<T>, "setBoard">["setBoard"];
export type CreateBoard = <T>(initValue: T) => Board<T>;
export type UseBoard<T> = {
    (): [T, setBoard<T>];
    <S>(selector: (board: T) => S): [S, setBoard<T>];
    <S>(selector: (board: T) => S, picker: boolean): S;
};
export type UseStore = {
    <T>(Board: Context<Board<T>>): [T, setBoard<T>];
    <T, S>(Board: Context<Board<T>>, selector: (board: T) => S): [S, setBoard<T>];
    <T, S>(Board: Context<Board<T>>, selector: (board: T) => S, picker: boolean): [S, setBoard<T>];
};
