import  { useEffect, useState } from "react";
import axios from "axios";

export default function Fetch(url : any, {method, headers,  }: any = {}) {

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          url,  {
            method: method,
            headers: headers,
           // body: body,
        });
        setData(response.data);
      } catch (error: any) {
        setError(error); 
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

   //returning destructuring objects properties
   return { data, error , loading};
}
