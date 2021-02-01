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
app.get("/weekly-report", (req, res) => {
  res.render("weekly-report.twig", {
    'weeklyReport': [
      {
        'icIdentity': '1-2345',
        'icName': 'Bank of America',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '4-578',
        'icName': 'Bank of America2',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-246345',
        'icName': 'Bank of America3',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-232332',
        'icName': 'Bank of America4',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-3333',
        'icName': 'ة والخدمات للاستقدام التوظيف ابدال شركة فر',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-123321',
        'icName': 'Bank of America6',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1111',
        'icName': 'Bank of America7',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-321',
        'icName': 'Bank of America8',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-898',
        'icName': 'Bank of America9',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1010',
        'icName': 'Bank of America10',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1111',
        'icName': 'Bank of America11',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1112',
        'icName': 'Bank of America13',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1112',
        'icName': 'Bank of America14',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1112',
        'icName': 'Bank of America15',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1112',
        'icName': 'Bank of America16',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1112',
        'icName': 'Bank of America17',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1112',
        'icName': 'Bank of America18',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1112',
        'icName': 'Bank of America19',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      },
      {
        'icIdentity': '2-1112',
        'icName': 'Bank of America20',
        'numberOfLaborers': 1267,
        'leasedLaborers': 973,
        'unleasedLaborers': 294,
        'weeklyIndicator': 83,
        'monthlyIndicator': 76
      }
    ]
  });
});

app.get("/weekly-report-header", (req, res) => {
  res.render("weekly-report-header.twig", {});
});

app.get("/weekly-report-footer", (req, res) => {
  res.render("weekly-report-footer.twig", {});
});


// MONTHLY REPORT
app.get("/monthly-report-header", (req, res) => {
  res.render("monthly-report-header.twig", {});
});

app.get("/monthly-report-footer", (req, res) => {
  res.render("monthly-report-footer.twig", {});
});

const details = [
  {
    'icName': 'Bank of America',
    'icIdentity': '1-2345',
    'paymentGateway': 'Qiwa',
    'Month': 'December',
    'amountPaidVat': 11000,
    'amountPaid': 10000,
    'notices': 5,
    'usedNotices': 0,
  },
  {
    'icName': 'Bank of America',
    'icIdentity': '1-2345',
    'paymentGateway': 'Qiwa',
    'Month': 'December',
    'amountPaidVat': 11000,
    'amountPaid': 10000,
    'notices': 5,
    'usedNotices': 0,
  },
  {
    'icName': 'Bank of America',
    'icIdentity': '1-2345',
    'paymentGateway': 'Qiwa',
    'Month': 'December',
    'amountPaidVat': 11000,
    'amountPaid': 10000,
    'notices': 5,
    'usedNotices': 0,
  },
  {
    'icName': 'Bank of America',
    'icIdentity': '1-2345',
    'paymentGateway': 'Qiwa',
    'Month': 'December',
    'amountPaidVat': 11000,
    'amountPaid': 10000,
    'notices': 5,
    'usedNotices': 0,
  },
  {
    'icIdentity': '1-2345',
    'paymentGateway': 'Qiwa',
    'Month': 'December',
    'amountPaidVat': 11000,
    'amountPaid': 10000,
    'notices': 5,
    'usedNotices': 0,
  }
];

app.get("/monthly-report", (req, res) => {
  res.render("monthly-report.twig", {
    'monthlyReport': [
      {
        'icName': 'Bank of America',
        'total': {
          'amountPaidVat': 57500,
          'amountPaid': 50000,
          'notices': 2500,
          'usedNotices': 123,
        },
        'details': details
      },
      {
        'icName': 'Bank of America',
        'total': {
          'amountPaidVat': 57500,
          'amountPaid': 50000,
          'notices': 2500,
          'usedNotices': 123,
        },
        'details': details
      },
      {
        'icName': 'Bank of America',
        'total': {
          'amountPaidVat': 57500,
          'amountPaid': 50000,
          'notices': 2500,
          'usedNotices': 123,
        },
        'details': details
      },

      {
        'icName': 'Bank of America',
        'total': {
          'amountPaidVat': 57500,
          'amountPaid': 50000,
          'notices': 2500,
          'usedNotices': 123,
        },
        'details': details
      }
    ]
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
