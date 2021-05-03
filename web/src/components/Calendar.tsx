import React from 'react';
import styled from 'styled-components';
import { Month, useStore } from '../store';

const MonthWrapper = styled.div`
  border: 1px solid #998;
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
`;

const DayWrapper = styled.div`
  display: flex;
  flex: 1;
  padding; 10px;
  border: 2px solid #999;
  align-content: center;
  justify-content: center;
`;

const getDays = () => {
  let rv = [];
  for (let x = 0; x < 7; x++) {
    rv.push(<DayWrapper key={`day${x}`}>{x + 1}</DayWrapper>);
  }
  return rv;
};

const MonthView = ({ month }: { month: Month }) => {
  const { days } = useStore((x) => {
    return { days: x.dayNames };
  });
  return (
    <>
      <h2>{month.name}</h2>
      <MonthWrapper>
        {days.map((day) => (
          <DayWrapper key={day}>
            <div>{day}</div>
          </DayWrapper>
        ))}
      </MonthWrapper>
      <MonthWrapper>{getDays()}</MonthWrapper>
    </>
  );
};

const CalendarWrapper = styled.div`
  margin: 25px;
`;

const Calendar = () => {
  const { months } = useStore((x) => ({ months: x.months, setDetails: x.setDetails }));

  return (
    <CalendarWrapper>
      {months.map((m) => (
        <MonthView key={m.name} month={m} />
      ))}
    </CalendarWrapper>
  );
};

export default Calendar;
