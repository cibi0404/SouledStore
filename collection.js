
    let allProducts = document.querySelectorAll('.flex-col.items-center');
    let allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    
    function filterProducts() {
        
        let checkedCategories = [];
        let checkedColors = [];
        let checkedSizes = [];
        
        document.querySelectorAll('#category-filters input:checked').forEach(cb => {
            checkedCategories.push(cb.value);
        });
        
        document.querySelectorAll('#color-filters input:checked').forEach(cb => {
            checkedColors.push(cb.value);
        });
        
        document.querySelectorAll('#size-filters input:checked').forEach(cb => {
            checkedSizes.push(cb.value);
        });
        
        if (checkedCategories.length === 0 && checkedColors.length === 0 && checkedSizes.length === 0) {
            allProducts.forEach(p => p.style.display = 'flex');
            return;
        }
        
        allProducts.forEach(product => {
            let cat = product.getAttribute('data-category');
            let col = product.getAttribute('data-color');
            let siz = product.getAttribute('data-size');
            
            let categoryOK = (checkedCategories.length === 0) || checkedCategories.includes(cat);
            let colorOK = (checkedColors.length === 0) || checkedColors.includes(col);
            let sizeOK = (checkedSizes.length === 0) || checkedSizes.includes(siz);
            
            if (categoryOK && colorOK && sizeOK) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        });
    }
    

    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
    

    const products = document.querySelectorAll('[data-category]');

        function filterProducts(query) {
            query = query.trim().toLowerCase();
            let visible = 0;

            products.forEach(card => {
                const category = (card.dataset.category || '').toLowerCase();
                const color    = (card.dataset.color || '').toLowerCase();
                const size     = (card.dataset.size || '').toLowerCase();
                const name     = (card.querySelector('h3')?.textContent || '').toLowerCase();

                const match = !query ||
                    category.includes(query) ||
                    color.includes(query) ||
                    size.includes(query) ||
                    name.includes(query);

                card.style.display = match ? '' : 'none';
                if (match) visible++;
            });

            document.getElementById('no-results').classList.toggle('hidden', visible > 0);
            document.getElementById('no-results-desktop').classList.toggle('hidden', visible > 0);
        }

        document.getElementById('search-input').addEventListener('input', e => filterProducts(e.target.value));
        document.getElementById('search-input-desktop').addEventListener('input', e => filterProducts(e.target.value));
    