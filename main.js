/* FootRush — Complete Platform JS — All Features */
'use strict';

// ════════════════════════════════════ BRANDS
const BRANDS = [
    { name:"Nike",         color:"#000",     abbr:"NK" },
    { name:"Adidas",       color:"#000",     abbr:"AD" },
    { name:"Puma",         color:"#171717",  abbr:"PM" },
    { name:"Reebok",       color:"#CC0000",  abbr:"RB" },
    { name:"New Balance",  color:"#CF3338",  abbr:"NB" },
    { name:"Converse",     color:"#000",     abbr:"CV" },
    { name:"Vans",         color:"#1a1a1a",  abbr:"VN" },
    { name:"Under Armour", color:"#1D4289",  abbr:"UA" },
    { name:"ASICS",        color:"#003da5",  abbr:"AS" },
    { name:"Skechers",     color:"#003087",  abbr:"SK" },
    { name:"Salomon",      color:"#FF8200",  abbr:"SL" },
    { name:"Brooks",       color:"#0072CF",  abbr:"BR" },
    { name:"Merrell",      color:"#7B4F2E",  abbr:"MR" },
    { name:"Timberland",   color:"#8B5E3C",  abbr:"TB" },
    { name:"FootRush",     color:"#2e8b2e",  abbr:"FR" },
    { name:"New Era",      color:"#1f1f1f",  abbr:"NE" },
    { name:"Cole Haan",    color:"#5a4730",  abbr:"CH" },
    { name:"Jordan",       color:"#1e1e1e",  abbr:"JD" },
    { name:"HOKA",        color:"#1c4486",  abbr:"HK" },
    { name:"On",          color:"#111",     abbr:"ON" }
];

const CATS = ["Running","Sneakers","Casual","Formal","Lifestyle","Sports","Outdoor","Athleisure","Work","Kids"];

// ════════════════════════════════════ PRODUCT GENERATOR
const SHOE_IMGS = [
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1464626/pexels-photo-1464626.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1464627/pexels-photo-1464627.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1464628/pexels-photo-1464628.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1464629/pexels-photo-1464629.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1464630/pexels-photo-1464630.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=200"

];

const COLORS = [
    { name:'White', hex:'#ffffff' },
    { name:'Black', hex:'#111111' },
    { name:'Red', hex:'#e53935' },
    { name:'Blue', hex:'#1e88e5' },
    { name:'Green', hex:'#2e7d32' },
    { name:'Orange', hex:'#fb8c00' },
    { name:'Purple', hex:'#8e24aa' },
    { name:'Yellow', hex:'#fdd835' },
    { name:'Pink', hex:'#d81b60' },
    { name:'Cyan', hex:'#00acc1' },
    { name:'Teal', hex:'#00897b' },
    { name:'Gray', hex:'#6d6d6d' },
    { name:'Maroon', hex:'#7b1fa2' },
    { name:'Navy', hex:'#0d47a1' },
    { name:'Olive', hex:'#6d4c41' }
];

const NAMES = {
    Running:   ["Pegasus","Ultraboost","Gel-Nimbus","Wave Rider","Fresh Foam","Kinvara","Ghost","Adrenaline","Triumph","Kayano","Saucony Ride","React Infinity","Tempo","Cloudmonster","Vaporfly","Alphafly","Novablast","Jolt","Fuel Cell","GT-2000"],
    Sneakers:  ["Air Max","Air Force 1","Dunk Low","Jordan 1","Chuck Taylor","Old Skool","RS-X","Suede","Platform","Forum","Samba","Campus","Stan Smith","Gazelle","Handball","Rivalry","Nite Jogger","ZX 2K","Superstar","EZU"],
    Casual:    ["Sk8-Hi","Era","Authentic","Slip-On","Classic","Derby","Boat Shoe","Penny Loafer","Chelsea","Moc Toe","White Camp","Holiday","Canvas","Drive","Laze","Blaze","Soft Cat","Suede Classic","Roma","Court"],
    Formal:    ["Oxford Pro","Derby Lux","Brogue Elite","Monk Strap","Chelsea Boot","Cap Toe","Wholecut","Plain Toe","Double Monk","Wingtip","Imperial","Senate","Reserve","Barrister","Regent","Tribune","Ambassador","Premier","Prestige","Laureate"],
    Lifestyle: ["990v6","993","1080","860","574","327","237","530","2002","996","Trail Lab","Urban Peak","City Stride","Metro","Commuter","Everyday","Daily Driver","Tempo Casual","Flex Adapt","AeroCore"],
    Sports:    ["Metcon","Nano","Reefit","Court Vision","Legend","Trainer","Speed Drill","Powergrid","FlexForce","CrossGrip","Pro Elite","HyperLink","Court Ace","Agility Pro","Flex Wave","GrandPro","Vapor Court","Pursuit","Sprint Force","GamePoint"],
    Outdoor:   ["TerraPro","Trailblazer","Summit","Range Runner","Peak Hiker","Ridgefoot","Geo Trek","StormGuard","TerrainX","HikePro","Forest Run","Gorge Walker","Outland","Trailmaster","WildTrack","CampChamp","Alpine","EcoTrek","NatureStep","Tundra"],
    Athleisure:["MetroFit","UrbanFlex","StreetWave","EaseStride","CoreLite","SoftStep","CityFlow","HybridRun","StreetSync","EverydayPlus","StreetEdge","FitEase","ClubCore","Breeze", "Pulse", "MovePro", "UrbanZen","FormFit","NeoFlow","SportChic"],
    Work:      ["SteelStep","ForgePro","TaskMaster","FieldGuard","WorkClub","DutyRunner","JobCrew","StrongHold","PowerGrip","CraftPro","Builder","ProSafe","EquipStep","ShiftWear","SiteRunner","Construct","CraftFit","HardWear","ToughRide","WorkElite"],
    Kids:      ["MiniTrack","PlayRun","TinySteps","CheerStep","GoGo","FunFlex","Bounce","Sprout","JuniorDash","KidSprint","Lil League","PocketRun","Smiley","TotToe","PlayScout","Nimble","Spark","Glow","HappyRun","Buddy"],
};

const SUFFIXES = ["","2","3","Pro","Elite","V2","V3","Plus","Max","X","2.0","Ultra","X2","GTX","XT","EX","SE","Premium","OG","LTD"];

const CATEGORY_IMAGE_TAGS = {
    Running: 'running+shoes',
    Sneakers: 'sneakers',
    Casual: 'casual+shoes',
    Formal: 'formal+shoes',
    Lifestyle: 'lifestyle+shoes',
    Sports: 'sport+shoes',
    Outdoor: 'hiking+shoes',
    Athleisure: 'athleisure+shoes',
    Work: 'work+boots',
    Kids: 'kids+shoes'
};

function genImg(id, brand, cat, color) {
    // Always show curated shoe-only images, cycling with id to keep every card filled.
    const index = Math.abs(id) % SHOE_IMGS.length;
    return SHOE_IMGS[index];
}

const ITEMS_PER_BRAND = 2500; // now 2500 model variations per brand for maximum richness

