// <reference path="some-angular-controller.ts" />

describe('SomController', function () {
    let $controller: angular.IControllerService;
    let $rootScope: angular.IRootScopeService;
    let controller: SomeAngularController;
    let $scope;

    beforeEach(angular.mock.module('someModule'));

    beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('setSomeValue', function () {
        beforeEach(function () {
            $scope = $rootScope.$new();
            $scope.localizations = { pictureSelectFile: 'select' };
            controller = $controller<any>(SomeAngularController, { $scope: $scope });
        });

        it ('has to set some value', function () {
            let someValue = 1;
            controller.setSomeValue(someValue);
            expect($scope.someValue).toBe(someValue);
        })
    });
});

