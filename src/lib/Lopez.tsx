import { d, a } from "hangul-js";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import isTypeRatioOk from "./isTypeRatioOk";
import getTimeout from "./getTimeout";
import setDelay from "./setDelay";

interface props extends ComponentPropsWithoutRef<"div"> {
  typeSpeed?: number;
  typeRatio?: number;
  deleteSpeed?: number;
  backWord?: boolean;
  delay?: number;
  children: string;
}

export default function Lopez({className, children, delay = 0, typeSpeed = 100, typeRatio = 0, deleteSpeed = 30, backWord = false}: props) {
  const dText = useRef<Array<string>>(d(children));
  const count = useRef<number>(0);
  const forward = useRef<boolean>(true);
  const [text, setText] = useState<Array<string>>([]);

  // Check if typeRatio is between 0 and 1
  isTypeRatioOk(typeRatio)

  useEffect(() => {
    // 앞으로 작성해 나갈 때
    if (forward.current && (dText.current.length > count.current)) {
      setTimeout(() => {
        setText([...text, dText.current[count.current++]])

        if (dText.current.length === count.current) forward.current = !backWord
      }, getTimeout(typeSpeed, typeRatio, setDelay(delay, count.current, dText.current)))
    }

    // 삭제해 나갈 때
    if (!forward.current && (count.current > 0)) {
      setTimeout(() => {
        setText([...text.slice(0, -1)])

        count.current--

        if (count.current === 0) forward.current = backWord
      }, setDelay(delay, count.current, dText.current) || deleteSpeed)
    }
  }, [text]);

  return (
    <p className={className}>
      {a(text) || <br />}
    </p>
  )
}
