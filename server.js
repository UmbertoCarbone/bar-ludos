const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;

const cards = [
    {
        title: "Gatto ballerino",
        description: "Un gatto che balla su TikTok!",
        tiktokUrl: "https://www.tiktok.com/@cats/video/7263512345678901234"
    },
    {
        title: "Tutorial disegno",
        description: "Come disegnare un drago passo-passo",
        tiktokUrl: "https://www.tiktok.com/@artist/video/7269876543210123456"
    }
];

app.use(express.static('public')); // per il sito statico

app.get('/api/cards', (req, res) => {
    res.json(cards);
});

app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});