function generateProducts() {
    const products = [];
    let id = 1;
    BRANDS.forEach((brandObj, bi) => {
        const brand = brandObj.name;
        for (let i = 0; i < ITEMS_PER_BRAND; i++) {
            const cat = CATS[i % CATS.length];
            const names = NAMES[cat] || NAMES['Lifestyle'];
            const baseName = names[i % names.length];
            const suffix   = SUFFIXES[(i + bi) % SUFFIXES.length];
            const color    = COLORS[(id + bi) % COLORS.length];
            const base     = 55 + ((id * 47 + bi * 13) % 340);
            const discPct  = 8 + (id % 28);
            const orig     = Math.round(base * (1 + discPct/100));
            const rating   = +(3.9 + ((id * 17 + bi) % 11) / 10).toFixed(1);
            const reviews  = 80 + ((id * 31 + bi * 17) % 520);
            products.push({
                id,
                name: `${brand} ${baseName}${suffix ? ' ' + suffix : ''}`,
                brand,
                cat,
                color: color.name,
                colorHex: color.hex,
                price: base,
                orig,
                disc: discPct,
                rating: Math.min(rating, 5.0),
                reviews,
                img: genImg(id, brand, cat, color)
            });
            id++;
        }
    });
    return products;
}

const DB_PRODUCTS = generateProducts();

// Reviews with avatars and review photos
const AVATAR_IDS = [
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
    "https://images.pexels.com/photos/718069/pexels-photo-718069.jpeg?auto=compress&cs=tinysrgb&w=80",
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=80",
    "https://images.pexels.com/photos/1043470/pexels-photo-1043470.jpeg?auto=compress&cs=tinysrgb&w=80",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80",
    "https://images.pexels.com/photos/1181719/pexels-photo-1181719.jpeg?auto=compress&cs=tinysrgb&w=80"
];
const REVIEW_SHOE_IDS = [
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=200"
];

const DB_REVIEWS = [
    {user:"Alex M.",    rating:5, date:"Mar 20", text:"Absolutely stunning! Comfortable from day one. The cushioning is incredible and size fits perfectly.",        av:0, img:0},
    {user:"Priya S.",  rating:5, date:"Mar 15", text:"Best purchase this year. True to size, premium quality! The leather feels amazing and very durable.",          av:1, img:1},
    {user:"Jordan K.", rating:4, date:"Mar 10", text:"Great shoe, slightly tight on wide feet but love the look. Broke in after 2 days and now super comfortable!",  av:2, img:2},
    {user:"Sam T.",    rating:5, date:"Mar 18", text:"Incredible cushioning. Worth every penny. My feet don't hurt even after an 8-hour shift.",                    av:3, img:null},
    {user:"Lakshmi R.",rating:4, date:"Mar 12", text:"Very comfortable, fast delivery. Would buy again! Exactly as shown in the photos.",                             av:4, img:3},
    {user:"Chris B.", rating:5, date:"Mar 22", text:"Trendy design and really comfortable for daily wear. Got so many compliments at work!",                         av:5, img:null},
    {user:"Rahul P.", rating:5, date:"Mar 21", text:"Amazing product. Highly recommend FootRush! Great packaging and the shoe came with extra laces!",               av:6, img:4},
    {user:"Meera K.", rating:4, date:"Mar 19", text:"Good shoe overall. The sole grip is excellent. Would have given 5 stars but delivery took an extra day.",        av:7, img:5}
];

