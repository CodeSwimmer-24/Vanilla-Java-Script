import icons from "url:../../img/icons.svg";
import View from "./view";
export default class View {
  _data;

  render(data) {
    this._data = data;

    if (!data) return this.renderError();

    const markUp = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner = () => {
    const markUp = `
    <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  };

  renderError(message = this._errorMessage) {
    const markUp = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}.svg#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }
}
