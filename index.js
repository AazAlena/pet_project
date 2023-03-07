let express = require(`express`);
let app = express();
let port = 3005;
const hbs = require('hbs');
app.set('views', 'views');
app.set('view engine', 'hbs');

app.use(express.static('public'));
let { faker } = require(`@faker-js/faker`);


app.listen(port, function(){
    console.log(`Сервер запущен: http://localhost:${port}`)
})

popular=[
    {
        "img":"assets/Subscription_1.webp",
        "name": "Harvest Box",
        "price": "$55.00",
        "type": "popular",
        "1full_description":faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription()
    },
    {
        "img":"assets/Subscription_2.webp",
        "name":"Flower Share",
        "price": "$55.00",
        "type": "popular",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription()

    },
    {
        "img":"assets/Subscription_3.webp",
        "name":"Culture Club",
        "price": "$55.00",
        "type": "popular",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription()
    },

]

tea_and_honey=[
    {
        "img":"assets/Pantry_1.avif",
        "name":"Local Honey",
        "price": "$15.00",
        "type": "tea_and_honey",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription()
    },
    {
        "img":"assets/Pantry_2.webp",
        "name":"Mint Digestif Tea",
        "price": "$8.00",
        "type": "tea_and_honey",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription()
    },
    {
        "img":"assets/Pantry_3.webp",
        "name":"Siesta Tea",
        "price": "$8.00",
        "type": "tea_and_honey",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription()
    },
    {
        "img":"assets/Pantry_3.webp",
        "name":"SMexican Hot Chocolate",
        "price": "$10.00",
        "type": "tea_and_honey",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription()
    },
]


app.get('/', function (req, res) {
    res.render(`index`,
    {
        popular:popular,
        tea_and_honey:tea_and_honey
    }
    )
})

app.get('/item', function (req, res) {
    let id = req.query.id;
    let type = req.query.type;
   
    if (type == "tea_and_honey"){
       
        item1 = tea_and_honey[id];
        another = tea_and_honey;
    } else if (type == "popular"){
        item1 = popular[id];
        another = popular;
        
    }
    
    if (!item1){
        console.log(`404`)
        res.render(`404`);
    } else{
       
        res.render(`item`, 
            {item1:item1, 
            another:another}
            
        );
    }
})


app.get('/sect', function (req, res) {
    what_is_ch = {
        popular:false,
        tea_and_honey:false
    }
    let type = req.query.type;
    what_is_ch[type]=true;
    
    res.render(`index1`,
    {
        what_is_ch: what_is_ch,
        popular:popular,
        tea_and_honey:tea_and_honey
    }
    )
    
    // 4 ★  ☆☆
})
