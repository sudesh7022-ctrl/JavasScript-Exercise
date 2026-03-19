// @ts-check

export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let count = 0;

  for (let i = 0; i < limes.length; i++) {
    if (wedges >= wedgesNeeded) break;

    count++;

    if (limes[i] === "small") {
      wedges += 6;
    } else if (limes[i] === "medium") {
      wedges += 8;
    } else if (limes[i] === "large") {
      wedges += 10;
    }
  }

  return count;
}

export function remainingOrders(timeLeft, orders) {
  let i = 0;

  while (i < orders.length && timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[i]);
    i++;
  }

  return orders.slice(i);
}