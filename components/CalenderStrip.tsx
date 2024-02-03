import React, { useState } from "react";
const CalendarStrip = require("react-native-slideable-calendar-strip");

type DateType = Date | string;

const ScrollableCalender: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<DateType>(new Date());
  return (
    <CalendarStrip
      selectedDate={selectedDate}
      onPressDate={(date: DateType) => {
        setSelectedDate(date);
      }}
      onPressGoToday={(today: DateType) => {
        setSelectedDate(today);
      }}
      onSwipeDown={() => {
        // alert("onSwipeDown");
      }}
      markedDate={[getCurrentDate()]}
    />
  );
};

export default ScrollableCalender;

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}
