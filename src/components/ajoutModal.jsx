import React from "react";
import { Modal, Button } from "react-bootstrap/";

const AjoutModal = ({ onHide, show, onAjout, restaurant, onChange }) => {
  const disabled =
    restaurant.restaurantName !== "" && restaurant.address !== ""
      ? false
      : true;
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
            onChange={onChange}
            name="restaurantName"
          />
          <label htmlFor="adresseNouveauResto">Entrez l'adresse :</label>
          <input
            className="form-control"
            id="adresseNouveauResto"
            value={restaurant.address}
            onChange={onChange}
            name="address"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          disabled={disabled}
          onClick={() => onAjout(restaurant)}
        >
          Ajouter le restaurant
        </Button>
        <Button
          variant="success"
          disabled={disabled}
          onClick={() => onAjout(restaurant, "showAvis")}
        >
          Ajouter le restaurant et donner un avis
        </Button>
        <Button variant="danger" onClick={onHide}>
          Annuler
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AjoutModal;
