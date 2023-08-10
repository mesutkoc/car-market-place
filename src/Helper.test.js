import { getFilters, setSelectedFilters } from './Helper'

const productData = [
    { id: 1, brand: 'Smart', model: 'Roadster' },
    { id: 2, brand: 'BMW', model: 'Taurus' },
    { id: 3, brand: 'Ford', model: 'Roadster' },
    { id: 4, brand: 'Ferrari', model: 'Taurus' },
    { id: 5, brand: 'Ferrari', model: 'Roadster' },
];

describe('Helper functions', () => {
    it('returns filters for filterType', () => {
        const filterType = 'brand';
        const filters = getFilters(productData, filterType);
        expect(filters).toEqual(['Smart', 'BMW', 'Ford', 'Ferrari']);
    });

    it('handles cases with duplicate filter values', () => {
        const filterType = 'model';
        const filters = getFilters(productData, filterType);
        expect(filters).toEqual(['Roadster', 'Taurus']);
    });

    it('should update selectedFilters with new Sort value', () => {
        const initialSelectedFilters = { Model: ['Jetta'], Brand: ['Ferrari'] };
        const listItem = 'Price Low to High';
        const name = 'Sort';

        const updatedFilters = setSelectedFilters({
            selectedFilters: initialSelectedFilters,
            listItem,
            name,
        });

        expect(updatedFilters).toEqual({ ...initialSelectedFilters, [name]: [listItem] });
    });

    it('should add a new item to selectedFilters', () => {
        const initialSelectedFilters = { Model: ['Jetta'], Brand: ['Ferrari'] };
        const listItem = 'Focus';
        const name = 'Model';

        const updatedFilters = setSelectedFilters({
            selectedFilters: initialSelectedFilters,
            listItem,
            name,
        });

        expect(updatedFilters).toEqual({
            ...initialSelectedFilters,
            [name]: [...initialSelectedFilters[name], listItem],
        });
    });

    it('should remove an existing item from selectedFilters', () => {
        const initialSelectedFilters = { Model: ['Jetta', 'Taurus'], Brand: ['Ferrari'] };
        const listItem = 'Jetta';
        const name = 'Model';

        const updatedFilters = setSelectedFilters({
            selectedFilters: initialSelectedFilters,
            listItem,
            name,
        });

        expect(updatedFilters).toEqual({
            ...initialSelectedFilters,
            [name]: initialSelectedFilters[name].filter(item => item !== listItem),
        });
    });
});