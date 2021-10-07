export const getAll = (page) => {
  return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res) => res.json());
};

export const getById = (id) => {
  return fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json());
};

export const save = (data) => {
  return fetch(`https://reqres.in/api/users`, {
    method: 'POST',
    body: { ...data }
  })
    .then((res) => res.json());
};

