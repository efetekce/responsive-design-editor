export const useToolbar = () => {
  const state = useState("toolbar", () => {
    const addRect = () => {
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: "green",
        width: 50,
        height: 50,
      });
      canvas.value.add(rect);
      console.log(canvas.value);
    };
    const addCircle = () => {
      const circle = new fabric.Circle({
        fill: "blue",
        radius: 100,
      });
      canvas.value.add(circle);
      // canvas.value.add(markRaw(circle)).setActiveObject(circle);
    };

    const addText = () => {
      console.log("first");
      const text = new fabric.Text("Merhaba", {
        fill: "green",
      });
      canvas.value.add(text);
    };
  });
  //   const counter = useState("counter", () => Math.round(Math.random() * 1000));
};
