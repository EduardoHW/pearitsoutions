window.addEventListener("load", () => 
{
  const loader = document.querySelector(".Loader");
  
  loader.classList.add("Loader--hidden");
  
  loader.addEventListener("transitionend", () => 
  { 
    document.body.removeChild(loader);
  });
});
  
function Drops_C() 
{
  document.getElementById("Client_drop").classList.toggle("Show_C");
}
  
window.onclick = function(event) 
{
  if (!event.target.matches('.Drop')) 
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('Show_C')) 
      {
        openDropdown.classList.remove('Show_C');
      }
    }
  }
}
  
function Drops_S() 
{
  document.getElementById("Services_drop").classList.toggle("Show_S");
}
  
window.onclick = function(event) 
{
  if (!event.target.matches('.Services_drop')) 
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('Show_S')) 
      {
        openDropdown.classList.remove('Show_S');
      }
    }
  }
}
  
  
function openPage() 
{
  var x = document.getElementById("search").value;
  
  if (x === "Why" || x === "About" || x == "Home") 
  {
    window.location.href = "Homepage.html";
  }
  
  if (x === "Developer" || x === "CEO") 
  {
    window.location.href = "Team members.html";
  }
  
  if (x === "Chat" || x === "Since") 
  {
    window.location.href = "Partners (Crisp).html";
  }
}
  
function checkSearchInput()
{
  let searchInput = document.getElementById('search').value;
  
  if (searchInput.trim() === "") 
  {
  alert("Please fill the search bar");
  }
  
  else 
  {
  (alert("No results, please search something else"))
  {}
  }
}
  
function FeedbackClear() 
{
  alert("Thank you for your feedback!");
  document.getElementById("Feedback_input").reset();
  return false;
}
  
  