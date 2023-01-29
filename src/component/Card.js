import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteCard, fetchUsers } from "../actions/cardActions";

const Card = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const card = useSelector((state) => {
    return state.cards.find((card) => card.name === user);
  });

  const navigate = useNavigate();

  const { name, body } = card;

  const users = useSelector((state) => {
    return state.users;
  });

  
  useEffect(() => {
    dispatch(fetchUsers());
  },[]);

  const onClickButton = () => {
    const id = card.id;
    dispatch(deleteCard(id));

    navigate("/contact");
  };

  return users.map((user) => {
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
        key={user.id}
      >
        <h1 className="ui header">Name:- {user.name}</h1>
        <p>E-mail:-{user.email}</p>
        <button
          className="ui primery right floated button"
          onClick={onClickButton}
        >
          Delete
        </button>
      </div>
    );
  });
};

export default Card;
