import React from "react";
import { Button, Modal } from "react-bootstrap/";
import { dessinNote } from "./../utils";

const DescriptionModal = ({ restaurant, show, onHide, onOpenRating }) => {
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
            },${
              restaurant.long
            }&heading=151.78&pitch=-0.76&key=AIzaSyBf4GOhxsge_3kuAKHKDDiWLVEbl6t-1dw`}
          />
          <p style={styles.noteMoyenne}>
            Note Moyenne :{" "}
            {!restaurant.averageStars
              ? "Aucune note actuellement"
              : dessinNote(restaurant.averageStars)}
          </p>
          <div>
            <p style={styles.avis}>
              {restaurant.ratings && restaurant.ratings.length > 0
                ? "Voici les derniers avis postés : "
                : "Aucun avis posté"}
            </p>
            {restaurant.ratings &&
              restaurant.ratings.map((rating, index) => (
                <React.Fragment key={index}>
                  <p style={styles.note}>{dessinNote(rating.stars)}</p>
                  <p style={styles.comment}>{rating.comment}</p>
                  <p>Auteur : {rating.auteur}</p>
                  {index !== restaurant.ratings.length - 1 && (
                    <hr style={styles.hr} />
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => onOpenRating(restaurant)}>
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
  comment: { marginBottom: 3 },
  hr: { marginTop: 5, marginBottom: 5 }
};

export default DescriptionModal;
