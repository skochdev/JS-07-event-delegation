/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

const tagsContainer = document.querySelector('.js-tags');

let selectedTags = new Set(); // Set has O(1) complexity, "constant time"

function onFilterButtonClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btn = e.target;
  const tagValue = btn.dataset.value
  const isActive =  selectedTags.has(tagValue)

  if (isActive) {
    selectedTags.delete(tagValue);
  } else {
    selectedTags.add(tagValue);
  }
  btn.classList.toggle('tags__btn--active')
  console.log(selectedTags);
}

tagsContainer.addEventListener('click', onFilterButtonClick);

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
//
// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const currentlyActiveBtn = document.querySelector('.tags__btn--active');
//
//
//   currentlyActiveBtn?.classList.remove('tags__btn--active');
//   e.target.classList.add('tags__btn--active');
//   selectedTag = e.target.dataset.value;
// }
//
// tagsContainer.addEventListener('click', onTagsContainerClick);

