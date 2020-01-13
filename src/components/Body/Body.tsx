import React, { useState } from 'react';
import { SVGMap } from 'react-svg-map';
import USA from '@svg-maps/usa';

import Papers from './Papers';
import Stats from './Stats';
import Books from './Books';

import './Body.css';
import 'react-svg-map/lib/index.css';

const diseases = ['--', 'Diabetes', 'Cancer', 'Flu'];
const years = ['2014', '2015', '2016', '2017', '2018', '2019'];

const Body: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | undefined>();
  const [selectedDisease, setSelectedDisease] = useState<string>('--');
  const [selectedYear, setSelectedYear] = useState<string>('2014');

  const onLocationClick = (input: any) => setSelectedState(input.target.id);
  const isLocationSelected = ({ id }: { id: string }) => id === selectedState;
  const onDiseaseChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDisease(target.value);
  };
  const onYearChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(target.value);
  };

  return (
    <>
      <h3>{selectedState}</h3>
      <div>
        <SVGMap className={'map'} map={USA} isLocationSelected={isLocationSelected} onLocationClick={onLocationClick} />
        <Stats disease={selectedDisease} state={selectedState} year={selectedYear} />
        <select onChange={onDiseaseChange}>
          {diseases.map((disease, index) => <option key={index} value={disease}>{disease}</option>)}
        </select>
        <select onChange={onYearChange}>
          {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
        </select>
        <Papers searchTerm={selectedDisease} />
        <Books searchTerm={selectedDisease} />
      </div>
    </>
  );
};

export default Body;

/*
  function calc() {
    var newer = [];
    for (var x in stateNums) {
      newer.push(stateNums[x]);
    }

    newer.sort();

    var index = 1;
    for (var x in stateNums) {
      for (var y = 1; y < 57; y++) {
        if (stateNums[x] == y) {
          $("#" + x).css(
            "fill",
            "rgb(" +
              parseInt(255 * (index / 51)) +
              "," +
              parseInt(255 * (index / 51)) +
              "," +
              parseInt(255 * (index / 51)) +
              ")"
          );
          index++;
        }
      }
    }
  }


  function cdcCall(year) {
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //xmlhttp.onreadystatechange=function() {
    // 	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    //		xmlDoc=xmlhttp.responseXML;

    //var list = xmlDoc.getElementsByTagName("r");
    //		console.log("here " + xmlDoc.getElementsByTagName("r").childNodes[0].nodeValue);
    //	}
    //	}

    xmlhttp.open("GET", "D100-resp.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var list = xmlDoc.getElementsByTagName("c");
    var parents = [];
    for (var x = 0; x < list.length; x++) {
      if (list[x].getAttribute("l") == year) {
        parents.push(list[x].parentNode);
      }
    }

    for (var y = 0; y < parents.length; y++) {
      list = parents[y].getElementsByTagName("c");
      for (var w = 0; w < list.length; w++) {
        if (list[w].getAttribute("l") == stateNames[dataHold.name]) {
          return parseFloat(
            parents[y].childNodes[4].getAttribute("v") / 1000
          ).toFixed(2);
        }
      }
    }
  }

  function cdcNationCall(year) {
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", "D100-resp.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var list = xmlDoc.getElementsByTagName("c");
    var parents = [];
    for (var x = 0; x < list.length; x++) {
      if (list[x].getAttribute("l") == year) {
        parents.push(list[x].parentNode);
      }
    }

    for (var y = 0; y < parents.length; y++) {
      list = parents[y].getElementsByTagName("c");
      for (var w = 0; w < list.length; w++) {
        if (list[w].getAttribute("c") == "1") {
          return parseFloat(
            parents[y].childNodes[4].getAttribute("dt") / 1000
          ).toFixed(2);
        }
      }
    }
  }

  function cdcSpread() {
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", "D100-resp.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var list = xmlDoc.getElementsByTagName("c");
    var parents = [];
    var parentals = [];
    var spread = [];
    var hold = [];
    for (var x = 0; x < list.length; x++) {
      if (list[x].getAttribute("l") == $("#year").val()) {
        parents.push(list[x].parentNode);
      }
    }

    for (var x in stateNames) {
      for (var y = 0; y < parents.length; y++) {
        list = parents[y].getElementsByTagName("c");
        for (var w = 0; w < list.length; w++) {
          if (list[w].getAttribute("l") == stateNames[x]) {
            hold[x] = parents[y].childNodes[4].getAttribute("v");
          }
        }
      }
    }

    var newHold = getSortedKeys(hold);

    var index = 1;
    for (var x in newHold) {
      $("#" + newHold[x]).css(
        "fill",
        "rgb(" +
          parseInt(255 * (index / 51)) +
          "," +
          parseInt(255 * (index / 51)) +
          "," +
          parseInt(255 * (index / 51)) +
          ")"
      );
      index++;
    }
  }
*/
