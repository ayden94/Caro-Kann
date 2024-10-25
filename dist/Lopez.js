import { jsx as _jsx } from "react/jsx-runtime";
import { d, a } from "hangul-js";
import { useEffect, useRef, useState } from "react";
import isTypeRatioOk from "./isTypeRatioOk";
import getTimeout from "./getTimeout";
import setDelay from "./setDelay";
export default function Lopez({ className, children, delay = 0, typeSpeed = 100, typeRatio = 0, deleteSpeed = 30, backWord = false }) {
    const dText = useRef(d(children));
    const count = useRef(0);
    const forward = useRef(true);
    const [text, setText] = useState([]);
    // Check if typeRatio is between 0 and 1
    isTypeRatioOk(typeRatio);
    useEffect(() => {
        // 앞으로 작성해 나갈 때
        if (forward.current && (dText.current.length > count.current)) {
            setTimeout(() => {
                setText([...text, dText.current[count.current++]]);
                if (dText.current.length === count.current)
                    forward.current = !backWord;
            }, getTimeout(typeSpeed, typeRatio, setDelay(delay, count.current, dText.current)));
        }
        // 삭제해 나갈 때
        if (!forward.current && (count.current > 0)) {
            setTimeout(() => {
                setText([...text.slice(0, -1)]);
                count.current--;
                if (count.current === 0)
                    forward.current = backWord;
            }, setDelay(delay, count.current, dText.current) || deleteSpeed);
        }
    }, [text]);
    return (_jsx("p", { className: className, children: a(text) || _jsx("br", {}) }));
}
