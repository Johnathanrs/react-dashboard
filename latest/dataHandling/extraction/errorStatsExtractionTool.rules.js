const errorWordRegexp = new RegExp('\\Werror\\W', 'i');

module.exports = [
  (s) => errorWordRegexp.test(s),
  (s) => false
];