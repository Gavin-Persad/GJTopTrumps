import Game from "./game";
import { footballPlayerData, statTitles } from "./playerData";
import { updateDB } from "./updateDB";

export default async function Home() {
  // await updateDB();
  return (
    <main className="">
      <Game />
    </main>
  );
}
