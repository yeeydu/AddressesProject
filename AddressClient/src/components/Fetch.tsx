import React, { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  id: number;
  street: string;
  postal_code: string;
  parish: string;
  council: string;
  district: string;
  country: string;
}

export default function Fetch(url, { method, headers, body } = {}) {

  const [data, setData] = useState<[]>([]);
  const [errorStatus, setErrorStatus] = useState<string>("");

  const url  = API_URL;

  axios.get(API_URL).then((res) => {
    const persons = res.data;
    this.setState({ persons });
  });

  return <div></div>;
}
