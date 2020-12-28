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
  res.render("invoice.twig", {});
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
