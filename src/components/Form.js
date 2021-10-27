import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormGroup from "./FormGroup";
import ControllerDatePicker from "./ControllerDatePicker";

import { UserCircleIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { LockClosedIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/solid";
import { AcademicCapIcon } from "@heroicons/react/solid";

const Form = () => {
  const methods = useForm({
    criteriaMode: "all",
  });

  const { errors } = methods.formState;

  // Handle submission
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white mx-auto w-full max-w-xl px-6 py-8 shadow-md rounded">
      <FormProvider {...methods}>
        <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
          <FormGroup
            id="fullName"
            name="fullName"
            label="Full Name"
            type="text"
            IconComponent={<UserCircleIcon className="h-5 w-5 text-gray-300" />}
            options={{
              required: true,
              pattern: {
                value: /^[A-Za-z]+(?: [A-Za-z]+)+$/i,
                message: "Name must be two or more words separated by a space.",
              },
            }}
            errors={errors}
          />

          <FormGroup
            id="email"
            name="email"
            label="Email"
            type="email"
            helper="Required"
            placeholder="mnskgrayce@gmail.com"
            isRequired={true}
            IconComponent={<MailIcon className="h-5 w-5 text-gray-300" />}
            options={{ required: true }}
          />

          <FormGroup
            id="password"
            name="password"
            label="Password"
            type="password"
            isRequired={true}
            placeholder=""
            IconComponent={<LockClosedIcon className="h-5 w-5 text-gray-300" />}
            options={{ required: true }}
          />

          <FormGroup
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            isRequired={true}
            placeholder=""
            IconComponent={<LockClosedIcon className="h-5 w-5 text-gray-300" />}
            options={{ required: true }}
          />

          <FormGroup
            id="phone"
            name="phone"
            label="Phone Number"
            type="tel"
            IconComponent={<PhoneIcon className="h-5 w-5 text-gray-300" />}
            options={{
              pattern: {
                value: /^[0-9]+/,
                message: "This input is numbers only.",
              },
            }}
            errors={errors}
          />

          <ControllerDatePicker control={methods.control} />

          <div>
            <label
              htmlFor="specialty"
              className="block text-sm font-medium text-gray-700"
            >
              Specialty
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AcademicCapIcon className="h-5 w-5 text-gray-300" />
              </div>
              <select
                id="specialty"
                name="specialty"
                className="pl-10"
                {...methods.register("specialty")}
              >
                <option value="SE">Software Engineering</option>
                <option value="EE">Electrical &amp; Electronic</option>
                <option value="RM">Robotics &amp; Mechatronics</option>
              </select>
            </div>
          </div>

          <div className="space-x-6">
            <div className="inline-flex items-center">
              <input
                type="radio"
                id="undergraduate"
                name="program"
                value="Undergraduate"
                defaultChecked
                className="rounded-full"
                {...methods.register("program")}
              />
              <label
                htmlFor="undergraduate"
                className="ml-2 block text-sm text-gray-900"
              >
                Undergraduate
              </label>
            </div>

            <div className="inline-flex items-center">
              <input
                type="radio"
                id="graduate"
                name="program"
                value="Graduate"
                className="rounded-full"
                {...methods.register("program")}
              />
              <label
                htmlFor="graduate"
                className="ml-2 block text-sm text-gray-900"
              >
                Graduate
              </label>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms-and-privacy"
              name="terms-and-privacy"
              type="checkbox"
              className="rounded-sm"
              {...methods.register("terms-and-privacy")}
            />
            <label
              htmlFor="terms-and-privacy"
              className="ml-2 block text-sm text-gray-900"
            >
              I agree to the{" "}
              <a href="/#" className="text-indigo-600 hover:text-indigo-500">
                Terms
              </a>{" "}
              and{" "}
              <a href="/#" className="text-indigo-600 hover:text-indigo-500">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
