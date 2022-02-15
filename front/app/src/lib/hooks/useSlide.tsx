const useSlide = () => {
  return {};
};

// import React, { useState } from "react";

// const useSlide = (props) => {
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const [transformValue, setTransformValue] = useState<string>(
//     `-${zoomFactor / 2} %`
//   );
//   const [windowWidth, setWindowWidth] = useState<number>(0);
//   const sliderRef = useRef<HTMLElement>(null);

//   //画面サイズによってスライドの表示枚数を決定
//   const numberOfSlides = (
//     maxVisibleSlides: number,
//     windowWidth: number
//   ): number => {
//     if (windowWidth > 1024) return maxVisibleSlides; //パソコンを想定
//     if (windowWidth > 768) return 4; //タブレットを想定
//     return 3; //スマホを想定
//   };

//   const visibleSlides = numberOfSlides(maxVisibleSlides, windowWidth);
//   const totalPages: number = Math.ceil(children.length / visibleSlides) - 1;

//   // // 画面のサイズを測定
//   // useEffect(() => {
//   //   const resizeObserver = new ResizeObserver((entries) => {
//   //     setWindowWidth(entries[0].contentRect.width);
//   //   });
//   //   // @ts-ignore
//   //   resizeObserver.observe(sliderRef.current);
//   // }, [sliderRef]);

//   // //スライドの位置を調整
//   // useEffect(() => {
//   //   if (sliderRef && sliderRef.current) {
//   //     if (currentPage > totalPages) setCurrentPage(totalPages);

//   //     sliderRef.current.style.transform = `translate3D(-${
//   //       currentPage * windowWidth
//   //     }px, 0, 0)`;
//   //   }
//   // }, [sliderRef, currentPage, windowWidth, totalPages]);

//   // ページ推移中はスライドのホバー効果を無効にする(出ないと推移中にマウスがスライドの上に乗った場合むばえが悪くなってしまう)
//   const disableHoverEffect = () => {
//     if (sliderRef.current) sliderRef.current.style.pointerEvents = "none";

//     setTimeout(() => {
//       if (sliderRef.current) sliderRef.current.style.pointerEvents = "all";
//     }, pageTransition);
//   };

//   //ページを推移させる
//   const handleSlideMove = (forward: boolean) => {
//     disableHoverEffect();
//     setCurrentPage(currentPage + (forward ? 1 : -1));

//     if (sliderRef.current)
//       sliderRef.current.style.transform = `translate3D(-${
//         (currentPage + (forward ? 1 : -1)) * windowWidth
//       }px, 0, 0)`;
//   };

//   // マウスオーバー時の挙動
//   const handleMouseOver = (id: number) => {
//     if (id % visibleSlides === 1) setTransformValue("0%"); //left
//     if (id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`); //right
//   };

//   // マウスアウト時の挙動
//   const handleMouseOut = () => {
//     setTransformValue(`-${zoomFactor / 2}%`);
//   };

//   return {};
// };

export default useSlide;
