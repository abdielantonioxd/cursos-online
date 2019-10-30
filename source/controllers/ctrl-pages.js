mvc.controller({
  name: "customer",
  action: "index",
  path: "/",
  view: "index.ejs"
}, function (req, ) {
  return {
    title: "Customer Home Page",
    message: "Welcome to our web page!"
  };
});


mvc.controller({
  name: "customer",
  action: "index",
  path: "/cursos",
  view: "cursos.ejs"
}, function (req, ) {
  return {
    title: "Customer Home Page",
    message: "Welcome to our web page!"
  };
});