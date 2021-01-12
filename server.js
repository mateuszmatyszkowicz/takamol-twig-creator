const port = process.env.PORT || 3000;
const app = require("express")();
const twig = require("twig");

twig.extendFilter("trans", function (value) {
  return value;
});

twig.extendFilter("arabicDigits", function (value) {
  return value;
});

twig.extendFilter("hijiriDate", function (value) {
  return value;
});

app.set("view engine", "twig");
app.set("twig options", {
  layout: false,
  allow_sync: true,
  strict_variables: false,
});

app.engine("twig", twig.renderFile);

app.get("/", (req, res) => {
  res.render("index.twig");
});

app.get("/invoice", (req, res) => {
  res.render("invoice.twig", {
    id: 1,
    created_at: "2020-12-28T13:05:41+03:00",
    amount: 23000,
    expired_at: "2020-11-22T13:05:41+03:00",
    sadad_number: '123412',
    payment_method: "qiwa",
    number_of_notices: 1000,
    notices_cost: 400000,
    subtotal: 40000000,
    added_tax: 150,
    total: 50,
    company_name_en: 'Company Name',
    company_name_ar: 'Company Name',
    tax_number: 12314123
  });
});

app.get("/notice", (req, res) => {
  res.render("notice.twig", {});
});

const server = app.listen(port);

process.on("SIGTERM", () => {
  stopServer(process.pid, "SIGINT");
});

process.on("SIGINT", () => {
  stopServer(process.pid, "SIGINT");
});

process.once("SIGUSR2", function () {
  stopServer(process.pid, "SIGUSR2");
});

function stopServer(pid, signal) {
  server.close();
  process.kill(pid, signal);
}
