mvc.controller({
  name: "views",
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
  name: "views",
  action: "cursos",
  path: "/cursos",
  view: "cursos.ejs"
}, function (req, ) {
  return {
    name: "search_courses",
    title: "LabCode-courses"
  };
});

mvc.controller({
  name: "views",
  action: "view-curso",
  path: "/view-cursos",
  view: "views-cursos.ejs"
}, function (req, ) {
  return {
    name: "courses_view",
    title: "LabCode-view-courses"
  };
});

mvc.controller({
  name: "views",
  action: "shopping-cart",
  path: "/shopping-cart",
  view: "shopping-cart.ejs"
}, function (req, ) {
  return {
    name: "shopping",
    title: "LabCode-shopping-cart"
  };
});

mvc.controller({
  name: "views",
  action: "payment",
  path: "/payment",
  view: "payment.ejs"
}, function (req, ) {
  return {
    name: "payment",
    title: "LabCode-payment"
  };
});

mvc.controller({
  name: "views",
  action: "mis-cursos",
  path: "/mis-cursos",
  view: "mis-cursos.ejs"
}, function (req, ) {
  return {
    name: "myCourses",
    title: "mis-cursos"
  };
});

mvc.controller({
  name: "views",
  action: "factura",
  path: "/factura",
  view: "factura.ejs"
}, function (req, ) {
  return {
    name: "myCourses",
    title: "mis-cursos"
  };
});

mvc.controller({
  name: "views",
  action: "userRegister",
  path: "/register",
  view: "userRegister.ejs"
}, function (req, ) {
  return {
    name: "home",
    title: "LabCode"
  };
});
