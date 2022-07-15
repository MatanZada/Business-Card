import httpService from "./httpService";

export function createCard(card) {
  return httpService.post("/cards", card);
}

export function getAll() {
  return httpService.get("/cards");
}

const cardsService = {
  createCard,
  getAll,
};
export default cardsService;
