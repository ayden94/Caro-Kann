import { InitFn, UseBoard } from "./types/Types";
export declare const playTartakower: <T extends object>(initFn: InitFn<T>) => {
    useBoard: UseBoard<T>;
};
