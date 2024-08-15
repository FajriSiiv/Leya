import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCategory({ categorySelect }: { categorySelect: any }) {
  // const handleSelectChange = (value: any) => {
  //   categorySelect(value);
  // };

  const handleCategoryChange = React.useCallback((newCategory: string) => {
    categorySelect(newCategory);
  }, []);

  return (
    <Select onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="beauty">beauty</SelectItem>
          <SelectItem value="fragrances">fragrances</SelectItem>
          <SelectItem value="furniture">furniture</SelectItem>
          <SelectItem value="groceries">groceries</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
