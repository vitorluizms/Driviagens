export function unprocessable(message) {
  return {
    code: 422,
    message: message,
  };
}
