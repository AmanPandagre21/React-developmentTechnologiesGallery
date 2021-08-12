import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Cards from "./Cards";
import "./Index.css";
import Tools from "./Tools";

const menuBtns = ["all", ...new Set(Tools.map((ar) => ar.category))];

const Menu = () => {
  const [category, setCategory] = useState([]);
  const [menus, setMenus] = useState(menuBtns);

  const getCategories = (cat) => {
    if (cat === "all") {
      setCategory(Tools);
    } else {
      const data = Tools.filter((arr) => {
        return arr["category"] === cat;
      });
      setCategory(data);
    }
  };

  useEffect(() => {
    getCategories("all");
  }, []);

  return (
    <>
      <div className="main_div">
        <h1 className="heading">WEB DEVELOPMENT TOOLS</h1>
        <div className="container-fluid btn_groups">
          {menus.map((catArray) => {
            return (
              <Button className="btn" onClick={() => getCategories(catArray)}>
                {catArray}
              </Button>
            );
          })}
        </div>

        <div className="container" style={{ marginBottom: "50px" }}>
          <div className="row">
            {category.map((array) => {
              return (
                <Cards
                  image={array["image"]}
                  ctgry={array["category"]}
                  link={array["link"]}
                  name={array["name"]}
                  key={array["key"]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
