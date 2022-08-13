import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "../services/cardsService";
import { toast } from "react-toastify";

const DeleteCard = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(params.id);
      toast("your successfully deleted the card!👏");

      navigate("/my-cards");
    };

    deleteCard();
  }, []);

  return null;
};

export default DeleteCard;
