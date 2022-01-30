const nav = document.getElementById('nav');
const navBars = document.getElementById('nav-bars')
const footer = document.getElementById('footer');

nav.innerHTML =
    `<div class="d-flex nav-screen1">
        <div id="navbar">
            <img src="https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg" alt="">
        </div>
    <ul class="d-flex" id="nav-items">
        <li><a href="#">WHATSAPP WEB</a></li>
        <li><a href="#">ФУНКЦИИ</a></li>
         <li><a href="#">ЗАГРУЗИТЬ</a></li>
        <li><a href="#">БЕЗОПАСНОСТЬ</a></li>
        <li><a href="#">СПРАВОЧНЫЙ ЦЕНТР</a></li>
        <li><a href="#"><i class="fa fa-globe"></i>
            <span>RU</span>
            <i class="fa fa-sort-down"></i></a>
        </li>
    </ul>
</div>
<div id="bars"><i class="fa fa-2x fa-bars"></i></div>
<div class="nav-screen2">
    <div id="navbar2">
        <img src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg" alt="">
    </div>
</div>`;




navBars.innerHTML =
    ` <div id="nav-items-2">
<div class="d-flex" id="icons">
    <i class="fa fa-2x fa-whatsapp"></i>
    <i id="close"class="fa fa-2x fa-times"></i>
</div>
<ul>
    <li>
        <h4><a href="#">Скачать</a></h4>
    </li>
    <li>
        <h4><a href="#">Функции</a></h4>
    </li>
    <li>
        <h4><a href="#">Безопасность</a></h4>
    </li>
    <li>
        <h4><a href="#">Справочный центр</a></h4>
    </li>
    <li>
        <h4><a href="#">Контакты</a></h4>
    </li>
</ul>

    <select>
        <option value="https://www.whatsapp.com/?lang=az">azərbaycan</option>
        <option value="https://www.whatsapp.com/?lang=af">Afrikaans</option>
        <option value="https://www.whatsapp.com/?lang=id">Bahasa Indonesia</option>
        <option value="https://www.whatsapp.com/?lang=ms">Melayu</option>
        <option value="https://www.whatsapp.com/?lang=ca">català</option>
        <option value="https://www.whatsapp.com/?lang=cs">čeština</option>
        <option value="https://www.whatsapp.com/?lang=da">dansk</option>
        <option value="https://www.whatsapp.com/?lang=de">Deutsch</option>
        <option value="https://www.whatsapp.com/?lang=et">eesti</option>
        <option value="https://www.whatsapp.com/?lang=en">English</option>
        <option value="https://www.whatsapp.com/?lang=es">español</option>
        <option value="https://www.whatsapp.com/?lang=fr">français</option>
        <option value="https://www.whatsapp.com/?lang=ga">Gaeilge</option>
        <option value="https://www.whatsapp.com/?lang=hr">hrvatski</option>
        <option value="https://www.whatsapp.com/?lang=it">italiano</option>
        <option value="https://www.whatsapp.com/?lang=sw">Kiswahili</option>
        <option value="https://www.whatsapp.com/?lang=lv">latviešu</option>
        <option value="https://www.whatsapp.com/?lang=lt">lietuvių</option>
        <option value="https://www.whatsapp.com/?lang=hu">magyar</option>
        <option value="https://www.whatsapp.com/?lang=nl">Nederlands</option>
        <option value="https://www.whatsapp.com/?lang=nb">norsk bokmål</option>
        <option value="https://www.whatsapp.com/?lang=uz">o‘zbek</option>
        <option value="https://www.whatsapp.com/?lang=tl">Filipino</option>
        <option value="https://www.whatsapp.com/?lang=pl">polski</option>
        <option value="https://www.whatsapp.com/?lang=pt_br">Português (Brasil)</option>
        <option value="https://www.whatsapp.com/?lang=pt_pt">Português (Portugal)</option>
        <option value="https://www.whatsapp.com/?lang=ro">română</option>
        <option value="https://www.whatsapp.com/?lang=sq">shqip</option>
        <option value="https://www.whatsapp.com/?lang=sk">slovenčina</option>
        <option value="https://www.whatsapp.com/?lang=sl">slovenščina</option>
        <option value="https://www.whatsapp.com/?lang=fi">suomi</option>
        <option value="https://www.whatsapp.com/?lang=sv">svenska</option>
        <option value="https://www.whatsapp.com/?lang=vi">Tiếng Việt</option>
        <option value="https://www.whatsapp.com/?lang=tr">Türkçe</option>
        <option value="https://www.whatsapp.com/?lang=el">Ελληνικά</option>
        <option value="https://www.whatsapp.com/?lang=bg">български</option>
        <option value="https://www.whatsapp.com/?lang=kk">қазақ тілі</option>
        <option value="https://www.whatsapp.com/?lang=mk">македонски</option>
        <option value="https://www.whatsapp.com/?lang=ru" selected="1">русский</option>
        <option value="https://www.whatsapp.com/?lang=sr">српски</option>
        <option value="https://www.whatsapp.com/?lang=uk">українська</option>
        <option value="https://www.whatsapp.com/?lang=he">עברית</option>
        <option value="https://www.whatsapp.com/?lang=ar">العربية</option>
        <option value="https://www.whatsapp.com/?lang=fa">فارسی</option>
        <option value="https://www.whatsapp.com/?lang=ur">اردو</option>
        <option value="https://www.whatsapp.com/?lang=bn">বাংলা</option>
        <option value="https://www.whatsapp.com/?lang=hi">हिन्दी</option>
        <option value="https://www.whatsapp.com/?lang=gu">ગુજરાતી</option>
        <option value="https://www.whatsapp.com/?lang=kn">ಕನ್ನಡ</option>
        <option value="https://www.whatsapp.com/?lang=mr">मराठी</option>
        <option value="https://www.whatsapp.com/?lang=pa">ਪੰਜਾਬੀ</option>
        <option value="https://www.whatsapp.com/?lang=ta">தமிழ்</option>
        <option value="https://www.whatsapp.com/?lang=te">తెలుగు</option>
        <option value="https://www.whatsapp.com/?lang=ml">മലയാളം</option>
        <option value="https://www.whatsapp.com/?lang=th">ไทย</option>
        <option value="https://www.whatsapp.com/?lang=zh_cn">简体中文</option>
        <option value="https://www.whatsapp.com/?lang=zh_tw">繁體中文（台灣）</option>
        <option value="https://www.whatsapp.com/?lang=zh_hk">繁體中文（香港）</option>
        <option value="https://www.whatsapp.com/?lang=ja">日本語</option>
        <option value="https://www.whatsapp.com/?lang=ko">한국어</option>
    </select>

</div>`;


