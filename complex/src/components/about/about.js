import React from "react";
import "./vip.sass";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {siteNameName} from "../constants/constant";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const About = ({ children }) => {

    const classes = useStyles();

    return (
        <div className='mainInfo'>
            <div className="row">
                <div className="app-up footer">
                    <div className="footer_text">
                        <h1>Дошка оголошень {siteNameName} - безкоштовні оголошення в Україні</h1>
                        <p>Бажаєте продати автомобіль, квартиру, меблі або електроніку? Найефективніше рішення для вас –
                            додати оголошення на сайт оголошень {siteNameName}.ua. {siteNameName} – дошка оголошень, що охоплює
                            всю Україну. Щодня тут шукають товари понад 100 000 користувачів з різних міст нашої країни.
                            Розкажіть їм про свою пропозицію, а ми допоможемо вам знайти клієнтів.</p>
                        <p>Головна перевага сайту – у простоті його використання. На відміну від більшості аналогічних
                            сервісів, ми не вимагаємо від користувачів обов'язковій реєстрації на сайті. Ви можете дати
                            оголошення, не створюючи облікового запису. Разом з тим, для тих, хто планує продовжувати
                            публікацію своїх оголошень, передбачений особистий кабінет з набором зручних інструментів
                            для управління своїми пропозиціями.</p>
                        <p>Дошка оголошень Besplatka.ua незамінна для тих, хто шукає товари і послуги. Постійно
                            оновлювана база сайту налічує сотні тисяч оголошень найрізноманітнішої тематики. Докладний
                            та зручний рубрикатор сайту охоплює всі сфери інтересів наших користувачів.</p>
                        <h2>Оголошення</h2>
                        <p>У розділі «Транспорт» розміщують оголошення про </p>
                        <ul>
                            <li>покупку і <a href="https://besplatka.ua/uk/transport/legkovye-avtomobili">продаж
                                легкових автомобілів</a></li>
                            <li>вантажного автотранспорту,</li>
                            <li>мотоциклів,</li>
                            <li>сільськогосподарської техніки</li>
                        </ul>
                        Тут можна знайти запчастини для автомобілів, а також знайти пропозиції щодо авторемонту.<p></p>
                        <p>Категорія «Нерухомість» включає найрізноманітніші пропозиції про
                        </p>
                        <ul>
                            <li><a href="https://besplatka.ua/uk/nedvizhimost/prodazha-kvartir">продаж квартир</a></li>
                            <li>будинків</li>
                            <li>земельних ділянок</li>
                            <li>комерційної нерухомості</li>
                            <li>інших приміщень</li>
                        </ul>
                        Тут шукають і пропонують <a href="https://besplatka.ua/uk/nedvizhimost/arenda-kvartiry">оренду
                        квартир</a>, розміщують варіанти по обміну житла.<p></p> <p>Свіжі вакансії в будь-якому місті
                        України можна знайти у розділі «<a href="https://besplatka.ua/uk/rabota">Робота</a>». Якщо ви
                        шукаєте роботу, радимо скористатися детальним рубрикатором з переліком найбільш популярних
                        професій.</p>
                        <p>Розділ «Будівництво, ремонт» незамінний для тих, хто вирішив оновити своє житло, незалежно
                            від того чи це квартира або приватний будинок. Вікна та двері, сантехніка, найрізноманітніші
                            будівельні матеріали та інструменти – все це ви знайдете на дошці оголошень {siteNameName}.ua.
                            Важливо, що на {siteNameName} можна знайти пропозиції від виробників, що гарантує вам покупку без
                            посередників та переплат.</p>
                        <p>Люди, які віддають перевагу активному способу життя, знайдуть для себе багато цікавого у
                            розділі «Спорт, відпочинок». Тут розміщуються пропозиції, що допоможуть придбати путівку на
                            відпочинок, замовити екскурсійний тур, виготовити закордонний паспорт та отримати шенгенську
                            візу. «Послуги» включають у себе пропозиції на всі випадки життя: від проведення урочистих
                            заходів та відеозйомки до послуг охоронних компаній або адвокатів. </p>
                        <p>«Дитячий світ» - світ товарів для дітей. Тут знайдуться пропозиції з продажу дитячого одягу
                            та взуття від провідних виробників, а також дитячі товари б/у. У цьому розділі ви точно
                            зможете підібрати </p>
                        <ul>
                            <li><a href="https://besplatka.ua/uk/detskiy-mir/kolyaski">коляски</a></li>
                            <li><a href="https://besplatka.ua/uk/detskiy-mir/avtokresla">автокрісла,</a></li>
                            <li>дитячі меблі,</li>
                            <li>іграшки,</li>
                            <li>велосипеди</li>
                        </ul>
                        та інші товари. Тут знайдеться все необхідне для майбутніх мам.<p></p>
                        <p>Традиційні магазини жіночого та чоловічого одягу масово йдуть в онлайн. Розділ «Одяг, взуття,
                            аксесуари» включає в себе пропозиції щодо <a
                                href="https://besplatka.ua/uk/odezhda-obuv-aksessuary/zhenskaya-odezhda/platiya-sarafani-tuniki">продажу
                                жіночих суконь</a>, нижньої білизни, взуття, аксесуарів. Чоловіки зможуть підібрати і
                            придбати чоловічі костюми, сорочки, ремені та взуття.</p>
                        <p>Розділ «Тварини, рослини» налічує тисячі пропозицій про продаж домашніх тварин та товарів для
                            догляду за ними. Також тут можна знайти домашніх улюбленців у рубриці «Віддам даром».</p>
                        <h2>Розмістити (додати) оголошення на дошці оголошень {siteNameName} дуже просто</h2>
                        <p>Тут можна подати необмежену кількість оголошень безкоштовно. Якщо вам знадобилися комп'ютери,
                            мобільні телефони або побутова техніка, за допомогою {siteNameName} купити ці товари можна не
                            піднімаючись з дивану. Ми заощадимо ваш час, позбавивши від необхідності ходити по десятках
                            магазинів. Просто завітайте до розділу «Електроніка», всі товари з цінами згруповані за
                            призначенням.</p>
                        <p>Все необхідне для того, щоб обставити нову квартиру або замінити старі меблі, ви знайдете у
                            розділі «Меблі, інтер'єр, побут». Оздоровчі та медичні послуги представлені в розділі
                            «Краса, здоров'я». Тут розміщують оголошення салони краси та перукарні в будь-якому місті
                            України. Якщо вас цікавить обстеження та діагностика організму, лікувальні масажі, якщо ви
                            бажаєте знайти фахівців та дізнатися ціни на їхні послуги, заходьте на {siteNameName}.ua.
                        </p><p>Вирішили взяти кредит, застрахувати квартиру чи шукаєте бізнес-партнера? Вам у розділ
                        «Бізнес, фінанси». Великий вибір надійних страхових компаній, банків і кредитних організацій
                        допоможе знайти пропозицію, яка найбільш точно відповідає вашим потребам.</p></div>
                </div>
            </div>
        </div>


    );
};