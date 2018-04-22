import $ from 'jquery';

let my = {};

function handleError(error) {
  if (error.responseJSON) {
    throw error.responseJSON;
  } else {
    throw error;
  }
}

my.post = function(url, data) {
  const promise = $.ajax({
    type: 'POST',
    url: url,
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
  }).then(data => data, handleError);
  return promise;
}

my.get = function(url) {
  const promise = $.ajax({
    type: 'GET',
    url: url
  }).then(data => data, handleError);
  return promise;
}

my.getAll = function(url) {
  return my.get(url + "?q=*:*")
}

my.put = function(url, data) {
  const promise = $.ajax({
    type: 'PUT',
    url: url,
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
  }).then(data => data, handleError);
  return promise;
}

my.delete = function(url) {
  const promise = $.ajax({
    type: 'DELETE',
    url: url
  }).then(data => data, handleError);
  return promise;
}

export default my;
