const Apto = require("../models/Apto");


export const createApto = (req, res) => {};

export const getAptos = async (req, res) => {
  //modificado
  const { page = 1, limit = 10 } = req.query;
  const apto = await Apto.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .lean(); //Importante
  //.lean para evtar el error de handlebars
  console.log("This is the page", page);
  let paginator = Paginator(apto.length);
  res.render("index", { apto, paginator });
};

export const getAptoById = async (req, res) => {
  // console.log(req.params.id)
  let apto = await Apto.find({ ID: req.params.id }).lean();
  console.log(apto);
  res.render("aptamento", { apto });
};

export const filterApto = async (req, res) => {
  let response = req.query;
  // let responseNumber = response.map(parseFloat(element){
  //     return (element)
  // })
  //  response = response.forEach(element => {
  //     element = parseFloat(element)
  // });

  const { page = 1, limit = 10 } = req.query;
  let { max, min, hab } = response;
  max = parseFloat(max);
  min = parseFloat(min);
  hab = parseInt(hab);
  if (response) {
    try {
      const apto = await Apto.find({
        Precio: {
          ...(max ? { $lte: max } : {}),
          ...(min ? { $gte: min } : {}),
        },
        ...(hab ? { Habitaciones: hab } : {}),
      })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .lean();

      if (apto.length > 0) {
        let paginator = Paginator(apto.length);
        console.log(paginator);
        res.render("index", { apto, response, paginator });
      } else {
        let nofound = true;
        res.render("index", { nofound, response });
      }
    } catch (err) {
      const apto = await Apto.find({
        ...(hab ? { Habitaciones: hab } : {}),
      })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .lean();

      if (apto.length > 0) {
        let paginator = Paginator(apto.length);
        res.render("index", { apto, response, paginator });
      } else {
        let nofound = true;
        res.render("index", { nofound, response });
      }
    }
  }
};

export const consulta = async (req, res) => {
  let response = req.body;

  let { lat, lon, km } = response;
  lat = parseFloat(lat);
  lon = parseFloat(lon);
  km = parseFloat(km);

  let aptos = await Apto.find().lean(); //Importante

  let preciosEnArea = [];
  let aptosEnArea = [];

  aptos.forEach((apto) => {
    if (
      getDistanceFromLatLonInKm(lat, lon, apto.Latitud, apto.Longitud) <= km
    ) {
      preciosEnArea.push(apto.Precio);
      aptosEnArea.push(apto);
    }
  });

  if (preciosEnArea.length > 0) {
    let sum = preciosEnArea.reduce(
      (previous, current) => (current += previous)
    );
    let avg = Math.round(sum / preciosEnArea.length);

    res.render("consulta", { aptosEnArea, avg, response });
    console.log(preciosEnArea);
    console.log(avg);
  } else {
    res.render("consulta", { response });
  }
};

//<--- Funciones de ayuda ----->

function Paginator(lenApto) {
  // console.log(lenApto)
  if (lenApto == 10) {
    return true;
  }
}

// <--------- Distancia de LatLon a km ------>
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1); // deg2rad below
  let dLon = deg2rad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c; // Distance in km
  return d;
}
//<----grados to dadianes ---->
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
