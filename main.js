const allzone = document.getElementById("allzone"),
  currentTime = document.getElementById("currentTime");

currentTime.innerText = new Date().toLocaleString("en-us", {
  timeStyle: "full",
});

fetch('timezone.json')
  .then(res => res.json())
  .then(data => {

    console.log(data)
    data.map(e=> {
        const option = document.createElement('option');
        option.innerText = e.value;
        allzone.appendChild(option);

        
        
        
    })

    
  })
  .catch(err => console.log(err));

  allzone.addEventListener("change" , time(allzone.value))
  function time(e) {
    // console.log(allzone.value);

    const ctime = e
    currentTime.innerText = ctime
  }