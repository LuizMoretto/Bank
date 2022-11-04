var express = require('express');
var db = require('../util/db');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res) {
  res.render('login');
});

/* GET wallet page */
router.get('/wallet', function(req, res){
  db.query('SELECT * FROM wallet',[],function(erro, list){
    if(erro){
      res.status(200).send(erro)
    }
    res.render('wallet', {wallet : list})
  });
});

/* Forms to add */
router.get('/forms', function(req, res){
  res.render('forms', {spent : {}});
});

/* POST wallet */
router.post('/forms', function(req, res){
  db.query('INSERT INTO wallet(typeOfSpent, valueOfExpense, dateOfSpent, title) VALUES (?, ?, ?, ?)', [req.body.tipo, req.body.valor, req.body.data, req.body.titulo], function(error){
    if(error){
      res.status(200).send('Erro: ' + error)
    }
    res.redirect('/wallet')
  });
});

/* PUT wallet */
router.get('/edit/:id', function(req, res){
  db.query('SELECT * FROM wallet WHERE id = ?', [req.params.id], function(error, result){
    if(error){
      res.status(200).send('Erro: ' + error)
    }
    res.render('forms', {spent : result[0]});
  });
});

router.post('/edit/:id', function(req,res){
  db.query('UPDATE wallet SET typeOfSpent = ?, valueOfExpense = ?, dateOfSpent = ?, title = ? WHERE id = ?', [req.body.tipo, req.body.valor, req.body.data, req.body.titulo, req.params.id], 
  function(error){
    if(error){
      res.status(200).send('Erro: ' + error)
    }
    res.redirect('/wallet')    
  });
});

/* DELETE wallet */
router.delete('/delete/:id', function(req,res){
  db.query('DELETE FROM wallet WHERE id = ?', [req.params.id], 
  function(error){
    if(error){
      res.status(200).send('Erro: ' + error)
    }
    res.status(200).send('OK');
  });
});

module.exports = router;