class SomeAngularController {
    scope: angular.IScope;

    rootScope: angular.IRootScopeService;

    constructor($rootScope, $scope) {
        this.rootScope = $rootScope;
        this.scope = $scope;
    }

    setSomeValue(value: any) {
        this.scope['someValue'] = value;
    }
}

SomeAngularController.$inject = ['$rootScope', '$scope',];


angular.module('someModule', []).controller('SomeAngularController', SomeAngularController);

