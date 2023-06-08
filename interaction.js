let yaoValues;

function generateRandomYaoValues() {
  yaoValues = [];
  for (let i = 0; i < 6; i++) {
    yaoValues.push(Math.floor(Math.random() * 2)); // Generate random 0 or 1
  }
}

generateRandomYaoValues();
updatePoints(yaoValues);

const data = [
  {
    "bin": "111111",
    "num": "1",
    "char": "&#19904;",
    "name": "Tvoření",
    "upper": "nebe",
    "lower": "nebe",
    "komplnum": "2",
    "komplname": "Přijetí",
    "opnum": "2",
    "opname": "Přijetí",
    "komplbin": "000000",
    "opbin": "000000",
    "moudro": "heh."
  },
  {
    "bin": "000000",
    "num": "2",
    "char": "&#19905;",
    "name": "Země",
    "upper": "země",
    "lower": "země",
    "komplnum": "1",
    "komplname": "Tvoření",
    "opnum": "1",
    "opname": "Tvoření",
    "komplbin": "111111",
    "opbin": "111111",
    "moudro": "hehheh."
  },
  {
    "bin": "100010",
    "num": "3",
    "char": "&#19906;",
    "name": "Rození",
    "upper": "voda",
    "lower": "bouře",
    "komplnum": "4",
    "komplname": "Zrání",
    "opnum": "50",
    "opname": "Založení nového",
    "komplbin": "010001",
    "opbin": "011101",
    "moudro": "heh."
  },
  {
    "bin": "010001",
    "num": "4",
    "char": "&#19907;",
    "name": "Zrání",
    "upper": "hora",
    "lower": "voda",
    "komplnum": "3",
    "komplname": "Rození",
    "opnum": "49",
    "opname": "Převrat",
    "komplbin": "100010",
    "opbin": "101110",
    "moudro": "hehheh."
  },
  {
    "bin": "111010",
    "num": "5",
    "char": "&#19908;",
    "name": "Očekávání",
    "upper": "voda",
    "lower": "nebe",
    "komplnum": "6",
    "komplname": "Svár",
    "opnum": "35",
    "opname": "Pokrok",
    "komplbin": "010111",
    "opbin": "000101",
    "moudro": "heh."
  },
  {
    "bin": "010111",
    "num": "6",
    "char": "&#19909;",
    "name": "Svár",
    "upper": "nebe",
    "lower": "voda",
    "komplnum": "5",
    "komplname": "Očekávání",
    "opnum": "36",
    "opname": "Soumrak",
    "komplbin": "111010",
    "opbin": "101000",
    "moudro": "hehheh."
  },
  {
    "bin": "010000",
    "num": "7",
    "char": "&#19910;",
    "name": "Vojsko",
    "upper": "země",
    "lower": "voda",
    "komplnum": "8",
    "komplname": "Spojení",
    "opnum": "13",
    "opname": "Lidské společenství",
    "komplbin": "000010",
    "opbin": "101111",
    "moudro": "heh."
  },
  {
    "bin": "000010",
    "num": "8",
    "char": "&#19911;",
    "name": "Spojení",
    "upper": "voda",
    "lower": "země",
    "komplnum": "7",
    "komplname": "Vojsko",
    "opnum": "14",
    "opname": "Veliké držení",
    "komplbin": "010000",
    "opbin": "111101",
    "moudro": "hehheh."
  },
  {
    "bin": "111011",
    "num": "9",
    "char": "&#19912;",
    "name": "Podrobení malého",
    "upper": "vítr",
    "lower": "nebe",
    "komplnum": "10",
    "komplname": "Vykročení",
    "opnum": "16",
    "opname": "Nadšení",
    "komplbin": "110111",
    "opbin": "000100",
    "moudro": "heh."
  },
  {
    "bin": "110111",
    "num": "10",
    "char": "&#19913;",
    "name": "Vykročení",
    "upper": "nebe",
    "lower": "jezero",
    "komplnum": "9",
    "komplname": "Podrobení malého",
    "opnum": "15",
    "opname": "Skromnost",
    "komplbin": "111011",
    "opbin": "001000",
    "moudro": "hehheh."
  },
  {
    "bin": "111000",
    "num": "11",
    "char": "&#19914;",
    "name": "Prosperita",
    "upper": "země",
    "lower": "nebe",
    "komplnum": "12",
    "komplname": "Úpadek",
    "opnum": "12",
    "opname": "Úpadek",
    "komplbin": "000111",
    "opbin": "000111",
    "moudro": "heh."
  },
  {
    "bin": "000111",
    "num": "12",
    "char": "&#19915;",
    "name": "Úpadek",
    "upper": "nebe",
    "lower": "země",
    "komplnum": "11",
    "komplname": "Prosperita",
    "opnum": "11",
    "opname": "Prosperita",
    "komplbin": "111000",
    "opbin": "111000",
    "moudro": "hehheh."
  },
  {
    "bin": "101111",
    "num": "13",
    "char": "&#19916;",
    "name": "Lidské společenství",
    "upper": "nebe",
    "lower": "oheň",
    "komplnum": "14",
    "komplname": "Veliké držení",
    "opnum": "7",
    "opname": "Vojsko",
    "komplbin": "111101",
    "opbin": "010000",
    "moudro": "heh."
  },
  {
    "bin": "111101",
    "num": "14",
    "char": "&#19917;",
    "name": "Veliké držení",
    "upper": "oheň",
    "lower": "nebe",
    "komplnum": "13",
    "komplname": "Lidské společenství",
    "opnum": "8",
    "opname": "Spojení",
    "komplbin": "101111",
    "opbin": "000010",
    "moudro": "hehheh."
  },
  {
    "bin": "001000",
    "num": "15",
    "char": "&#19918;",
    "name": "Skromnost",
    "upper": "země",
    "lower": "hora",
    "komplnum": "16",
    "komplname": "Nadšení",
    "opnum": "10",
    "opname": "Vykročení",
    "komplbin": "000100",
    "opbin": "110111",
    "moudro": "heh."
  },
  {
    "bin": "000100",
    "num": "16",
    "char": "&#19919;",
    "name": "Nadšení",
    "upper": "bouře",
    "lower": "země",
    "komplnum": "15",
    "komplname": "Skromnost",
    "opnum": "9",
    "opname": "Podrobení malého",
    "komplbin": "001000",
    "opbin": "111011",
    "moudro": "hehheh."
  },
  {
    "bin": "100110",
    "num": "17",
    "char": "&#19920;",
    "name": "Následování",
    "upper": "jezero",
    "lower": "bouře",
    "komplnum": "18",
    "komplname": "Zkaženost",
    "opnum": "18",
    "opname": "Zkaženost",
    "komplbin": "011001",
    "opbin": "011001",
    "moudro": "heh."
  },
  {
    "bin": "011001",
    "num": "18",
    "char": "&#19921;",
    "name": "Zkaženost",
    "upper": "hora",
    "lower": "vítr",
    "komplnum": "17",
    "komplname": "Následování",
    "opnum": "17",
    "opname": "Následování",
    "komplbin": "100110",
    "opbin": "100110",
    "moudro": "hehheh."
  },
  {
    "bin": "110000",
    "num": "19",
    "char": "&#19922;",
    "name": "Sblížení",
    "upper": "země",
    "lower": "jezero",
    "komplnum": "20",
    "komplname": "Pozorování",
    "opnum": "33",
    "opname": "Ústup",
    "komplbin": "000011",
    "opbin": "001111",
    "moudro": "heh."
  },
  {
    "bin": "000011",
    "num": "20",
    "char": "&#19923;",
    "name": "Pozorování",
    "upper": "vítr",
    "lower": "země",
    "komplnum": "19",
    "komplname": "Sblížení",
    "opnum": "34",
    "opname": "Síla velkého",
    "komplbin": "110000",
    "opbin": "111100",
    "moudro": "hehheh."
  },
  {
    "bin": "100101",
    "num": "21",
    "char": "&#19924;",
    "name": "Skousnutí",
    "upper": "oheň",
    "lower": "bouře",
    "komplnum": "22",
    "komplname": "Půvab",
    "opnum": "48",
    "opname": "Studna",
    "komplbin": "101001",
    "opbin": "011010",
    "moudro": "heh."
  },
  {
    "bin": "101001",
    "num": "22",
    "char": "&#19925;",
    "name": "Půvab",
    "upper": "hora",
    "lower": "oheň",
    "komplnum": "21",
    "komplname": "Skousnutí",
    "opnum": "47",
    "opname": "Tíseň",
    "komplbin": "100101",
    "opbin": "010110",
    "moudro": "hehheh."
  },
  {
    "bin": "000001",
    "num": "23",
    "char": "&#19926;",
    "name": "Odpadání",
    "upper": "hora",
    "lower": "země",
    "komplnum": "24",
    "komplname": "Návraty",
    "opnum": "43",
    "opname": "Rozhodnost",
    "komplbin": "100000",
    "opbin": "111110",
    "moudro": "heh."
  },
  {
    "bin": "100000",
    "num": "24",
    "char": "&#19927;",
    "name": "Návraty",
    "upper": "země",
    "lower": "bouře",
    "komplnum": "23",
    "komplname": "Odpadání",
    "opnum": "44",
    "opname": "Setkání",
    "komplbin": "000001",
    "opbin": "011111",
    "moudro": "hehheh."
  },
  {
    "bin": "100111",
    "num": "25",
    "char": "&#19928;",
    "name": "Nevinnost",
    "upper": "nebe",
    "lower": "bouře",
    "komplnum": "26",
    "komplname": "Podrobení velkého",
    "opnum": "46",
    "opname": "Stoupání",
    "komplbin": "111001",
    "opbin": "011000",
    "moudro": "heh."
  },
  {
    "bin": "111001",
    "num": "26",
    "char": "&#19929;",
    "name": "Podrobení velkého",
    "upper": "hora",
    "lower": "nebe",
    "komplnum": "25",
    "komplname": "Nevinnost",
    "opnum": "45",
    "opname": "Shromáždění",
    "komplbin": "100111",
    "opbin": "000110",
    "moudro": "hehheh."
  },
  {
    "bin": "100001",
    "num": "27",
    "char": "&#19930;",
    "name": "Čelisti",
    "upper": "hora",
    "lower": "bouře",
    "komplnum": "28",
    "komplname": "Převaha velkého",
    "opnum": "28",
    "opname": "Převaha velkého",
    "komplbin": "011110",
    "opbin": "011110",
    "moudro": "heh."
  },
  {
    "bin": "011110",
    "num": "28",
    "char": "&#19931;",
    "name": "Převaha velkého",
    "upper": "jezero",
    "lower": "vítr",
    "komplnum": "27",
    "komplname": "Čelisti",
    "opnum": "27",
    "opname": "Čelisti",
    "komplbin": "100001",
    "opbin": "100001",
    "moudro": "hehheh."
  },
  {
    "bin": "010010",
    "num": "29",
    "char": "&#19932;",
    "name": "Propadání",
    "upper": "voda",
    "lower": "voda",
    "komplnum": "30",
    "komplname": "Záření",
    "opnum": "30",
    "opname": "Záření",
    "komplbin": "101101",
    "opbin": "101101",
    "moudro": "heh."
  },
  {
    "bin": "101101",
    "num": "30",
    "char": "&#19933;",
    "name": "Záření",
    "upper": "oheň",
    "lower": "oheň",
    "komplnum": "29",
    "komplname": "Propadání",
    "opnum": "29",
    "opname": "Propadání",
    "komplbin": "010010",
    "opbin": "010010",
    "moudro": "hehheh."
  },
  {
    "bin": "001110",
    "num": "31",
    "char": "&#19934;",
    "name": "Přitažlivost",
    "upper": "jezero",
    "lower": "hora",
    "komplnum": "32",
    "komplname": "Trvání",
    "opnum": "41",
    "opname": "Ubývání",
    "komplbin": "011100",
    "opbin": "110001",
    "moudro": "heh."
  },
  {
    "bin": "011100",
    "num": "32",
    "char": "&#19935;",
    "name": "Trvání",
    "upper": "bouře",
    "lower": "vítr",
    "komplnum": "31",
    "komplname": "Přitažlivost",
    "opnum": "42",
    "opname": "Přidání",
    "komplbin": "001110",
    "opbin": "100011",
    "moudro": "hehheh."
  },
  {
    "bin": "001111",
    "num": "33",
    "char": "&#19936;",
    "name": "Ústup",
    "upper": "nebe",
    "lower": "hora",
    "komplnum": "34",
    "komplname": "Síla velkého",
    "opnum": "19",
    "opname": "Sblížení",
    "komplbin": "111100",
    "opbin": "110000",
    "moudro": "heh."
  },
  {
    "bin": "111100",
    "num": "34",
    "char": "&#19937;",
    "name": "Síla velkého",
    "upper": "bouře",
    "lower": "nebe",
    "komplnum": "33",
    "komplname": "Ústup",
    "opnum": "20",
    "opname": "Pozorování",
    "komplbin": "001111",
    "opbin": "000011",
    "moudro": "hehheh."
  },
  {
    "bin": "000101",
    "num": "35",
    "char": "&#19938;",
    "name": "Pokrok",
    "upper": "oheň",
    "lower": "země",
    "komplnum": "36",
    "komplname": "Soumrak",
    "opnum": "5",
    "opname": "Očekávání",
    "komplbin": "101000",
    "opbin": "111010",
    "moudro": "heh."
  },
  {
    "bin": "101000",
    "num": "36",
    "char": "&#19939;",
    "name": "Soumrak",
    "upper": "země",
    "lower": "oheň",
    "komplnum": "35",
    "komplname": "Pokrok",
    "opnum": "6",
    "opname": "Svár",
    "komplbin": "000101",
    "opbin": "010111",
    "moudro": "hehheh."
  },
  {
    "bin": "101011",
    "num": "37",
    "char": "&#19940;",
    "name": "Rodina",
    "upper": "vítr",
    "lower": "oheň",
    "komplnum": "38",
    "komplname": "Vzdálení",
    "opnum": "40",
    "opname": "Uvolnění",
    "komplbin": "110101",
    "opbin": "010100",
    "moudro": "heh."
  },
  {
    "bin": "110101",
    "num": "38",
    "char": "&#19941;",
    "name": "Vzdálení",
    "upper": "oheň",
    "lower": "jezero",
    "komplnum": "37",
    "komplname": "Rodina",
    "opnum": "39",
    "opname": "Překážka",
    "komplbin": "101011",
    "opbin": "001010",
    "moudro": "hehheh."
  },
  {
    "bin": "001010",
    "num": "39",
    "char": "&#19942;",
    "name": "Překážka",
    "upper": "voda",
    "lower": "hora",
    "komplnum": "40",
    "komplname": "Uvolnění",
    "opnum": "38",
    "opname": "Vzdálení",
    "komplbin": "010100",
    "opbin": "110101",
    "moudro": "heh."
  },
  {
    "bin": "010100",
    "num": "40",
    "char": "&#19943;",
    "name": "Uvolnění",
    "upper": "bouře",
    "lower": "voda",
    "komplnum": "39",
    "komplname": "Překážka",
    "opnum": "37",
    "opname": "Rodina",
    "komplbin": "001010",
    "opbin": "101011",
    "moudro": "hehheh."
  },
  {
    "bin": "110001",
    "num": "41",
    "char": "&#19944;",
    "name": "Ubývání",
    "upper": "hora",
    "lower": "jezero",
    "komplnum": "42",
    "komplname": "Přidání",
    "opnum": "31",
    "opname": "Přitažlivost",
    "komplbin": "100011",
    "opbin": "001110",
    "moudro": "heh."
  },
  {
    "bin": "100011",
    "num": "42",
    "char": "&#19945;",
    "name": "Přidání",
    "upper": "vítr",
    "lower": "bouře",
    "komplnum": "41",
    "komplname": "Ubývání",
    "opnum": "32",
    "opname": "Trvání",
    "komplbin": "110001",
    "opbin": "011100",
    "moudro": "hehheh."
  },
  {
    "bin": "111110",
    "num": "43",
    "char": "&#19946;",
    "name": "Rozhodnost",
    "upper": "jezero",
    "lower": "nebe",
    "komplnum": "44",
    "komplname": "Setkání",
    "opnum": "23",
    "opname": "Odpadání",
    "komplbin": "011111",
    "opbin": "000001",
    "moudro": "heh."
  },
  {
    "bin": "011111",
    "num": "44",
    "char": "&#19947;",
    "name": "Setkání",
    "upper": "nebe",
    "lower": "vítr",
    "komplnum": "43",
    "komplname": "Rozhodnost",
    "opnum": "24",
    "opname": "Návraty",
    "komplbin": "111110",
    "opbin": "100000",
    "moudro": "hehheh."
  },
  {
    "bin": "000110",
    "num": "45",
    "char": "&#19948;",
    "name": "Shromáždění",
    "upper": "jezero",
    "lower": "země",
    "komplnum": "46",
    "komplname": "Stoupání",
    "opnum": "26",
    "opname": "Podrobení velkého",
    "komplbin": "011000",
    "opbin": "111001",
    "moudro": "heh."
  },
  {
    "bin": "011000",
    "num": "46",
    "char": "&#19949;",
    "name": "Stoupání",
    "upper": "země",
    "lower": "vítr",
    "komplnum": "45",
    "komplname": "Shromáždění",
    "opnum": "25",
    "opname": "Nevinnost",
    "komplbin": "000110",
    "opbin": "100111",
    "moudro": "hehheh."
  },
  {
    "bin": "010110",
    "num": "47",
    "char": "&#19950;",
    "name": "Tíseň",
    "upper": "jezero",
    "lower": "voda",
    "komplnum": "48",
    "komplname": "Studna",
    "opnum": "22",
    "opname": "Půvab",
    "komplbin": "011010",
    "opbin": "101001",
    "moudro": "heh."
  },
  {
    "bin": "011010",
    "num": "48",
    "char": "&#19951;",
    "name": "Studna",
    "upper": "voda",
    "lower": "vítr",
    "komplnum": "47",
    "komplname": "Tíseň",
    "opnum": "21",
    "opname": "Skousnutí",
    "komplbin": "010110",
    "opbin": "100101",
    "moudro": "hehheh."
  },
  {
    "bin": "101110",
    "num": "49",
    "char": "&#19952;",
    "name": "Převrat",
    "upper": "jezero",
    "lower": "oheň",
    "komplnum": "50",
    "komplname": "Založení nového",
    "opnum": "4",
    "opname": "Zrání",
    "komplbin": "011101",
    "opbin": "010001",
    "moudro": "hehheh."
  },
  {
    "bin": "011101",
    "num": "50",
    "char": "&#19953;",
    "name": "Založení nového",
    "upper": "oheň",
    "lower": "vítr",
    "komplnum": "49",
    "komplname": "Převrat",
    "opnum": "3",
    "opname": "Rození",
    "komplbin": "101110",
    "opbin": "100010",
    "moudro": "heh."
  },
  {
    "bin": "100100",
    "num": "51",
    "char": "&#19954;",
    "name": "Bouře",
    "upper": "bouře",
    "lower": "bouře",
    "komplnum": "52",
    "komplname": "Stání",
    "opnum": "57",
    "opname": "Pronikání",
    "komplbin": "001001",
    "opbin": "011011",
    "moudro": "hehheh."
  },
  {
    "bin": "001001",
    "num": "52",
    "char": "&#19955;",
    "name": "Stání",
    "upper": "hora",
    "lower": "hora",
    "komplnum": "51",
    "komplname": "Bouře",
    "opnum": "58",
    "opname": "Radost",
    "komplbin": "100100",
    "opbin": "110110",
    "moudro": "heh."
  },
  {
    "bin": "001011",
    "num": "53",
    "char": "&#19956;",
    "name": "Plynutí",
    "upper": "vítr",
    "lower": "hora",
    "komplnum": "54",
    "komplname": "Provdání",
    "opnum": "54",
    "opname": "Provdání",
    "komplbin": "110100",
    "opbin": "110100",
    "moudro": "hehheh."
  },
  {
    "bin": "110100",
    "num": "54",
    "char": "&#19957;",
    "name": "Provdání",
    "upper": "bouře",
    "lower": "jezero",
    "komplnum": "53",
    "komplname": "Plynutí",
    "opnum": "53",
    "opname": "Plynutí",
    "komplbin": "001011",
    "opbin": "001011",
    "moudro": "heh."
  },
  {
    "bin": "101100",
    "num": "55",
    "char": "&#19958;",
    "name": "Hojnost",
    "upper": "bouře",
    "lower": "oheň",
    "komplnum": "56",
    "komplname": "Putování",
    "opnum": "59",
    "opname": "Odloučení",
    "komplbin": "001101",
    "opbin": "010011",
    "moudro": "hehheh."
  },
  {
    "bin": "001101",
    "num": "56",
    "char": "&#19959;",
    "name": "Putování",
    "upper": "oheň",
    "lower": "hora",
    "komplnum": "55",
    "komplname": "Hojnost",
    "opnum": "60",
    "opname": "Omezení",
    "komplbin": "101100",
    "opbin": "110010",
    "moudro": "heh."
  },
  {
    "bin": "011011",
    "num": "57",
    "char": "&#19960;",
    "name": "Pronikání",
    "upper": "vítr",
    "lower": "vítr",
    "komplnum": "58",
    "komplname": "Radost",
    "opnum": "51",
    "opname": "Bouře",
    "komplbin": "110110",
    "opbin": "100100",
    "moudro": "hehheh."
  },
  {
    "bin": "110110",
    "num": "58",
    "char": "&#19961;",
    "name": "Radost",
    "upper": "jezero",
    "lower": "jezero",
    "komplnum": "57",
    "komplname": "Pronikání",
    "opnum": "52",
    "opname": "Stání",
    "komplbin": "011011",
    "opbin": "001001",
    "moudro": "heh."
  },
  {
    "bin": "010011",
    "num": "59",
    "char": "&#19962;",
    "name": "Odloučení",
    "upper": "vítr",
    "lower": "voda",
    "komplnum": "60",
    "komplname": "Omezení",
    "opnum": "55",
    "opname": "Hojnost",
    "komplbin": "110010",
    "opbin": "101100",
    "moudro": "hehheh."
  },
  {
    "bin": "110010",
    "num": "60",
    "char": "&#19963;",
    "name": "Omezení",
    "upper": "voda",
    "lower": "jezero",
    "komplnum": "59",
    "komplname": "Odloučení",
    "opnum": "56",
    "opname": "Putování",
    "komplbin": "010011",
    "opbin": "001101",
    "moudro": "heh."
  },
  {
    "bin": "110011",
    "num": "61",
    "char": "&#19964;",
    "name": "Vnitřní opravdovost",
    "upper": "vítr",
    "lower": "jezero",
    "komplnum": "62",
    "komplname": "Převaha malého",
    "opnum": "62",
    "opname": "Převaha malého",
    "komplbin": "001100",
    "opbin": "001100",
    "moudro": "hehheh."
  },
  {
    "bin": "001100",
    "num": "62",
    "char": "&#19965;",
    "name": "Převaha malého",
    "upper": "bouře",
    "lower": "hora",
    "komplnum": "61",
    "komplname": "Vnitřní opravdovost",
    "opnum": "61",
    "opname": "Vnitřní opravdovost",
    "komplbin": "110011",
    "opbin": "110011",
    "moudro": "heh."
  },
  {
    "bin": "101010",
    "num": "63",
    "char": "&#19966;",
    "name": "Ukončení",
    "upper": "voda",
    "lower": "oheň",
    "komplnum": "64",
    "komplname": "Nedokončení",
    "opnum": "64",
    "opname": "Nedokončení",
    "komplbin": "010101",
    "opbin": "010101",
    "moudro": "hehheh."
  },
  {
    "bin": "010101",
    "num": "64",
    "char": "&#19967;",
    "name": "Nedokončení",
    "upper": "oheň",
    "lower": "voda",
    "komplnum": "63",
    "komplname": "Ukončení",
    "opnum": "63",
    "opname": "Ukončení",
    "komplbin": "101010",
    "opbin": "101010",
    "moudro": "heh."
  }
]

