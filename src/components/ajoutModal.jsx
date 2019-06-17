import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class AjoutModal extends Component {
  state = {
    restaurant: {
      restaurantName: "",
      address: "",
      lat: 0,
      long: 0,
      placeId: 0,
      averageStars: null,
      ratings: []
    }
  };
  handleChange = event => {
    let restaurant = { ...this.state.restaurant };
    restaurant[event.target.name] = event.target.value;
    this.setState({ restaurant });
  };
  render() {
    const { onHide, show, onAjout } = this.props;
    const { restaurant } = this.state;
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="nomNouveauResto">
              Entrez le nom de ce restaurant :
            </label>
            <input
              style={{ marginBottom: 15 }}
              className="form-control"
              id="nomNouveauResto"
              value={restaurant.restaurantName}
              onChange={this.handleChange}
              name="restaurantName"
            />
            <label htmlFor="adresseNouveauResto">Entrez l'adresse :</label>
            <input
              className="form-control"
              id="adresseNouveauResto"
              value={restaurant.address}
              onChange={this.handleChange}
              name="address"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            disabled={
              this.state.restaurant.restaurantName.length === 0 ? true : false
            }
            onClick={() => onAjout(restaurant)}
          >
            Ajouter le restaurant
          </Button>
          <Button
            variant="success"
            disabled={
              this.state.restaurant.restaurantName.length === 0 ? true : false
            }
            onClick={() => onAjout(restaurant)}
          >
            Ajouter le restaurant et ajouter un avis
          </Button>
          <Button variant="danger" onClick={onHide}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AjoutModal;
