const API = "https://sihbackend2020.herokuapp.com";

export const signin = (user) => {
  console.log(JSON.stringify(user));
  return fetch(`${API}/users/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const isAuthenticated = (next) => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
  next();
};

export const isAdmin = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("id")) {
    return JSON.parse(localStorage.getItem("id"));
  } else {
    return false;
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    const jwt = data.token;
    if (data.authorId)
      localStorage.setItem("id", JSON.stringify(data.authorId));
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    if (localStorage.getItem("id")) {
      localStorage.removeItem("id");
    }
    next();
    return fetch(`${API}/users/logout`, {
      method: "GET",
    })
      .then((response) => console.log("loged out"))
      .catch((err) => console.log(err));
  }
};

export const signup = (user) => {
  return fetch(`${API}/users/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