let currentValue = getPoints()

const hexagramPrevious = document.getElementById('hexagram-previous')
const hexagramNext = document.getElementById('hexagram-next')
const btnInfo = document.getElementById('btn-info')

const detailDialog = document.getElementById('detail')
const detailDialogOpen = document.getElementById('detail-open')
const detailDialogClose = document.getElementById('detail-close')

buttonHexagramChange(detailDialogOpen, data[findIndexByBin(currentValue.join(''))]['char'])

const infoDialog = document.getElementById('info-box')
const infoDialogOpen = document.getElementById('info-box-open')
const infoDialogClose = document.getElementById('info-box-close')

const yaoButtonContainer = document.querySelector('.yao')
let buttons = [];

for (let i = 0; i < 6; i++) {
  let button = document.createElement("button");
  button.className = 'btn-yao'
  button.dataset['state'] = yaoValues[i]

  button.addEventListener("click", (e) => {
    let state = parseInt(e.target.dataset['state'])

    if (state === 1) {
      e.target.dataset['state'] = 0
    }

    if (state === 0) {
      e.target.dataset['state'] = 1
    }

    currentValue[i] = parseInt(e.target.dataset['state'])

    updatePoints(currentValue);
    buttonHexagramChange(detailDialogOpen, data[findIndexByBin(currentValue.join(''))]['char'])
  });

  buttons.push(button);
  yaoButtonContainer.appendChild(button);
}

