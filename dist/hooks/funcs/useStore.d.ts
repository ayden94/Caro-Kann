import { Context } from "react";
import { Board } from "../types/Types";
export declare function useStore<T>(Board: Context<Board<T>>): T;
export declare function useStore<T, S>(Board: Context<Board<T>>, selector: (state: T) => S): S;
