const isLogged = () => {
  let parsed = null;
  if (localStorage.tokens != null) parsed = JSON.parse(localStorage.tokens);
  return parsed == null ? parsed : parsed.type;
};

export default isLogged;
