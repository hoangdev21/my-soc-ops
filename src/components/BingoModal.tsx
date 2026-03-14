interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-b from-space-card to-purple-900 rounded-2xl p-8 max-w-xs w-full text-center shadow-2xl border border-cyan-glow/30 animate-[bounce_0.5s_ease-out]" style={{
        boxShadow: '0 0 40px rgba(0, 217, 255, 0.4), 0 0 80px rgba(176, 0, 255, 0.3), inset 0 0 40px rgba(0, 217, 255, 0.1)',
      }}>
        <div className="text-6xl mb-6 animate-pulse">✨</div>
        <h2 className="text-4xl font-bold font-display tracking-wider mb-3" style={{
          background: 'linear-gradient(135deg, #00d9ff, #ff006e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>BINGO!</h2>
        <p className="text-gray-300 mb-8 font-display text-sm uppercase tracking-wider">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full font-display font-bold py-3 px-6 rounded-lg text-space-dark transition-all duration-300 uppercase tracking-wider"
          style={{
            background: 'linear-gradient(135deg, #00d9ff, #b000ff)',
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(176, 0, 255, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(176, 0, 255, 0.5)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(176, 0, 255, 0.3)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
