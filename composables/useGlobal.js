export function useGlobal() {
  // const counter = useState("counter", () => 0);

  const reactiveCanvas = useState("reactiveCanvas", () => null);
  const brushColor = useState("brushColor", () => "green");

  const addRect = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "green",
      width: 50,
      height: 50,
    });
    reactiveCanvas.value.add(rect).setActiveObject(rect);
    reactiveCanvas.value.isDrawingMode = false;
    // console.log(canvas.value);
    // console.log("rect");
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      fill: "blue",
      radius: 100,
    });
    reactiveCanvas.value.add(circle).setActiveObject(circle);
    reactiveCanvas.value.isDrawingMode = false;

    // canvas.value.add(markRaw(circle)).setActiveObject(circle);
  };

  const addText = () => {
    const text = new fabric.Textbox("Merhaba", {
      fill: "green",
    });
    reactiveCanvas.value.add(text);
    reactiveCanvas.value.isDrawingMode = false;
  };

  const clearCanvas = () => {
    // console.log(canvas.value);
    reactiveCanvas.value.getObjects().forEach((obj) => {
      if (obj !== reactiveCanvas.value.backgroundColor) {
        reactiveCanvas.value.remove(obj);
      }
    });
    reactiveCanvas.value.renderAll();
  };

  const toggleBrush = () => {
    reactiveCanvas.value.isDrawingMode = true;
  };
  const toggleSelect = () => {
    reactiveCanvas.value.isDrawingMode = false;
  };

  const downloadImage = () => {
    const ext = "jpeg";
    const base64 = reactiveCanvas.value.toDataURL({
      format: ext,
      enableRetinaScaling: true,
    });
    const link = document.createElement("a");
    link.href = base64;
    link.download = `design.${ext}`;
    link.click();
  };
  // Return the state and actions
  return {
    reactiveCanvas,
    addRect,
    addText,
    addCircle,
    clearCanvas,
    toggleBrush,
    toggleSelect,
    brushColor,
    downloadImage,
  };
}
