const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { House } = require("../models/house");


router.get('/', (req, res)=>{


    (async () => {

        // House.create({
        //     id: 1,
        //     name: 'Super Lux',
        //     seats: 10,
        //     type: 'Офіс',
        //     format: 100,
        //     map: 'Кирилловская Подольский р-н.',
        //     prise: 2500,
        //     about: 'Сдам офис 16,1 кв/м ул. Кирилловская Подольский р-н., м. Тараса Шевченко-20 мин. пешим ходом. Н/Ф. Офис расположен на 3_м этаже в админ.-офисном здании, одна комната, офисный ремонт, присутствуют все необходимые коммуникации для успешного бизнеса. Возможно под любой вид ком. деятельности (по согласованию). Живая круглосуточная охрана. Цена: 250 грн/кв/м.,с НДС, электричество по счетчику.',
        //     img: [{ link: 'https://besplatka.ua/aws/83/86/29/35/sdam-ofis-16-1-kv-m-ul-kirillovskaya-podolskii-r-n-photo-aaab.jpg' },
        //         { link: 'https://besplatka.ua/aws/83/86/29/35/sdam-ofis-16-1-kv-m-ul-kirillovskaya-podolskii-r-n-photo-0f56.jpg' },
        //         { link: 'https://besplatka.ua/aws/83/86/29/35/sdam-ofis-16-1-kv-m-ul-kirillovskaya-podolskii-r-n-photo-ab8e.jpg' },
        //         { link: 'https://besplatka.ua/aws/83/86/29/35/sdam-ofis-16-1-kv-m-ul-kirillovskaya-podolskii-r-n-photo-9c66.jpg' }]
        // })
        //
        // House.create({
        //     id: 2,
        //     name: 'Предлагается офис на пр. Бажана Николая 14',
        //     seats: 15,
        //     type: 'Офіс',
        //     format: 100,
        //     map: 'пр. Бажана Николая 14',
        //     prise: 2500,
        //     about: 'Предлагается под офис на пр. Бажана Николая 14, 100 м2. Офис в жилом доме, состоит из четырех кабинетов, мини кухни и сан узла. Рядом развитая инфраструктура, все в пешей доступности, особенно метро Осокорки пять минут.',
        //     img: [{ link: 'https://besplatka.ua/aws/81/49/46/44/predlagaetsya-ofis-na-pr-bazhana-nikolaya-14-100-m2-photo-c42b.jpg' },
        //         { link: 'https://besplatka.ua/aws/81/49/46/44/predlagaetsya-ofis-na-pr-bazhana-nikolaya-14-100-m2-photo-2d06.jpg' },
        //         { link: 'https://besplatka.ua/aws/81/49/46/44/predlagaetsya-ofis-na-pr-bazhana-nikolaya-14-100-m2-photo-687c.jpg' },
        //         { link: 'https://besplatka.ua/aws/81/49/46/44/predlagaetsya-ofis-na-pr-bazhana-nikolaya-14-100-m2-photo-a6b7.jpg' }]
        // })
        //
        // House.create({
        //     id: 3,
        //     name: 'АРЕНДА ОФИСА 20 м.кв. Луговая 9 ',
        //     seats: 5,
        //     type: 'Склад',
        //     map: 'Луговая 9',
        //     format: 20,
        //     prise: 230,
        //     about: 'Предлагаем в аренду складское помещение 20 м.кв в административном здании по адресу: ул. Луговая, 9 (возле ТРЦ Караван).\n' +
        //         'Стоимость аренды: 230 грн/м.кв.\n' +
        //         'Бесплатная стоянка для автомобилей арендаторов и их посетителей.',
        //     img: [{ link: 'https://besplatka.ua/aws/83/86/29/35/sdam-ofis-16-1-kv-m-ul-kirillovskaya-podolskii-r-n-photo-aaab.jpg' },
        //         { link: 'https://besplatka.ua/aws/83/86/29/35/sdam-ofis-16-1-kv-m-ul-kirillovskaya-podolskii-r-n-photo-0f56.jpg' },
        //         { link: 'https://besplatka.ua/aws/83/86/29/35/sdam-ofis-16-1-kv-m-ul-kirillovskaya-podolskii-r-n-photo-ab8e.jpg' },
        //         { link: 'https://besplatka.ua/aws/83/86/29/35/sdam-ofis-16-1-kv-m-ul-kirillovskaya-podolskii-r-n-photo-9c66.jpg' }]
        // })
        //
        // House.create({
        //     id: 4,
        //     name: 'Сдам долгосрочно офисное помещение Киев',
        //     seats: 15,
        //     type: 'Офіс',
        //     format: 95,
        //     map: 'Володимира дивного',
        //     prise: 59050,
        //     about: 'Предлагается снять в аренду современный офис в Дарницком районе по адресу: Александра Мишуги 10 ,\n' +
        //         'Общая площадь: 95.3 кв.м\n' +
        //         'Формат: Open Space, кухня, санузлы.\n' +
        //         'Состояние: современный ремонт в стиле Loft, оборудован необходимым комплектом комфортабельной мебели соответствующей вашим требованиям, оборудованная кухня, установлена система кондиционирования.\n' +
        //         'Офис рассчитан на 12-15чел',
        //     img: [{ link: 'https://images.weserv.nl/?url=aspo.biz/upload/users/u48027/a753509/70b6c8a8b20a7eb.jpg' },
        //         { link: 'https://images.weserv.nl/?url=aspo.biz/upload/users/u48027/a753509/30345a989bfbb41.jpg' },
        //         { link: 'https://images.weserv.nl/?url=aspo.biz/upload/users/u48027/a753509/c7d6b63d9f9e1ac.jpg' },
        //         { link: 'https://images.weserv.nl/?url=aspo.biz/upload/users/u48027/a753509/d303f28e431ee90.jpg' }]
        // })
        //
        // House.create({
        //     id: 5,
        //     name: 'Без комиссии офис на Гетьмана',
        //     seats: 27,
        //     type: 'Офіс',
        //     format: 170,
        //     map: 'Володимира маленького',
        //     prise: 53000,
        //     about: 'Офис в офисном центре на Вадима Гетьмана 27, 170 м2 + 100 м2 терраса. В офисном блоке на восемь меблированных кабинетов, есть холл ожидания с кожаным диваном, кухня с необходимой бытовой техникой (холодильник, эл. чайник, микроволновка, кофеварка и т.д.) а также как бонус лаунж терраса меблированная, санузел на этаже. Вход в блок по чин ключам с сигнализацией охраны. В офисном центре есть столовая, кафетерий и ресторан, охрана. До метро Шулявка 10 ть минут на маршрутке. Без комиссии, есть разные метражи!',
        //     img: [{ link: 'https://besplatka.ua/aws/80/77/53/18/ofis-na-vadima-getmana-27-175-m2-bonus-launzh-terrasa-100-photo-7045.jpg' },
        //         { link: 'https://besplatka.ua/aws/80/77/53/18/ofis-na-vadima-getmana-27-175-m2-bonus-launzh-terrasa-100-photo-f259.jpg' },
        //         { link: 'https://besplatka.ua/aws/80/77/53/18/ofis-na-vadima-getmana-27-175-m2-bonus-launzh-terrasa-100-photo-3c16.jpg' },
        //         { link: 'https://besplatka.ua/aws/80/77/53/18/ofis-na-vadima-getmana-27-175-m2-bonus-launzh-terrasa-100-photo-9adb.jpg' }]
        // })
        //
        // House.create({
        //     id: 6,
        //     name: 'Сдам долгосрочно офисное помещение',
        //     seats: 40,
        //     type: 'Офіс',
        //     format: 200 ,
        //     map: 'Володимира великого',
        //     prise: 30000,
        //     about: 'Офис, общая площадь 200 кв.м 3 этаж 3 этажного здания.\n' +
        //         'н/фонд, отдельный вход со двора, сделан хороший ремонт,полностью перекрашены стены,3 раздельных кабинета 31м, 14м, 80м (один из них большой open space). 2 с-узла, мини кухня. Окна стекло пакеты,на окнах есть решётки, охранная сигнализация,кондиционеры, интернет.Хорошая транспортная развязка, 3 минуты пешком от метро Контрактовая площадь,в 5 минутах есть стоянка для машин.Аренда на июнь',
        //     img: [{ link: 'https://images.weserv.nl/?url=aspo.biz/upload/users/u2288/a772126/077b06acc5293f4.jpg' },
        //         { link: 'https://images.weserv.nl/?url=aspo.biz/upload/users/u2288/a772126/dc421221ae6b2ef.jpg' },
        //         { link: 'https://images.weserv.nl/?url=aspo.biz/upload/users/u2288/a772126/f11fc044e617ed2.jpg' },
        //         { link: 'https://images.weserv.nl/?url=aspo.biz/upload/users/u2288/a772126/46e574150da8a54.jpg' }]
        // })



        let doctor = await House.find({});
        res.send(doctor)

    })();

});

router.get('/:id', (req, res)=>{


    (async () => {

        let doctor = await House.findOne({id: req.params.id});
        res.send(doctor)

    })();

});


module.exports = router;
