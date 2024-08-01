interface FootballPlayer {
  id: number;
  name: string;
  facts: {
    age: number;
    country: number; // country id num
    position: string;
    club: number; // clulb id num
  };
  image: number; // player id number
  rating: number;
  attributes: {
    stat1: number;
    stat2: number;
    stat3: number;
    stat4: number;
    stat5: number;
    stat6: number;
  };
}

interface StatTitles {
  statTitle1: string;
  statTitle2: string;
  statTitle3: string;
  statTitle4: string;
  statTitle5: string;
  statTitle6: string;
}

export const statTitles: StatTitles = {
  statTitle1: "Pace", 
  statTitle2: "Defending", 
  statTitle3: "Dribbling", 
  statTitle4: "Passing", 
  statTitle5: "Physicality",
  statTitle6: "Shooting", 
};