let currentIndex = findIndexByBin(currentValue.join(''))
let previousValue

function findIndexByBin(bin) {
  return data.findIndex((item) => item.bin === bin)
}

function seriazeButtonPoints(buttons, nextValues) {
  buttons.forEach((btn, idx) => {
    btn.dataset['state'] = nextValues[idx]
  });
}

function buttonHexagramChange(button, char) {
  button.innerHTML = char
}

function handleNextHexagram(e) {
  currentIndex = findIndexByBin(currentValue.join(''))
  const nextIndex = (currentIndex + 1) % data.length
  const nextValues = data[nextIndex]['bin'].split('').map(Number)

  updatePoints(nextValues)
  seriazeButtonPoints(buttons, nextValues)
  buttonHexagramChange(detailDialogOpen, data[nextIndex]['char'])

  currentValue = nextValues
}

function handlePreviousHexagram(e) {
  currentIndex = findIndexByBin(currentValue.join(''))
  const previousIndex = currentIndex - 1 % data.length === -1 ? data.length - 1 : currentIndex - 1
  const previousValues = data[previousIndex]['bin'].split('').map(Number)

  updatePoints(previousValues)
  seriazeButtonPoints(buttons, previousValues)
  buttonHexagramChange(detailDialogOpen, data[previousIndex]['char'])


  currentValue = previousValues
}

