export function paginate(array, pageSize, currentPage) {
  return array.slice((currentPage - 1) * pageSize, pageSize * (currentPage));
}