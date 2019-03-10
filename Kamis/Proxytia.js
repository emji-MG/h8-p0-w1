var nama= '';
var peran= '';

//nama = prompt('Please input your name : ');
/*<form id = "form1">
//Name : <input name="name" type="text" size="20">

*/
var nama ='exa'
var peran = 'Penyihir'

console.log('Welcome to Proxytia');
console.log('Please input your name : ') ;
console.log('Please input your peran : ');

if(peran==''&& nama =='')
{console.log('Nama harus diisi!');
}else if(peran=='')
{
  console.log('Halo '+nama+' Pilih peranmu untuk memulai game!');
}else if(peran=='Ksatria'){
  console.log('Selamat datang di Dunia Proxytia,',nama);
  console.log('Halo '+peran,nama+' kamu dapat menyerang dengan senjatamu!');
}
else if(peran=='Tabib'){
  console.log('Selamat datang di Dunia Proxytia,',nama);
  console.log('Sebagai '+peran, nama+' kamu akan membantu temanmu yang terluka.');
}
else{
  console.log('Selamat datang di Proxytia,',nama);
  console.log('Sebagai '+peran, nama+' ciptakan keajaiban yang membantu kemenanganmu');
}
