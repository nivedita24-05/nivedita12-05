const express = require('express');
const app = express();
const PORT = 3000;
 
const apps = [
    { id: 1, name: 'facebook' , icon:
        'facebook.png'},
        { id: 2, Name: 'whatsappp', icon:
            'whatsapp.png'},
            { id: 3,name: 'instagram', icon:
                'instagram.png'
            }
];

app.get('/apps',(req,res)=>{
    res.json(apps);
});

app.listen(PORT, () => {
    console.log('server running on 
        http://localhost:${PORT');
});