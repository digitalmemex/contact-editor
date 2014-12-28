/*global $, RESTClient*/

$(function() { // jQuery ready => start up
  var dmc = new RESTClient('/core'),
      institutions = dmc.get_topics('dm4.contacts.institution', true, true),
      people = dmc.get_topics('dm4.contacts.person', true, true),
      renderContact = function ($body, c) { $body.append($('<tr>').append($('<td>').text(c.value))) };
  $.each(institutions.items, function (i, c) { renderContact($('#institutions').empty(), c) });
  $.each(people.items, function (i, c) { renderContact($('#people').empty(), c) });
});

