import { useState, useEffect } from "react";

export default function TerminalAnimation() {
  const [output, setOutput] = useState('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    'Initializing security protocols...',
    'Loading CCNA certification...',
    'Connecting to Hack The Box...',
    'Team rank: #104 globally',
    'Machines owned: 100+',
    'Challenges completed: 40+',
    'Status: Ready for deployment',
    'Welcome to Tyler Rossitto\'s portfolio'
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const currentCommand = commands[currentCommandIndex];
      
      if (currentCharIndex < currentCommand.length) {
        const timeout = setTimeout(() => {
          setOutput(prev => prev + currentCommand[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setOutput(prev => prev + '\n');
          setCurrentCommandIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 1000);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentCommandIndex, currentCharIndex, commands]);

  return (
    <div className="text-left font-mono text-cyber-green min-h-[200px]">
      <pre className="whitespace-pre-wrap">
        {output}
        {currentCommandIndex >= commands.length && (
          <span className="text-cyber-green">$ </span>
        )}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          |
        </span>
      </pre>
    </div>
  );
}
