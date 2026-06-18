import { pages } from "../../data/routes";

export default function handler(req, res) {
  res.status(200).json(pages);
}