import { useMemo } from "react";

export function useFilterData(data, categorySelect, categorySelectPrice) {
  return useMemo(() => {
    if (!categorySelect && !categorySelectPrice) {
      return data;
    }

    const dataFilter = data.filter((item: any) => {
      const filterPertama = categorySelect
        ? item.category.toLowerCase() === categorySelect.toLowerCase()
        : true;
      const filterKedua = categorySelectPrice
        ? item.rating >= parseFloat(categorySelectPrice) &&
          item.rating <= parseFloat(categorySelectPrice) + 1
        : true;

      return filterPertama && filterKedua;
    });

    return dataFilter;
  }, [data, categorySelect, categorySelectPrice]);
}
