export default function interpolate(from: number, to: number, value: number) {
  return from + (to - from) * value;
}
