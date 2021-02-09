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

twig.extendFilter("zeroToDash", function (value) {
  if (value == 0) {
    return '-';
  } else {
    return value;
  }
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


// WEEKLY REPORT
const weeklyReport = require('./data/weekly-report')

app.get("/weekly-report", (req, res) => {
  res.render("weekly-report.twig", {
    'weeklyReport': weeklyReport.data,
  });
});

app.get("/weekly-report-header", (req, res) => {
  res.render("weekly-report-header.twig", {});
});

app.get("/weekly-report-footer", (req, res) => {
  res.render("weekly-report-footer.twig", {});
});


// MONTHLY REPORT
const monthlyReport = require('./data/monthly-report')

app.get("/monthly-report-header", (req, res) => {
  res.render("monthly-report-header.twig", {});
});

app.get("/monthly-report-footer", (req, res) => {
  res.render("monthly-report-footer.twig", {});
});


app.get("/monthly-report", (req, res) => {
  res.render("monthly-report.twig", {
    'monthlyReport': monthlyReport.data,
  });
});


// DAILY REPORT
app.get("/daily-report-header", (req, res) => {
  res.render("daily-report-header.twig", {
    'date': '21/01/2021',
  });
});

app.get("/daily-report-footer", (req, res) => {
  res.render("daily-report-footer.twig", {});
});

app.get("/daily-report", (req, res) => {
  res.render("daily-report.twig", {
    'date': '21/01/2021', // Yesterday’s date
    'noticesYesterday': {
      'premium': 231,
      'standard': 452,
      'date': '21/01/2021',
    },
    'notices2DaysAgo': {
      'premium': 349,
      'standard': 502,
      'date': '20/01/2021',
    },
    'notices3DaysAgo': {
      'premium': 192,
      'standard': 240,
      'date': '19/01/2021',
    },
    'noticesTotal': {
      'premium': 14400,
      'standard': 12300,
      'startDate': '01/01/2020',
      'endDate': '21/01/2021',
    },
    'packagesDaily': 45,
    'packagesTotal': {
      'value': 520,
      'startDate': '01/01/2020',
      'endDate': '21/01/2021',
    },
    'contractProposals': {
      'accepted': 120,
      'rejected': 52,
      'expired': 10,
      'pending': 64,
      'date': '21/01/2021',
    }
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
