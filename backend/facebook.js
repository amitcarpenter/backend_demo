const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;


FACEBOOK_APP_ID = "7212870735459306";
FACEBOOK_APP_SECRET = "ba7335138e9f051d1ad596ec86fba30a";

const appId = '7212870735459306';
const appSecret = 'ba7335138e9f051d1ad596ec86fba30a';
const redirectUri = 'http://localhost:3000/callback';

app.get('/login', (req, res) => {
    const authUrl = `https://www.facebook.com/v19.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=email,user_posts`;
    res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
    const code = req.query.code;
    const tokenUrl = `https://graph.facebook.com/v19.0/oauth/access_token?client_id=${appId}&redirect_uri=${redirectUri}&client_secret=${appSecret}&code=${code}`;

    try {
        const response = await axios.get(tokenUrl);
        const accessToken = response.data.access_token;
        res.json({ access_token: accessToken });
    } catch (error) {
        console.error('Error getting access token:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
