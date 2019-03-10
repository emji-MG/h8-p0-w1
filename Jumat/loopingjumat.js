var word = 'I love coding';
var word2 = 'I will become fullstack developer';
var coding = 2;
var developer = 20;

console.log('LOOPING PERTAMA')
{
  while(coding<=20)
  {
    console.log(coding+' - '+word);
    coding = coding+2;
  }

}


console.log('LOOPING KEDUA')
{
  while(developer>0)
  {
    console.log(developer+' - '+word2);
    developer = developer-2;
  }
}

//soal 2
console.log('\nSoal No. 2')
console.log('LOOPING PERTAMA')
for(coding=1; coding<=20;coding++)
{
  console.log(coding+' - '+word);
}

console.log('LOOPING KEDUA')
for(developer=20; developer>0;developer--)
{
  console.log(developer+' - '+word2);
}


//soal 3
console.log('\nSoal No.3')
console.log('Cek Ganjil Genap')
var counter = 0;
var counter1 = 0;

//cek ganjil genap
for(counter=1;counter<=100;counter++)
{
  if(counter%2 == 0)
  {
    console.log("GENAP");
    //console.log('"'+counter+' adalah bilangan Genap"');
  }else
  {
    console.log("GANJIL");
    //console.log('"'+counter+' adalah bilangan Ganjil"');
  }
}

//cek kelipatan 3 dengan pertambahan 2
console.log('\ncek kelipatan 3 dengan pertambahan 2');
for(counter=1;counter<=100;counter += 2)
{
  if(counter%3 == 0)
  {
    console.log('"'+counter+' kelipatan 3"');
  }else
  {
    console.log('""');
    //console.log(counter," bukan kelipatan 3");
  }
}

/*counter = 1;
while(counter<=100)
{
  if(counter%3 ==0)
  {
    console.log(counter," kelipatan 3");
  }
  
  counter +=2;
}*/
//cek kelipatan 6 dengan pertambahan 5
console.log('\ncek kelipatan 6 dengan pertambahan 5');
for(counter=1;counter<=100;counter += 5)
{
  if(counter%6 == 0)
  {
    console.log('"'+counter+' kelipatan 6"');
  }else
  {
    console.log('""');
    //console.log(counter," bukan kelipatan 6");
  }
}

//cek kelipatan 10 dengan pertambahan 9
console.log('\ncek kelipatan 10 dengan pertambahan 9');
for(counter=1;counter<=100;counter += 9)
{
  if(counter%10 == 0)
  {
    console.log('"'+counter+' kelipatan 10"');
  }else
  {
    console.log('""');
    //console.log(counter," bukan kelipatan 10");
  }
}






