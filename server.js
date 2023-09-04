const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: ['http://localhost:3000']
};
app.use(cors(corsOptions));
app.use('/force-graph', express.static('node_modules/force-graph/dist'));
app.get('/', cors(), (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server running on  http://localhost:${port}`);
});
