const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});

// About Route
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send('Contact us at support@example.com');
});

// Users Route
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Mike' }
    ];

    res.json(users);
});

// Dynamic Route
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;

    res.json({
        message: `User Details for ID ${userId}`
    });
});

// POST Route
app.post('/add-user', (req, res) => {
    const user = req.body;

    res.json({
        message: 'User Added Successfully',
        user
    });
});

// 404 Route
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});