import React, { useState } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

const ControllerDatePicker = ({ control }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex items-center mx-auto w-full justify-center space-x-4">
      <div className="flex-grow">
        <label
          htmlFor="startDate"
          className="text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <div className="mt-1">
          <Controller
            name="startDate"
            control={control}
            defaultValue={startDate}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={(date) => {
                  onChange(date);
                  setStartDate(date);
                }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                nextMonthButtonLabel=">"
                previousMonthButtonLabel="<"
              />
            )}
          />
        </div>
      </div>

      <div className="flex-grow">
        <label htmlFor="endDate" className="text-sm font-medium text-gray-700">
          End Date
        </label>
        <div className="mt-1">
          <Controller
            name="endDate"
            control={control}
            defaultValue={endDate}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={(date) => {
                  onChange(date);
                  setEndDate(date);
                }}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                nextMonthButtonLabel=">"
                previousMonthButtonLabel="<"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ControllerDatePicker;
