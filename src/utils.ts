export const getPaginator = async (
  url: string,
  dataField: any,
  page: number,
  partial?: any[]
) => {
  const res = await fetch(`${url}?page=${page}&per_page=100`);
  const json = await res.json();

  if (!partial) partial = [];
  if (json[dataField]) partial.push(...json[dataField]);

  return json[dataField].length > 0
    ? getPaginator(url, dataField, page + 1, partial)
    : partial;
};
