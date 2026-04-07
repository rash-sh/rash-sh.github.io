(function () {
  var SEARCH_INPUT_SELECTOR = '#docs-search-input';
  var RESULTS_CONTAINER_ID = 'docs-search-results';
  var DEBOUNCE_MS = 200;
  var MAX_RESULTS = 20;

  var lunrIndex = null;
  var documents = [];
  var searchInput = document.querySelector(SEARCH_INPUT_SELECTOR);
  var resultsContainer = document.getElementById(RESULTS_CONTAINER_ID);

  if (!searchInput || !resultsContainer) return;

  function init() {
    loadIndex();
    searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_MS));
    searchInput.addEventListener('focus', function () {
      if (searchInput.value.trim().length >= 2) {
        onSearch();
      }
    });
    document.addEventListener('click', function (e) {
      if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
        resultsContainer.style.display = 'none';
      }
    });
  }

  function loadIndex() {
    var basePath = searchInput.getAttribute('data-base-path') || '';
    var jsonUrl = basePath + '/search.json';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', jsonUrl, true);
    xhr.onload = function () {
      if (xhr.status !== 200) return;
      try {
        documents = JSON.parse(xhr.responseText);
        lunrIndex = lunr(function () {
          this.ref('url');
          this.field('title', { boost: 10 });
          this.field('content');
          documents.forEach(function (doc) {
            this.add(doc);
          }, this);
        });
        searchInput.disabled = false;
        searchInput.setAttribute('placeholder', 'Search docs...');
      } catch (e) {
        console.error('Failed to parse search index:', e);
      }
    };
    xhr.send();
  }

  function onSearch() {
    var query = searchInput.value.trim();
    if (query.length < 2) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
      return;
    }
    if (!lunrIndex) return;

    var results;
    try {
      results = lunrIndex.search(query);
    } catch (e) {
      results = [];
    }

    var html = '';
    var count = 0;
    for (var i = 0; i < results.length && count < MAX_RESULTS; i++) {
      var ref = results[i].ref;
      var doc = documents.find(function (d) { return d.url === ref; });
      if (!doc) continue;
      count++;
      html += '<li><a href="' + doc.url + '">' + escapeHtml(doc.title) + '</a></li>';
    }

    if (count === 0) {
      html = '<li class="no-results">No results found</li>';
    }

    resultsContainer.innerHTML = html;
    resultsContainer.style.display = 'block';
  }

  function debounce(fn, delay) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  init();
})();
