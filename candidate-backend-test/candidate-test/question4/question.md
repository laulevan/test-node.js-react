write a canGetNestedInside function that returns `true` only if the first array can be included inside the second array

`arrayA` can be nested inside `arrayB` if:

1.  `arrayA`'s min is greater than `arrayB`'s min.
2.  `arrayA`'s max is less than `arrayB`'s max.

### Examples

    canGetNestedInside([1, 2, 3, 4], [0, 6]) ➞ true
    
    canGetNestedInside([3, 1], [4, 0]) ➞ true
    
    canGetNestedInside([9, 9, 8], [8, 9]) ➞ false
    
    canGetNestedInside([1, 2, 3, 4], [2, 3]) ➞ false

### Notes

Note the strict inequality (see example #3).