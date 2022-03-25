import React, { useState, useEffect } from "react";
import { DropdownList, SlideTransitionGroup } from "react-widgets/cjs";
import { Button, Container, Row, Col } from "react-bootstrap";

const forexList = [
  { id: "AED", name: "United Arab Emirates Dirham" },
  { id: "AFN", name: "Afghan Afghani" },
  { id: "ALL", name: "Albanian Lek" },
  { id: "AMD", name: "Armenian Dram" },
  { id: "ANG", name: "Netherlands Antillean Guilder" },
  { id: "AOA", name: "Angolan Kwanza" },
  { id: "ARS", name: "Argentine Peso" },
  { id: "AUD", name: "Australian Dollar" },
  { id: "AWG", name: "Aruban Florin" },
  { id: "AZN", name: "Azerbaijani Manat" },
  { id: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
  { id: "BBD", name: "Barbadian Dollar" },
  { id: "BDT", name: "Bangladeshi Taka" },
  { id: "BGN", name: "Bulgarian Lev" },
  { id: "BHD", name: "Bahraini Dinar" },
  { id: "BIF", name: "Burundian Franc" },
  { id: "BMD", name: "Bermudan Dollar" },
  { id: "BND", name: "Brunei Dollar" },
  { id: "BOB", name: "Bolivian Boliviano" },
  { id: "BRL", name: "Brazilian Real" },
  { id: "BSD", name: "Bahamian Dollar" },
  { id: "BTC", name: "Bitcoin" },
  { id: "BTN", name: "Bhutanese Ngultrum" },
  { id: "BWP", name: "Botswanan Pula" },
  { id: "BYR", name: "Belarusian Ruble" },
  { id: "BZD", name: "Belize Dollar" },
  { id: "CAD", name: "Canadian Dollar" },
  { id: "CDF", name: "Congolese Franc" },
  { id: "CHF", name: "Swiss Franc" },
  { id: "CLF", name: "Chilean Unit of Account (UF)" },
  { id: "CLP", name: "Chilean Peso" },
  { id: "CNY", name: "Chinese Yuan" },
  { id: "COP", name: "Colombian Peso" },
  { id: "CRC", name: "Costa Rican Colón" },
  { id: "CUC", name: "Cuban Convertible Peso" },
  { id: "CUP", name: "Cuban Peso" },
  { id: "CVE", name: "Cape Verdean Escudo" },
  { id: "CZK", name: "Czech Republic Koruna" },
  { id: "DJF", name: "Djiboutian Franc" },
  { id: "DKK", name: "Danish Krone" },
  { id: "DOP", name: "Dominican Peso" },
  { id: "DZD", name: "Algerian Dinar" },
  { id: "EGP", name: "Egyptian Pound" },
  { id: "ERN", name: "Eritrean Nakfa" },
  { id: "ETB", name: "Ethiopian Birr" },
  { id: "EUR", name: "Euro" },
  { id: "FJD", name: "Fijian Dollar" },
  { id: "FKP", name: "Falkland Islands Pound" },
  { id: "GBP", name: "British Pound Sterling" },
  { id: "GEL", name: "Georgian Lari" },
  { id: "GGP", name: "Guernsey Pound" },
  { id: "GHS", name: "Ghanaian Cedi" },
  { id: "GIP", name: "Gibraltar Pound" },
  { id: "GMD", name: "Gambian Dalasi" },
  { id: "GNF", name: "Guinean Franc" },
  { id: "GTQ", name: "Guatemalan Quetzal" },
  { id: "GYD", name: "Guyanaese Dollar" },
  { id: "HKD", name: "Hong Kong Dollar" },
  { id: "HNL", name: "Honduran Lempira" },
  { id: "HRK", name: "Croatian Kuna" },
  { id: "HTG", name: "Haitian Gourde" },
  { id: "HUF", name: "Hungarian Forint" },
  { id: "IDR", name: "Indonesian Rupiah" },
  { id: "ILS", name: "Israeli New Sheqel" },
  { id: "IMP", name: "Manx pound" },
  { id: "INR", name: "Indian Rupee" },
  { id: "IQD", name: "Iraqi Dinar" },
  { id: "IRR", name: "Iranian Rial" },
  { id: "ISK", name: "Icelandic Króna" },
  { id: "JEP", name: "Jersey Pound" },
  { id: "JMD", name: "Jamaican Dollar" },
  { id: "JOD", name: "Jordanian Dinar" },
  { id: "JPY", name: "Japanese Yen" },
  { id: "KES", name: "Kenyan Shilling" },
  { id: "KGS", name: "Kyrgystani Som" },
  { id: "KHR", name: "Cambodian Riel" },
  { id: "KMF", name: "Comorian Franc" },
  { id: "KPW", name: "North Korean Won" },
  { id: "KRW", name: "South Korean Won" },
  { id: "KWD", name: "Kuwaiti Dinar" },
  { id: "KYD", name: "Cayman Islands Dollar" },
  { id: "KZT", name: "Kazakhstani Tenge" },
  { id: "LAK", name: "Laotian Kip" },
  { id: "LBP", name: "Lebanese Pound" },
  { id: "LKR", name: "Sri Lankan Rupee" },
  { id: "LRD", name: "Liberian Dollar" },
  { id: "LSL", name: "Lesotho Loti" },
  { id: "LTL", name: "Lithuanian Litas" },
  { id: "LVL", name: "Latvian Lats" },
  { id: "LYD", name: "Libyan Dinar" },
  { id: "MAD", name: "Moroccan Dirham" },
  { id: "MDL", name: "Moldovan Leu" },
  { id: "MGA", name: "Malagasy Ariary" },
  { id: "MKD", name: "Macedonian Denar" },
  { id: "MMK", name: "Myanma Kyat" },
  { id: "MNT", name: "Mongolian Tugrik" },
  { id: "MOP", name: "Macanese Pataca" },
  { id: "MRO", name: "Mauritanian Ouguiya" },
  { id: "MUR", name: "Mauritian Rupee" },
  { id: "MVR", name: "Maldivian Rufiyaa" },
  { id: "MWK", name: "Malawian Kwacha" },
  { id: "MXN", name: "Mexican Peso" },
  { id: "MYR", name: "Malaysian Ringgit" },
  { id: "MZN", name: "Mozambican Metical" },
  { id: "NAD", name: "Namibian Dollar" },
  { id: "NGN", name: "Nigerian Naira" },
  { id: "NIO", name: "Nicaraguan Córdoba" },
  { id: "NOK", name: "Norwegian Krone" },
  { id: "NPR", name: "Nepalese Rupee" },
  { id: "NZD", name: "New Zealand Dollar" },
  { id: "OMR", name: "Omani Rial" },
  { id: "PAB", name: "Panamanian Balboa" },
  { id: "PEN", name: "Peruvian Nuevo Sol" },
  { id: "PGK", name: "Papua New Guinean Kina" },
  { id: "PHP", name: "Philippine Peso" },
  { id: "PKR", name: "Pakistani Rupee" },
  { id: "PLN", name: "Polish Zloty" },
  { id: "PYG", name: "Paraguayan Guarani" },
  { id: "QAR", name: "Qatari Rial" },
  { id: "RON", name: "Romanian Leu" },
  { id: "RSD", name: "Serbian Dinar" },
  { id: "RUB", name: "Russian Ruble" },
  { id: "RWF", name: "Rwandan Franc" },
  { id: "SAR", name: "Saudi Riyal" },
  { id: "SBD", name: "Solomon Islands Dollar" },
  { id: "SCR", name: "Seychellois Rupee" },
  { id: "SDG", name: "Sudanese Pound" },
  { id: "SEK", name: "Swedish Krona" },
  { id: "SGD", name: "Singapore Dollar" },
  { id: "SHP", name: "Saint Helena Pound" },
  { id: "SLL", name: "Sierra Leonean Leone" },
  { id: "SOS", name: "Somali Shilling" },
  { id: "SRD", name: "Surinamese Dollar" },
  { id: "STD", name: "São Tomé and Príncipe Dobra" },
  { id: "SVC", name: "Salvadoran Colón" },
  { id: "SYP", name: "Syrian Pound" },
  { id: "SZL", name: "Swazi Lilangeni" },
  { id: "THB", name: "Thai Baht" },
  { id: "TJS", name: "Tajikistani Somoni" },
  { id: "TMT", name: "Turkmenistani Manat" },
  { id: "TND", name: "Tunisian Dinar" },
  { id: "TOP", name: "Tongan Paʻanga" },
  { id: "TRY", name: "Turkish Lira" },
  { id: "TTD", name: "Trinidad and Tobago Dollar" },
  { id: "TWD", name: "New Taiwan Dollar" },
  { id: "TZS", name: "Tanzanian Shilling" },
  { id: "UAH", name: "Ukrainian Hryvnia" },
  { id: "UGX", name: "Ugandan Shilling" },
  { id: "USD", name: "United States Dollar" },
  { id: "UYU", name: "Uruguayan Peso" },
  { id: "UZS", name: "Uzbekistan Som" },
  { id: "VEF", name: "Venezuelan Bolívar Fuerte" },
  { id: "VND", name: "Vietnamese Dong" },
  { id: "VUV", name: "Vanuatu Vatu" },
  { id: "WST", name: "Samoan Tala" },
  { id: "XAF", name: "CFA Franc BEAC" },
  { id: "XAG", name: "Silver (troy ounce)" },
  { id: "XAU", name: "Gold (troy ounce)" },
  { id: "XCD", name: "East Caribbean Dollar" },
  { id: "XDR", name: "Special Drawing Rights" },
  { id: "XOF", name: "CFA Franc BCEAO" },
  { id: "XPF", name: "CFP Franc" },
  { id: "YER", name: "Yemeni Rial" },
  { id: "ZAR", name: "South African Rand" },
  { id: "ZMK", name: "Zambian Kwacha (pre-2013)" },
  { id: "ZMW", name: "Zambian Kwacha" },
  { id: "ZWL", name: "Zimbabwean Dollar" },
];

const Forex = (props) => {
  const [forex, setForex] = useState("1");
  const [forexType, setForexType] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [numericalInput, setNumericalInput] = useState("1");
  const [secondaryInput, setSecondaryInput] = useState("USD");
  const [secondaryAPIData, setSecondaryAPIData] = useState("1");
  const [result, setResult] = useState(1);
  const [content, setContent] = useState("");

  const forexAPI = `http://apilayer.net/api/live?access_key=b7bf0fb87af0b9ef3ff79b78a423f76c&currencies=${filterData}&source=USD&format=1`;
  const secondaryForexAPI = `http://apilayer.net/api/live?access_key=b7bf0fb87af0b9ef3ff79b78a423f76c&currencies=${secondaryInput}&source=USD&format=1`;

  const sortForex = () => {
    const sortByName = forexList.map((chicken) => {
      return {
        name: chicken.name,
      };
    });
    setForexType(sortByName);
  };

  useEffect(() => {
    sortForex();
  }, []);

  const emptyArray = [];

  const displayName = forexType.map((chicken) => {
    return emptyArray.push(chicken.name);
  });

  useEffect(() => {
    getResults();
  }, [props.forexState]);

  const getResults = () => {
    const searchWord = props.forexSearchWord;
    const newFilter = Object.keys(forexList).reduce((result, key) => {
      if (forexList[key].name.includes(searchWord)) {
        result = forexList[key].id;
      }
      return result;
    }, "");
    setFilterData(newFilter);

    setTimeout(() => {
      makeApiCall(newFilter);
    }, 1000);

    const makeApiCall = async (input) => {
      const url = `http://apilayer.net/api/live?access_key=b7bf0fb87af0b9ef3ff79b78a423f76c&currencies=${input}&source=USD&format=1`;
      const res = await fetch(url);
      const rawData = await res.json();
      setForex(rawData.quotes);
      console.log(rawData.quotes);
    };
  };

  const forexArray = forex;

  const handleEventChange = (event) => {
    setNumericalInput(event.target.value);
  };

  const handleSecondaryValueChange = (event) => {
    let searchWord = event;
    const newFilter = Object.keys(forexList).reduce((result, key) => {
      if (forexList[key].name.includes(searchWord)) {
        result = forexList[key].id;
      }
      return result;
    }, "");
    setSecondaryInput(newFilter);

    setTimeout(() => {
      makeSecondaryApiCall(newFilter);
    }, 1000);

    const makeSecondaryApiCall = async (input) => {
      const url = `http://apilayer.net/api/live?access_key=b7bf0fb87af0b9ef3ff79b78a423f76c&currencies=${input}&source=USD&format=1`;
      const res = await fetch(url);
      const rawData = await res.json();
      setSecondaryAPIData(rawData.quotes);
      console.log(rawData.quotes);
    };
  };

  const onSubmit = () => {
    if (secondaryAPIData !== "undefined") {
      console.log(secondaryAPIData !== "undefined");
      setSecondaryAPIData("1");
      let num1 = parseInt("1");
      let num2 = parseInt(numericalInput);
      let num3 = Object.values(forex)[0];
      console.log(num1, num2, num3);
      const ratio = (num3 / num1) * num2;
      setResult(ratio);
      console.log(ratio);
      let rounded = ratio.toFixed(2);

      setContent(
        <p>
          ${numericalInput} {secondaryInput} = ${rounded} {filterData}
        </p>
      );
    }
  };

  return (
    <div>
      <Button size="lg" onClick={onSubmit}>
        Submit
      </Button>{" "}
      <br />
      <br />
      <div className="value">
        Value $
        <input
          className="inputValue"
          type="number"
          placeholder="Input value"
          onChange={handleEventChange}
          defaultValue="1"
        ></input>
      </div>
      <br />
      <DropdownList
        data={emptyArray}
        defaultValue="United States Dollar"
        onChange={handleSecondaryValueChange}
      ></DropdownList>
      <br />
      <div className="result">{content}</div>
      <br />
    </div>
  );
};

export default Forex;
