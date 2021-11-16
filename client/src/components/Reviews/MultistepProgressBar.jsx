import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown as carrot } from '@fortawesome/free-solid-svg-icons';

const MultiStepProgressBar = (props) => {
  const selections = {};
  selections.Size = [
    'A size too small',
    '1/2 a size too small',
    'Perfect',
    '1/2 a size too big',
    'A size too big',
  ];
  selections.Width = [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly wide',
    'A size too wide',
  ];
  selections.Comfort = [
    'Uncomfortable',
    'Slightly uncomfortable',
    'Ok',
    'Comfortable',
    'Perfect',
  ];
  selections.Quality = [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect',
  ];
  selections.Length = [
    'Runs Short',
    'Runs slightly short',
    'Perfect',
    'Runs slightly long',
    'Runs long',
  ];
  selections.Fit = [
    'Runs tight',
    'Runs slightly tight',
    'Perfect',
    'Runs slightly long',
    'Runs long',
  ];

  console.log('multiprogress', props);

  const markerPosition = (props.value - 1) * 25;
  const markerColor = '#f5005a';
  const labels = selections[props.characteristic];

  return (
    <div>
      <div className="multiProgressContainer">
        <div
          className="multiProgressSegment"
          style={{ marginRight: `${5}px` }}
        />
        <div
          className="multiProgressSegment"
          style={{ marginRight: `${5}px` }}
        />
        <div className="multiProgressSegment" />
        <div
          className="triangle"
          style={{ left: `${markerPosition}%` }}
        />
      </div>
      <div className="bar-labels">
        <div
          className="bar-label1"
          style={{ textAlign: 'left' }}
        >
          {labels[0]}
        </div>
        <div
          className="bar-label2"
          style={{ textAlign: 'center' }}
        >
          {labels[2]}
        </div>
        <div
          className="bar-label3"
          style={{ textAlign: 'right' }}
        >
          {labels[4]}
        </div>
      </div>
    </div>

  );
};

export default MultiStepProgressBar;
