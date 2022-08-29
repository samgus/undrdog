import axios from "axios";
import { useState, useEffect } from 'react';
import AutoComplete from "react-autocomplete";

const members = [
    {
      name: "crohaco",
      twitter: "https://twitter.com/crohaco",
      icon:
        "https://pbs.twimg.com/profile_images/959293912690049025/xH9RPWDc_400x400.jpg"
    },
    {
      name: "shimizukawa",
      twitter: "https://twitter.com/shimizukawa",
      icon:
        "https://pbs.twimg.com/profile_images/1452813575/shimizukawa_half1_megane_180_400x400.png"
    },
    {
      name: "takanory",
      twitter: "https://twitter.com/takanory",
      icon: "https://pbs.twimg.com/profile_images/192722095/kurokuri_400x400.jpg"
    },
    {
      name: "tell-k",
      twitter: "https://twitter.com/tell_k",
      icon:
        "https://pbs.twimg.com/profile_images/1045138776224231425/3GD8eWeG_400x400.jpg"
    }
  ];
  
  

const RestaurantsApi = () => {
    const [name, setName] = useState("");
    const [restaurants, setRestaturants] = useState([]);
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/NY/city/New%20York/0',
            headers: {
                'X-RapidAPI-Key': '30f0fda16cmsh6c6e91164055424p18e3cdjsn0e4bb5d13b9d',
                'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setRestaturants(response.data.restaurants);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    return (
        <div>

      <AutoComplete
          getItemValue={(item) => item.name}
          items={members.filter((member) => member.name.includes(name))}
          renderItem={(item, isHighlighted) => (
            <div
              style={{
                verticalAlign: "middle",
                background: isHighlighted ? "lightgray" : "white"
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={item.twitter}
                style={{
                }}
              >
                <img
                  alt="icon"
                  src={item.icon}
                  style={{ width: 30, height: 30 }}
                />
              </a>
              <div style={{ display: "inline-block", minWidth: 200 }}>
                {item.name}
              </div>
            </div>
          )}
          wrapperStyle={{
            position: "relative",
            border: "solid 1px #800"
          }}
          menuStyle={{
            border: "solid 2px #080",
            backgroundColor: "#dfd",
            zIndex: 2,
            position: "absolute",
            top: 30,
            left: 0,
            overflow: "auto",
            maxHeight: 100
          }}
          value={name || ""}
          inputProps={{
            placeholder: "input name",
            style: { fontSize: 14, width: "100%", padding: 3 }
          }}
          onChange={(e) => setName(e.target.value)}
          onSelect={(name) => setName(name)}
        />
      </div>
    )
}

export default RestaurantsApi