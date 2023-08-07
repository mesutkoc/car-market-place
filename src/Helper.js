const getFilters = (productData, filterType) => {
    return productData.reduce((acc, obj) => {
        let key = obj[filterType]
        if (!acc.includes(key)) {
            acc.push(key)
        }
        return acc
    }, [])
}

const filterProducts = (b) => {
    console.log(b);
    const products = JSON.parse(localStorage.getItem("products"));
    const filteredArray = products.filter((obj) => {
        if (b.length > 0) {
            return b.includes(obj.brand) && obj.model === 'Wrangler';
        }
        else {
            return obj.model === 'Wrangler'
        }

    });

    return filteredArray;
}

export { getFilters, filterProducts };