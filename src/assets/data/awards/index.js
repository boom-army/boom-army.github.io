import React from 'react';
import { FaMobile, FaUsers, FaCoins, FaDatabase } from "react-icons/fa";

export default {
  awards: [
    {
      icon: <FaMobile />,
      count: 100,
      body: "App complete",
      suffix: "%"
    },
    {
      icon: <FaCoins />,
      count: 100,
      body: "Token complete",
      suffix: "%"
    },
    {
      icon: <FaDatabase />,
      count: 100,
      body: "Devops complete",
      suffix: "%"
    },
    {
      icon: <FaUsers />,
      count: 1303,
      body: "Alpha testers",
      suffix: ""
    },
  ],
};
