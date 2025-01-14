import { Canvas } from "@react-three/fiber";
import Player from "./components/Player";
import { Physics } from "@react-three/rapier";
import { Suspense, useRef, useEffect } from "react";
import { Html } from "@react-three/drei";
import globalState from "./state/global-state";
import { Button } from "@/components/ui/button";
import Loading from "./components/Loading";

export default function App() {
  const {
    isIntroCompleted,
    setIsIntroCompleted,
    checkFullScreen,
    setCheckFullScreen,
  } = globalState();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleButtonClick = () => {
    setIsIntroCompleted(true);
    canvasRef.current?.requestFullscreen?.();
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setCheckFullScreen(document.fullscreenElement === canvasRef.current);
    };

    const canvasElement = canvasRef.current;
    canvasElement?.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup the event listener on component unmount
    return () => {
      canvasElement?.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, [setCheckFullScreen]);

  return (
    <Canvas ref={canvasRef} camera={{ position: [0, 0, 5] }}>
      <Suspense>
        { !checkFullScreen && isIntroCompleted && <Loading canvasRef={ canvasRef.current } /> }
        
        {isIntroCompleted ? (
          <Physics>
            <Player />
          </Physics>
        ) : (
          <Html className='r3f-html' center>
            <div className='grid gap-3'>
              <p>R3F Bricks</p>
              <Button onClick={handleButtonClick}>Let's Play</Button>
            </div>
          </Html>
        )}
      </Suspense>
    </Canvas>
  );
}
