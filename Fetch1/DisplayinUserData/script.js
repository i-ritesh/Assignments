function fetchUsers() {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        displayUsers(data.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }

  function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      const avatar = document.createElement('img');
      avatar.src = user.avatar;
      avatar.alt = 'User Avatar';
      avatar.classList.add('user-avatar');

      const name = document.createElement('p');
      name.textContent = `Name: ${user.first_name} ${user.last_name}`;

      const email = document.createElement('p');
      email.textContent = `Email: ${user.email}`;

      userCard.appendChild(avatar);
      userCard.appendChild(name);
      userCard.appendChild(email);

      userList.appendChild(userCard);
    });
  }