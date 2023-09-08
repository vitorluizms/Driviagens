export function conflict(message) {
  return {
    code: 409,
    message: `${message}`,
  };
}
