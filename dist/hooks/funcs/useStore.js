import { useContext, useSyncExternalStore } from "react";
export function useStore(Board, selector) {
    const { getBoard, subscribe } = useContext(Board);
    const notationSnapshot = () => (selector ? selector(getBoard()) : getBoard());
    const board = useSyncExternalStore(subscribe, notationSnapshot, notationSnapshot);
    return board;
}
