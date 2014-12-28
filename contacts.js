/*global $, RESTClient*/

$(function() { // jQuery ready => start up
  var dmc = new RESTClient('/core'),
      institutions = dmc.get_topics('dm4.contacts.institution', true, true),
      $institutions = $('#institutions').empty(),
      people = dmc.get_topics('dm4.contacts.person', true, true),
      $people = $('#people').empty(),
      renderContact = function ($body, c) { $body.append($('<tr>').append($('<td>').text(c.value))) };
  $.each(institutions.items, function (i, c) { renderContact($institutions, c) });
  $.each(people.items, function (i, c) { renderContact($people, c) });
});

