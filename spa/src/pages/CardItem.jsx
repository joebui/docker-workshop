import React, { Component } from "react";
import PropTypes from "prop-types";
import { DELETE_TODOS_REQUESTED } from "../redux/actions/types";
import {
  Col,
  Card,
  CardTitle,
  Button,
  CardBody,
  CardText,
  ListGroupItem
} from "reactstrap";

class CardItem extends Component {
  render() {
    const { todo, dispatch } = this.props;
    return (
      <Col md={12} className="card-item">
        <Card>
          <CardBody>
            <CardTitle>{todo.title}</CardTitle>
            <CardText>{todo.content}</CardText>
            <Button onClick={() => this.delete(todo.id)}>Delete</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }

  delete(id) {
    const { dispatch, todo } = this.props;
    const confirmation = confirm(`Are you sure to delete ${todo.title}`);
    if (confirmation)
      dispatch({
        type: DELETE_TODOS_REQUESTED,
        id
      });
  }
}

CardItem.propTypes = {};

export default CardItem;
