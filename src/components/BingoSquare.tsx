import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center rounded transition-all duration-150 select-none min-h-[70px] text-xs leading-tight font-medium backdrop-blur-sm';

  let stateClasses = 'border border-cyan-glow/50 bg-space-card/40 text-gray-200 hover:border-cyan-glow hover:bg-space-card/60 active:scale-95';
  
  if (square.isFreeSpace) {
    stateClasses = 'border-2 border-purple-glow bg-purple-glow/10 text-purple-glow font-bold text-sm pointer-events-none';
  } else if (isWinning) {
    stateClasses = 'border-2 border-pink-accent bg-pink-accent/20 text-pink-glow font-bold animate-pulse';
  } else if (square.isMarked) {
    stateClasses = 'border-2 border-cyan-glow bg-cyan-glow/20 text-cyan-glow font-bold glow-pulse';
  }

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
      style={square.isMarked && !square.isFreeSpace ? {
        boxShadow: '0 0 15px rgba(0, 217, 255, 0.4), inset 0 0 10px rgba(0, 217, 255, 0.1)',
      } : isWinning ? {
        boxShadow: '0 0 15px rgba(255, 0, 110, 0.4), inset 0 0 10px rgba(255, 0, 110, 0.1)',
      } : {
        boxShadow: '0 0 8px rgba(0, 217, 255, 0.2)',
      }}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-cyan-glow text-lg animate-pulse">✓</span>
      )}
    </button>
  );
}
