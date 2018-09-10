import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "./../../components/Grid/GridItem.jsx";
import GridContainer from "./../../components/Grid/GridContainer.jsx";
import Table from "./../../components/Table/Table.jsx";
import Card from "./../../components/Card/Card.jsx";
import CardHeader from "./../../components/Card/CardHeader.jsx";
import CardBody from "./../../components/Card/CardBody.jsx";

import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Administradora",
                "Crédito",
                "Entrada",
                "Parcelas",
                "Valor das Parcelas",
                "Prox Vencimento",
                ""
              ]}
              tableData={[
                [
                  "Bradesco",
                  "50.100",
                  "15.000",
                  "87",
                  "532,00",
                  "10/07/2020",
                  <div>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="Edit">
                      <Close />
                    </IconButton>
                  </div>
                ],
                [
                  "Bradesco",
                  "50.100",
                  "15.000",
                  "87",
                  "532,00",
                  "10/07/2020",
                  <div>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="Edit">
                      <Close />
                    </IconButton>
                  </div>
                ],
                [
                  "Bradesco",
                  "50.100",
                  "15.000",
                  "87",
                  "532,00",
                  "10/07/2020",
                  <div>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="Edit">
                      <Close />
                    </IconButton>
                  </div>
                ],
                [
                  "Bradesco",
                  "50.100",
                  "15.000",
                  "87",
                  "532,00",
                  "10/07/2020",
                  <div>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="Edit">
                      <Close />
                    </IconButton>
                  </div>
                ],
                [
                  "Bradesco",
                  "50.100",
                  "15.000",
                  "87",
                  "532,00",
                  "10/07/2020",
                  <div>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="Edit">
                      <Close />
                    </IconButton>
                  </div>
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
