// app/controller/view.js

import Ember from 'ember';

export default Ember.Controller.extend({
    //queryParams: ['category'],
    //category: null,
    
    actions: {
        seaRch: function() {
            //var accepted_isCheck = this.get('accepted_isCheck');
            //this.set('accepted_isCheck',true);
            //console.log(accepted_isCheck);
        },
    },

    //  定义一个返回数组的计算属性，可以直接在模板上遍历
    filteredArticles: Ember.computed('accepted_isCheck', 'analyzing_isCheck', 'assigned_isCheck', 
        'closed_isCheck', 'closing_isCheck', 'confirming_isCheck', 'examining_isCheck', 'new_isCheck', 
        'reopened_isCheck', 'reporting_isCheck', 'reproducing_isCheck', 'model', function() {
        
        var accepted_isCheck = this.get('accepted_isCheck');
        var analyzing_isCheck = this.get('analyzing_isCheck');
        var assigned_isCheck = this.get('assigned_isCheck');
        var closed_isCheck = this.get('closed_isCheck');
        var closing_isCheck = this.get('closing_isCheck');
        var confirming_isCheck = this.get('confirming_isCheck');
        var examining_isCheck = this.get('examining_isCheck');
        var new_isCheck = this.get('new_isCheck');
        var reopened_isCheck = this.get('reopened_isCheck');
        var reporting_isCheck = this.get('reporting_isCheck');
        var reproducing_isCheck = this.get('reproducing_isCheck');
        var articles = this.get('model');
        
        console.log('accepted_isCheck:',accepted_isCheck,';analyzing_isCheck:',analyzing_isCheck);
        
        if (accepted_isCheck) articles = articles.filterBy('accepted', true);
        if(analyzing_isCheck) articles = articles.filterBy('analyzing', true);
        if(assigned_isCheck) articles = articles.filterBy('assigned', true);
        if(closed_isCheck) articles = articles.filterBy('closed', true);
        if(closing_isCheck) articles = articles.filterBy('closing', true);
        
        return articles;
    })
});
