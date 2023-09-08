export function notFound(message) {
  return {
    code: 404,
    message: `${message}`,
  };
}
