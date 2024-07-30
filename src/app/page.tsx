import Card from "./components/Card";
import Game from "./game";
import { footballPlayerData, statTitles } from "./playerData";

export default function Home() {
  interface props {
    statTitle1: string;
  }

  return (
    <main className="">
      <Game />
      {/* <Card
        footballPlayerData={footballPlayerData[3]}
        statTitle1={statTitles.statTitle1}
        statTitle2={statTitles.statTitle2}
        statTitle3={statTitles.statTitle3}
        statTitle4={statTitles.statTitle4}
        statTitle5={statTitles.statTitle5}
        statTitle6={statTitles.statTitle6}
        statTitle7={statTitles.statTitle7}
      /> */}
    </main>
  );
}
