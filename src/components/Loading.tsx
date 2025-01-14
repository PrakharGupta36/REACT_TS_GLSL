import { Html } from "@react-three/drei";
import { Button } from "./ui/button";

export default function Loading({
  canvasRef,
}: {
  canvasRef: HTMLCanvasElement | null;
}) {
  return (
    <Html className="loading" center>
      <div className="grid gap-4">
        <p>Game isn't in full screen mode</p>
        <Button
          onClick={() => {
            canvasRef?.requestFullscreen?.();
          }}
        >
          Enable Full Screen
        </Button>
      </div>
    </Html>
  );
}
