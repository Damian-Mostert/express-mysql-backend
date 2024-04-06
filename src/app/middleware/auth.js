export default function AuthMiddleware(Request, Response, Next) {
  User.create({
    title: "Clean Code",
    author: "Robert Cecil Martin",
    release_date: "2021-12-14",
    subject: 3,
  })
    .then((res) => {
      console.log(res);
      Next();
    })
    .catch((error) => {
      Response.json({
        status: "error",
        message: "User not logged in.",
        data: null,
      });
    });
}
