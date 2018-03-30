import React from "react";
import { withContentRect } from 'react-measure'
import { CardMedia } from "material-ui";

const MenuItemImg = withContentRect("bounds")(({ measureRef, measure, contentRect, image, name }) => (
    <div className="menu-img" ref={measureRef}>
        {console.log(contentRect)}
        <CardMedia
            style={{ height: contentRect.bounds.width, marginTop: "16px", border: "thin solid black" }}
            image={image}
            title={name}
        />
    </div>
));

export default MenuItemImg;
