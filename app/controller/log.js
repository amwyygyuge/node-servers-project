
'use strict';

const Controller = require('egg').Controller;

class LogController extends Controller {
  async test() {
    this.ctx.body = this.app.config.env;
  }
  async query() {
    const { log } = this.ctx.service;
    const res = await log.query();
    this.ctx.body = res;
  }
  async add() {
    const { log } = this.ctx.service;
    const res = await log.create(this.ctx.request.body);
    this.ctx.body = res;
  }
}

module.exports = LogController;
