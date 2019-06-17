import React from "react";
import { Button, Modal } from "react-bootstrap/";
import { dessinNote } from "./../utils";
import NoteStars from "./noteStars";

const AvisModal = ({
  restaurant,
  show,
  onHide,
  onStarClick,
  rating,
  onRate,
  onChange,
  comment
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          Ajouter un avis sur le restaurant {restaurant.restaurantName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>Adresse : {restaurant.address}</p>
          <p style={styles.noteMoyenne}>
            Note Moyenne actuelle :{" "}
            {!restaurant.averageStars
              ? "Aucune note"
              : dessinNote(restaurant.averageStars)}
          </p>
          <label>Entrez votre avis et votre note :</label>
          <textarea
            onChange={onChange}
            value={comment}
            className="form-control"
            rows="3"
          />
          <NoteStars onStarClick={onStarClick} stars={rating.stars} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          disabled={rating.comment.length === 0 ? true : false}
          onClick={onRate}
        >
          Valider l'avis
        </Button>
        <Button variant="danger" onClick={onHide}>
          Annuler
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const styles = {
  noteMoyenne: { marginTop: 10, marginBottom: 10 },
  note: { marginBottom: 3 },
  avis: { marginBottom: 5 },
  comment: { marginBottom: 3 }
};

export default AvisModal;
