import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

function AllocationChart ({ chartData }) {
  return (
    <div className="allocation-chart-container">
      <h2>Top 3 Holdings Allocation</h2>
      <div className="allocation-chart">
        <Pie
          data={chartData}
          plugins={[
            {
              id: "increase-legend-spacing",
              beforeInit(chart) {
                // Get reference to the original fit function
                const originalFit = chart.legend.fit;
                // Override the fit function
                chart.legend.fit = function fit() {
                  // Call original function and bind scope in order to use `this` correctly inside it
                  originalFit.bind(chart.legend)();
                  this.height += 30;
                };
              },
            },
          ]}
          options={{
            responsive: true,
            animation: {
              animateRotate: true,
            },
            layout: {
              padding: {
                left: 60,
                right: 60,
              },
            },
            plugins: {
              tooltip: {
                enabled: false,
              },
              datalabels: {
                formatter: (value) => {
                  const formattedValue = value + "%";
                  return formattedValue;
                },
                color: "#FFF",
                clamp: true,
                anchor: "end",
                align: "end",
                font: {
                  family: "Inter",
                  size: 13,
                  weight: 500,
                },
              },
              title: {
                display: false,
              },
              legend: {
                labels: {
                  color: "#FFF",
                  font: {
                    family: "Inter",
                    size: 14,
                    weight: 600,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
export default AllocationChart;
