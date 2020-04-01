/* global fetch */

function getUrl() {
  const url = process.env.GATSBY_BACKEND_URL || 'https://kx0kji7iyd.execute-api.us-east-1.amazonaws.com/prod/rest';
  return url;
}

export const requestInitialState = {
  data: null,
  pending: false,
  error: false,
  lastError: null,
  lastSuccess: null,
};

export async function sendContactMessage({ name, email, message }) {
  const url = getUrl();
  const config = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  };

  return fetch(url, config)
    .then((response) => response.json());
}

// eslint-disable-next-line
export const __testables__ = {
  getUrl,
};
