import React, { useEffect, useRef } from "react";

const FDPortfolioGraph = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    const loadGraphicsJS = async () => {
      const { default: Graphics } = await import("graphicsjs");

      const graph = new Graphics(graphRef.current, {
        width: 640,
        height: 480,
      });

      // Add your shapes and styles here

      graph.render();

      return () => {
        graph.destroy();
      };
    };

    loadGraphicsJS();
  }, []);

  return <div className="w-64 h-48" ref={graphRef} />;
};

export default FDPortfolioGraph;
