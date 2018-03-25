import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, CardContent, Typography, Grid } from "material-ui";

import OrderForm from "./order-form";

const MenuItem = ({ name, description, image, price, handleAddToOrder, toppings }) => (
    <div>
      <Card raised={true} className="menu-item-card">
        <Grid container>
            <Grid item xs={4}>
                <CardMedia
                    style={{ height: "200px" }}
                    image={image}
                    title={name}
                />
            </Grid>
            <Grid item xs={8}>
                <CardContent>
                    <Grid container direction="column" justify="space-between">
                        <Grid item>
                            <Typography variant="headline" component="h2">
                                { name }
                            </Typography>
                            <Typography component="p">
                                { description }
                            </Typography>
                        </Grid>
                        <Grid item>
                            <OrderForm
                                form={`${name}-form`}
                                handleAddToOrder={handleAddToOrder}
                                name={name}
                                price={price}
                                toppingsOptions={toppings}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
      </Card>
      <style jsx>
        {`
            .menu-item-card: {
                margin: 7px;
            }
            .menu-item-img: {
                height: 200px;
            }

        `}
        </style>
    </div>
);

MenuItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    handleAddToOrder: PropTypes.func,
    price: PropTypes.number
};

export default MenuItem;
