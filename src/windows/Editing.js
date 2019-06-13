import React from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';


class Edit extends React.Component {
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      notes: [
        {
          label: "Митам в Тюмени",
          text: "В эти выходные прошел митап в тюмени, было очень интересно",
        }
      ]
    };
  }
 

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      show: true,
      notes: [
        {
          label: "Митам в Тюмени",
          text: "В эти выходные прошел митап в тюмени, было очень интересно",
        }
      ]
    });
  }

  render() {
    return (
      <>

        <Button id="button" variant="primary" onClick={this.handleShow}>кнопка</Button>
        <Modal classname="Modal" show={this.state.show} onHide={this.handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Редактирование</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Заголовок:</p>

            <InputGroup>
              <FormControl aria-label="Username" aria-describedby="basic-addon1" value={this.state.notes.label} />
            </InputGroup>
            <p>Текст:</p>
            <InputGroup>
              <FormControl as="textarea" aria-label="With textarea" value={this.state.notes.text} />
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

export default Edit;