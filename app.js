// Publications topic filter — mirrors the `state.topic` behavior from the
// original design's DCLogic component.
(function () {
  var filter = document.getElementById('topic-filter');
  var pubs = document.querySelectorAll('#pub-list .pub');
  if (!filter) return;

  filter.addEventListener('click', function (e) {
    var btn = e.target.closest('.topic-btn');
    if (!btn) return;

    filter.querySelectorAll('.topic-btn').forEach(function (b) {
      b.classList.toggle('active', b === btn);
    });

    var topic = btn.dataset.topic;
    pubs.forEach(function (pub) {
      pub.style.display = (topic === 'All' || pub.dataset.topic === topic) ? '' : 'none';
    });
  });
})();
