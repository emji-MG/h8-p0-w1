var tanggal = 31;
var bulan = 1;
var tahun = 2101;


if(tanggal < 1 || tanggal > 31){
  console.log('Harap masukkan tanggal di antara 1-31');
}else{
  console.log('Tanggal yang anda masukkan adalah : ',tanggal);

}

if(bulan<1 || bulan>12)
{
  console.log('Harap masukkan bulan di antara 1-12');
}else
{
  console.log('Bulan yang anda masukkan adalah bulan : ',bulan);
}

if(tahun<1900 || tahun>2200)
{
  console.log('Harap masukkan tahun di antara 1900-2200');

}else
{
  console.log('Tahun yang anda masukkan adalah tahun : ',tahun);
}

if(tanggal>0 && tanggal<32 && bulan>0 && bulan<13 && tahun>1899 && tahun<2200){
  switch(bulan)
{
  case 1: {console.log(tanggal+' Januari '+tahun); break;}
  case 2: {console.log(tanggal+' Februari '+tahun); break;}
  case 3: {console.log(tanggal+' Maret '+tahun); break;}
  case 4: {console.log(tanggal+' April '+tahun); break;}
  case 5: {console.log(tanggal+' Mei '+tahun); break;}
  case 6: {console.log(tanggal+' Juni '+tahun); break;}
  case 7: {console.log(tanggal+' July '+tahun); break;}
  case 8: {console.log(tanggal+' Agustus '+tahun); break;}
  case 9: {console.log(tanggal+' September '+tahun); break;}
  case 10: {console.log(tanggal+' Oktober '+tahun); break;}
  case 11: {console.log(tanggal+' November '+tahun); break;}
  case 12: {console.log(tanggal+' Desember '+tahun); break;}
  default : {console.log('Mohon masukkan format bulan dengan benar');}
}}else
{console.log('Format yang anda masukkan belum benar');}







