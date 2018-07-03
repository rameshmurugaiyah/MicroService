const express = require('express');
const router = express.Router();


const user_controller = require('../controllers/user.controller');
const event_controller = require('../controllers/event.controller');
const eventdetail_controller = require('../controllers/eventdetail.controller');
const eventinfo_controller = require('../controllers/eventinformation.controller');

router.get('/fetchusers', user_controller.userdetails);
router.get('/fetchevents', event_controller.eventdetails);
router.get('/fetcheventdetails', eventdetail_controller.eventdetail);
router.get('/fetcheventinformation', eventinfo_controller.eventinform);
router.post('/createuser', user_controller.user_create);
router.post('/createevent', event_controller.event_create);
router.put('/:id/updateevent', event_controller.event_update);
router.post('/login',user_controller.login);
router.get('/profile',user_controller.profile);
module.exports = router;