'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const logRouter = router.namespace('/sl_log');
  logRouter.get('/query', controller.log.query);
  logRouter.get('/test', controller.log.test);
  logRouter.post('/add', controller.log.add);
};
