import React from 'react';
import { FaMobile, FaUsers, FaCoins, FaDatabase } from "react-icons/fa";

export default {
  awards: [
    {
      icon: <FaMobile />,
      count: 65,
      body: "Client complete",
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
      count: 78,
      body: "API complete",
      suffix: "%"
    },
    {
      icon: <FaUsers />,
      count: 654,
      body: "Alpha testers",
      suffix: ""
    },
  ],
};
