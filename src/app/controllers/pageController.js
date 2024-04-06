const pages = [
  {
    slug: "/",
    title: "Home",
    description: "hello world",
  },
];

const components = [];

const data = [];

export default {
  getPage(Request, Response) {
    const { slug } = Request.body;

    for (let page of pages) {
      if (page.slug == slug) {
        return Response.json({
          status: "success",
          data: page,
        });
      }
    }
    Response.json({});
  },

  getMetadata(Request, Response) {
    const { slug } = Request.body;

    for (let page of pages) {
      if (page.slug == slug) {
        return Response.json({
          status: "success",
          data: page,
        });
      }
    }
    Response.json({
      status: "error",
    });
  },
};
