/* Creates variable 'age' and assigns 0 to the variable */
let age = 0
/* Wait for a click on a 'find-age' button, which triggers its 'checkAgeRating' function. */
document.getElementById('find-age').addEventListener('click', checkAgeRating)
/* Apply the value entered into the input box to the age variable and turn it to an integer. Then, inside a box, show the result of the user's opportunity to examine a movie. If they really are 17 or above, the result will show that they should be allowed to see R-rated films. If they are 13 or above, the results will show that they are allowed to watch PG-13 movies. */
function checkAgeRating () {
  age = document.getElementById('age-input').value
  document.getElementById('age-result').style.display = 'block'
  if (age >= 17) {
    document.getElementById('movie').innerHTML = 'R'
  } else if (age >= 13) {
    document.getElementById('movie').innerHTML = 'PG-13'
  } else if (age >= 5) {
    document.getElementById('movie').innerHTML = 'G or PG'
  } else {
    document.getElementById('movie').innerHTML = 'No'
  }
}
