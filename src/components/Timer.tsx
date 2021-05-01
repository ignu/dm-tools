import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTime } from '../lib/dateUtil';
import { useStore } from '../store';

const TimerWrapper = styled.div`
  font-size: 2em;
  input {
    font-size: 1.1em;
    width: 90px;
  }
`;
const ButtonWrapper = styled.div``;
const DateDisplayWrapper = styled.div`
  border: 1px solid #999;
  background-color: #001;
`;

const DateDisplay = () => {
  const store = useStore((x) => x);

  return (
    <div>
      <h2>{`${store.currentYear} ${store.yearSuffix}`}</h2>
      <h2>{`${getTime(store.currentMinutes)}`}</h2>
    </div>
  );
};

const Timer = () => {
  const store = useStore((x) => x);
  const [timeInterval, setTimeInterval] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const updateTimeInterval = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timeInterval = parseInt(event.target.value);
    setTimeInterval(timeInterval);
  };

  const updateTime = () => {
    const currentMinutes = store.currentMinutes + timeInterval;
    setSeconds(0);
    store.setDetails({
      currentMinutes,
    });
  };

  return (
    <>
      <DateDisplay />
      <h2>{getTime(seconds)}</h2>
      <TimerWrapper>
        <ButtonWrapper>
          <label>
            <input value={timeInterval} onChange={updateTimeInterval} type="number" />
            minutes
            <button onClick={updateTime}>+ add</button>
          </label>
          <button>+1 hour</button>
        </ButtonWrapper>
      </TimerWrapper>
    </>
  );
};

export default Timer;
