# takamol-twig-creator
Install [WKHTML](https://wkhtmltopdf.org/)

Run server

Run **wkhtmltopdf http://localhost:5000/invoice test.pdf**

## Generate pdf locally command
Example with `worker-transfer` route
```
 wkhtmltopdf --orientation 'Landscape' --footer-html http://localhost:3000/worker-transfer-footer  --header-html http://localhost:3000/worker-transfer-header  http://localhost:3000/worker-transfer worker-transfer.pdf
```