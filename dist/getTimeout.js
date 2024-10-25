export default function getTimeout(number, ratio, delay = 0) {
    let min = number - number * ratio;
    let max = number + number * ratio;
    return delay || Math.round(Math.random() * (max - min) + min);
}
