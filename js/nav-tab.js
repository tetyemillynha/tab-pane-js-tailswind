function getSiblings(elem){
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}
	return siblings;
};

function initTabNav() {
  // get tab list items
  const tabList = document.querySelectorAll('[data-tab="list"] li a');
  // get tab pane content items
  const tabContent = document.querySelectorAll('[data-tab="content"] .tab-pane');
  if(tabList.length && tabContent.length) {
    //function active tab
    function activeTab(id) {
      var elem = document.querySelector(id);
      var siblings = getSiblings(elem);
      
      //hidde all elmn siblings
      siblings.forEach((section) => {
        section.classList.remove('active');
      });

      //active clicked elmnt
      const direction = elem.dataset.anime;
      elem.classList.add('active', direction);
    }
    //get current clicked item and active tab by id
    tabList.forEach((navLink) => {
      navLink.addEventListener('click', (e) => {
        e.preventDefault();
       
        let navList = "#" + document.getElementById(navLink.id).parentElement.parentElement.id + ' li a';
        var navListLinks = document.querySelectorAll(navList);
        
        //remove active classes
        navListLinks.forEach((links) => {
          links.classList.remove('active');
        });
        //add active class to current clicked item
        navLink.classList.add('active');

        let id = navLink.getAttribute("href");
        activeTab(id);
      });
    });
  }
}
//init tabnav
initTabNav();