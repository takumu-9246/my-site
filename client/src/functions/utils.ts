export function convertToDictionary(data: string[][]) {
  const [headers, ...rows] = data;
  return rows.map((row) =>
    Object.fromEntries(row.map((value, index) => [headers[index], value]))
  );
}
