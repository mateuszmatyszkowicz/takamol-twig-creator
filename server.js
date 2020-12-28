const port = process.env.PORT || 3000;
const app = require("express")();
const twig = require("twig");

twig.extendFilter("trans", function (value) {
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
  res.render("index.twig", {
    questions: [
      {
        title: "asda",
        checked: false,
      },
      {
        title: "asda",
        checked: true,
        description: "asdasd",
      },
    ],
  });
});

app.get("/invoice", (req, res) => {
  res.render("invoice.twig", {
    purchase_uuid: "08fc5edc-1840-4b84-a8bd-8fb903e8a5f7",
    id: 1,
    status: "paid",
    created_at: "2020-12-28T13:05:41+03:00",
    amount: 23000,
    expired_at: "2020-11-22T13:05:41+03:00",
    sadad_number: null,
    ic_company_identity: "15-1770645",
    payment_method: "sadad",
    checkout_url: null,
    number_of_notices: 1000,
    notices_cost: 40000,
    subtotal: 40000,
    added_tax: 15000,
    total: 55000,
    company_name: 'Company Name'
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
