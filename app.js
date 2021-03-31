const produceData = {
    items: ['Avocado', 'Pineapple', 'Mango'],
    addItem(item) {
        this.items.push(item);
    },
    removeItem(index) {
        this.items.splice(index, 1);
    },
    updateItem(index, newItem) {
        this.items[index] = newItem;
    },
};

d3.select('ul')
  .selectAll('li')
  .data(produceData.items, data => data)
  .enter()
  .append('li')
  .text((data) => data);

setTimeout(() => {
    produceData.addItem('Watermelon');
    d3.select('ul')
      .selectAll('li')
      .data(produceData.items, data => data)
      .enter()
      .append('li')
      .classed('added', true)
      .text((data) => data);
}, 2000);

setTimeout(() => {
    produceData.removeItem(0);
    d3.select('ul')
      .selectAll('li')
      .data(produceData.items, data => data)
      .exit()
      .classed('redundant', true);
}, 4000);

setTimeout(() => {
    produceData.updateItem(1, 'Lemon')
    d3.select('ul')
      .selectAll('li')
      .data(produceData.items, data => data)
      .exit()
      .classed('updated', true)
      .text('Lemon');
}, 6000);