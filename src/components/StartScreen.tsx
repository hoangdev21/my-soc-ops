interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-space-dark via-purple-900 to-space-dark overflow-hidden relative">
      {/* Starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-center max-w-sm relative z-10">
        {/* Logo/Title with glow */}
        <div className="stagger-1 mb-6">
          <h1 className="text-6xl font-bold font-display tracking-wider mb-2" style={{
            background: 'linear-gradient(135deg, #00d9ff, #00b8d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.6))',
          }}>
            SOC OPS
          </h1>
          <p className="text-cyan-glow/70 text-lg font-display tracking-widest">Social Bingo</p>
        </div>

        {/* Info Card with glass effect */}
        <div className="stagger-2 bg-space-card/60 backdrop-blur-sm rounded-lg p-6 border border-cyan-glow/30 mb-8 shadow-2xl" style={{
          boxShadow: '0 0 30px rgba(0, 217, 255, 0.2), inset 0 0 30px rgba(0, 217, 255, 0.05)',
        }}>
          <h2 className="font-display font-bold text-cyan-glow mb-4 text-lg tracking-wider">HOW TO PLAY</h2>
          <ul className="text-left text-gray-300 text-sm space-y-3">
            <li className="flex items-center">
              <span className="text-cyan-glow mr-3 font-bold">→</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-glow mr-3 font-bold">→</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-center">
              <span className="text-pink-accent mr-3 font-bold">→</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="stagger-3 w-full font-display font-bold py-4 px-8 rounded-lg text-lg text-space-dark transition-all duration-300 relative group uppercase tracking-wider"
          style={{
            background: 'linear-gradient(135deg, #00d9ff, #b000ff)',
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(176, 0, 255, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(176, 0, 255, 0.5), 0 8px 20px rgba(0, 0, 0, 0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(176, 0, 255, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Launch Game
        </button>

        {/* Subtitle */}
        <p className="stagger-4 text-gray-500 text-xs mt-6 font-display tracking-widest">ENTER THE SOCIAL UNIVERSE</p>
      </div>
    </div>
  );
}
