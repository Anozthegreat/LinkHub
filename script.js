document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const linksGrid = document.getElementById('linksGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const addLinkBtn = document.getElementById('addLinkBtn');
    const addLinkModal = document.getElementById('addLinkModal');
    const closeBtn = document.querySelector('.close-btn');
    const linkForm = document.getElementById('linkForm');
    const categoryItems = document.querySelectorAll('.categories li');

    // Display all links initially
    displayLinks(links);

    // Filter links by category
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Update active category
            categoryItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterLinks(category);
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', searchLinks);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchLinks();
        }
    });

    // Modal functionality
    addLinkBtn.addEventListener('click', function() {
        addLinkModal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        addLinkModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === addLinkModal) {
            addLinkModal.style.display = 'none';
        }
    });

    // Add new link
    linkForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('linkTitle').value;
        const url = document.getElementById('linkUrl').value;
        const category = document.getElementById('linkCategory').value;
        const description = document.getElementById('linkDescription').value;
        
        const newLink = {
            id: links.length + 1,
            title,
            url,
            category,
            description,
            dateAdded: new Date().toISOString().split('T')[0]
        };
        
        links.unshift(newLink); // Add to beginning of array
        displayLinks(links);
        
        // Reset form and close modal
        linkForm.reset();
        addLinkModal.style.display = 'none';
        
        // Show the new link by filtering to its category
        const activeCategory = document.querySelector('.categories li.active').getAttribute('data-category');
        if (activeCategory !== 'all' && activeCategory !== category) {
            filterLinks(activeCategory);
        }
    });

    // Function to display links
    function displayLinks(linksToDisplay) {
        linksGrid.innerHTML = '';
        
        if (linksToDisplay.length === 0) {
            linksGrid.innerHTML = '<p class="no-results">No links found. Try a different search or category.</p>';
            return;
        }
        
        linksToDisplay.forEach(link => {
            const linkCard = document.createElement('div');
            linkCard.className = 'link-card';
            linkCard.innerHTML = `
                <h3>${link.title}</h3>
                <p>${link.description || 'No description available'}</p>
                <a href="${link.url}" target="_blank" rel="noopener noreferrer">Visit Site <i class="fas fa-external-link-alt"></i></a>
                <div class="link-meta">
                    <span class="link-category">${link.category}</span>
                    <span>Added: ${link.dateAdded}</span>
                </div>
            `;
            linksGrid.appendChild(linkCard);
        });
    }

    // Function to filter links by category
    function filterLinks(category) {
        if (category === 'all') {
            displayLinks(links);
            return;
        }
        
        const filteredLinks = links.filter(link => link.category === category);
        displayLinks(filteredLinks);
    }

    // Function to search links
    function searchLinks() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (!searchTerm) {
            const activeCategory = document.querySelector('.categories li.active').getAttribute('data-category');
            filterLinks(activeCategory);
            return;
        }
        
        const searchResults = links.filter(link => 
            link.title.toLowerCase().includes(searchTerm) || 
            (link.description && link.description.toLowerCase().includes(searchTerm)) ||
            link.category.toLowerCase().includes(searchTerm)
        );
        
        displayLinks(searchResults);
    }
});