/// <reference types="react" />
import { Board } from "./Types";
export declare const playTartakower: <T extends object>(initFn: (set: (nextState: Partial<T> | ((prev: T) => T)) => void, get: () => T) => T) => {
    useBoard: {
        (): T;
        <S>(selector: (state: T) => S): S;
    };
    Board: import("react").Context<Board<T>>;
};
