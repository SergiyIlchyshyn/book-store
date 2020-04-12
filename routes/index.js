var express = require('express');
var router = express.Router();
let books = [{
        id: 1,
        name: 'Подлинная история ожерелья Антуанетты. Ольга Баскова Печатное издание (два тома)',
        isbn: '978-5-00073-553-4',
        price: 200.12
    },
    {
        id: 2,
        name: 'Танго "Натуральный хозяин". Валерий Ременюк Печатное издание',
        isbn: '978-5-00073-652-4',
        price: 200.12
    },
    {
        id: 3,
        name: 'Рифл Шафл. Юлия Фаро Печатное издание',
        isbn: '978-5-00073-513-4',
        price: 200.12
    },
    {
        id: 4,
        name: 'Я есмь (хроника двенадцати дней). Фарра Мурр',
        isbn: '978-5-111073-513-4',
        price: 200.12
    },
];

/* GET home page. */
// список книжок
router.get('/', function(req, res) {
    res.render('index', { title: 'Book Store', books: books });
});

// доваляти книгу
router.get('/create', function(req, res) {
    res.render('create', { title: 'Book Store: create a book' });
});
// отримати дані та зберегти їх в БД
router.post('/create', function(req, res) {
    console.log(req.body);
    //записати в БД
    res.redirect('/');
});
// редагувати
router.get('/edit/:id', function(req, res) {
    const element = books.find(e => e.id == req.params.id);
    res.render('edit', { title: 'Book Store: edit a book', book: element });
});
// отримати дані та зберегти їх в БД
router.post('/edit/:id', function(req, res) {
    console.log(req.body);
    //записати в БД
    res.redirect('/');
});
// видалити
router.get('/delete/:id', function(req, res) {
    console.log(req.params.id);
    //видалити книгу
    res.render('delete', { title: 'Delete book', message: 'Deleted!' });
});

module.exports = router;