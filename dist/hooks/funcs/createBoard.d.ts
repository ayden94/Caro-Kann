export declare function createBoard<T>(initFn: (set: (nextState: Partial<T> | ((prev: T) => T)) => void, get: () => T) => T): {
    getBoard: () => T;
    setBoard: (nextState: Partial<T> | ((prev: T) => T)) => void;
    subscribe: (callback: () => void) => () => void;
};
