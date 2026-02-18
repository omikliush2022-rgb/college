document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.task-form');
  const tasksContainer = document.querySelector('.tasks');
  const template = document.querySelector('#task-template');

  let isEditing = false;
  let currentEditedElement = null;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const taskData = {
      title: formData.get('title'),
      description: formData.get('description'),
      priority: formData.get('priority')
    };

    if (isEditing && currentEditedElement) {
      currentEditedElement.querySelector('.task-card__title').textContent =
        taskData.title;

      currentEditedElement.querySelector('.task-card__desc').textContent =
        taskData.description;

      currentEditedElement.querySelector('.task-card__priority').textContent =
        taskData.priority;

      isEditing = false;
      currentEditedElement = null;
      form.reset();
      return;
    }

    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.task-card');

    card.querySelector('.task-card__title').textContent = taskData.title;
    card.querySelector('.task-card__desc').textContent = taskData.description;
    card.querySelector('.task-card__priority').textContent = taskData.priority;

    tasksContainer.appendChild(clone);
    form.reset();
  });

  tasksContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.task-card');
    if (!card) return;

    if (event.target.classList.contains('delete-btn')) {
      const confirmed = confirm('Видалити завдання?');
      if (confirmed) {
        card.remove();
      }
    }
    if (event.target.classList.contains('edit-btn')) {
      isEditing = true;
      currentEditedElement = card;

      form.title.value =
        card.querySelector('.task-card__title').textContent;
      form.description.value =
        card.querySelector('.task-card__desc').textContent;
      form.priority.value =
        card.querySelector('.task-card__priority').textContent;
    }
  });
});
