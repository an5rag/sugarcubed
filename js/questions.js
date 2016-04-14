/**
 * Created by an5ra on 3/10/2016.
 */
///**
// ANGULAR APP
// **/
//var app = angular.module('questionsApp',[]);
//var numberOfquestions = 3;
//
//app.controller('questionsController', ['$scope', '$http', function ($scope, $http) {
//    $http.get('https://mysterious-caverns-36769.herokuapp.com/api/questions?random=true&limit=3').success(function (data) {
//        var questions = data.data;
//        var question1 = questions[0];
//        $scope.questionNumber = 1;
//        $scope.question = question1.questionText;
//        $scope.options = question1.optionsText;
//        $scope.hint = question1.hintText;
//        $scope.rightAnswer = question1.correctAnswerText;
//    })
//}]);

var hint;
var correctAnswer;
/**
 * function to check if an answer is correct or wrong and call function to update question accordingly.
 */
function evaluateAnswer() {
    // find the id of the option of the radio button the user has selected
    var selectedAnswer = $('input[name=options]:checked').val()
    if(selectedAnswer==correctAnswer)
    {
        alert('Correct!');
        $('#print-form').removeClass('hidden');
    }
    console.log(selectedAnswer);

}
/**
 * Function to display a hint in the form of an alert box
 */
function getHint() {

    swal("Here's a hint!", hint, "info");
}
