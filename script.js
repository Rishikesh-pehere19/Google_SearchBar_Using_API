let input_inputxt = document.getElementById('inputxt');
let input_btn = document.getElementById('btn');
let output_desc = document.getElementById('output');




input_btn.addEventListener('click',()=>{
  fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBeFvRQKe_sXh2xGheEWnRWbYnhd4Fqemc&cx=f1430e400000f44ed&q=`+ input_inputxt.value)
  
  .then(response => response.json())
    .then(data=>{
      console.log(data);
      
      for(i = 0; i < data.items.length ; i++)
      {
        
        document.getElementById("output").innerHTML+=`<h1>${data.items[i].title}</h1><br><a target="" href="${data.items[i].formattedUrl}">${data.items[i].formattedUrl}</a><p>${data.items[i].htmlSnippet}</p>`;
      }
      
      // document.write(data.items[i].title);

  })
  .catch(error => console.log("there is an error"+error))
})
