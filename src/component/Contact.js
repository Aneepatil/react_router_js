import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = () => {
  return (
    <div>
    <Modal/>
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
      </div>
    </div>
  );
};

export default Contact;
