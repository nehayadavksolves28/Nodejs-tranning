const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Alicia' },
  ];
  
  // Controller functions
  exports.getAllUsers = (req, res) => {
    res.json(users);
  };
  
  exports.getUserById = (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  };
  
  exports.createUser = (req, res) => {
    const newUser = {
      id: users.length + 1,
      name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  exports.deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);
    if (index === -1) return res.status(404).send('User not found');
    const deleted = users.splice(index, 1);
    res.json(deleted);
  };
  
  exports.getFilteredUsers = (req, res) => {
    const { search } = req.query;
    console.log(search, "SEARCH");
  
    let filteredUsers = users;
  
    if (search) {
      filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    res.json(filteredUsers);
  };