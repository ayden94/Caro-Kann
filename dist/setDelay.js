export default function setDelay(delay, count, array) {
    // 카운터가 0이면 delay를 반환
    if (!count)
        return delay;
    // 카운터와 배열 길이가 같으면 delay를 반환
    if (array.length === count)
        return delay;
    return 0;
}
