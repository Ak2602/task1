import { con } from "../config/db.js";
import { users } from "../modals/user.model.js";

export const count = async (req, res) => {
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
      if (user.id === 1) {
        con.sync().then(async () => {
          await users
            .findAll()
            .then((results) => {
              res
                .status(200)
                .json({ records: results.length, results: results });
            })
            .catch((error) => {
              res.status(404).json(error);
            });
        });
      } else {
        con.sync().then(async () => {
          await users
            .findAll()
            .then((results) => {
              res.status(200).json({ record: results.length });
            })
            .catch((error) => {
              res.status(404).json(error);
            });
        });
      }
    });
  } catch (err) {
    response.status(500).json(err);
  }
};
