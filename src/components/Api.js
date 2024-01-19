class Api {
  constructor(options) {
    // constructor body
    this._headers = options.headers;
    this._baseUrl = options._baseUrl;
  }

  // api = new Api({
  //   baseUrl: "https://around-api.en.tripleten-services.com/v1",
  //   headers: {
  //     authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
  //     "Content-Type": "application/json",
  //   },
  // });

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
      },
    }).then(this._checkResponse);
  }

  // other methods for working with the API

  loadInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "GET",
      avatar:
        "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/moved_avatar.jpg",
      cohort: "group-42",
      headers: {
        authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
      },
    }).then(this._checkResponse);
  }

  editProfile(name, about) {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  // pass name and link as argument
  addNewCard(data) {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: cardId,
        }),
      }
    ).then(this._checkResponse);
  }

  updateLike(cardId, isLiked) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/${cardId}/likes`,
      {
        method: isLiked ? "DELETE" : "PUT",
        headers: {
          authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  updateAvatar(avatar) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/users/me/avatar`,
      {
        method: "PATCH",
        headers: {
          authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: avatar,
        }),
      }
    ).then(this._checkResponse);
  }
}

export default Api;
