function submitForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const storedData = JSON.parse(localStorage.getItem('userList')) || [];
    storedData.push({ name, age });
    localStorage.setItem('userList', JSON.stringify(storedData));

    alert('Data has been stored in Local Storage!');
  }

  function retrieveData() {
    const storedData = JSON.parse(localStorage.getItem('userList'));

    if (storedData && storedData.length > 0) {
      const displayArea = document.getElementById('displayArea');
      displayArea.innerHTML = `
        <h2>Stored Data</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          ${storedData.map(user => `
            <tr>
              <td>${user.name}</td>
              <td>${user.age}</td>
            </tr>
          `).join('')}
        </table>
      `;
    } else {
      alert('No data found in Local Storage.');
    }
  }