import axios from "axios";
import { RGBToXYZ } from "cie-colorconverter";

let state = true;

let bri;

let threshold;

export const baseURL =
  "https://192.168.8.100/api/874QL7ofMqr79G4d0-y5mfW5MbYjAnCI90AevDL7";

export async function hue(Verb) {
  let verb = Verb ? Verb : null;

  console.log(verb);
  const response = await axios.get(baseURL + verb);
  console.log(response.data);
  return await response.data;
}

export function turnOnOff(Verb) {
  let verb = Verb ? Verb : null;

  console.log(baseURL + verb + "/action");

  const response = axios.put(baseURL + verb + "/action", {
    on: state,
  });

  state = !state;

  return response.data;
}

export function handleBrightness(Verb, value) {
  let verb = Verb ? Verb : null;

  clearTimeout(threshold);

  threshold = setTimeout(() => {
    console.log(baseURL + verb + "/action");
    axios.put(baseURL + verb + "/action", {
      bri: value,
    });
  }, 20);
}

export function changeColor(e ,verb) {
    const colors = getComputedStyle(e.target, "")
      .getPropertyValue("background-color")
      .replace(/[rgb]/g, "")
      .replaceAll(",", "")
      .replace("(", "")
      .replace(")", "")
      .split(" ", 3);

    const r = colors[0];
    const g = colors[1];
    const b = colors[2];

    const [X, Y, Z] = RGBToXYZ([r, g, b], {
      rgbModel: "Wide Gamut RGB",
      refWhite: "D65",
      gammaModel: "1.0",
    });

    let x = X;
    let y = Y;
    let z = Z;

    console.log(x, y, z);

    axios.put(baseURL + verb + "/action", {
      sat: 254,
      xy: [x / (x + y + z), y / (x + y + z)],
    });
}
