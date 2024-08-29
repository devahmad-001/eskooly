'use client'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ChartBox() {
  const chartRef = useRef(null);
  let chartInstance: any = null;

  // Helper function to generate months
  function getMonths(count: any) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.slice(0, count);
  }

  function randomNumbers({ count, min, max }: any) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
  }

  function transparentize(color: any, opacity: any) {
    return `rgba(${color}, ${opacity})`;
  }

  function namedColor(index: any) {
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
      type: 'line',
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

    if (chartRef?.current) {
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

  // Action handlers
  const actions = [
    {
      name: 'Randomize',
      handler() {
        chartInstance.data.datasets.forEach((dataset: any) => {
          dataset.data = randomNumbers({ count: chartInstance.data.labels.length, min: -100, max: 100 });
        });
        chartInstance.update();
      }
    },
    {
      name: 'Add Dataset',
      handler() {
        const data = chartInstance.data;
        const dsColor = namedColor(chartInstance.data.datasets.length);
        const newDataset = {
          label: 'Dataset ' + (data.datasets.length + 1),
          backgroundColor: transparentize(dsColor, 0.5),
          borderColor: dsColor,
          data: randomNumbers({ count: data.labels.length, min: -100, max: 100 }),
        };
        chartInstance.data.datasets.push(newDataset);
        chartInstance.update();
      }
    },
    {
      name: 'Add Data',
      handler() {
        const data = chartInstance.data;
        if (data.datasets.length > 0) {
          data.labels = getMonths(data.labels.length + 1);

          for (let index = 0; index < data.datasets.length; ++index) {
            data.datasets[index].data.push(Math.floor(Math.random() * (100 - (-100)) + (-100)));
          }

          chartInstance.update();
        }
      }
    },
    {
      name: 'Remove Dataset',
      handler() {
        chartInstance.data.datasets.pop();
        chartInstance.update();
      }
    },
    {
      name: 'Remove Data',
      handler() {
        chartInstance.data.labels.splice(-1, 1); // remove the label first

        chartInstance.data.datasets.forEach((dataset: any) => {
          dataset.data.pop();
        });

        chartInstance.update();
      }
    }
  ];

  return (
    <div>
      <div style={{ width: '600px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div>
        {actions.map((action, index) => (
          <button key={index} onClick={action.handler}>
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
}
