var router = require('express').Router();
var Hero = require('../../models/heroModel');

router.get('/', function(request, response){
  console.log('router.get called');

  Hero.find({}, function(err, heros){
    if(err){
      console.log('find hero error: ', err);
      response.sendStatus(500);
    }else{
      response.send(heros);
    }
  })
})

router.post('/', function(request, response){
  console.log('router.post called');

  var data = request.body;
  console.log('request.body:', request.body);

  Hero.create(request.body, function(err){
    console.log('request.body:', request.body);
    if(err){
      console.log('Error saving Hero:', err);
      response.sendStatus(500);
    }else{
      console.log('Successfully saved Hero');
      response.sendStatus(200);
    }
  })
})

router.delete('/remove/:id', function(request, response){
  Hero.findOneAndRemove({_id: request.params.id}, function(err){
    if(err) {
      console.log('Delete error:', err);
      response.sendStatus(500);
    }else{
      console.log('deleted hero object');
      response.sendStatus(200);
    }
  });
})

module.exports = router;
