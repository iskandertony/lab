import React from 'react';

const Challenges = () => {

    let a = [1, 2, 3,4 ,12, 14];
    let b = [1,[[2],[3,[4],5],6,7]]

    function cut(arr) {
       return  arr.reduce((acc, item) => Array.isArray(item) ? acc.concat(cut(item)) : acc.concat(item), [])
    }

    let sdf = cut(b)
    console.log("sdf", sdf)

    function doubleElements(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(array[i] * 2);
        }
        return result;
    }

    function filter(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                result.push(array[i])
            }
        }
        return result;
    }
    const zero = filter(a)
    console.log("filter", zero)

    // Применение doubleElements к массиву a
    const doubled = doubleElements(a);

    return (
        <div>
            iska
            <div>
                {doubled.join(', ')} {/* Вывод элементов нового массива */}
            </div>
        </div>
    );
};

export default Challenges;
