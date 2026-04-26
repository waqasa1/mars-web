export default function NebulaBlobs() {
  return (
    <div className="nebula-container">
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>
      <style jsx>{`
        .nebula-container {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }
        .nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
        }
        .nebula-1 {
          width: 800px;
          height: 600px;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, var(--nebula-purple) 0%, transparent 70%);
        }
        .nebula-2 {
          width: 600px;
          height: 600px;
          bottom: 10%;
          right: -50px;
          background: radial-gradient(circle, var(--nebula-blue) 0%, transparent 70%);
        }
        .nebula-3 {
          width: 500px;
          height: 500px;
          top: 40%;
          left: 30%;
          background: radial-gradient(circle, var(--mars-dim) 0%, transparent 70%);
          opacity: 0.1;
        }
      `}</style>
    </div>
  )
}
