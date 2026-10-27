document.querySelectorAll('[data-photo]').forEach((image) => {
  const frame = image.closest('.photo-frame, .photo-tile');
  const showPhoto = () => frame?.classList.add('has-photo');
  const showPlaceholder = () => frame?.classList.remove('has-photo');

  if (image.complete && image.naturalWidth > 0) showPhoto();
  else if (image.complete) showPlaceholder();

  image.addEventListener('load', showPhoto);
  image.addEventListener('error', showPlaceholder);
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const dialog = document.createElement('dialog');
dialog.className = 'photo-dialog';
dialog.setAttribute('aria-label', 'Photograph enlarged');
dialog.innerHTML = '<button class="dialog-close" type="button" aria-label="Close photograph">×</button><figure><img alt=""><figcaption></figcaption></figure>';
document.body.append(dialog);

const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('figcaption');
const closeButton = dialog.querySelector('.dialog-close');

document.querySelectorAll('.photo-tile').forEach((tile) => {
  tile.setAttribute('role', 'button');
  tile.setAttribute('tabindex', '0');
  tile.setAttribute('aria-label', `View ${tile.dataset.caption || 'photograph'} enlarged`);

  const openPhoto = () => {
    const image = tile.querySelector('img');
    if (!image?.naturalWidth) return;
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = tile.dataset.caption || image.alt;
    dialog.showModal();
  };

  tile.addEventListener('click', openPhoto);
  tile.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPhoto();
    }
  });
});

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
