import React, { useState, useEffect } from "react";
import Reelscard from "./Reelscard";
import axios from "axios";
// import Reelsdata from '../Reelsdata.json';

function Reels() {
  const [reels, setReels] = useState([]);
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchReels();
  }, []);

  const fetchReels = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=shorts%20song%20shorts&key=AIzaSyBh32vZl3I-QZRKpi6ig8DCAWS4EXLWP40`
      );
      // response.data.pageInfo.resultsPerPage=response.data.pageInfo.totalResults;
      console.log(response);
      setReels(response.data.items);

      setLoading(true);
      let allData = [];
      let page = 1;
      let hasMoreData = true;
      const limit = 5;
      let jsonData = [];
      let totalResults = response.data.pageInfo.totalResults;
      let Data = 0;
      while (Data < totalResults) {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=shorts%20song%20shorts&key=AIzaSyBh32vZl3I-QZRKpi6ig8DCAWS4EXLWP40&page=${page}`
        );

        const jsonData = await response.json();

        allData = [...allData, ...jsonData.items];
        // console.log(allData);
        // hasMoreData = jsonData.hasMore;

        page += 1;
        Data++;
      }

      setReels(allData);
      console.log(allData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reels:", error);
    }
  };

  return (
    <>
      <div className="reels-page">
        <h1
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1",
          }}
        >
          Instagram Reels
        </h1>

        <div className="reels-container">
          {reels.map((items) => {
            return (
              <Reelscard key={items} reel={items.snippet.thumbnails.high.url} />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Reels;
