import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
  if (error.code === 404)
    return res.status(httpStatus.NOT_FOUND).send(error.message);

  if (error.code === 409)
    return res.status(httpStatus.CONFLICT).send(error.message);

  if (error.code === 422)
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

  if (error.message.includes("unique"))
    return res.status(409).send("Cidade já cadastrada!");

  if (error.message.includes("foreign key")) {
    
    if (error.message.includes("travels")) {
      return res.status(404).send("Passageiro/voo inválido(s)");
    } else {
      return res.status(404).send("Cidade(s) inválida(s)");
    }
  }

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
}
