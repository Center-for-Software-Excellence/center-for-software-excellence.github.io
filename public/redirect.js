(function () {
  console.log('curernt pahtname: ', window.location.pathname);
  console.log('after slicing:', window.location.pathname.slice(1));
  window.location.href = `/${
    window.location.pathname
      ? `?currentRoute=${window.location.pathname.slice(1)}`
      : ''
  }`;
})();
