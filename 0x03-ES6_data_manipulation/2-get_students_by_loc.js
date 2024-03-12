export default function getStudentsByLocation(list, arg) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.filter((list) => list.location === arg);
}
