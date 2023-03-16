let express = require(`express`);
let app = express();
let port = 3001;
const hbs = require('hbs');
app.set('views', 'views');
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
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
        "2full_description": faker.commerce.productDescription(),
        "comments": [],
        "buy": `Not bought`
    },
    {
        "img":"assets/Subscription_2.webp",
        "name":"Flower Share",
        "price": "$55.00",
        "type": "popular",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription(),
        "comments": [],
        "buy": `Not bought`

    },
    {
        "img":"assets/Subscription_3.webp",
        "name":"Culture Club",
        "price": "$55.00",
        "type": "popular",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription(),
        "comments": [],
        "buy": `Not bought`
    },

]

tea_and_honey=[
    {
        "img":"assets/Pantry_1.avif",
        "name":"Local Honey",
        "price": "$15.00",
        "type": "tea_and_honey",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription(),
        "comments": [],
        "buy": `Not bought`
    },
    {
        "img":"assets/Pantry_2.webp",
        "name":"Mint Digestif Tea",
        "price": "$8.00",
        "type": "tea_and_honey",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription(),
        "comments": [],
        "buy": `Not bought`
    },
    {
        "img":"assets/Pantry_3.webp",
        "name":"Siesta Tea",
        "price": "$8.00",
        "type": "tea_and_honey",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription(),
        "comments": [],
        "buy": `Not bought`
    },
    {
        "img":"assets/Pantry_3.webp",
        "name":"SMexican Hot Chocolate",
        "price": "$10.00",
        "type": "tea_and_honey",
        "1full_description": faker.commerce.productDescription(),
        "2full_description": faker.commerce.productDescription(),
        "comments": [],
        "buy": `Not bought`
    },
]

let purchases = []

app.get('/', function (req, res) {
    res.render(`index`,
    {
        popular:popular,
        tea_and_honey:tea_and_honey
    }
    )
})

app.post('/item', function (req, res) {
    let id = req.body.id;
    let type = req.body.type;

    let name = req.body.name;
    let adress = req.body.adress;
    let title = req.body.title;
    let content = req.body.content;
    let TF = req.body.TF;
   
    if (type == "tea_and_honey"){
        item1 = tea_and_honey[id];
        another = tea_and_honey;
        
    } else if (type == "popular"){
        item1 = popular[id];
        another = popular;
        
    }
    if (TF == `1`){
        item1.comments.push(
            {
                name:name,
                adress:adress,
                title:title,
                content:content

            }
        )
    }

    
    if (!item1){
        console.log(`404`)
        res.render(`404`);
    } else{
       
        res.render(`item`, 
            {
                item1:item1, 
                id:id,
                another:another,
                type:type,
                // purchases:purchases
            }
            
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


app.post('/buying', function (req, res) {
    let id = req.body.id;
    let type = req.body.type;

    if (type == "tea_and_honey"){
        item1 = tea_and_honey[id];
        
    } else if (type == "popular"){
        item1 = popular[id]; 
    }
    item1.buy = `Bought`;
    purchases.push(
        item1
    )
    console.log(purchases)
    res.render(`buying`, 
        {
            item1:item1, 
            id:id,
            type:type,
        }
            
    );
})

app.get('/admin', function (req, res) {

    res.render(`admin`, {
        popular:popular,
        tea_and_honey:tea_and_honey
    })
})

app.get('/add_item_admin', function (req, res) {
    img = req.query.img;
    namE = req.query.name;
    price = req.query.price;
    type = req.query.type;
    if (type == "tea_and_honey"){
        itea_and_honey.push(
            {
                "img": img,
                "name": namE,
                "price":'$'+price,
                "type": type,
                "1full_description":faker.commerce.productDescription(),
                "2full_description": faker.commerce.productDescription(),
                "comments": [],
                "buy": `Not bought`
            }
        )
    } else if (type == "popular"){
        popular.push(
            {
                "img": img,
                "name": namE,
                "price":'$'+price,
                "type": type,
                "1full_description":faker.commerce.productDescription(),
                "2full_description": faker.commerce.productDescription(),
                "comments": [],
                "buy": `Not bought`
            }
        )
    }
    res.redirect(`admin`)
})
//add_item_admin
