const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require("./swagger.json")

const app = express();

app.use(express.json())
app.use(morgan('combined'));
app.use(cors());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/v1',routes);

app.listen(5000, () =>{
    console.log("Rodando http na porta 5000 \\O/.");
})