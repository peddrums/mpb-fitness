import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Rudey Ball",
      email: "rudeyball@abbaabba.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "Pietro Mineo",
      email: "pietromineo87@gmail.com",
      password: bcrypt.hashSync("Verified1!"),
      isAdmin: true,
    },
  ],
};
