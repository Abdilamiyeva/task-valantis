import { useEffect, useState } from "react";
export const Slider = ({ data, onChange }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    onChange(data[currentIdx]);
  }, [currentIdx]);

  useEffect(() => {
    if (data.length) {
      let slider = document.getElementById("slider");
      let thumb = slider.querySelector(".thumb");
      let numItems = data.length;
      let sliderWidth = slider.offsetWidth;
      let thumbWidth = thumb.offsetWidth;
      let step = (sliderWidth - thumbWidth) / (numItems - 1);

      thumb.onmousedown = function (event) {
        event.preventDefault();

        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        function onMouseMove(event) {
          let newLeft =
            event.clientX - shiftX - slider.getBoundingClientRect().left;

          if (newLeft < 0) {
            newLeft = 0;
          }
          let rightEdge = sliderWidth - thumbWidth;
          if (newLeft > rightEdge) {
            newLeft = rightEdge;
          }

          thumb.style.left = newLeft + "px";

          setCurrentIdx(Math.round(newLeft / step));
        }

        function onMouseUp() {
          document.removeEventListener("mouseup", onMouseUp);
          document.removeEventListener("mousemove", onMouseMove);
        }
      };

      thumb.ondragstart = function () {
        return false;
      };
    }
  }, [data]);

  return (
    <div
      id="slider"
      className="h-4 m-1.5 w-[310px] rounded bg-[#E0E0E0] bg-gradient-to-r from-gray-300 to-gray-200"
    >
      <div className="thumb w-2.5 h-6 rounded relative left-2.5 -top-1 bg-[#da002b] cursor-pointer"></div>
    </div>
  );
};
