const backgroundImage = document.querySelector(".background");

// DYNAMIC BACKGROUND :
backgroundImage.style.backgroundImage =
  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/images/weather/holiday-weather/orlando-usa.jpg')";
backgroundImage.style.filter = "brightness(85%)";
backgroundImage.style.backgroundSize = "cover";
backgroundImage.style.backgroundPosition = "center center";
backgroundImage.style.backgroundRepeat = "no-repeat";
