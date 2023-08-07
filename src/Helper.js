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
    console.log('asd', b);
    const products = JSON.parse(localStorage.getItem("products"));
    const filteredArray = products.filter((obj) => {
        if (b['brand'].length > 0 && b['model'].length > 0) {
            return b['brand'].includes(obj.brand) && b['model'].includes(obj.model);
        }
        else if (b['brand'].length > 0) {
            return b['brand'].includes(obj.brand)
        }
        else if (b['model'].length > 0) {
            return b['model'].includes(obj.model)
        }
        return null;
    });

    return filteredArray;
}

export { getFilters, filterProducts };