import fs from "fs";

export async function updateDB() {
  let response = await fillDatabaseWithPlayers("male", 20);
  let data = JSON.stringify(response);

  fs.writeFile("playerDatabase.json", data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("playerDatabase.json", "utf8"));
    }
  });
}

// function to fill database with choice of gender and how many cards
const API_KEY = "0e17b684-37b5-40fb-9c4a-ebe7373df100";
async function fillDatabaseWithPlayers(gender, totalNum) {
  let pageCount = 48;
  let playerCount = 0;
  let playerDatabase = [];
  let addedPlayerNames = [];
  // iterate until plater count is 100
  while (playerCount < totalNum) {
    let response = await fetch(
      `https://futdb.app/api/players?page=${pageCount}`,
      {
        headers: {
          "X-AUTH-TOKEN": API_KEY,
        },
      }
    );
    let data = await response.json();
    for (let i = 0; i < data.items.length; i++) {
      // check count is still below (helps elimiate loop terminating early)
      if (playerCount < totalNum) {
        // check in gender matches param and rarirty = 0 (non-rare) or 1 (rare)
        if (
          (data.items[i].gender === gender && data.items[i].rarity === 1) ||
          (data.items[i].gender === gender && data.items[i].rarity === 0)
        ) {
          // check if player already exists, there are some multiples in the API reponses
          if (!addedPlayerNames.includes(data.items[i].name)) {
            // add player name to arr for easy checking
            addedPlayerNames.push(data.items[i].name);
            playerDatabase.push({
              id: data.items[i].id,
              name: data.items[i].name,
              facts: {
                age: data.items[i].age,
                country: data.items[i].nation,
                position: data.items[i].position,
                club: data.items[i].club,
              },
              // image: await getPlayerImage(data.items[i].id),
              image: data.items[i].id,

              rating: data.items[i].rating,
              attributes: {
                stat1: data.items[i].pace,
                stat2: data.items[i].defending,
                stat3: data.items[i].dribbling,
                stat4: data.items[i].passing,
                stat5: data.items[i].physicality,
                stat6: data.items[i].shooting,
                stat7: 83,
              },
            });
            playerCount++;
            console.log(
              `added ${data.items[i].name} to database // rarirty = ${data.items[i].rarity}`
            );
          } else {
            continue;
          }
        }
      }
    }
    pageCount++;
  }
  console.log(`Added ${playerCount} players to database`);
  return playerDatabase;
}

// func to get player image
export async function getPlayerImage(id) {
  const response = await fetch(`https://futdb.app/api/players/${id}/image`, {
    headers: {
      "X-AUTH-TOKEN": API_KEY,
    },
  });
  const data = await response.blob();
  const imageURL = URL.createObjectURL(data);
  // playerImg.setAttribute("src", imageURL);
  return imageURL;
}

// function to get nation logo
async function getPlayerNationImage(id) {
  const response = await fetch(`https://futdb.app/api/nations/${id}/image`, {
    headers: {
      "X-AUTH-TOKEN": API_KEY,
    },
  });
  const data = await response.blob();
  const imageURL = URL.createObjectURL(data);
  // nationIMG.setAttribute("src", imageURL);
  return imageURL;
}

// function to get club logo
async function getPlayerClubImage(id) {
  const response = await fetch(`https://futdb.app/api/clubs/${id}/image`, {
    headers: {
      "X-AUTH-TOKEN": API_KEY,
    },
  });
  const data = await response.blob();
  const imageURL = URL.createObjectURL(data);
  // clubIMG.setAttribute("src", imageURL);
  return imageURL;
}
