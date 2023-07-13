export default function initCanvas(canvas: HTMLCanvasElement) {
  updateCanvasSize(canvas);
  addEventListener("resize", () => updateCanvasSize(canvas));

  return getContext(canvas);
}

function getContext(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");
  return ctx;
}

function updateCanvasSize(canvas: HTMLCanvasElement) {
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
}
