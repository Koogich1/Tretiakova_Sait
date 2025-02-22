import React from "react";
import Label from "../UI/atoms/label/label";
import FormField from "../UI/molecules/formField/formField";

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать на наш сайт!</p>
      <div className="flex flex-col gap-2 justify-start items-start mt-10">
        <FormField />
      </div>
    </div>
  );
};

export default HomePage;
