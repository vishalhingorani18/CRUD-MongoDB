(function () {
    'use strict';

    angular
        .module('testApp')
        .factory('Student', Student);

    Student.$inject = ['$resource'];

    function Student ($resource) {
        var service = $resource('api/student', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' },
            'delete':{ method:'DELETE'}
        });

        return service;
    }
})();
