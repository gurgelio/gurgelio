let lastTime: DOMHighResTimeStamp;

export default function deltaTime(current?: DOMHighResTimeStamp) {
  if (!current) return 0;
  const deltaTime = current - (lastTime || current);
  lastTime = current;
  return deltaTime;
}
