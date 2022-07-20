import httpService from "./httpService";

export function createCard(card) {
  return httpService.post("/cards", card);
}

export function getAll() {
  return httpService.get("/cards/my-cards");
}

export function deleteCard(id) {
  return httpService.delete(`/cards/${id}`);
}

export function getById(id) {
  return httpService.get(`/cards/${id}`);
}

const cardsService = {
  createCard,
  getAll,
  deleteCard,
  getById,
};

export default cardsService;
