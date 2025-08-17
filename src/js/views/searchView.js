class SearchView {
  _paremtElement = document.querySelector('.search');

  getQuery() {
    const query = this._paremtElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._paremtElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._paremtElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
