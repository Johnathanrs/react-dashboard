const errorWordRegexp = new RegExp('\\Werror\\W', 'i');
const endpointWordRegexp = new RegExp('endpoint', 'i');

module.exports = [
  (s) => errorWordRegexp.test(s),
  (s) => false,
  (s) => endpointWordRegexp.test(s)
];
