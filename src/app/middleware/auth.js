export default function AuthMiddleware(Request, Response, Next) {
  return Next();
  Request.session.user
    ? Next()
    : Response.json({
        status: "error",
        message: "User not logged in.",
        data: null,
      });
}
