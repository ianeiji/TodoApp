import React, { useState } from "react";
import moment from "moment";
import { DateRangePicker } from "react-dates";

import "moment/locale/ja"; // 日本語ローカライズ
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles/react-dates.css";

export const DateRange: React.FC = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<
    "startDate" | "endDate" | null
  >(null);

  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="startDateId"
      endDate={endDate}
      endDateId="endDateId"
      focusedInput={focusedInput}
      keepOpenOnDateSelect={true}
      onFocusChange={setFocusedInput}
      onDatesChange={(selectedDates) => {
        setStartDate(selectedDates.startDate);
        setEndDate(selectedDates.endDate);
      }}
      // withPortal={true} 
      // orientation="vertical" 
    />
  );
};
