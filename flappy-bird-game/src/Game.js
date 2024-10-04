import React, { useState, useEffect, useCallback } from 'react';
import { Trophy, Gamepad2 } from 'lucide-react';

const Game = () => {
  const [birdY, setBirdY] = useState(300);
  const [pipes, setPipes] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [pipeSpeed, setPipeSpeed] = useState(3); // Starting slower
  
  const gravity = 2; // Reduced gravity
  const jumpHeight = 60; // Increased jump height
  const pipeWidth = 60;
  const gapHeight = 250; // Increased gap height (removing unused warning)

  // Generate new pipe with alternating pattern
  const generatePipe = useCallback(() => {
    const isTopPipe = Math.random() < 0.5; // Randomly choose top or bottom pipe
    const minHeight = 100;
    const maxHeight = window.innerHeight - minHeight;
    
    if (isTopPipe) {
      // Generate only top pipe
      return {
        x: window.innerWidth,
        topHeight: Math.floor(Math.random() * (maxHeight/2)) + minHeight,
        bottomY: window.innerHeight, // Place bottom pipe out of view
        passed: false,
        isTopPipe: true
      };
    } else {
      // Generate only bottom pipe
      const bottomHeight = Math.floor(Math.random() * (maxHeight/2)) + minHeight;
      return {
        x: window.innerWidth,
        topHeight: 0, // No top pipe
        bottomY: window.innerHeight - bottomHeight,
        passed: false,
        isTopPipe: false
      };
    }
  }, []);

  // Initialize game
  const startGame = useCallback(() => {
    setBirdY(300);
    setPipes([generatePipe()]);
    setScore(0);
    setPipeSpeed(3); // Reset speed to initial value
    setGameOver(false);
    setGameStarted(true);
  }, [generatePipe]);

  // Handle game over
  const handleGameOver = useCallback(() => {
    setGameOver(true);
    setGameStarted(false);
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      // Update bird position
      setBirdY(y => y + gravity);

      // Update pipes
      setPipes(currentPipes => {
        let newPipes = currentPipes.map(pipe => ({
          ...pipe,
          x: pipe.x - pipeSpeed
        }));

        // Remove off-screen pipes
        newPipes = newPipes.filter(pipe => pipe.x > -pipeWidth);

        // Add new pipe when needed
        if (newPipes[newPipes.length - 1]?.x < window.innerWidth - 400) {
          newPipes.push(generatePipe());
        }

        // Update score
        newPipes.forEach(pipe => {
          if (!pipe.passed && pipe.x < 100) {
            pipe.passed = true;
            setScore(s => {
              const newScore = s + 1;
              // Increase speed every 5 points
              if (newScore % 5 === 0) {
                setPipeSpeed(prevSpeed => Math.min(prevSpeed + 0.5, 8));
              }
              return newScore;
            });
          }
        });

        return newPipes;
      });

      // Check collisions
      const birdRect = {
        top: birdY,
        bottom: birdY + 30,
        left: 50,
        right: 80
      };

      pipes.forEach(pipe => {
        if (
          birdRect.right > pipe.x &&
          birdRect.left < pipe.x + pipeWidth &&
          (
            (pipe.isTopPipe && birdRect.top < pipe.topHeight) ||
            (!pipe.isTopPipe && birdRect.bottom > pipe.bottomY)
          )
        ) {
          handleGameOver();
        }
      });

      // Check if bird hits ground or ceiling
      if (birdY > window.innerHeight - 30 || birdY < 0) {
        handleGameOver();
      }
    }, 20);

    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver, pipes, generatePipe, pipeSpeed, birdY, handleGameOver]);

  // Handle jump
  const handleJump = useCallback(() => {
    if (!gameOver && gameStarted) {
      setBirdY(y => y - jumpHeight);
    }
  }, [gameOver, gameStarted, jumpHeight]);

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        if (!gameStarted && !gameOver) {
          startGame();
        } else {
          handleJump();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleJump, gameStarted, gameOver, startGame]);

  return (
    <div 
      className="relative w-full h-screen bg-sky-200 overflow-hidden"
      onClick={gameStarted ? handleJump : startGame}
    >
      {/* Score and Speed */}
      <div className="absolute top-4 left-4 text-2xl font-bold">
        <div>Score: {score}</div>
        <div className="text-sm">Speed: {pipeSpeed.toFixed(1)}</div>
      </div>

      {/* High Score */}
      <div className="absolute top-4 right-4 flex items-center text-2xl font-bold">
        <Trophy className="mr-2" /> {highScore}
      </div>

      {/* Bird */}
      <div
        className="absolute w-8 h-8 bg-yellow-400 rounded-full transition-transform"
        style={{
          top: birdY,
          left: 50,
          transform: `rotate(${(birdY - 300) * 0.2}deg)`,
        }}
      />

      {/* Pipes */}
      {pipes.map((pipe, index) => (
        <React.Fragment key={index}>
          {pipe.isTopPipe ? (
            // Top pipe only
            <div
              className="absolute w-[60px] bg-green-500"
              style={{
                left: pipe.x,
                height: pipe.topHeight,
                top: 0,
              }}
            />
          ) : (
            // Bottom pipe only
            <div
              className="absolute w-[60px] bg-green-500"
              style={{
                left: pipe.x,
                top: pipe.bottomY,
                bottom: 0,
              }}
            />
          )}
        </React.Fragment>
      ))}

      {/* Start screen */}
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <Gamepad2 size={48} className="mb-4" />
          <h1 className="text-4xl font-bold mb-4">Flappy Bird</h1>
          <p className="text-xl mb-8">Click or press Space to start</p>
          {highScore > 0 && (
            <p className="text-xl">High Score: {highScore}</p>
          )}
        </div>
      )}

      {/* Game Over screen */}
      {gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold mb-4">Game Over!</h1>
          <p className="text-2xl mb-2">Score: {score}</p>
          <p className="text-2xl mb-8">High Score: {highScore}</p>
          <button
            className="px-6 py-3 bg-yellow-500 text-black rounded-full font-bold text-xl hover:bg-yellow-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              startGame();
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
