
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
    