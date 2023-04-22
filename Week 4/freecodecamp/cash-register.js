function checkCashRegister(price, cash, cid) {
    const INSUFFICIENT_FUNDS = {status: "INSUFFICIENT_FUNDS", change: []}
    const CLOSED = {status: "CLOSED", change: cid}
    const OPEN = {status: "OPEN", change: []}
    let totalCid = cidTotal();
    let remain = parseFloat((cash - price).toFixed(2));
  
    if(totalCid < remain) {
      return INSUFFICIENT_FUNDS;
    }
  
    if(totalCid === remain) {
      return CLOSED;
    }
  
    let cashTypes = [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01],
    ];
    for(let i = 0; i < cashTypes.length; i++) {
      let cashType = cashTypes[i][0];
      let cashValue = cashTypes[i][1];
      let totalCash = cid.find(item => item[0] === cashType)[1];
  
      if(remain > cashValue && remain > totalCash ) { // if due balance is bigger than available blance
        remain -= totalCash;
        OPEN.change.push([cashType, totalCash]);
      }else if(remain > cashValue && totalCash > remain) { // if there are more balance than due balance
        let pay = Math.floor(remain / cashValue) * cashValue;
        remain -= pay;
        remain = parseFloat(remain.toFixed(2));
        OPEN.change.push([cashType, pay]);
      }
    }
    if(remain > 0) {
      return INSUFFICIENT_FUNDS;
    }
    return OPEN;
  
    function cidTotal() {
      return parseFloat(cid.reduce((a,b) => a + b[1], 0).toFixed(2));
    }
  }