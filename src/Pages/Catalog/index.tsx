import { items, Category, CatalogItem } from "../../CatalogItems";

type ItemsByCategory = {
  [key in Category]: CatalogItem[];
};
export function Catalog() {
  const itemsByCategory: ItemsByCategory = Object.values(Category).reduce(
    (acc, category) => {
      acc[category as Category] = items.filter(
        (item) => item.category === category
      );
      return acc;
    },
    {} as ItemsByCategory
  );

  console.log(itemsByCategory);

  return (
    <div>
      <div>
        {Object.values(Category).map((item) => {
          return item;
        })}
      </div>
    </div>
  );
}
