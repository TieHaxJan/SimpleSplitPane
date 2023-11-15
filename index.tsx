import { useState, useRef, useEffect } from 'react';
import './splitPane.css';

/**
 * simple split panel component
 * The initialSplit describes the percentage for the first panel
 * @param {*} param0 Props
 * @returns Split panel
 */
const SimpleSplitPane = ({ children, orientation = 'horizontal', initialSplit = 50 }: any) => {
  const [split, setSplit] = useState(initialSplit);
  const containerRef = useRef<HTMLDivElement>(null);

  if (children.length !== 2) {
    throw new Error('SplitPane requires exactly 2 children');
  }

  if (orientation != 'horizontal' && orientation != 'vertical') {
    throw new Error('Orientation must be either horizontal or vertical');
  }

  if (initialSplit < 0 || initialSplit > 100) {
    throw new RangeError('The initial split needs to be between 0 and 100');
  }

  const handleMouseMove = (e: any) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      let newSplit;

      if (orientation === 'horizontal') {
        newSplit = ((e.clientX - rect.left) / rect.width) * 100;
      } else {
        newSplit = ((e.clientY - rect.top) / rect.height) * 100;
      }

      setSplit(Math.max(0, Math.min(100, newSplit)));
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
  };

  return (
    <div ref={containerRef} className={`split-pane-container ${orientation === 'horizontal' ? 'split-pane-horizontal' : 'split-pane-vertical'}`}>
      <div style={{ flexBasis: `${split}%` }} className="split-pane-panel">
        {children[0]}
      </div>
      <div onMouseDown={handleMouseDown} className={`split-pane-divider ${orientation === 'horizontal' ? 'split-pane-divider-horizontal' : 'split-pane-divider-vertical'} `}></div>
      <div className="split-pane-panel">
        {children[1]}
      </div>
    </div>
  );
};

export default SimpleSplitPane;
