// PRICING TABLE
const url_oto =
  'https://api.coingecko.com/api/v3/simple/price?ids=ontime&vs_currencies=usd%2Ceur&include_market_cap=true&include_24hr_vol=true';
const url_ito =
  'https://api.coingecko.com/api/v3/simple/price?ids=intime&vs_currencies=usd%2Ceur&include_market_cap=true&include_24hr_vol=true';
const url_usd =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false';
const url_eur =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=15&page=1&sparkline=false';
const url_ampmcx = 'https://api.ampmcx.com/api/v1/ticker';

function fillCustomRow(
  number,
  name,
  symbol,
  data_custom,
  base,
  data_custom_base,
  supply
) {
  const custom_name = name.toLowerCase();
  const custom_base_name = base.toLowerCase();
  return `<tr>
    <th scope="row">${number}</th>
    <td class="priority0 table-cell-center"><img src="../assets/images/${name}.png" alt="InTime Logo" class="coin-img"><span class="coin-name">${name}</span><span class="coin-symbol">${symbol}</span></td>
    <td class = "priority1">${symbol}</td>
    <td>$${data_custom[custom_name].usd.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}</td>
    <td class="priority1">€${data_custom[custom_name].eur.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )}</td>
    <!-- <td class="priority2">$${data_custom[
      custom_name
    ].usd_24h_vol.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })}</td> -->
    <td class="priority2">$${(
      (data_custom[custom_name].usd_market_cap + 1) *
      supply *
      data_custom[custom_name].usd
    ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
    <td class="priority0">${(
      data_custom[custom_name].usd / data_custom_base[custom_base_name].usd
    ).toLocaleString(undefined, {
      // minimumFractionDigits: 2,
      // maximumFractionDigits: 2,
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 3,
    })}</td>
  </tr>`;
}

function fillRow(data_usd, data_eur, index, base, data_custom_base) {
  var number = index + 1;
  const custom_base_name = base.toLowerCase();
  return `<tr>
    <th scope="row">${number}</th>
    <td class="priority0 table-cell-center"><img src="${
      data_usd[index].image
    }" alt="Coin Logo" class="coin-img"><span class="coin-name">${
    data_usd[index].name
  }</span><span class="coin-symbol">${data_usd[
    index
  ].symbol.toUpperCase()}</span></td>
    <td class = "priority1">${data_usd[index].symbol.toUpperCase()}</td>
    <td>$${data_usd[index].current_price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}</td>
    <td class="priority1">€${data_eur[index].current_price.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )}</td>
    <!-- <td class="priority2">$${data_usd[index].total_volume.toLocaleString(
      undefined,
      {
        maximumFractionDigits: 0,
      }
    )}</td> -->
    <td class="priority2">$${data_usd[
      index
    ].market_cap.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
    <td class="priority0">${(
      data_usd[index].current_price / data_custom_base[custom_base_name].usd
    ).toLocaleString(undefined, {
      // minimumFractionDigits: 2,
      // maximumFractionDigits: 2,
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 3,
    })}</td>
  </tr>`;
}

function fillTable(data_usd, data_eur, start, end, base, data_custom_base) {
  var table = '';
  for (var i = start; i < end; i++) {
    var row = fillRow(data_usd, data_eur, i, base, data_custom_base);
    table += row;
  }
  return table;
}

const fetchValue = async () => {
  const [
    response_oto,
    response_ito,
    response_usd,
    response_eur,
    response_ampmcx,
  ] = await Promise.all([
    fetch(url_oto),
    fetch(url_ito),
    fetch(url_usd),
    fetch(url_eur),
    fetch(url_ampmcx),
  ]);
  const data_oto = await response_oto.json();
  const data_ito = await response_ito.json();
  const data_usd = await response_usd.json();
  const data_eur = await response_eur.json();
  const data_ampmcx = await response_ampmcx.json();
  const price_oto = data_ampmcx.data.ticker.find(
    (t) => t.tradingPair === 'OTO_USDT'
  );
  const price_ito = data_ampmcx.data.ticker.find(
    (t) => t.tradingPair === 'ITO_USDT'
  );
  const usdt_eur = data_eur.find((d) => d.symbol === 'usdt').current_price;
  data_oto.ontime = {
    ...data_oto.ontime,
    usd: price_oto.lastPrice,
    eur: usdt_eur * price_oto.lastPrice,
  };
  data_ito.intime = {
    ...data_ito.intime,
    usd: price_ito.lastPrice,
    eur: usdt_eur * price_ito.lastPrice,
  };
  const dataDiv = document.querySelector('.pricing-table-data');
  const html = `${fillCustomRow(
    '*',
    'OnTime',
    'OTO',
    data_oto,
    'OnTime',
    data_oto,
    21042034
  )}
  ${fillCustomRow('*', 'InTime', 'ITO', data_ito, 'OnTime', data_oto, 21043975)}
  ${fillTable(data_usd, data_eur, 0, data_usd.length, 'OnTime', data_oto)}`;
  dataDiv.innerHTML = html;
};

fetchValue();
