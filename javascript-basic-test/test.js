const regex = /[aeiou]/ig;

const arr = [ 'qw', 'wd', 'df', 'ft', 'tr' ];

const stringA = 'azerd';

if (arr.find(word => word.match(regex))) {
  const mapped = arr.map((element) => element.match(regex).length);
  const position = mapped.find(e=>e = Math.max(...mapped));
  console.log(arr[position]);

} else {
  console.log("Can´t find!");
}





console.log(stringA.match(regex).length);