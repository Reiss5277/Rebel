const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let volunteerCount = 0;

app.use(bodyParser.json());

// 获取叛軍人數的 API
app.get('/api/getVolunteerCount', (req, res) => {
    res.json({ volunteerCount });
});

// 注册叛軍的 API
app.post('/api/register', (req, res) => {
    const { increment } = req.body;
    volunteerCount += increment;
    res.json({ status: 'success' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
