import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Boat from './components/Boat'

class AllBoats extends React.Component {
  render() {
    return (
        <ScrollView>
          <Text></Text>
          <Text>GetABoat - For Sale</Text>
          <Boat name={"SEA RAY 500 SUNDANCER"} description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                icon_name={"ship"} icon_color={"grey"} name_color={"grey"}
                 image={require("./img/sea_ray.jpg")}/>

          <Boat name={"FOUR WINNS HORIZON 180"} description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                icon_name={"water"} icon_color={"blue"}name_color={"blue"}
                image={require("./img/four_winns.jpg")}/>

          <Boat name={"Flipper 640 ST"} description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                icon_name={"fish"} icon_color={"green"}  name_color={"green"}
                image={require("./img/flipper.jpg")}/>

          <Boat name={"Princess V48"} description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                icon_name={"crown"} icon_color={"pink"} name_color={"pink"}
                image={require("./img/princess.jpg")}/>

          <Boat name={"Bayliner 175 Bowrider"} description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                icon_name={"compass"} icon_color={"orange"} name_color={"orange"}
                image={require("./img/bayliner.jpg")}/>

          <Boat name={"Fairline Targa 47"} description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                icon_name={"anchor"} icon_color={"purple"} name_color={"purple"}
                image={require("./img/fairline.jpg")}/>

        </ScrollView>
    );
  };
};

export default AllBoats;