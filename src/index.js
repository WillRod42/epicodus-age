import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age';

function showAges(age) {
  let ageHTML = "<h3>Solar Ages:</h3><ul>";
  ageHTML += `<li>Mercury Years: ${age.mercury()}</li>`;
  ageHTML += `<li>Venus Years: ${age.venus()}</li>`;
  ageHTML += `<li>Mars Years: ${age.mars()}</li>`;
  ageHTML += `<li>Jupiter Years: ${age.jupiter()}</li>`;

  return ageHTML + "</ul>";
}

function showExpectancy(lifeExpectancy, age) {
  let expectancy = age.averageLifeExpectancy(lifeExpectancy);

  let expectancyHTML = "<h3>Solar Life Expectancies:</h3><ul>";
  expectancyHTML += `<li>Mercury Years: ${expectancy.mercury}</li>`;
  expectancyHTML += `<li>Venus Years: ${expectancy.venus}</li>`;
  expectancyHTML += `<li>Mars Years: ${expectancy.mars}</li>`;
  expectancyHTML += `<li>Jupiter Years: ${expectancy.jupiter}</li>`;

  return expectancyHTML + "</ul>";

}

$(document).ready(function() {
  $("form").on("submit", (e) => {
    e.preventDefault();
    let age = new Age($("#age").val(), $("#dog-years").is(":checked"));
    let output = $("#output");
    output.empty();

    let ageList = showAges(age);
    output.append(ageList);

    let lifeExpectancy = parseInt($("#life-expectancy").val());
    if (lifeExpectancy > 0) {
      let expectancyList = showExpectancy(lifeExpectancy, age);
      output.append(expectancyList);
    }
  });
});