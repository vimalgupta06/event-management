document.addEventListener("DOMContentLoaded", () => {
  const eventForm = document.getElementById("eventForm");
  const eventList = document.getElementById("eventList");

  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventLocation = document.getElementById("eventLocation").value;
    const eventCategory = document.getElementById("eventCategory").value;
    const eventCapacity = document.getElementById("eventCapacity").value;
    const eventDescription = document.getElementById("eventDescription").value;

    // Handle image upload
    const eventImageInput = document.getElementById("eventImage");
    let eventImageURL = "";
    if (eventImageInput.files && eventImageInput.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        eventImageURL = e.target.result;

        // Append the event with the image
        const eventItem = document.createElement("div");
        eventItem.className = "event-item";
        eventItem.innerHTML = `
          <h3>${eventName}</h3>
          <p>Date: ${eventDate}</p>
          <p>Location: ${eventLocation}</p>
          <p>Category: ${eventCategory}</p>
          <p>Capacity: ${eventCapacity}</p>
          <p>Description: ${eventDescription}</p>
          ${eventImageURL ? `<img src="${eventImageURL}" alt="${eventName} Image" style="max-width: 200px;">` : ""}
        `;
        eventList.appendChild(eventItem);
      };
      fileReader.readAsDataURL(eventImageInput.files[0]);
    } else {
      // Append the event without the image
      const eventItem = document.createElement("div");
      eventItem.className = "event-item";
      eventItem.innerHTML = `
        <h3>${eventName}</h3>
        <p>Date: ${eventDate}</p>
        <p>Location: ${eventLocation}</p>
        <p>Category: ${eventCategory}</p>
        <p>Capacity: ${eventCapacity}</p>
        <p>Description: ${eventDescription}</p>
      `;
      eventList.appendChild(eventItem);
    }

    // Reset form
    eventForm.reset();
  });
});
