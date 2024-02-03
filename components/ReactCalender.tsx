import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

type DateType = string;

const ReactScrollableCalender: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<DateType>("");

  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: "gray",
        height: 350,
      }}
      theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "#eee",
      }}
      onDayPress={(day: any) => {
        setSelectedDate(day.dateString);
      }}
      markedDates={{
        [selectedDate]: { selected: true, disableTouchEvent: true },
      }}
    />
  );
};

export default ReactScrollableCalender;
