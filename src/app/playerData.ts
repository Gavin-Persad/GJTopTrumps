interface FootballPlayer {
  id: number;
  name: string;
  facts: {
    age: number;
    country: string;
    position: string;
    club: string;
  };
  image: string;
  rating: number;
  attributes: {
    stat1: number;
    stat2: number;
    stat3: number;
    stat4: number;
    stat5: number;
    stat6: number;
    stat7: number;
  };
}

interface StatTitles {
  statTitle1: string;
  statTitle2: string;
  statTitle3: string;
  statTitle4: string;
  statTitle5: string;
  statTitle6: string;
  statTitle7: string;
}

export const statTitles: StatTitles = {
  statTitle1: "Attacking",
  statTitle2: "Defending",
  statTitle3: "Skill",
  statTitle4: "Movement",
  statTitle5: "Power",
  statTitle6: "Mentality",
  statTitle7: "Goalkeeping",
};

export const footballPlayerData: FootballPlayer[] = [
  {
    id: 1,
    name: "Guglielmo Vicario",
    facts: {
      age: 26,
      country: "Italy",
      position: "Goalkeeper",
      club: "Tottenham Hotspur",
    },
    image:
      "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/03112023/288c4b23-a3ce-4800-bfee-82604f9ee77a.jpg?operations=fit(707:)&w=707&quality=100",
    rating: 84,
    attributes: {
      stat1: 19,
      stat2: 16,
      stat3: 29,
      stat4: 56,
      stat5: 46,
      stat6: 35,
      stat7: 83,
    },
  },
  {
    id: 2,
    name: "Cristian Romero",
    facts: {
      age: 25,
      country: "Argentina",
      position: "Central Defender",
      club: "Tottenham Hotspur",
    },
    image:
      "https://tmssl.akamaized.net/images/foto/galerie/cristian-romero-tottenham-1661849537-91344.jpg?lm=1661849554",
    rating: 83,
    attributes: {
      stat1: 60,
      stat2: 85,
      stat3: 57,
      stat4: 72,
      stat5: 66,
      stat6: 65,
      stat7: 9,
    },
  },
  {
    id: 3,
    name: "Harry Kane",
    facts: {
      age: 29,
      country: "England",
      position: "Striker",
      club: "Bayer Munich",
    },
    image: "https://www.soccerbible.com/media/135605/kane-5-min.jpg",
    rating: 90,
    attributes: {
      stat1: 88,
      stat2: 43,
      stat3: 81,
      stat4: 74,
      stat5: 87,
      stat6: 81,
      stat7: 11,
    },
  },
  {
    id: 4,
    name: "Luka Modric",
    facts: {
      age: 37,
      country: "Croatia",
      position: "Central Midfielder",
      club: "Real Madrid",
    },
    image:
      "https://imageio.forbes.com/specials-images/imageserve/65d47bae988113674c790633/Real-Madrid-CF-v-Girona-FC---LaLiga-EA-Sports/960x0.jpg?format=jpg&width=1440",
    rating: 86,
    attributes: {
      stat1: 76,
      stat2: 72,
      stat3: 85,
      stat4: 83,
      stat5: 72,
      stat6: 80,
      stat7: 10,
    },
  },
  {
    id: 5,
    name: "Erling Haaland",
    facts: {
      age: 22,
      country: "Norway",
      position: "Striker",
      club: "Manchester City",
    },
    image:
      "https://imageio.forbes.com/specials-images/imageserve/645e171afce09061884bd1eb/Manchester-City-v-Nottingham-Forest---Premier-League/960x0.jpg?format=jpg&amp;width=1440",
    rating: 91,
    attributes: {
      stat1: 85,
      stat2: 31,
      stat3: 82,
      stat4: 88,
      stat5: 85,
      stat6: 76,
      stat7: 11,
    },
  },
  {
    id: 6,
    name: "Mohamed Salah",
    facts: {
      age: 31,
      country: "Egypt",
      position: "Right Winger",
      club: "Liverpool",
    },
    image:
      "https://compote.slate.com/images/d9128723-8661-402f-a047-6cbe0fc4ea9c.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=840",
    rating: 89,
    attributes: {
      stat1: 80,
      stat2: 41,
      stat3: 81,
      stat4: 90,
      stat5: 82,
      stat6: 78,
      stat7: 12,
    },
  },
  {
    id: 7,
    name: "Bukayo Saka",
    facts: {
      age: 21,
      country: "England",
      position: "Right Winger",
      club: "Arsenal",
    },
    image:
      "https://www.telegraph.co.uk/content/dam/football/2019/09/20/TELEMMGLPICT000210104265_trans_NvBQzQNjv4Bqe6PBxd5BvZ719A_-H8kxJ1SuV4bkJ03YRVYrh5-NmFs.jpeg?imwidth=680",
    rating: 86,
    attributes: {
      stat1: 75,
      stat2: 61,
      stat3: 80,
      stat4: 86,
      stat5: 76,
      stat6: 77,
      stat7: 10,
    },
  },
  {
    id: 8,
    name: "Kylian Mbappe",
    facts: {
      age: 24,
      country: "France",
      position: "Striker",
      club: "Real Madrid",
    },
    image:
      "https://dohanews.co/wp-content/uploads/2022/07/Kylian-Mbappe-6.jpeg",
    rating: 91,
    attributes: {
      stat1: 83,
      stat2: 31,
      stat3: 81,
      stat4: 92,
      stat5: 85,
      stat6: 75,
      stat7: 11,
    },
  },
  {
    id: 9,
    name: "Jordan Pickford",
    facts: {
      age: 29,
      country: "England",
      position: "Goalkeeper",
      club: "Everton",
    },
    image:
      "https://www.footballinsider247.com/static/uploads/1/2023/01/Jordan-Pickford-2023-768x501.jpeg",
    rating: 82,
    attributes: {
      stat1: 19,
      stat2: 16,
      stat3: 29,
      stat4: 56,
      stat5: 46,
      stat6: 35,
      stat7: 83,
    },
  },
  {
    id: 10,
    name: "Thiago Silva",
    facts: {
      age: 38,
      country: "Brazil",
      position: "Central Defender",
      club: "Chelsea",
    },
    image:
      "https://www.telegraph.co.uk/content/dam/football/2021/11/23/TELEMMGLPICT000278657691_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg?imwidth=680",
    rating: 84,
    attributes: {
      stat1: 60,
      stat2: 85,
      stat3: 57,
      stat4: 72,
      stat5: 66,
      stat6: 65,
      stat7: 9,
    },
  },
];
