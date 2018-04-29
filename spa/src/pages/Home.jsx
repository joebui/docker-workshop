import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { connect } from "react-redux";

import {
  GET_TODOS_REQUESTED,
  ADD_TODOS_REQUESTED
} from "../redux/actions/types";
import CardItem from "./CardItem.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: GET_TODOS_REQUESTED
    });
  }

  render() {
    const {
      homeReducer: { todos },
      dispatch
    } = this.props;
    const { modal } = this.state;

    return (
      <div>
        <Helmet
          title="To-do list"
          meta={[{ name: "description", content: "To do list" }]}
        />

        <Button className="add-new" onClick={() => this.toggle(!modal)}>
          New
        </Button>

        <Row>
          {todos.map((todo, key) => (
            <CardItem key={key} todo={todo} dispatch={dispatch} />
          ))}
        </Row>

        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle={() => this.toggle(!modal)}>
            Add to-do item
          </ModalHeader>
          <Form onSubmit={e => this.submit(e)}>
            <ModalBody>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  name="title"
                  placeholder="Title"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  name="content"
                  name="content"
                  placeholder="Content"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Add
              </Button>{" "}
              <Button color="secondary" onClick={() => this.toggle(!modal)}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }

  toggle(modal) {
    this.setState({
      modal
    });
  }

  submit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const target = e.target;

    dispatch({
      type: ADD_TODOS_REQUESTED,
      title: target.title.value.trim(),
      content: target.content.value.trim()
    });
  }
}

function select(state) {
  return { homeReducer: state.homeReducer };
}

export default connect(select)(Home);
