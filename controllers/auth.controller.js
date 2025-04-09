
exports.login = (req, res) => {
    const { username, password } = req.body;
  
    const adminUser = {
        email: "admin@empresa.com",
        password: "1234",
      };

    if (username === adminUser.email && password === adminUser.password) {
      return res.status(200).json({ message: "Login exitoso", token: "ADMIN-TOKEN" });
  } else {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }
};
  