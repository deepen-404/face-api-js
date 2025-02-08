import { useLoadModels } from '../hooks/useLoadModels';
import { usePlayVideo } from '../hooks/usePlayVideo';

function FaceApiJsVideo() {
  const modelsLoaded = useLoadModels();

  const { videoRef, canvasRef, videoHeight, videoWidth } = usePlayVideo({
    modelsLoaded,
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        maxHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr',
        placeItems: 'center',
        gap: '1rem',
        position: 'relative',
      }}
    >
      {!modelsLoaded && <p>Loading models...</p>}
      <video
        ref={videoRef}
        width={videoWidth}
        height={videoHeight || undefined}
        playsInline
        autoPlay
      />
      <canvas
        ref={canvasRef}
        width={videoWidth}
        height={videoHeight || undefined}
        style={{
          position: 'absolute',
          margin: 'auto',
        }}
      />
    </div>
  );
}

export default FaceApiJsVideo;
