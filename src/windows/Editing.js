import React from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';



class Edit extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      show: false,
      title: undefined,
      text: undefined,
    };
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleSave(){
  this.data.title=this.input1.value;
  this.data.text=this.input2.value;
  this.setState({show:false})
  }

  getInfo = async ()=>{
    const api_url= await
    fetch('/category/personal');
    const data = await api_url.json();
    console.log(data);
    this.setState({
      title: data.title,
      text: data.text,
    })
  }


  render() {
    return (
      <>
      
        <Button id="button" variant="primary" onClick={this.handleShow}>кнопка</Button>
        <Modal classname="ModalEdit" show={this.state.show} onHide={this.handleClose} >
        
          <Modal.Header closeButton>
            <Modal.Title>Редактирование</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Заголовок:</p>

            <InputGroup>
              <FormControl name="input1" aria-label="Username" aria-describedby="basic-addon1" value={this.state.title} />
            </InputGroup>
            <p>Текст:</p>
            <InputGroup>
              <FormControl  name="input2" as="textarea" aria-label="With textarea" value={this.state.text} />
            </InputGroup>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose} >
              Отмена
              </Button>

            <Button variant="primary" onClick={this.handleSave}>
              Сохранить
              </Button>

          </Modal.Footer>
        </Modal>

      </>
    );
  }
}

export default Edit;