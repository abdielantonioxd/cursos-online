mvc.controller({
  name: "home",
  action: "index",
  path: "/",
  view: "index.ejs"
}, function (req, ) {
  return {
    name: "home",
    message: "Welcome to our web page!"
  };
});


mvc.controller({
  name: "cursos",
  action: "pages",
  path: "/cursos",
  view: "cursos.ejs"
}, function (req, ) {
  return {
    name: "search_courses",
    message: "Welcome to our web page!"
  };
});

mvc.controller({
  name: "view",
  action: "cursos",
  path: "/view-cursos",
  view: "views-cursos.ejs"
}, function (req, ) {
  return {
    name: "courses_view",
    message: "Welcome to our web page!"
  };
});

mvc.controller({
  name: "shoping",
  action: "cart",
  path: "/shopping-cart",
  view: "shopping-cart.ejs"
}, function (req, ) {
  return {
    title: "Customer Home Page",
    message: "Welcome to our web page!"
  };
});

mvc.controller({
  name: "pay",
  action: "method",
  path: "/payment",
  view: "payment.ejs"
}, function (req, ) {
  return {
    name: "pay",
    message: "Welcome to our web page!"
  };
});