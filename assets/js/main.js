// Fetch and populate user table
fetch('assets/data.json')
  .then(res => res.json())
  .then(data => {
    const userList = document.getElementById('user-list');
    data.users.forEach(user => {
      userList.innerHTML += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.role}</td>
      </tr>`;
    });

    // Create sales chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.sales.map(s => s.month),
            datasets: [{
                label: 'Sales',
                data: data.sales.map(s => s.amount),
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
