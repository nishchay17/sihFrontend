const API = "https://sihbackend2020.herokuapp.com";

export const createScheme = (token, scheme) => {
  return fetch(`${API}/schemes/`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(scheme),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const GetAllSchemesAdmin = (token) => {
  return fetch(`${API}/schemes/my`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const GetSchemesById = (id) => {
  return fetch(`${API}/schemes/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const DeleteSchemes = (token, id) => {
  return fetch(`${API}/schemes/${id}`, {
    method: "DELETE",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const UpdateSchemes = (token, id, scheme) => {
  return fetch(`${API}/schemes/${id}`, {
    method: "PUT",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(scheme),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const ReviewList = (token, id) => {
  console.log({ token, id });
  return fetch(`${API}/apply/review/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
