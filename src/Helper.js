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
        if (b['Brand'].length > 0 && b['Model'].length > 0) {
            return b['Brand'].includes(obj.brand) && b['Model'].includes(obj.model);
        }
        else if (b['Brand'].length > 0) {
            return b['Brand'].includes(obj.brand)
        }
        else if (b['Model'].length > 0) {
            return b['Model'].includes(obj.model)
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

const addItemBasket = ({ basket, item, type }) => {
    if (basket?.length === 0) {
        return [{ ...item, count: 1 }]
    }
    else if (basket?.find(product => product?.name === item.name)) {
        const newBasket = basket?.map(items => {
            if (items?.name === item?.name) {
                return { ...items, count: items.count + 1 };
            }
            return items;
        })
        return newBasket;
    }
    else {
        return [...basket, { ...item, count: 1 }]
    }
}

const changeCount = ({ product, type }) => {
    const basketProducts = JSON.parse(localStorage.getItem("basket"));

    if (type === 'decrease') {
        if (product?.count === 1) {
            return basketProducts?.filter(item => item?.name !== product?.name);
        }
        else {
            const newBasket = basketProducts?.map(items => {
                if (items?.name === product?.name) {
                    return { ...items, count: items.count - 1 };
                }
                return items;
            })
            return newBasket;
        }
    }
    else {
        const newBasket = basketProducts?.map(items => {
            if (items?.name === product?.name) {
                return { ...items, count: items.count + 1 };
            }
            return items;
        })
        return newBasket;
    }

}

export { getFilters, filterProducts, setSelectedFilters, addItemBasket, changeCount };