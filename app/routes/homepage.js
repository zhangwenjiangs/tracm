//  app/routes/homepage.js

import Ember from 'ember';

export default Ember.Route.extend({
   model() {
    // 返回后端数据，这些数据直接从 server/index.js 获取
    //return this.store.findAll('homepage');
   }
});