function handleDetailOpen(e) {
  const contentEl = detailDialog.querySelector('.content')
  const content = data[findIndexByBin(currentValue.join(''))]

  contentEl.innerHTML = `
    
      <div class="cont-row">
      <div id="number">${content.num}</div>
      <div id="name">${content.name}</div>
      </div>
      <div class="cont-row">
        <div id="column-1">
            <div id="hexagram-uni">${content.char}</div>
            <div id="trigrams">
              <div id="trig-above" class="trigram">${content.upper}</div>
              <div id="trig-below" class="trigram">${content.lower}</div>
            </div>
        </div>
        <div id="column-2">
            <div>
              <div>komplementární:</div>
              <div class="hex-link"><span class="highlight">${content.komplnum}</span> ${content.komplname}</div>
            </div>
            <div>
              <div>opozitní:</div>
              <div class="hex-link"><span class="highlight">${content.opnum}</span> ${content.opname}</div>
            </div>
        </div>
      </div>
    
  `

  detailDialog.showModal()
}

function handleDetailClose(e) {
  detailDialog.close()
}

function handleInfoBoxOpen(e) {
  infoDialog.showModal()
}

function handleInfoBoxClose(e) {
  infoDialog.close()
}

hexagramNext.addEventListener('click', handleNextHexagram)
hexagramPrevious.addEventListener('click', handlePreviousHexagram)
detailDialogOpen.addEventListener('click', handleDetailOpen)
detailDialogClose.addEventListener('click', handleDetailClose)
infoDialogOpen.addEventListener('click', handleInfoBoxOpen)
infoDialogClose.addEventListener('click', handleInfoBoxClose)

