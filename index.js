const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
        title:{
            text: "Blood Pressure"
        },    
        axisY: {
            title: "Pressure",
            valueFormatString: "#0,,.",
            suffix: " bpm"
        },
        data: [
        {        
            toolTipContent: "{y} units",
            type: "splineArea",
            showInLegend: true,
            legendText: "source: Nielsen SoundScan",
            markerSize: 5,
            color: "rgba(195,175,247,.7)",
            dataPoints: [
            {x: new Date(1998,0), y: 1872000},     
            {x: new Date(1999,0), y: 2140000},     
            {x: new Date(2000,0), y: 7289000, indexLabel: "highest"},     
            {x: new Date(2001,0), y: 4830000},     
            {x: new Date(2002,0), y: 2009000},     
            {x: new Date(2003,0), y: 2840000},     
            {x: new Date(2004,0), y: 2396000},     
            {x: new Date(2005,0), y: 1613000},     
            {x: new Date(2006,0), y: 2821000},     
            {x: new Date(2007,0), y: 2000000},     
            {x: new Date(2008,0), y: 1397000}    
            ]
        }             
        ]
    });

chart.render();
}

Diagnosis.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.diagnosis}</td>
        <td>${order.description}</td>
        <td class="${order.status === 'Untreated' ? 'danger' : order.status === 'Under Observation' ? 'warning' : 'primary'}">${order.status}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});