import React from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';


class Creation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>

        <Button id="button" variant="primary" onClick={this.handleShow}>Note</Button>
        <Modal classname="Modal" show={this.state.show} onHide={this.handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Новая заметка</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Заголовок:</p>

            <InputGroup>
              <FormControl aria-label="Username" aria-describedby="basic-addon1" />
            </InputGroup>
            <p>Текст:</p>
            <InputGroup>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose} >
              Отмена
              </Button>

            <Button variant="primary" onClick={this.handleClose}>
              Сохранить
              </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Creation;