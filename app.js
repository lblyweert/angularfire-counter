angular.module('CounterApp', ['firebase'])

    .constant('fireBaseConst', 'https://amber-torch-9236.firebaseio.com/')

    .controller('MainCtrl', function($scope, fireBaseConst, $firebase){

        // Récupération du noeud "bob"
        var bobNameRef = new Firebase(fireBaseConst + "bob");
        var bobContent = $firebase(bobNameRef);
        // Exposition du noeud sur le scope
        $scope.bob = bobContent;

        // Récupération du noeud "arnauld"
        var arnauldNameRef = new Firebase(fireBaseConst + "arnauld");
        var arnauldContent = $firebase(arnauldNameRef);
        // Exposition du noeud sur le scope
        $scope.arnauld = arnauldContent;

        // Exposition des méthodes sur le scope
        $scope.addPointBob = addPointBob;
        $scope.removePointBob = removePointBob;
        $scope.addPointArnauld = addPointArnauld;
        $scope.removePointArnauld = removePointArnauld;
        $scope.resetStats = resetStats;
        $scope.updateComments = updateComments;

        function addPointBob(){
            bobNameRef.update({
                score: parseInt($scope.bob.score) + 1
            });
        }
        function removePointBob() {
            bobNameRef.update({
                score: parseInt($scope.bob.score) - 1
            });
        }
       function addPointArnauld(){
           arnauldNameRef.update({
               score: parseInt($scope.arnauld.score) + 1
           });
        }
        function removePointArnauld(){
            arnauldNameRef.update({
                score: parseInt($scope.arnauld.score) - 1
            });
        }
        function resetStats(){
            bobNameRef.update({
                score: 0
            });
            arnauldNameRef.update({
                score: 0
            });
        }
        function updateComments() {
            bobNameRef.update({
                comment: $scope.bob.comment
            });
            arnauldNameRef.update({
                comment: $scope.arnauld.comment
            });
        }
    });