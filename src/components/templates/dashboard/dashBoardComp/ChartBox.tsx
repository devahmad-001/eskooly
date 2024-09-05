'use client'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ChartBox() {
  // Reference to the canvas element
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chartInstance: Chart | null = null; // Initialize chartInstance
  
  // Helper function to generate months
  function getMonths(count: number) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.slice(0, count);
  }

  function randomNumbers({ count, min, max }: { count: number, min: number, max: number }) {
    const numbers: number[] = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
  }

  function transparentize(color: string, opacity: number) {
    return `rgba(${color}, ${opacity})`;
  }

  function namedColor(index: number) {
    const colors = [
      'rgb(255, 99, 132)',  // Red
      'rgb(54, 162, 235)',  // Blue
      'rgb(255, 206, 86)',  // Yellow
      'rgb(75, 192, 192)',  // Teal
      'rgb(153, 102, 255)', // Purple
      'rgb(255, 159, 64)',  // Orange
      'rgb(201, 203, 207)'  // Gray
    ];
    return colors[index % colors.length];
  }

  useEffect(() => {
    if (chartRef.current) {
      const labels = getMonths(7);
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: randomNumbers({ count: 7, min: -100, max: 100 }),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: transparentize('255, 99, 132', 0.5),
            pointStyle: 'circle',
            pointRadius: 7,
            pointHoverRadius: 10
          },
          {
            label: 'Dataset 2',
            data: randomNumbers({ count: 7, min: -100, max: 100 }),
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: transparentize('54, 162, 235', 0.5),
            pointStyle: 'circle',
            pointRadius: 7,
            pointHoverRadius: 10
          }
        ]
      };

      const config = {
        type: 'line' as const,  // `as const` helps infer the exact string type for `type`
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart',
            }
          },
          scales: {
            y: {
              stacked: true,
            }
          }
        },
      };

      // Create the chart
      chartInstance = new Chart(chartRef.current, config);

      return () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
      };
    } else {
      console.error("Chart reference is null");
    }
  }, []);

  return (
    <>
      <div>
        <div style={{ width: '630px', borderRadius: "1rem", border: "1px solid grey", padding: '2rem' }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </>
  );
}
