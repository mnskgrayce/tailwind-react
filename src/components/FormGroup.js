import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function FormGroup({
  id,
  name,
  label,
  type,
  helper,
  placeholder,
  IconComponent,
  options,
  errors,
}) {
  const { register } = useFormContext();
  return (
    <div>
      <label
        htmlFor={id}
        className="flex flex-row text-sm font-medium text-gray-700"
      >
        <p className="flex-grow">{label}</p>
        <p className="flex-none text-gray-400 text-xs font-light">{helper}</p>
      </label>

      <div
        className={`mt-1 rounded-md shadow-sm ${
          IconComponent ? "relative" : ""
        }`}
      >
        {IconComponent ? (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {IconComponent}
          </div>
        ) : null}

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className={IconComponent ? "pl-10" : ""}
          {...register(name, options)}
        />
      </div>

      <div className="mt-1 text-sm text-red-500">
        <ErrorMessage errors={errors} name={name}>
          {({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        </ErrorMessage>
      </div>
    </div>
  );
}
