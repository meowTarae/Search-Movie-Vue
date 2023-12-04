import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { IResponseMovie } from "../src/Types/MovieTypes";

const { OMDB_URL, OMDB_API_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { imdbID } = req.query;
  if (!imdbID) {
    throw new Error("전달받은 ID 값이 없습니다.");
  }
  try {
    const responseValue: IResponseMovie = await (
      await axios.get(
        `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`,
      )
    ).data;
    res.status(200).json(responseValue);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error("Axios Error");
    }
  }
}
