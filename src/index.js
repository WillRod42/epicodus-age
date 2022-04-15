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

$(document).ready(function() {
  $("form").on("submit", (e) => {
    e.preventDefault();
    let age = new Age($("#age").val());
    let output = $("#output");
    output.empty();

    let ageList = showAges(age);
    output.append(ageList);
  });
});