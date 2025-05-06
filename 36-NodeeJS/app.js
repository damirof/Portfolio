import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());

const dbPath = path.resolve('./db.json');
console.log(dbPath);

const readDB = () => {
    let data = fs.readFileSync(dbPath);
    data = JSON.parse(data);
    return data
};

const writeDB = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data));
};

app.get('/api/', (req, res) => {
    const data = readDB();
    res.json(data);
});

app.post('/api/', (req, res) => {
    const newItem = req.body;
    const data = readDB();
    data.push(newItem);
    writeDB(data);
    res.status(201).json({ message: 'Added', item: newItem });
});

app.delete('/api/:id', (req, res) => {
    const { id } = req.params;
    const data = readDB();

    const newData = data.filter(item => item.id !== parseInt(id));  

    writeDB(newData);

    res.status(200).json({ message: `Object deleted` });
});

app.put('/api/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    const data = readDB();
    const itemIndex = data.findIndex(item => item.id === parseInt(id));

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Object not found' });
    }

    data[itemIndex] = { ...data[itemIndex], ...updatedItem };
    writeDB(data);
    res.status(200).json({ message: ` object update`, item: data[itemIndex] });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});