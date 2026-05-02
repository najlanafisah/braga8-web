export function initChart() {

  const billData = {
    paid: 65,
    unpaid: 25,
    overdue: 10
  };

  const { paid, unpaid, overdue } = billData;

  const chart = document.getElementById("chart");
  if (chart) {
    chart.style.background = `
      conic-gradient(
        #ff8a2a 0% ${paid}%,
        #d65a0f ${paid}% ${paid + unpaid}%,
        #8b3a0e ${paid + unpaid}% 100%
      )
    `;

    document.getElementById("paid").innerText = paid + "%";
    document.getElementById("unpaid").innerText = unpaid + "%";
    document.getElementById("overdue").innerText = overdue + "%";
  }

  const data = [
    { month: "Jan", electricity: 80, water: 50 },
    { month: "Feb", electricity: 40, water: 70 },
    { month: "Mar", electricity: 75, water: 70 },
    { month: "Apr", electricity: 15, water: 8 }
  ];

  const barsContainer = document.getElementById("chart-bars");
  const labelsContainer = document.getElementById("chart-labels");

  if (!barsContainer || !labelsContainer) return;

  barsContainer.innerHTML = "";
  labelsContainer.innerHTML = "";

  const values = [];
  data.forEach(d => values.push(d.electricity, d.water));

  const maxValue = Math.max(...values);

  data.forEach(item => {

    const group = document.createElement("div");
    group.className = "bar-chart-group";

    const eBar = document.createElement("div");
    eBar.className = "bar-chart-bar bar-chart-bar-electricity";

    const wBar = document.createElement("div");
    wBar.className = "bar-chart-bar bar-chart-bar-water";

    const chartHeight = 100;

    eBar.style.height = (item.electricity / maxValue) * chartHeight + "px";
    wBar.style.height = (item.water / maxValue) * chartHeight + "px";

    group.appendChild(eBar);
    group.appendChild(wBar);
    barsContainer.appendChild(group);

    const label = document.createElement("div");
    label.textContent = item.month;
    labelsContainer.appendChild(label);
  });
}