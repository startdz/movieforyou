import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./widgets/Card";
import { apiHost, apiKey, apiUrlData } from "../../utils/meta";

const Content = () => {
  const [cardMovie, setCardMovie] = useState([]);

  useEffect(() => {
    const handleGetMovies = async () => {
      try {
        const response = await axios.get(apiUrlData, {
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": apiHost,
            "Content-Type": "application/json",
          },
        });
        const data = await response.data;
        setCardMovie(data.results);
        console.log(data.results)
      } catch (error) {
        throw new Error(`Fetch gagal bujang`, { error });
      }
    };
    handleGetMovies();
  }, []);

  return (
    <section className="w-full p-4">
      <h1 className="">Movie Upcoming</h1>
      <hr className="" />
      <Card />
    </section>
  );
};

export default Content;
