export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.reduce((addi, list) => addi + list.id, 0);
}
