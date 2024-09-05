// SOS Alert
document.getElementById('sos-button').addEventListener('click', function() {
    alert('SOS Alert activated!');
    // Optionally, integrate server-side functionality here
});

// Flash Alert
document.getElementById('flash-button').addEventListener('click', function() {
    const flashDuration = 1000; // Flash duration in milliseconds
    document.body.style.backgroundColor = '#e57373'; // Red
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, flashDuration);
    // Flash alert logic
});

// Sound Alert
document.getElementById('sound-button').addEventListener('click', function() {
    const audio = new Audio('alert-sound.mp3'); // Ensure this file is in the same directory
    audio.play();
    // Sound alert logic
});

// Location Sharing
document.getElementById('location-button').addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        alert(`Your location: Latitude ${lat}, Longitude ${lon}`);
        // Optionally, send this data to a server or show it on a map
    }, function(error) {
        alert('Unable to retrieve location. Please allow location access.');
    });
});

// Call Emergency
document.getElementById('call-button').addEventListener('click', function() {
    window.location.href = 'tel:181'; // Replace with an actual emergency number
});
