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

const setSelectedFilters = ({ selectedFilters, listItem, name }) => {
    if (name === 'Sort') {
        return { ...selectedFilters, [name]: [listItem] }
    }
    else if (!selectedFilters?.[name].includes(listItem)) {
        const newData = [...selectedFilters?.[name], listItem]
        return {
            ...selectedFilters, [name]: newData
        }
    }
    else {
        const newData = selectedFilters?.[name].filter(item => item !== listItem);
        return {
            ...selectedFilters, [name]: newData
        }
    }
}

export { getFilters, filterProducts, setSelectedFilters };