import React from "react";
import StackLogo from "./StackLogo.jsx";
import TailwindCSSLogo from "/tailwindcss-mark.svg";
import LaravelLogo from "/Laravel-Logo.wine.png";
import MySqlLogo from "/MySQL-Logo.wine.png";
import NodeJsLogo from "/Node.js-Logo.wine.png";
import ReactJsLogo from "/React_(web_framework)-Logo.wine.png";
import ExpressJsLogo from "/icons8-express-js-144.png";
import BootstrapLogo from "/Bootstrap_(front-end_framework)-Logo.wine.png";
import PythonLogo from "/Python_(programming_language)-Logo.wine.png";
import PostgreSqlLogo from "/PostgreSQL-Logo.wine.png";

const StackLogoList = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 -mx-5 gap-y-5 w-full">
      <StackLogo title='Laravel' src={LaravelLogo} alt="laravel logo" />
      <StackLogo title='MySQL' src={MySqlLogo} alt="MySQL logo" />
      <StackLogo title='NodeJS' src={NodeJsLogo} alt="NodeJS logo" />
      <StackLogo title='ExressJS' src={ExpressJsLogo} alt="ExpressJs logo" className="ms-1" />
      <StackLogo title='ReactJS' src={ReactJsLogo} alt="ReactJS logo" />
      <StackLogo title='Bootstrap' src={BootstrapLogo} alt="Bootstrap logo" />
      <StackLogo title='Python' src={PythonLogo} alt="Python logo" size="max-h-12" />
      <StackLogo title='TailwindCSS' src={TailwindCSSLogo} alt="TailwindCSS logo" size="max-h-7" />
      <StackLogo title='PostgreSQL' src={PostgreSqlLogo} alt="PostgreSQL logo" />
    </div>
  );
};

export default StackLogoList;
