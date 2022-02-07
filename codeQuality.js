// level {3}

const getUsers = (users) => {
  const new_users = [];
  users.map((user, index) => {
    const newUser = user;
    newUser.id = index;
    new_users.push(newUser);
  });

  return new_users;
};
