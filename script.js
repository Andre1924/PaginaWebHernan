const menu = document.getElementById('navbarMenu');
const links = document.querySelectorAll('#navbarMenu .nav-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 576) {
      const bsCollapse = bootstrap.Collapse.getInstance(menu);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});
