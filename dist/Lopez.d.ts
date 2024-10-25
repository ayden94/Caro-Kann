import { ComponentPropsWithoutRef } from "react";
interface props extends ComponentPropsWithoutRef<"div"> {
    typeSpeed?: number;
    typeRatio?: number;
    deleteSpeed?: number;
    backWord?: boolean;
    delay?: number;
    children: string;
}
export default function Lopez({ className, children, delay, typeSpeed, typeRatio, deleteSpeed, backWord }: props): import("react/jsx-runtime").JSX.Element;
export {};
