import $ from 'jquery';

let my = {};

function handleError(error) {
  if (error.responseJSON) {
    throw error.responseJSON;
  } else {
    throw error;
  }
}

function ajaxCall(configuration, messageHandler) {
    return $.ajax(configuration).then(data => data.data, handleError);
}

my.post = function(url, data) {
  return ajaxCall({
    type: 'POST',
    url: url,
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
  });
};

my.get = function(url) {
  return ajaxCall({
    type: 'GET',
    url: url
  });
};

my.getAll = function(url) {
  return my.get(url + "?q=*:*")
};

my.put = function(url, data) {
  return ajaxCall({
    type: 'PUT',
    url: url,
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
  });
};

my.delete = function(url) {
  return ajaxCall({
    type: 'DELETE',
    url: url
  });
};

export default my;
