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
  res.render("weekly-report/weekly-report.twig", {
    'weeklyReport': weeklyReport.data,
  });
});

app.get("/weekly-report-header", (req, res) => {
  res.render("weekly-report/weekly-report-header.twig", {});
});

app.get("/weekly-report-footer", (req, res) => {
  res.render("weekly-report/weekly-report-footer.twig", {});
});

const workerReport = require('./data/worker-transfer')
app.get("/worker-transfer", (req, res) => {
  res.render("worker-transfer/worker-transfer-report-body-completed.twig", {
    'report': { transfers: workerReport.data },
  });
});

app.get("/worker-transfer-body-completed", (req, res) => {
  res.render("worker-transfer/worker-transfer-report-body-completed.twig", {
    'report': { transfers: workerReport.data },
  });
});

app.get("/worker-transfer-body-failed", (req, res) => {
  res.render("worker-transfer/worker-transfer-report-body-failed.twig", {
    'report': { transfers: workerReport.data.map(({completedAt,...rest}) => ({...rest, statusChangeDate: completedAt, status: 'Expired'}) ) },
  });
});

app.get("/worker-transfer-header", (req, res) => {
  res.render("worker-transfer/worker-transfer-report-header.twig", {
    subtitle: 'Failed requests',
  });
});

app.get("/worker-transfer-footer", (req, res) => {
  res.render("worker-transfer/worker-transfer-report-footer.twig", {});
});




// WEEKLY INDICATORS REPORT
const weeklyIndicatorsReport = require('./data/weekly-indicators')

app.get("/weekly-indicators", (req, res) => {
  res.render("weekly-indicators/weekly-indicators.twig", {
    'weeklyReport': weeklyIndicatorsReport.data.list,
  });
});

app.get("/weekly-indicators-header", (req, res) => {
  res.render("weekly-indicators/weekly-indicators-header.twig", {
    'fromDate': weeklyIndicatorsReport.data.fromDate,
    'toDate': weeklyIndicatorsReport.data.toDate,
  });
});

app.get("/weekly-indicators-footer", (req, res) => {
  res.render("weekly-indicators/weekly-indicators-footer.twig", {});
});


// MONTHLY REPORT
const monthlyReport = require('./data/monthly-report')

app.get("/monthly-report-header", (req, res) => {
  res.render("monthly-report/monthly-report-header.twig", {});
});

app.get("/monthly-report-footer", (req, res) => {
  res.render("monthly-report/monthly-report-footer.twig", {});
});

app.get("/monthly-report", (req, res) => {
  res.render("monthly-report/monthly-report.twig", {
    'monthlyReport': monthlyReport.data,
  });
});


// DAILY REPORT
app.get("/daily-report-header", (req, res) => {
  res.render("daily-report/daily-report-header.twig", {
    'date': '21/01/2021',
  });
});

app.get("/daily-report-footer", (req, res) => {
  res.render("daily-report/daily-report-footer.twig", {});
});

const daysAgo = (today, offset) => {
  today.setDate(today.getDate() - offset);
  return today;
};

app.get("/daily-report", (req, res) => {
  res.render("daily-report/daily-report.twig", {
    'report': {
      'yesterdayDate': daysAgo(new Date(), 1),
      'twoDaysAgoDate': daysAgo(new Date(), 2),
      'threeDaysAgoDate': daysAgo(new Date(), 3),
      'premiumNoticesYesterday': 231,
      'standardNoticesYesterday': 452,
      'premiumNoticesTwoDaysAgo': 231,
      'standardNoticesTwoDaysAgo': 452,
      'premiumNoticesThreeDaysAgo': 231,
      'standardNoticesThreeDaysAgo': 452,
      'premiumNoticesLtd': 120,
      'standardNoticesLtd': 120,
      'importedNoticesLtd': 120,
      'premiumNoticesYtd': 120,
      'standardNoticesYtd': 120,
      'importedNoticesYtd': 120,
      'purchasesLtd': 35000,
      'purchasesYtd': 502,
      'dailyPurchases': 45,
      'proposalsAccepted': 120,
      'proposalsRejected': 52,
      'proposalsExpired': 10,
      'proposalsCreated': 6411,
    }
  });
});


// FINANCIAL WEEKLY REPORT
const financialWeeklyReport = require('./data/financial-weekly-report')

app.get("/financial-weekly-report", (req, res) => {
  res.render("financial-weekly-report/financial-weekly-report.twig", {
    'report': financialWeeklyReport.data,
  });
});

app.get("/financial-weekly-report-header", (req, res) => {
  res.render("financial-weekly-report/financial-weekly-report-header.twig", {
    'startDate': '01/02/2021',
    'endDate': '07/02/2021',
  });
});

app.get("/financial-weekly-report-footer", (req, res) => {
  res.render("financial-weekly-report/financial-weekly-report-footer.twig", {});
});

// VISA WEEKLY REPORT
const visaWeeklyReport = require('./data/visa-weekly-report')

app.get("/visa-weekly-report", (req, res) => {
  res.render("visa-weekly-report/visa-weekly-report.twig", {
    'visaWeeklyReport': visaWeeklyReport.data,
  });
});

app.get("/visa-weekly-report-header", (req, res) => {
  res.render("visa-weekly-report/visa-weekly-report-header.twig", {
    'visaWeeklyReport': visaWeeklyReport.headerData,
  });
});

app.get("/visa-weekly-report-footer", (req, res) => {
  res.render("visa-weekly-report/visa-weekly-report-footer.twig", {});
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