const barsIcon = document.getElementById('bars').firstChild;
const main =document.getElementById('main');
const xIcon = document.getElementById('close');
const minNave = [barsIcon,xIcon];

minNave.forEach(element => {
    console.log(element);
    element.addEventListener('click', e =>{
        navBars.classList.toggle("d-none");
        navBars.classList.toggle("d-block");
        nav.classList.toggle("d-none");
        main.classList.toggle("d-none");
        footer.classList.toggle("d-none");
    });
});



// ------------------------------------------------------
footer.innerHTML =
    ` <div>
<div class="d-flex footer-hed">
    <ul>
        WHATSAPP
        <li><a href="#">Функции</a></li>
        <li><a href="#">Безопасность</a></li>
        <li><a href="#">Скачать</a></li>
        <li><a href="#">WhatsApp Web</a></li>
        <li><a href="#">Business</a></li>
        <li><a href="#">Конфиденциальность</a></li>
    </ul>
    <ul>
        КОМПАНИЯ
        <li><a href="#">Сведения</a></li>
        <li><a href="#">Карьера</a></li>
        <li><a href="#">Бренд-Центр</a></li>
        <li><a href="#">Контакты</a></li>
        <li><a href="#">Блог</a></li>
        <li><a href="#">Истории успеха с WhatsApp</a></li>
    </ul>
    <ul>
        ЗАГРУЗИТЬ
        <li><a href="#">Mac/ПК</a></li>
        <li><a href="#">Android</a></li>
        <li><a href="#">iPhone</a></li>
    </ul>
    <ul>
        ПОМОЩЬ
        <li><a href="#">Справочный центр</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Коронавирус</a></li>
    </ul>
</div>
</div>
<div class="black-color">
<div class="footer-floare d-flex">
    <p>2022 © WhatsApp LLC</p>
    <a href="#">Конфиденциальность и Условия ❯</a>
</div>
</div>`;

