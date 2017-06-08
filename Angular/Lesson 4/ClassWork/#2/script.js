var app = angular.module('app', []);

app.provider('myProvider',function(){
    this.$get = function(){
        return 'My Value';
    };
})


app.controller('mainCtrl',function(myProvider){
    console.log('myProvider' + myProvider);
});

