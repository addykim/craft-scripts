const regex = /(?<start>.*?)(\(\d{1,5},\s\d{1,5},\s\d{1,5},\s\d{1,5}\)+)(?<end>.+)/;

const removeIrrelevantSizes = str => {
  const matches = str.match(regex);

  if (matches && matches.groups) {
      const { start, end } = matches.groups;
      return [start, removeIrrelevantSizes(end)].map(section => section.trim())
        .join('');
  }
  return str;
}

const format = text => {
  return text.split('\n')
    .filter(str => str)
    .map(str => removeIrrelevantSizes(str))
    .join('');
};

module.exports = format;