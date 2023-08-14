export function filterData(searchText, items) {
    const filterData = items.filter((itm) =>
      itm?.category?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }