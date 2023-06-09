import { con } from "../config/db.js";
import { users } from "../modals/user.model.js";

export const auth = async (req, res) => {
  try {
    // var val = Math.floor(1000 + Math.random() * 9000);
    let username = req.body.email;
    let password = req.body.password;
    con.sync().then(async () => {
      let user = await users.findOne({
        where: {
          email: username,
          password: password,
        },
      });
      if (user) {
        res.status(200).json({ status: true });
      } else {
        con.sync().then(async () => {
          await users
            .create({
              email: username,
              password: password,
            })
            .then((msg) => {
              res.status(201).json(msg);
            })
            .catch((error) => {
              res.status(500).json(error);
            });
        });
      }
    });
  } catch (err) {
    response.status(500).json(err);
  }
};
