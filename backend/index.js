const express = require('express');
const bodyParser = require('body-parser');
const meetingRoutes = require('./routes/meetingRoutes');
const pomodoroRoutes = require('./routes/pomodoroRoutes');
const documentRoutes = require('./routes/documentRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/meeting', meetingRoutes);
app.use('/api/pomodoro', pomodoroRoutes);
app.use('/api/document', documentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