const DB_CATS = [
    { name:"Running",    img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name:"Sneakers",   img:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name:"Casual",     img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80" },
    { name:"Formal",     img:"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
    { name:"Lifestyle",  img:"https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name:"Sports",     img:"https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name:"Outdoor",    img:"https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name:"Athleisure", img:"https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name:"Work",       img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80" },
    { name:"Kids",       img:"https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1200" }
];

// ════════════════════════════════════ STATE
window.S = {
    user: null,
    isLogin: true,
    cart: [],
    wishlist: new Set(),
    orders: [],
    filters: { brands:[], cats:[], colors:[], maxPrice:800, sizes:[] },
    catalog: { mode:'all', filter:'', page:1, perPage:60 },
    buyNowProduct: null,
    buyNowSize: 10,
    checkoutItems: [],
    theme: 'light'
};

// ════════════════════════════════════ HELPERS
const $ = id => document.getElementById(id);
const starsT = n => '★'.repeat(Math.round(n)) + '☆'.repeat(5-Math.round(n));
const starsHtml = (n,rv) => `<span class="stars">${starsT(n)}</span> <span>${n}</span> ${rv ? `<span>(${rv})</span>` : ''}`;

// ════════════════════════════════════ ROUTER
window.FR = {
go(page, arg) {
    // Manage visibility
    const isAuth = page === 'auth';
    $('auth-pg').classList.remove('on');
    ['top-nav','bot-nav','promo-bar','site-footer'].forEach(id => {
        $(id).style.display = isAuth ? 'none' : (id === 'top-nav' ? 'flex' : id === 'bot-nav' ? 'block' : id === 'site-footer' ? 'block' : 'block');
    });
    if (isAuth) { $('auth-pg').classList.add('on'); document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on')); return; }

    document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));

    const pageMap = { home:'home-pg', cart:'cart-pg', payment:'payment-pg', orders:'orders-pg', profile:'profile-pg', wishlist:'wishlist-pg', catalog:'catalog-pg', search:'search-pg' };
    const pid = pageMap[page] || page;
    const el = $(pid);
    if (el) el.classList.add('on');

    // Bottom nav active
    document.querySelectorAll('.bn-btn').forEach(b => b.classList.toggle('on', b.dataset.pg === pid));

    // Render
    switch(page) {
        case 'home':    renderHome(); break;
        case 'catalog': renderCatalogPage(arg); break;
        case 'search':  renderSearch(arg); break;
        case 'cart':    renderCart(); break;
        case 'payment': renderPayment(); break;
        case 'orders':  renderOrders(); break;
        case 'profile': renderProfile(); break;
        case 'wishlist':renderWishlist(); break;
    }
    window.scrollTo({top:0,behavior:'smooth'});
},

// ── AUTH ──────────────────────────────────────────────
auth() {

    const email = $('a-e').value.trim();

    const pass  = $('a-p').value.trim();

    if(!S.isLogin){

    firebaseRegister(email,pass)

    .then(()=>{

    alert("User created");

    })

    .catch(()=>{

    alert("Signup failed");

    });

    }
    else{

    firebaseLogin(email,pass)

    .then(()=>{

    S.user={name:email,email};

    FR.go('home');

    })

    .catch((error)=>{

    alert(error.message);
    });

    }

},
gAuth() { S.user={name:'Google User',email:'user@gmail.com'}; FR.go('home'); },
toggleMode(e) {
    e.preventDefault();
    S.isLogin = !S.isLogin;
    $('a-tit').textContent = S.isLogin ? 'Welcome back' : 'Create account';
    $('a-sub').textContent = S.isLogin ? 'Sign in to your FootRush account.' : 'Join the FootRush community.';
    $('a-btn').textContent = S.isLogin ? 'Login' : 'Sign Up';
    $('a-sl').textContent  = S.isLogin ? "Don't have an account?" : "Already have an account?";
    $('a-slnk').textContent= S.isLogin ? 'Sign up' : 'Login';
    $('a-nw').style.display= S.isLogin ? 'none' : 'block';
    $('a-er').style.display= 'none';
},

// ── CART ──────────────────────────────────────────────
addBag(id, e) {
    if(e) e.stopPropagation();
    const p = DB_PRODUCTS.find(x=>x.id===id);
    if (!p) return;
    const ex = S.cart.find(i=>i.p.id===id);
    if (ex) ex.qty++; else S.cart.push({p, qty:1, size:S.buyNowSize||10});
    updateBadges();
    FR.toast(`🛒 ${p.name} added to bag!`);
    FR.closeQV();
},

// ── WISHLIST (FIXED) ──────────────────────────────────
toggleWish(id, btn) {
    if (S.wishlist.has(id)) {
        S.wishlist.delete(id);
        if(btn){btn.classList.remove('liked');btn.innerHTML='<i class="fa-regular fa-heart"></i>';}
        FR.toast('Removed from wishlist');
    } else {
        S.wishlist.add(id);
        if(btn){btn.classList.add('liked');btn.innerHTML='<i class="fa-solid fa-heart"></i>';}
        FR.toast('💚 Added to wishlist!');
    }
    // Live update wishlist page badge
    const wn = $('wish-nav-btn');
    if(wn) wn.querySelector('i').className = S.wishlist.size > 0 ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    // If wishlist page is open, re-render
    if($('wishlist-pg')?.classList.contains('on')) renderWishlist();
},

// ── BUY NOW ───────────────────────────────────────────
buyNow(id) {
    const p = DB_PRODUCTS.find(x=>x.id===id);
    if(!p) return;
    S.buyNowProduct = p;
    S.checkoutItems = [{p, qty:1, size:S.buyNowSize||10}];
    FR.closeQV();
    FR.go('payment');
},

// ── QUICK VIEW (with reviews + images + recommendations) ─────────
openQV(id) {
    const p = DB_PRODUCTS.find(x=>x.id===id);
    if (!p) return;
    // Similar products (recommendations)
    const recs = DB_PRODUCTS.filter(x=>x.id!==id && (x.cat===p.cat || x.brand===p.brand)).slice(0,6);
    // Reviews with avatars and images
    const rvHtml = DB_REVIEWS.map(r=>{
        const avUrl = AVATAR_IDS[r.av] || '';
        const imgUrl = (r.img!=null && REVIEW_SHOE_IDS[r.img]) ? REVIEW_SHOE_IDS[r.img] : null;
        return `<div class="rv-item" style="border-bottom:1px solid var(--border);padding-bottom:12px;margin-bottom:12px">
            <div class="rv-head" style="display:flex;justify-content:space-between;align-items:flex-start">
                <div style="display:flex;gap:8px;align-items:center">
                    <img src="${avUrl}" alt="${r.user}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
                    <div><div class="rv-name" style="font-weight:700;font-size:14px">${r.user}</div><div class="stars" style="font-size:11px;color:#facc15">${starsT(r.rating)}</div></div>
                </div>
                <span class="rv-date" style="font-size:11px;color:var(--muted)">${r.date}</span>
            </div>
            <p style="font-size:13px;color:var(--text);margin:8px 0;line-height:1.5">${r.text}</p>
            ${imgUrl ? `<img src="${imgUrl}" alt="review photo" style="width:80px;height:80px;object-fit:cover;border-radius:10px;border:1px solid var(--border);cursor:zoom-in" loading="lazy" onclick="window.open('${imgUrl}','_blank')" onerror="this.style.display='none'">` : ''}
        </div>`;
    }).join('');
    const recHtml = recs.length ? `
        <div style="margin-top:24px;border-top:2px solid var(--border);padding-top:18px">
            <div style="font-size:15px;font-weight:800;margin-bottom:14px;color:var(--text)">👟 Recommended for You</div>
            <div style="display:flex;gap:14px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none" class="no-scroll">
                ${recs.map(r=>`<div onclick="FR.closeQV();setTimeout(()=>FR.openQV(${r.id}),100)" style="flex-shrink:0;width:120px;cursor:pointer;text-align:center;background:var(--w);padding:10px;border-radius:12px;border:1px solid var(--border);transition:var(--tr)" onmouseover="this.style.borderColor='var(--g)'" onmouseout="this.style.borderColor='var(--border)'">
                    <div style="height:80px;display:flex;align-items:center;justify-content:center;margin-bottom:8px">
                        <img src="${r.img}" alt="${r.name}" style="max-width:100%;max-height:100%;object-fit:contain" loading="lazy">
                    </div>
                    <div style="font-size:11px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:2px">${r.name}</div>
                    <div style="font-size:12px;font-weight:800;color:var(--g)">$${r.price}</div>
                </div>`).join('')}
            </div>
        </div>` : '';
    $('qv-inner').innerHTML = `
        <button class="qv-close" onclick="FR.closeQV()">✕</button>
        <div class="qv-img">
            <div class="qv-disc-badge">-${p.disc}%</div>
            <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="qv-info">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--g);letter-spacing:.08em">${p.cat} · ${p.brand}</div>
            <h2 style="font-size:24px;font-weight:800;line-height:1.2;margin:4px 0 8px">${p.name}</h2>
            <div class="pc-stars" style="margin-bottom:12px">${starsHtml(p.rating, p.reviews)}</div>
            <div class="qv-price-row" style="margin-bottom:16px">
                <span class="qv-price" style="font-size:26px;font-weight:900">$${p.price}</span>
                <span class="qv-orig" style="text-decoration:line-through;color:var(--muted);margin-left:8px">$${p.orig}</span>
                <span class="qv-save" style="background:var(--gl);color:var(--g);padding:4px 10px;border-radius:6px;font-size:12px;font-weight:700;margin-left:auto">Save $${p.orig - p.price}!</span>
            </div>
            <p style="color:var(--muted);font-size:14px;line-height:1.7;margin-bottom:20px">Experience ultimate performance with the ${p.name}. Featuring premium materials and signature ${p.brand} technology, this ${p.cat.toLowerCase()} shoe delivers exceptional comfort and style for any occasion.</p>
            <div style="margin-bottom:20px">
                <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px">Select Size (US)</div>
                <div class="chip-grid" id="qv-sizes" style="display:flex;flex-wrap:wrap;gap:8px">${[7,7.5,8,8.5,9,9.5,10,10.5,11,12].map(s=>`<div class="chip" onclick="FR.selSz(this,${s})" style="padding:10px 14px;border:1px solid var(--border);border-radius:10px;cursor:pointer;font-weight:700;font-size:13px">${s}</div>`).join('')}</div>
            </div>
            <div class="trust-row" style="display:flex;gap:16px;margin-bottom:24px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:14px 0">
                <div class="trust-item" style="font-size:11px;display:flex;flex-direction:column;align-items:center;gap:4px;flex:1"><i class="fa-solid fa-truck" style="font-size:16px;color:var(--g)"></i><span>Free Delivery</span></div>
                <div class="trust-item" style="font-size:11px;display:flex;flex-direction:column;align-items:center;gap:4px;flex:1"><i class="fa-solid fa-rotate-left" style="font-size:16px;color:var(--g)"></i><span>30d Returns</span></div>
                <div class="trust-item" style="font-size:11px;display:flex;flex-direction:column;align-items:center;gap:4px;flex:1"><i class="fa-solid fa-shield-halved" style="font-size:16px;color:var(--g)"></i><span>100% Original</span></div>
            </div>
            <div class="qv-btns" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
                <button class="btn btn-g btn-full" onclick="FR.addBag(${id})" style="padding:14px;border-radius:12px;font-weight:700"><i class="fa-solid fa-bag-shopping"></i> Add to Bag</button>
                <button class="btn btn-o btn-full" onclick="FR.buyNow(${id})" style="padding:14px;border-radius:12px;font-weight:700"><i class="fa-solid fa-bolt"></i> Buy Now</button>
            </div>
            
            <div style="margin-top:24px;border-top:2px solid var(--border);padding-top:18px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
                    <div style="font-size:15px;font-weight:800;color:var(--text)">⭐ Customer Reviews (${p.reviews})</div>
                    <button class="btn btn-line btn-sm" style="font-size:11px;padding:6px 12px">View All</button>
                </div>
                <div style="max-height:400px;overflow-y:auto;padding-right:8px" class="custom-scroll">
                    ${rvHtml}
                </div>
            </div>
            
            ${recHtml}
        </div>`;
    $('qv-ov').classList.add('open');
},
closeQV() { $('qv-ov').classList.remove('open'); },
selSz(el, sz) {
    document.querySelectorAll('#qv-sizes .chip').forEach(c=>c.classList.remove('on'));
    el.classList.add('on'); S.buyNowSize = sz;
},

// ── GLOBAL SEARCH ─────────────────────────────────────
gSearch(q, immediate) {
    if (q.length < 1 && !immediate) return;
    $('s-inp') && ($('s-inp').value = q);
    FR.go('search', q);
},

// ── TOAST ─────────────────────────────────────────────
toast(msg) {
    document.querySelectorAll('.toast').forEach(t=>t.remove());
    const t = document.createElement('div');
    t.className = 'toast'; t.innerHTML = msg;
    document.body.appendChild(t);
    setTimeout(()=>{ t.style.opacity='0'; t.style.transition='opacity .4s'; setTimeout(()=>t.remove(),500); }, 2800);
},

subscribe() {
    const v = $('nl-email')?.value;
    if(v && v.includes('@')) FR.toast('🎉 Subscribed! Check your email for 15% off.');
    else FR.toast('Enter a valid email address.');
},

renderCatalog() { renderCatalogProducts(); }
};

// ════════════════════════════════════ HOME RENDER
function renderHome() {
    // Categories
    $('cat-grid').innerHTML = DB_CATS.map(c=>`
        <div class="cat-card" onclick="FR.go('catalog','${c.name}')">
            <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="console.warn('Category image failed to load:', '${c.name}', this.src)">
            <div class="cat-lbl">${c.name}<div class="cat-count">${DB_PRODUCTS.filter(p=>p.cat===c.name).length} styles</div></div>
        </div>`).join('');
    console.log('📌 Category images loaded:', DB_CATS.map(c=>c.img.slice(0,80)));

    // Trending (top rated products)
    const trending = [...DB_PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,8);
    $('trend-grid').innerHTML = trending.map(p=>pcardHtml(p)).join('');
    console.log('📌 Sample trending product images:', trending.slice(0,3).map(p=>p.img.slice(0,80)));

    // Brands
    $('brand-strip').innerHTML = BRANDS.map(b=>`
        <div class="brand-pill" onclick="FR.go('catalog','brand:${b.name}')">
            <div class="b-dot" style="background:${b.color}">${b.abbr}</div>
            ${b.name}
        </div>`).join('');

    // Flash sale (most discounted)
    const flash = [...DB_PRODUCTS].sort((a,b)=>b.disc-a.disc).slice(0,8);
    $('flash-grid').innerHTML = flash.map(p=>pcardHtml(p)).join('');
    console.log('📌 Sample flash product images:', flash.slice(0,3).map(p=>p.img.slice(0,80)));

    // Countdown
    startCountdown();
}

function startCountdown() {
    const target = new Date(); target.setHours(target.getHours()+5, 0, 0, 0);
    const el = $('countdown');
    if (!el) return;
    const tick = () => {
        const diff = target - Date.now();
        if (diff <= 0) { el.textContent = 'ENDED'; return; }
        const h = String(Math.floor(diff/3600000)).padStart(2,'0');
        const m = String(Math.floor(diff%3600000/60000)).padStart(2,'0');
        const s = String(Math.floor(diff%60000/1000)).padStart(2,'0');
        el.textContent = `${h}:${m}:${s}`;
    };
    tick();
    setInterval(tick, 1000);
}

// ════════════════════════════════════ CATALOG PAGE
function renderCatalogPage(arg) {
    // arg = 'all' | 'trending' | 'Running' | 'brand:Nike' | undefined
    S.catalog.mode  = arg || 'all';
    S.catalog.page  = 1;
    S.catalog.filter = '';
    // Hero title
    let title = 'All Shoes', sub = `Explore our full collection of ${DB_PRODUCTS.length}+ premium shoes`;
    if (arg === 'trending') { title = '🔥 Trending Now'; sub = 'Highest-rated, most-wanted shoes right now'; }
    else if (arg && arg.startsWith('brand:')) { const b = arg.split(':')[1]; title = b; sub = `Shop all ${b} shoes`; }
    else if (arg && arg !== 'all') { title = arg; sub = `${DB_PRODUCTS.filter(p=>p.cat===arg).length} styles available`; }
    $('cat-title-h').textContent = title;
    $('cat-title-sub').textContent = sub;

    // Quick filter pills
    const modes = ['All', ...CATS, ...BRANDS.slice(0,5).map(b=>b.name)];
    $('toolbar-in').innerHTML = modes.map(m=>`
        <div class="filter-pill ${(m==='All'&&(arg==='all'||!arg))||m===arg?'on':''}" onclick="FR.go('catalog','${m==='All'?'all':m}')">${m}</div>
    `).join('');

    renderSideFilters('side-filters');
    renderCatalogProducts();
}

function renderCatalogProducts() {
    let list;
    const mode = S.catalog.mode;
    if (mode === 'trending') {
        list = [...DB_PRODUCTS].sort((a,b)=>b.rating-a.rating);
    } else if (mode && mode.startsWith('brand:')) {
        const br = mode.split(':')[1];
        list = DB_PRODUCTS.filter(p=>p.brand===br);
    } else if (mode && mode !== 'all' && CATS.includes(mode)) {
        list = DB_PRODUCTS.filter(p=>p.cat===mode);
        // Also check if it's a brand
    } else if (mode && mode !== 'all' && BRANDS.find(b=>b.name===mode)) {
        list = DB_PRODUCTS.filter(p=>p.brand===mode);
    } else {
        list = [...DB_PRODUCTS];
    }

    // Apply sidebar filters
    if (S.catalog.filter) list = list.filter(p=>p.name.toLowerCase().includes(S.catalog.filter)||p.brand.toLowerCase().includes(S.catalog.filter));
    const catF = [...document.querySelectorAll('#side-filters .fc input[data-type=cat]:checked')].map(i=>i.value);
    const brF  = [...document.querySelectorAll('#side-filters .fc input[data-type=brand]:checked')].map(i=>i.value);
    const coF  = [...document.querySelectorAll('#side-filters .fc input[data-type=color]:checked')].map(i=>i.value);
    const prF  = +($('sf-price')?.value||800);
    if(catF.length)  list = list.filter(p=>catF.includes(p.cat));
    if(brF.length)   list = list.filter(p=>brF.includes(p.brand));
    if(coF.length)   list = list.filter(p=>coF.includes(p.color));
    list = list.filter(p=>p.price<=prF);

    const sort = $('cat-sort')?.value||'latest';
    if(sort==='low')     list.sort((a,b)=>a.price-b.price);
    if(sort==='high')    list.sort((a,b)=>b.price-a.price);
    if(sort==='popular') list.sort((a,b)=>b.rating-a.rating);

    const shown = list.slice(0, S.catalog.page * S.catalog.perPage);
    $('cat-count').textContent = `Showing ${shown.length} of ${list.length} products`;
    $('cat-products').innerHTML = shown.length
        ? shown.map(p=>pcardHtml(p)).join('')
        : `<div class="empty" style="grid-column:1/-1"><i class="fa-solid fa-shoe-prints"></i><h3>No products found</h3><p>Try adjusting filters.</p></div>`;
    const lmb = $('load-more-btn');
    const lmw = $('load-more-wrap');
    if(lmb && lmw) lmw.style.display = shown.length < list.length ? 'block' : 'none';
    window._catalogList = list; // store for load more
}

FR.loadMore = () => {
    S.catalog.page++;
    renderCatalogProducts();
};

function renderSideFilters(targetId) {
    const el = $(targetId);
    if (!el) return;
    el.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
            <h3 style="font-size:16px;font-weight:800">Filters</h3>
            <button class="btn-ghost btn-sm" onclick="clearF(this,'${targetId}')">Clear All</button>
        </div>
        <div class="sfg"><h4>Category</h4>${CATS.map(c=>`<label class="fc"><input type="checkbox" data-type="cat" value="${c}" onchange="FR.renderCatalog()"> ${c} <span style="color:var(--muted);font-size:11px">(${DB_PRODUCTS.filter(p=>p.cat===c).length})</span></label>`).join('')}</div>
        <div class="sfg"><h4>Brand</h4>${BRANDS.map(b=>`<label class="fc"><input type="checkbox" data-type="brand" value="${b.name}" onchange="FR.renderCatalog()"> ${b.name}</label>`).join('')}</div>
        <div class="sfg"><h4>Color</h4>${COLORS.map(c=>`<label class="fc" style="display:flex;align-items:center;gap:8px"><input type="checkbox" data-type="color" value="${c.name}" onchange="FR.renderCatalog()"><span style="width:14px;height:14px;border-radius:50%;background:${c.hex};border:1px solid #ccc"></span> ${c.name}</label>`).join('')}</div>
        <div class="sfg"><h4>Max Price: <strong id="sf-price-lbl">$800</strong></h4>
            <input type="range" class="range-sl" id="sf-price" min="50" max="800" value="800" oninput="$('sf-price-lbl').textContent='$'+this.value;FR.renderCatalog()">
        </div>
        <div class="sfg"><h4>Size (US)</h4>
            <div class="chip-grid">${[6,7,8,9,10,11,12].map(s=>`<div class="chip" onclick="this.classList.toggle('on');FR.renderCatalog()">${s}</div>`).join('')}</div>
        </div>`;
}

window.clearF = (btn, tid) => { $(tid)?.querySelectorAll('input').forEach(i=>i.checked=false); FR.renderCatalog&&FR.renderCatalog(); renderSearch&&renderSearch(); };

// ════════════════════════════════════ SEARCH
function renderSearch(q) {
    if (q !== undefined && $('s-inp')) $('s-inp').value = q;
    const query = ($('s-inp')?.value||'').toLowerCase();
    const sort  = $('s-sort')?.value||'latest';

    let list = DB_PRODUCTS.filter(p=>{
        const qm = !query || p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query);
        const bm = S.filters.brands.length===0 || S.filters.brands.includes(p.brand);
        const cm = S.filters.cats.length===0   || S.filters.cats.includes(p.cat);
        return qm && bm && cm && p.price <= S.filters.maxPrice;
    });
    if(sort==='low')     list.sort((a,b)=>a.price-b.price);
    if(sort==='high')    list.sort((a,b)=>b.price-a.price);
    if(sort==='popular') list.sort((a,b)=>b.rating-a.rating);

    $('s-cnt').textContent = `${list.length} products`;
    $('s-grid').innerHTML = list.length
        ? list.slice(0,48).map(p=>pcardHtml(p)).join('')
        : `<div class="empty" style="grid-column:1/-1"><i class="fa-solid fa-shoe-prints"></i><h3>No results</h3><p>Try different keywords.</p></div>`;

    $('s-filters').innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
            <h3 style="font-size:16px;font-weight:800">Filters</h3>
            <button class="btn-ghost btn-sm" onclick="S.filters={brands:[],cats:[],maxPrice:800,sizes:[]};renderSearch()">Clear</button>
        </div>
        <div class="sfg"><h4>Category</h4>${CATS.map(c=>`<label class="fc"><input type="checkbox" ${S.filters.cats.includes(c)?'checked':''} onchange="tCat('${c}')"> ${c}</label>`).join('')}</div>
        <div class="sfg"><h4>Brand</h4>${BRANDS.map(b=>`<label class="fc"><input type="checkbox" ${S.filters.brands.includes(b.name)?'checked':''} onchange="tBrand('${b.name}')"> ${b.name}</label>`).join('')}</div>
        <div class="sfg"><h4>Max Price: <strong id="sp-lbl">$${S.filters.maxPrice}</strong></h4>
            <input type="range" class="range-sl" min="50" max="800" value="${S.filters.maxPrice}" oninput="S.filters.maxPrice=+this.value;$('sp-lbl').textContent='$'+this.value;renderSearch()">
        </div>`;
}

window.tBrand = b => { const i=S.filters.brands.indexOf(b); i>-1?S.filters.brands.splice(i,1):S.filters.brands.push(b); renderSearch(); };
window.tCat   = c => { const i=S.filters.cats.indexOf(c);   i>-1?S.filters.cats.splice(i,1):S.filters.cats.push(c);   renderSearch(); };

// ════════════════════════════════════ PRODUCT CARD
function pcardHtml(p) {
    if (!p) return '';
    const liked = S.wishlist.has(p.id);
    const isNew = p.id % 7 === 0;
    return `
<div class="pc" onclick="FR.openQV(${p.id})">
    <div class="pc-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;console.warn('Shoe image failed – fallback used for', this.alt, this.src);this.src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600';this.classList.add('error')">
        <button class="pc-wish ${liked?'liked':''}" id="wbtn-${p.id}" onclick="event.stopPropagation();FR.toggleWish(${p.id},this)">
            <i class="fa-${liked?'solid':'regular'} fa-heart"></i>
        </button>
        <div class="pc-disc">-${p.disc}%</div>
        ${isNew ? '<div class="pc-badge">NEW</div>' : ''}
        <div class="pc-qv"><i class="fa-solid fa-eye"></i> Quick View</div>
    </div>
    <div class="pc-body">
        <div class="pc-cat">${p.cat}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-brand">${p.brand}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
            <span style="width:12px;height:12px;border-radius:50%;background:${p.colorHex};display:inline-block;border:1px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.1)"></span>
            <span style="font-size:12px;color:var(--muted)">${p.color || 'Multi'}</span>
        </div>
        <div class="pc-stars">${starsHtml(p.rating,null)} <span style="font-size:11px">(${p.reviews})</span></div>
        <div class="pc-pr-row">
            <div><span class="pc-price">$${p.price}</span><span class="orig">$${p.orig}</span></div>
            <button class="btn btn-g pc-add" onclick="event.stopPropagation();FR.addBag(${p.id})">+ Bag</button>
        </div>
    </div>
</div>`;
}

// ════════════════════════════════════ CART
function updateBadges() {
    const n = S.cart.reduce((s,i)=>s+i.qty,0);
    [$('cart-badge'),$('bnav-b')].forEach(b=>{if(b){b.textContent=n;b.style.display=n>0?'flex':'none';}});
}

function renderCart() {
    const el = $('cart-content');
    if (!S.cart.length) {
        el.innerHTML=`<div class="empty" style="grid-column:span 2"><i class="fa-solid fa-bag-shopping"></i><h3>Your bag is empty</h3><p>Discover 200+ premium shoes from top brands.</p><button class="btn btn-g" onclick="FR.go('catalog','all')">Shop Now</button></div>`;
        return;
    }
    const sub = S.cart.reduce((s,i)=>s+i.p.price*i.qty,0);
    const tax = Math.round(sub*0.05);
    el.innerHTML=`
    <div>
        ${S.cart.map((item,idx)=>`
        <div class="ci">
            <div class="ci-img"><img src="${item.p.img}" alt="${item.p.name}"></div>
            <div>
                <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--g)">${item.p.brand}</div>
                <div style="font-size:15px;font-weight:700;margin:3px 0">${item.p.name}</div>
                <div style="font-size:12px;color:var(--muted)">Size: US ${item.size} · ${item.p.cat}</div>
                <div class="qr">
                    <button class="qb" onclick="chQ(${idx},-1)">−</button>
                    <span style="font-weight:700;min-width:22px;text-align:center">${item.qty}</span>
                    <button class="qb" onclick="chQ(${idx},1)">+</button>
                </div>
                <div style="display:flex;gap:14px;margin-top:8px">
                    <button class="btn-ghost" style="font-size:12px;color:var(--g);padding:4px 0" onclick="FR.toggleWish(${item.p.id},null)">💚 Wishlist</button>
                    <button class="btn-ghost" style="font-size:12px;color:var(--red);padding:4px 0" onclick="rmCart(${idx})">Remove</button>
                </div>
            </div>
            <div style="font-size:18px;font-weight:800;white-space:nowrap">$${item.p.price*item.qty}</div>
        </div>`).join('')}
    </div>
    <div>
        <div class="cart-sum">
            <h3 style="font-size:17px;font-weight:700;margin-bottom:18px">Order Summary</h3>
            <div class="sum-r"><span>Subtotal (${S.cart.reduce((s,i)=>s+i.qty,0)} items)</span><span>$${sub}</span></div>
            <div class="sum-r"><span>Delivery</span><span style="color:var(--g);font-weight:600">FREE</span></div>
            <div class="sum-r"><span>Tax (5%)</span><span>$${tax}</span></div>
            <div style="display:flex;gap:8px;margin:14px 0">
                <input type="text" class="pi" style="margin:0" placeholder="Coupon code" id="cpn">
                <button class="btn btn-line btn-sm" onclick="apCpn()">Apply</button>
            </div>
            <div class="sum-tot"><span>Total</span><span style="color:var(--g)">$${sub+tax}</span></div>
            <button class="btn btn-g btn-full" style="margin-top:18px" onclick="cartCheckout()">Checkout →</button>
            <div style="display:flex;justify-content:center;gap:14px;margin-top:14px;color:var(--muted);font-size:12px">
                <span><i class="fa-solid fa-lock"></i> Secure</span>
                <i class="fa-brands fa-cc-visa" style="font-size:18px;color:#1a1f71"></i>
                <i class="fa-brands fa-cc-mastercard" style="font-size:18px;color:#eb001b"></i>
            </div>
        </div>
    </div>`;
}

window.chQ     = (idx,d) => { S.cart[idx].qty+=d; if(S.cart[idx].qty<1)S.cart.splice(idx,1); updateBadges(); renderCart(); };
window.rmCart  = idx => { S.cart.splice(idx,1); updateBadges(); renderCart(); };
window.apCpn   = () => { const c=$('cpn')?.value?.toUpperCase(); if(c==='RUSH15') FR.toast('🎉 15% discount applied!'); else FR.toast('Invalid. Try RUSH15'); };
window.cartCheckout = () => { if(!S.cart.length)return; S.checkoutItems=[...S.cart]; FR.go('payment'); };

// ════════════════════════════════════ PAYMENT
function renderPayment() {
    const el = $('payment-pg');
    const items = S.checkoutItems.length ? S.checkoutItems : S.cart;
    if (!items.length) { FR.go('cart'); return; }
    const sub = items.reduce((s,i)=>s+i.p.price*i.qty,0);
    const tax = Math.round(sub*0.05);
    el.innerHTML=`
    <h2 style="margin-bottom:28px">Secure Checkout</h2>
    <div class="pay-grid">
        <div>
            <div class="pay-card">
                <h3><i class="fa-solid fa-location-dot"></i> Delivery Address</h3>
                <div class="pi-row"><input class="pi" placeholder="First Name" value="${S.user?.name||''}"><input class="pi" placeholder="Last Name"></div>
                <input class="pi" placeholder="Street Address / Building">
                <div class="pi-row"><input class="pi" placeholder="City"><input class="pi" placeholder="State / Province"></div>
                <div class="pi-row"><input class="pi" placeholder="PIN / ZIP Code"><select class="pi" style="cursor:pointer"><option>India 🇮🇳</option><option>USA 🇺🇸</option><option>UK 🇬🇧</option><option>UAE 🇦🇪</option><option>Singapore 🇸🇬</option></select></div>
                <input class="pi" type="tel" placeholder="Mobile Number">
            </div>
            <div class="pay-card">
                <h3><i class="fa-solid fa-credit-card"></i> Payment Method</h3>
                <div class="pm on" onclick="selPM(this,'card')"><span class="pm-icon"><i class="fa-solid fa-credit-card" style="color:#2563eb"></i></span><div><div class="pm-lbl">Credit / Debit Card</div><div class="pm-sub">Visa, Mastercard, RuPay, Amex</div></div><i class="fa-solid fa-circle-check" style="margin-left:auto;color:var(--g);display:none" id="pmi-card"></i></div>
                <div id="card-f" style="padding:4px 0 8px">
                    <input class="pi" placeholder="Card Number" maxlength="19" oninput="fmtCard(this)">
                    <div class="pi-row"><input class="pi" placeholder="MM / YY" maxlength="7"><input class="pi" placeholder="CVV" maxlength="3"></div>
                    <input class="pi" placeholder="Name on Card">
                </div>
                <div class="pm" onclick="selPM(this,'upi')"><span class="pm-icon">📱</span><div><div class="pm-lbl">UPI</div><div class="pm-sub">PhonePe · GPay · Paytm · BHIM</div></div></div>
                <div class="pm" onclick="selPM(this,'wallet')"><span class="pm-icon">👛</span><div><div class="pm-lbl">Wallets</div><div class="pm-sub">Amazon Pay · Mobikwik · Airtel</div></div></div>
                <div class="pm" onclick="selPM(this,'cod')"><span class="pm-icon">💵</span><div><div class="pm-lbl">Cash on Delivery</div><div class="pm-sub">Pay when you receive your order</div></div></div>
                <div class="pm" onclick="selPM(this,'emi')"><span class="pm-icon">📅</span><div><div class="pm-lbl">No-Cost EMI</div><div class="pm-sub">0% interest · 3, 6, 12 months</div></div></div>
            </div>
        </div>
        <div>
            <div class="ord-sum">
                <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;border-bottom:1px solid var(--border);padding-bottom:12px">Order Summary</h3>
                ${items.map(i=>`
                <div style="display:flex;gap:12px;align-items:center;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid var(--border)">
                    <div style="background:var(--bg);border-radius:8px;padding:6px;flex-shrink:0"><img src="${i.p.img}" width="56" style="object-fit:contain"></div>
                    <div style="flex:1;min-width:0"><div style="font-weight:700;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.p.name}</div><div style="font-size:11px;color:var(--muted)">Size ${i.size} · Qty ${i.qty}</div></div>
                    <div style="font-weight:700;font-size:14px;flex-shrink:0">$${i.p.price*i.qty}</div>
                </div>`).join('')}
                <div class="sum-r"><span>Subtotal</span><span>$${sub}</span></div>
                <div class="sum-r"><span>Delivery</span><span style="color:var(--g);font-weight:600">FREE</span></div>
                <div class="sum-r"><span>Tax 5%</span><span>$${tax}</span></div>
                <div class="sum-tot"><span>Total</span><span style="color:var(--g)">$${sub+tax}</span></div>
                <button class="btn btn-g btn-full" style="margin-top:18px;font-size:16px;padding:15px" onclick="placeOrder()"><i class="fa-solid fa-lock"></i> Place Order Securely</button>
                <div style="display:flex;justify-content:center;gap:12px;margin-top:14px;flex-wrap:wrap">
                    <span style="font-size:11px;color:var(--muted)"><i class="fa-solid fa-shield-halved" style="color:var(--g)"></i> 256-bit SSL</span>
                    <i class="fa-brands fa-cc-visa" style="font-size:20px;color:#1a1f71"></i>
                    <i class="fa-brands fa-cc-mastercard" style="font-size:20px;color:#eb001b"></i>
                    <i class="fa-brands fa-cc-paypal" style="font-size:20px;color:#003087"></i>
                    <i class="fa-brands fa-apple-pay" style="font-size:20px;color:var(--text)"></i>
                </div>
            </div>
        </div>
    </div>`;
}

window.selPM = (el, type) => {
    document.querySelectorAll('.pm').forEach(o=>o.classList.remove('on'));
    el.classList.add('on');
    const cf = $('card-f');
    if(cf) cf.style.display = type==='card' ? 'block' : 'none';
};
window.fmtCard = inp => { let v=inp.value.replace(/\D/g,'').substr(0,16); inp.value=v.replace(/(.{4})/g,'$1 ').trim(); };
window.placeOrder = () => {
    const items = S.checkoutItems.length ? S.checkoutItems : S.cart;
    if (!items.length) return;
    S.orders.unshift({
        id:`FR-${Math.floor(Math.random()*9000+1000)}`,
        date:'March 24, 2026', status:'Confirmed', pay:'Paid',
        items: items.map(i=>({...i})),
        timeline:['ordered']
    });
    S.cart=[]; S.checkoutItems=[]; updateBadges();
    FR.toast('🎉 Order placed! Estimated delivery: 3-5 days');
    FR.go('orders');
};

// ════════════════════════════════════ ORDERS
function renderOrders() {
    const el = $('ord-list');
    if (!S.orders.length) {
        el.innerHTML=`<div class="empty"><i class="fa-solid fa-box-open"></i><h3>No orders yet</h3><p>Place your first order and track it here.</p><button class="btn btn-g" onclick="FR.go('catalog','all')">Start Shopping</button></div>`;
        return;
    }
    const stps=['ordered','packed','shipped','outForDelivery','delivered'];
    const lbls=['Ordered','Packed','Shipped','Out for Delivery','Delivered'];
    const ics =['check','box-archive','truck','house','circle-check'];
    el.innerHTML = S.orders.map((o,oi)=>{
        const tl = stps.map((s,si)=>{
            const done=o.timeline.includes(s), cur=s===o.timeline[o.timeline.length-1];
            return `<div class="ts ${done?'done':''} ${cur?'cur':''}"><div class="td"><i class="fa-solid fa-${ics[si]}"></i></div><div class="tl-l">${lbls[si]}</div></div>`;
        }).join('');
        return `
        <div class="oc">
            <div class="oc-hd">
                <div><div style="font-size:12px;color:var(--muted);margin-bottom:3px">Order #${o.id} · ${o.date}</div><div style="font-size:16px;font-weight:700">Payment: ${o.pay}</div></div>
                <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
                    <span class="sb">${o.status}</span>
                    <button class="btn btn-line btn-sm" onclick="cancelOrd(${oi})">Cancel</button>
                    <button class="btn btn-sm" style="background:rgba(46,139,46,.1);color:var(--g)" onclick="FR.toast('Invoice downloading…')"><i class="fa-solid fa-download"></i> Invoice</button>
                </div>
            </div>
            <div class="tl">${tl}</div>
            <div style="display:flex;gap:14px;flex-wrap:wrap;border-top:1px solid var(--border);padding-top:14px">
                ${o.items.slice(0,3).map(i=>`<div style="display:flex;gap:10px;align-items:center"><div style="background:var(--bg);border-radius:10px;padding:6px;flex-shrink:0"><img src="${i.p.img}" width="60" style="object-fit:contain"></div><div><div style="font-weight:700;font-size:13px">${i.p.name}</div><div style="font-size:12px;color:var(--muted)">$${i.p.price} · Qty ${i.qty}</div></div></div>`).join('')}
            </div>
        </div>`;
    }).join('');
}
window.cancelOrd = idx => { if(confirm('Cancel this order?')){S.orders[idx].status='Cancelled';renderOrders();FR.toast('Order cancelled.');} };

// ════════════════════════════════════ PROFILE
function renderProfile() {
    const u = S.user;
    $('pro-side').innerHTML=`
        <div class="pro-av">${u?.name?.[0]?.toUpperCase()||'U'}</div>
        <div class="pro-n">${u?.name||'Guest'}</div>
        <div class="pro-e">${u?.email||''}</div>
        <button class="sl on" onclick="showSec('settings')"><i class="fa-solid fa-pen-to-square"></i> Edit Profile</button>
        <button class="sl" onclick="showSec('addresses')"><i class="fa-solid fa-location-dot"></i> Addresses</button>
        <button class="sl" onclick="showSec('payments')"><i class="fa-solid fa-credit-card"></i> Payment Methods</button>
        <button class="sl" onclick="FR.go('wishlist')"><i class="fa-solid fa-heart"></i> Wishlist (${S.wishlist.size})</button>
        <button class="sl" onclick="FR.go('orders')"><i class="fa-solid fa-box"></i> My Orders (${S.orders.length})</button>
        <button class="sl" onclick="showSec('faq')"><i class="fa-solid fa-circle-question"></i> FAQ</button>
        <button class="sl" onclick="FR.go('catalog','all')"><i class="fa-solid fa-bag-shopping"></i> Shop Now</button>
        <button class="sl red" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i> Logout</button>`;
    showSec('settings');
}

window.showSec = s => {
    document.querySelectorAll('.sl').forEach(b=>b.classList.remove('on'));
    document.querySelector(`.sl[onclick="showSec('${s}')"]`)?.classList.add('on');
    const u = S.user, c = $('pro-cont');
    switch(s){
        case 'settings': c.innerHTML=`<div class="pro-card"><h3 style="font-size:18px;font-weight:800;margin-bottom:22px">Account Settings</h3><form onsubmit="event.preventDefault();FR.toast('✅ Profile saved!')"><div class="fl2"><div class="fl"><label>First Name</label><input value="${u?.name||''}"></div><div class="fl"><label>Last Name</label><input placeholder="Last Name"></div></div><div class="fl"><label>Email</label><input type="email" value="${u?.email||''}" readonly style="color:var(--muted)"></div><div class="fl"><label>Phone</label><input type="tel" placeholder="+91 00000 00000"></div><div class="fl"><label>Date of Birth</label><input type="date"></div><div class="fl"><label>Shoe Size (US)</label><select>${[6,7,8,9,10,11,12].map(s=>`<option>${s}</option>`).join('')}</select></div><button type="button" class="btn btn-g" onclick="window.saveProfileData()">Save Changes</button></form></div>`; break;
        case 'addresses': c.innerHTML=`<div class="pro-card"><h3 style="font-size:18px;font-weight:800;margin-bottom:22px">Saved Addresses</h3><div style="border:2px solid var(--g);border-radius:14px;padding:18px;margin-bottom:14px;background:rgba(46,139,46,.04)"><div style="font-weight:700;margin-bottom:6px">🏠 Home <span style="font-size:11px;background:var(--g);color:#fff;padding:2px 10px;border-radius:99px;margin-left:8px">Default</span></div><div style="font-size:14px;color:var(--muted)">123 Main Street, Chennai, Tamil Nadu 600001</div><div style="display:flex;gap:10px;margin-top:12px"><button class="btn btn-line btn-sm" onclick="FR.toast('Edit address — coming soon!')">Edit</button><button class="btn-ghost btn-sm" style="color:var(--red)">Delete</button></div></div><button class="btn btn-line" style="margin-top:4px" onclick="window.addNewAddress()"><i class="fa-solid fa-plus"></i> Add New Address</button></div>`; break;
        case 'payments': c.innerHTML=`<div class="pro-card"><h3 style="font-size:18px;font-weight:800;margin-bottom:22px">Payment Methods</h3><div style="border:1.5px solid var(--border);border-radius:12px;padding:16px;margin-bottom:14px;display:flex;align-items:center;gap:14px"><i class="fa-brands fa-cc-visa" style="font-size:38px;color:#1a1f71"></i><div><div style="font-weight:700">Visa •••• 4242</div><div style="font-size:12px;color:var(--muted)">Expires 12/27</div></div><span style="margin-left:auto;background:var(--g);color:#fff;font-size:11px;padding:3px 10px;border-radius:99px">Primary</span></div><button class="btn btn-line" onclick="window.addNewCard()"><i class="fa-solid fa-plus"></i> Add New Card</button></div>`; break;
        case 'faq': c.innerHTML=`<div class="pro-card"><h3 style="font-size:18px;font-weight:800;margin-bottom:22px">FAQ</h3>${[['What is your return policy?','30-day free returns on all unworn items in original packaging. No questions asked.'],['How do I track my order?','Go to My Orders for live tracking with our visual timeline.'],['Coupon codes?','Try RUSH15 at checkout for 15% off any order.'],['Do you ship internationally?','Yes! We ship to 50+ countries. Shipping rates may vary.'],['Payment security?','All transactions are 256-bit SSL encrypted. Your card data is never stored.'],['How to select the right size?','Check our size guide in each product. We recommend going half a size up for running shoes.']].map(([q,a])=>`<details style="border-bottom:1px solid var(--border);padding:15px 0"><summary style="font-weight:600;cursor:pointer;list-style:none;font-size:15px;display:flex;justify-content:space-between">${q} <i class="fa-solid fa-chevron-down" style="font-size:12px;color:var(--muted)"></i></summary><p style="color:var(--muted);margin-top:10px;font-size:14px;line-height:1.7">${a}</p></details>`).join('')}</div>`; break;
    }
};

window.logout = () => { S.user=null; FR.go('auth'); };

// ════════════════════════════════════ WISHLIST (FIXED)
function renderWishlist() {
    const wg = $('wish-grid');
    const wc = $('wish-count');
    if(wc) wc.textContent = S.wishlist.size > 0 ? `${S.wishlist.size} items` : '';
    if (!S.wishlist.size) {
        wg.innerHTML=`<div class="empty" style="grid-column:1/-1"><i class="fa-solid fa-heart"></i><h3>Your wishlist is empty</h3><p>Heart the shoes you love to save them here!</p><button class="btn btn-g" onclick="FR.go('catalog','all')">Explore Shoes</button></div>`;
        return;
    }
    // Get actual products from wishlist IDs
    const products = [...S.wishlist].map(id => DB_PRODUCTS.find(p=>p.id===id)).filter(Boolean);
    wg.innerHTML = products.map(p=>pcardHtml(p)).join('');
}

// ════════════════════════════════════ INIT
document.addEventListener('DOMContentLoaded', () => {
    // Reset page state
    document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
    $('auth-pg').classList.remove('on');
    ['top-nav','bot-nav','promo-bar','site-footer'].forEach(id=>{ const e=$(id); if(e) e.style.display='none'; });

    // Splash → auth (4 seconds)
    setTimeout(()=>{
        const sp = $('splash');
        sp.style.transition = 'opacity 1.2s ease';
        sp.style.opacity = '0';
        setTimeout(()=>{ sp.style.display='none'; FR.go('auth'); }, 1200);
    }, 4000);

    // Theme toggle
    $('theme-btn').addEventListener('click',()=>{
        S.theme = S.theme==='light'?'dark':'light';
        document.body.classList.toggle('dk');
        $('theme-btn').innerHTML = S.theme==='light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });

    // Runtime image source validation: force all product/category/review images to shoe-only Pexels.
    validateImageSources();
});

function validateImageSources() {
    const allUrls = [
        ...SHOE_IMGS,
        ...DB_CATS.map(c=>c.img),
        ...REVIEW_SHOE_IDS,
        'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=640'
    ];
    const nonPexels = allUrls.filter(u => u && !u.includes('images.pexels.com'));
    if (nonPexels.length > 0) {
        console.error('Non-shoe/non-pexels URLs found:', nonPexels);
        alert('Warning: Found non-shoe or non-pexels image URL in resources. Check console.');
    } else {
        console.info('✅ Image source check passed (all Pexels shoe links).');
        console.table({
            'SHOE_IMGS count': SHOE_IMGS.length,
            'DB_CATS count': DB_CATS.length,
            'REVIEW_SHOE_IDS count': REVIEW_SHOE_IDS.length,
            'Sample SHOE_IMGS': SHOE_IMGS.slice(0,3)
        });
    }
}

window.saveProfileData = async function(){

const phone=document.querySelector('input[type="tel"]').value;

const dob=document.querySelector('input[type="date"]').value;

const size=document.querySelector('select').value;

const profile={

email:S.user.email,

name:S.user.name,

phone:phone,

dob:dob,

size:size

};

await addDoc(
collection(db,"profiles"),
profile
);

alert("Profile saved");

}
window.addNewAddress=function(){

    const address={

    email:S.user.email,

    place:"Home",

    city:"Chennai"

    }

    saveAddress(address)

}
window.addNewCard=function(){

    const card={

    email:S.user.email,

    type:"Visa",

    number:"4242"

    }           

    saveCard(card)
    alert("working")

}