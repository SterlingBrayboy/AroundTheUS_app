class Api {
  constructor(options) {
    // constructor body
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // other methods for working with the API

  loadInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "GET",
      avatar:
        "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/moved_avatar.jpg",
      _id: "e20537ed11237f86bbb20ccb",
      cohort: "group-42",
      headers: {
        authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  editProfile() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Jacques Cousteau",
        about: "Sailor, researcher",
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
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
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
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
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
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
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // updateAvatar() {
  //   return fetch(
  //     "https://around-api.en.tripleten-services.com/v1/users/me/avatar ",
  //     {
  //       method: "PATCH",
  //       headers: {
  //         authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         // avatar: data.src,
  //       }),
  //     }
  //   ).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     // if the server returns an error, reject the promise
  //     return Promise.reject(`Error: ${res.status}`);
  //   });
  // }
}

export default Api;
