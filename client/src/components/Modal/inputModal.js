import React from "react";
import Modal from 'react-modal';
import "./inputModal.css"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "black"
  }
};

class InputModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#337ab7";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>

        <button onClick={this.openModal} className="btn btn-default customButton" /*style={{ backgroundColor: "#337ab7", color: "white", borderColor: "#337ab7" }}*/>
          Add/Update Info
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h2>

          <form>
            {this.props.children}
          </form>
        </Modal>
      </div>
    );
  }
}

export default InputModal;
