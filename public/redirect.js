(function () {
  console.log('curernt pahtname: ', window.location.pathname);
  console.log('after slicing:', window.location.pathname.slice(1));
  
  const path = window.location.pathname.slice(1);
  if (path) {
    window.location.href = `/?currentRoute=${path}`;
  }
})();
