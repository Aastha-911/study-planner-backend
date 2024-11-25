const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const groupRoutes = require('./routes/group.routes');
const taskRoutes = require('./routes/task.routes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
