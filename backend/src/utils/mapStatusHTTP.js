/* Esse objeto e o funcionamento dele foram tirados diretamente do course.
É possível mudar os status e seus valores para o que quiser, mas achei bem apropriado para os casos do projeto */

const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 400,
  INVALID_VALUE: 422,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = mapStatusHTTP;