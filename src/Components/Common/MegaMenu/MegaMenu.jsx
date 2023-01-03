import React from "react";
import "./megaMenu.css";
import { useHistory , generatePath } from "react-router-dom";


const MegaMenu = (props) => {

  const { showMegaMenu, setShowMegaMenu, subCategoryData } = props;

    const pkgLocation = localStorage.getItem("locationDetails");
    const cityLocattion = JSON.parse(pkgLocation);
    const cityID = cityLocattion && cityLocattion.id;
    
  const history=useHistory();

    const toRenderNextPackeges = (data) => {
      const name = data.name ;
      const subCategoryName = name.replaceAll(' ', '-');
      const path = generatePath("/experiences/:location/:sub_category_name/:sub_category_id" , {
        sub_category_name : subCategoryName ,
        location : cityLocattion.name ,
        sub_category_id : data.subcategory_id

      })
      history.push(path ,{allpackeges : data})
    }

    
  return (
    <>
      {showMegaMenu && (
        <div className="megamenu">
          {subCategoryData.map((item, index) => {
           

            const childCategory = item.child_category;
            return (
              <div className="megaMenuCol">
                <h4>{item.name}</h4>

                {childCategory.map((itmm, indd) => {
                  console.log(itmm , "idddd")
                  return (
                    <>
                      <ul>
                        <li>
                          <h6 onClick={() => toRenderNextPackeges(itmm)}>{itmm.name}</h6>
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MegaMenu;
