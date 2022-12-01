import React, { useState } from "react";
import data from "./data";
import './Search.css'
const Search = () => {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLocaleLowerCase())
    );
  });

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-label h3 text-info">Seach Your Favorite Mobile</label>
            <input
              value={filter}
              onChange={searchText.bind(this)}
              type="text"
              className="form-control text-center"
            />
          </div>
        </div>

        {dataSearch.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.image} alt='Error' className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title mobile-name">{item.name}</h5>
                  <p className="card-text model-name">Model: {item.model}</p>
                  <p className="card-text price">Price Rs: {item.price}</p>
                  <p className="card-text mobile-color">Color: {item.color}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Search;
