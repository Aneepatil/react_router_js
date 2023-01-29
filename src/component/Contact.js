import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Modal from "./Modal";

const Contact = ({ cards }) => {
  
  return (
    <div>
      {cards.map((card) => {
        return (
          <div
            className="ui raised very padded text container segment"
            style={{ marginTop: "80px" }}
            key={card.id}
          >
            <Link to={`/contact/${card.name}`} className="ui header">
              {card.name}
            </Link>
            <p>
              {card.body}
            </p>
          </div>
        );
      })}
      {/* <Modal/>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to='/card/alex' className="ui header">Alex</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          corrupti iste quidem mollitia in ad, earum recusandae eos repudiandae
          necessitatibus!
        </p>
      </div>

      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to='/card/anil' className="ui header">Anil</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          corrupti iste quidem mollitia in ad, earum recusandae eos repudiandae
          necessitatibus!
        </p>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(Contact);
