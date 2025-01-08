// Funzione per aprire Google Calendar e scaricare il file .ics
function addToCalendar() {
    // Apri Google Calendar
    const googleCalendarUrl = "https://www.google.com/calendar/render?action=TEMPLATE&text=Raoul+Sara+Matrimonio&dates=20250517T150000Z/20250517T180000Z&details=Festeggiamo+insieme+il+nostro+matrimonio!&location=Ristorante+La+Foresta,+Via+dei+Laghi+12,+Rocca+di+Papa";
    window.open(googleCalendarUrl, '_blank');
  
    // Scarica il file .ics
    const icsFileUrl = "Matrimonio-Raoul-Sara.ics";
    const link = document.createElement('a');
    link.href = icsFileUrl;
    link.download = "Matrimonio-Raoul-Sara.ics";
    link.click();
  }
  
  // Aggiungi un event listener al link
  document.getElementById('calendar-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita il comportamento predefinito del link
    addToCalendar();
  });