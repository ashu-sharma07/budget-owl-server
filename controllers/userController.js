export const registerUser = async (req, res, next) => {
  //   const { name, email, password } = req.body;
  //   const user = await User.create({
  //     name,
  //     email,
  //     password,
  //   });
  //   sendToken(user, 201, res);
  res.status(200).json({
    success: true,
    message: "Welcome to Registration Spend Savvy API",
  });
};
