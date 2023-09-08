export function badRequest(message) {
    return {
      code: 400,
      message: `${message}`,
    };
  }