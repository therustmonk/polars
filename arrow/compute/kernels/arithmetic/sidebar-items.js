initSidebarItems({"fn":[["add","Perform `left + right` operation on two arrays. If either left or right value is null then the result is also null."],["divide","Perform `left / right` operation on two arrays. If either left or right value is null then the result is also null. If any right hand value is zero then the result of this operation will be `Err(ArrowError::DivideByZero)`."],["divide_scalar","Divide every value in an array by a scalar. If any value in the array is null then the result is also null. If the scalar is zero then the result of this operation will be `Err(ArrowError::DivideByZero)`."],["math_op","Helper function to perform math lambda function on values from two arrays. If either left or right value is null then the output value is also null, so `1 + null` is `null`."],["modulus","Perform `left % right` operation on two arrays. If either left or right value is null then the result is also null. If any right hand value is zero then the result of this operation will be `Err(ArrowError::DivideByZero)`."],["modulus_scalar","Modulus every value in an array by a scalar. If any value in the array is null then the result is also null. If the scalar is zero then the result of this operation will be `Err(ArrowError::DivideByZero)`."],["multiply","Perform `left * right` operation on two arrays. If either left or right value is null then the result is also null."],["negate","Perform `-` operation on an array. If value is null then the result is also null."],["powf_scalar","Raise array with floating point values to the power of a scalar."],["subtract","Perform `left - right` operation on two arrays. If either left or right value is null then the result is also null."]]});