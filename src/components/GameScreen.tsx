import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-gradient-to-b from-space-dark via-purple-900 to-space-dark relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star absolute rounded-full bg-white"
            style={{
              width: Math.random() * 1.5 + 0.5 + 'px',
              height: Math.random() * 1.5 + 0.5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4 border-b border-cyan-glow/20 backdrop-blur-sm">
        <button
          onClick={onReset}
          className="text-gray-400 hover:text-cyan-glow text-sm px-3 py-1.5 rounded transition-colors font-display font-bold"
        >
          ← BACK
        </button>
        <h1 className="font-bold font-display text-cyan-glow tracking-wider text-lg">SOC OPS</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="relative z-10 text-center text-gray-400 text-xs py-3 px-4 font-display tracking-widest">
        TAP A SQUARE TO MATCH
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="relative z-20 bg-gradient-to-r from-pink-accent/20 to-pink-accent/10 text-pink-glow text-center py-3 font-bold font-display text-sm border-t border-b border-pink-accent/30 backdrop-blur-sm" style={{
          boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)',
        }}>
          ✨ BINGO! YOU GOT A LINE! ✨
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="float" style={{
          filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.2))',
        }}>
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
