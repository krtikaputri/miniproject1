const { DataTypes } = require("sequelize");
const sequelize = require("../models/index").sequelize;
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Notes, User } = require("../helper/relation");

module.exports = {
  // ini untuk daftar usernya
  post: async (req, res) => {
    const saltRound = 10;
    const password = req.body.password;
    const hashPassword = await bcrypt.hash(password, saltRound);
    try {
      const data = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashPassword,
      });
      res.json(data);
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },

  getOneId: async (req, res) => {
    try {
      const data = await User.findOne({
        where: { id: req.params.id },
        include: [{ model: Notes }],
      });

      res.status(202).json({ data });
    } catch (error) {}
  },
  // untuk login user
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const data = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!data) {
        throw Error("Data tidak ditemukan");
      }
      const isVeryvied = await bcrypt.compare(password, data.password);
      if (!isVeryvied) {
        throw Error("Password salah");
      }

      const payload = {
        id: data.dataValues.id,
        firstname: data.dataValues.firstname,
      };
      const token = jwt.sign(payload, process.env.TOKEN);
      res.json({
        username: data.username,
        token: token,
        message: "Berhasil masuk",
      });
    } catch (err) {
      res.json({ msg: err.message });
    }
  },
  // untuk logou/keluar aplikasi
  logout: async (req, res) => {
    try {
      res.json({ message: "log out berhasil!" });
    } catch (Error) {
      res.json({ message: "coba lagi nanti!" });
    }
  },
};
