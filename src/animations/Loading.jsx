import React, { useEffect, useState } from "react";
import "./Loading.scss";

const AnimationComponent = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [isGrouping, setIsGrouping] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    const ticker = setTimeout(() => {
      setIsProcessing(false);
      setIsGrouping(true);
    }, 2500);

    return () => clearTimeout(ticker);
  }, []);

  useEffect(() => {
    if (isGrouping) {
      const secondTicker = setTimeout(() => {
        setIsGrouping(false);
        setIsResizing(true);
        setIsDialogVisible(true);
      }, 3300);

      return () => clearTimeout(secondTicker);
    }
  }, [isGrouping]);

  return (
    <div
      className={`container ${isProcessing ? "processing" : ""} ${
        isGrouping ? "grouping" : ""
      } ${isResizing ? "resizing" : ""}`}
    ></div>
  );
};

export default AnimationComponent;
