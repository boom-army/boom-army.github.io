import React from 'react';
import { FaMobile, FaUsers, FaCoins, FaDatabase } from "react-icons/fa";

export default {
  awards: [
    {
      icon: <FaMobile />,
      count: 77,
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
      count: 85,
      body: "API complete",
      suffix: "%"
    },
    {
      icon: <FaUsers />,
      count: 940,
      body: "Alpha testers",
      suffix: ""
    },
  ],
};
