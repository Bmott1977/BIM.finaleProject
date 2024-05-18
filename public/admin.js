const getMenu = async () => {
    router.get('/menu', async (_, response) => {
        const collection = await getCollection('foodtruck-api', 'menu')
        const movies = await collection.find().toArray()
        response.json(movies)
    })

}
const addMenu = async() =>{
    const addMenuItemButton = document.getElementById('addMenuItemButton');

addMenuItemButton.addEventListener('click', () => {
  const newMenuItem = {
    name: 'New Menu Item',
    description: 'This is a new menu item.',
    price: 10.00
  }})
   const response = await fetch(`/api/menu/${menuId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedMenu)
  });
  if (response.ok) {
    alert('Menu updated successfully');
  } else {
    alert('Error updating menu');
  }
};
    
const updateMenuForm = document.getElementById('update-menu-form');
    updateMenuForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const menuId = document.getElementById('menu-id').value;
      const menuName = document.getElementById('menu-name').value;
      const menuDescription = document.getElementById('menu-description').value;
      const menuPrice = document.getElementById('menu-price').value;
      const updatedMenu = {
        name: menuName,
        description: menuDescription,
        price: menuPrice
      };
      const response = await fetch(`/api/menu/${menuId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMenu)
      });
      if (response.ok) {
        alert('Menu updated successfully');
      } else {
        alert('Error updating menu');
      }
    });
  
const deleteMenuItemButton = document.getElementById('deleteMenuItemButton');

deleteMenuItemButton.addEventListener('click', () => {
  const menuItemId = deleteMenuItemButton.dataset.menuItemId;

  fetch(`api/menu/${menuItemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete menu item');
    }
    console.log('Menu item deleted successfully');
  })
  .catch(error => {
    console.error('Error deleting menu item:', error);
  });
});
const getEvents = async () => {
    const response = await fetch('/api/events')
    const body = await response.json()
}
eventForm.addEventListener('submit'), (e) => {
    e.preventDefault();
    const id = document.getElementById('eventId').value;
    const name = document.getElementById('eventName').value;
    const location = document.getElementById('eventLocation').value;
    const dates = document.getElementById('eventDates').value;
    const hours = document.getElementById('eventHours').value;
}
    if (id) 
      // Update menu item
      fetch(`/api/event/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, location, dates, hours })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update menu item');
        }
        console.log('Menu item updated successfully');
        loadMenuItems();
        resetMenuForm();
      })
      const deleteevent = document.getElementById('deletebutton');

      deleteevent.addEventListener('click', () => {
        const eventItemId = deletebutton.dataset.eventItemId;
      
        fetch(`api/events/:id${eventItemId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete menu item');
          }
          console.log('event item deleted successfully');
        })
        .catch(error => {
          console.error('Error deleting event item:', error);
        });
      });
      addEventButton.addEventListener('click', () => {
        const name = prompt('Enter event name:');
        const location = prompt('Enter event location:');
        const dates = prompt('Enter event dates:');
        const hours = prompt('Enter event hours:');
      
        const newRow = eventsTable.insertRow();
        const nameCell = newRow.insertCell();
        const locationCell = newRow.insertCell();
        const datesCell = newRow.insertCell();
        const hoursCell = newRow.insertCell();
      
        nameCell.textContent = name;
        locationCell.textContent = location;
        datesCell.textContent = dates;
        hoursCell.textContent = hours;
      
        // Send a request to the API to add the event
        fetch('/api/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, location, dates, hours })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to add event');
          }
          console.log('Event added successfully');
        })
        .catch(error => {
          console.error('Error adding event:', error);
        });
      });
      // commit