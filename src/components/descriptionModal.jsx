import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { dessinNote } from "./../utils";

const DescriptionModal = ({ restaurant, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          Avis sur le restaurant {restaurant.restaurantName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>Adresse : {restaurant.address}</p>
          <img
            alt="streetView"
            src={`https://maps.googleapis.com/maps/api/streetview?size=468x300&location=${
              restaurant.lat
            },${restaurant.long}&heading=151.78&pitch=-0.76&key=key`}
          />
          <p style={styles.noteMoyenne}>
            Note Moyenne : {dessinNote(restaurant.moyenneNote)}
          </p>
          <div>
            <p style={styles.avis}>Voici les derniers avis postés :</p>
            {Object.keys(restaurant).length > 0 &&
              restaurant.ratings.map((rating, index) => (
                <React.Fragment key={index}>
                  <p style={styles.note}>
                    {dessinNote(restaurant.moyenneNote)}
                  </p>
                  <p style={styles.comment}>{rating.comment}</p>
                </React.Fragment>
              ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onHide}>
          Ajouter un avis
        </Button>
        <Button variant="danger" onClick={onHide}>
          Fermer
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

export default DescriptionModal;
