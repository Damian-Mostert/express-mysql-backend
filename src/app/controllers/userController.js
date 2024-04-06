import User from "#app/models/user.js";

export default {
  async getUser(Request, Response) {
    try {
      return Response.json({
        status: "success",
        message: "user logged in.",
        data: {
          name:"test"
        }
      });
      User.where("id", 1)
        .fetch()
        .then((user) => {
          return Response.json({
            status: "success",
            message: "user logged in.",
            data: user.attributes,
          });
        });
    } catch (e) {
      //new User({ id: 1 }).destroy({ hardDelete: true });
      return Response.json({
        status: "error",
      });
    }

    console.log(new User({ id: 1 }));
  },
  login(Request, Response) {
    const { email, password } = Request.body;
    User.where("email", email)
      .fetch()
      .then((user) => {
        if (!user.attributes) {
          return Response.json({
            status: "error",
            message: "User not found.",
          });
        }
        if (user.attributes.password == password) {
          Request.session.user = user.attributes;
          return Response.json({
            status: "success",
            message: "user logged in.",
          });
        }
        return Response.json({
          status: "error",
          message: "Incorrect password.",
        });
      })
      .catch((E) => {
        console.log(E)
        return Response.json({
          status: "error",
          message: "There was a error.",
        });
      });
    console.log(new User({ id: 1 }));
  },
  register(Request, Response) {}
}
