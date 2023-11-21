import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export function ProductStockChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const apiData = await response.json();

        const categoryStockData = apiData.products.map(product => [
          product.category,
          product.stock
        ]);

        const dataForChart = [
          ["Category", "Stock"],
          ...categoryStockData
        ];

        setChartData(dataForChart);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    title: "Product Stock by Category",
    // Add more chart options if needed
  };

  return (
    <div>
      {chartData.length ? (
        <Chart
          chartType="BarChart"
          data={chartData}
          options={options}
          width={"100%"}
          height={"300px"}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
