import axios from "axios";

const BASE_URL = "https://www.cbr-xml-daily.ru/latest.js";

async function getExchangeRates() {
  try {
    const response = await axios.get(BASE_URL);
    const rates = response.data;
    const res = 1 / rates.rates.USD;   
    return "1 $:" + res.toFixed(2) + " ₽ ";
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

export default getExchangeRates;
