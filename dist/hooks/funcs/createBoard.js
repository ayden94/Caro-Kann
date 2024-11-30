export default function createBoard(initFn) {
    let board;
    const callbacks = new Set();
    const getBoard = () => board;
    const setBoard = (nextState) => {
        board = typeof nextState === "function" ? nextState(board) : { ...board, ...nextState };
        callbacks.forEach((callback) => callback());
    };
    const subscribe = (callback) => {
        callbacks.add(callback);
        return () => {
            callbacks.delete(callback);
        };
    };
    board = initFn(setBoard, getBoard);
    return { getBoard, setBoard, subscribe };
}
;
