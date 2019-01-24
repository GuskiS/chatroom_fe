export const formToObject = formElement => {
  const entries = new FormData(formElement).entries();
  return Array.from(entries).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
};
