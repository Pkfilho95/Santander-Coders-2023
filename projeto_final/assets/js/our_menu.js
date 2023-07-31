function changeLink(link) {
    let links = document.getElementsByName('our-menu-link')
    links.forEach(element => {
        element.setAttribute('class', 'nav-link rounded-pill py-2 px-4')
    });
    link.setAttribute('class', 'nav-link rounded-pill py-2 px-4 link-selected')
}