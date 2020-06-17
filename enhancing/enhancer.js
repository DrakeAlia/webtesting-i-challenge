module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // If the item enhancement level is 20, the enhancement level is not changed.
  if (item.enhancement < 20) {
  // The item's enhancement increases by 1.
    item.enhancement = item.enhancement + 1;
  }
  return { ...item };
  }

function fail(item) {
  // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  if (item.enhancement < 15) {
    item.durability = item.durability - 5
  // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  } else {
    item.durability = item.durability - 10
  }
  // If the item's enhancement level is greater than 16, the enhancement level decreases by 1 
  if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1
  }
    return { ...item };
  }

function repair(item) {
// returns a new item with the durability restored to 100
  item.durability = 100
  return { ...item };
}

function get(item) {
  if(item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`
  }
  return { ...item };
}
