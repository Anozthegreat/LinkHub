document.addEventListener('DOMContentLoaded', function() {
    // Sample data - in a real app, this would come from a database
    let links = [
        {
            id: 1,
            title: 'MDN Web Docs',
            url: 'https://developer.mozilla.org',
            category: 'development',
            description: 'Resources for developers, by developers',
            dateAdded: '2023-05-15'
        },
        {
            id: 2,
            title: 'Dribbble',
            url: 'https://dribbble.com',
            category: 'design',
            description: 'Show and tell for designers',
            dateAdded: '2023-06-20'
        },
        {
            id: 3,
            title: 'Notion',
            url: 'https://notion.so',
            category: 'productivity',
            description: 'All-in-one workspace for notes, tasks, wikis, and databases',
            dateAdded: '2023-04-10'
        },
        {
            id: 4,
            title: 'Coursera',
            url: 'https://coursera.org',
            category: 'education',
            description: 'Online courses from top universities and companies',
            dateAdded: '2023-07-05'
        },
        {
            id: 5,
            title: 'YouTube',
            url: 'https://youtube.com',
            category: 'entertainment',
            description: 'Watch and share videos',
            dateAdded: '2023-03-18'
        },
        {
            id: 6,
            title: 'GitHub',
            url: 'https://github.com',
            category: 'development',
            description: 'Where the world builds software',
            dateAdded: '2023-02-22'
        },
        {
            id: 7,
            title: 'Behance',
            url: 'https://behance.net',
            category: 'design',
            description: 'Showcase and discover creative work',
            dateAdded: '2023-08-12'
        },
        {
            id: 8,
            title: 'Trello',
            url: 'https://trello.com',
            category: 'productivity',
            description: 'Collaborate, manage projects, and reach new productivity peaks',
            dateAdded: '2023-01-30'
        },
        {
            id: 9,
            title: 'Godot Engine',
            url: 'https://godotengine.org',
            category: 'development',
            description: 'A powerful open-source game engine',
            dateAdded: '2024-01-30'
        },
        {
            id: 10,
            title: 'Free Media Heck Yeah',
            url: 'https://fmhy.net/',
            category: 'productivity',
            description: 'The largest collection of free stuff on the internet',
            dateAdded: '2024-02-21'
        }
    ];

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