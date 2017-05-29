import $ from 'jquery';

let my = {};

my.post = function(url, data) {
  return $.ajax({
    type: 'POST',
    url: url,
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
  });
}

my.get = function(url) {
  return $.ajax({
    type: 'POST',
    url: url
  });
}

my.put = function(url, data) {
  return $.ajax({
    type: 'PUT',
    url: url,
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
  });
}

my.delete = function(url) {
  return $.ajax({
    type: 'DELETE',
    url: url
  });
}

export default my;
