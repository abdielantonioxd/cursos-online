mvc.controller({
  name: "home",
  action: "index",
  path: "/",
  view: "index.ejs"
}, function (req, ) {
  return {
    name: "home",
    title: "LabCode"
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
    title: "LabCode-courses"
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
    title: "LabCode-view-courses"
  };
});

mvc.controller({
  name: "shoping",
  action: "cart",
  path: "/shopping-cart",
  view: "shopping-cart.ejs"
}, function (req, ) {
  return {
    name: "shopping",
    title: "LabCode-shopping-cart"
  };
});

mvc.controller({
  name: "pay",
  action: "method",
  path: "/payment",
  view: "payment.ejs"
}, function (req, ) {
  return {
    name: "payment",
    title: "LabCode-payment"
  };
});

mvc.controller({
  name: "my",
  action: "courses",
  path: "/mis-cursos",
  view: "mis-cursos.ejs"
}, function (req, ) {
  return {
    name: "myCourses",
    title: "mis-cursos"
  };
});

mvc.controller({
  name: "my",
  action: "factura",
  path: "/factura",
  view: "factura.ejs"
}, function (req, ) {
  return {
    name: "myCourses",
    title: "mis-cursos"
  };
});