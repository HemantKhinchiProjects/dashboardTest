import React from "react";
import { listData } from "../../data";

const ListItem = ({ item }) => (
  <div
    className={`bg-white p-4 rounded-lg shadow-md ${
      item.status === "Upcoming FD Maturity"
        ? "border border-green-500"
        : item.status === "Renew by"
          ? "border border-blue-500"
          : item.status === "Cancel Application"
            ? "border border-red-500"
            : ""
    }`}
  >
    <div className="text-lg font-semibold">{item.title}</div>
    <div className="text-gray-500">{item.date}</div>
    <ul className="mt-2">
      {Object.entries(item).map(([key, value]) => {
        if (key !== "id" && key !== "title" && key !== "date" && value) {
          return (
            <li key={key} className="text-gray-500">
              {key}: {value}
            </li>
          );
        }
        return null;
      })}
    </ul>
    {item.action && (
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
          {item.action}
        </button>
      </div>
    )}
  </div>
);

const List = () => (
  <div className="grid grid-rows-1 gap-4">
    {listData.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
);

export default List;
