import React, {useCallback, useEffect, useRef, useState} from 'react';
import emoji from '../assets/emoji.svg';

import "./Emotions.css";

const Emotions = (props) => {

    return (
      <div className="emotion-detector">
        <img src={emoji} />
        <div>{props.emotion}</div>
      </div>
    );
}

export default Emotions;