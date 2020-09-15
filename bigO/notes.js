/* BIG O
     -asks the question- how can we determine which algorithm is the best? How efficient is it compared to other algos?
     -big O is useful for discussing trade-offs between different algos/problem solving methods
     -it's also important to know HOW our code is working, not just that our code works 
     -helps to find bottlenecks in code and debug

     -- The Problem with Time
        - All machines will record different times of how long an algo takes to finish
        - For fast algos, speed measurments may not be precise enough

     -- If not time, then what?
        - Rather than counting seconds, count the number of simple operations the computer has to perform
    
    ************************************************************************************************
     -- BIG O allows us to formally talk about how the runtime of an algo grows as the inputs grow
        -- we say that an algo is O(f(n)) if the number of simple operations the computer has to do is        
           eventually less than a constant time f(n), as n increases
           -- f(n) could be linear (f(n) = n)
           -- f(n) could be quadratic (f(n) = n^2)
           -- f(n) could be constant (f(n) = 1)
           -- f(n) could be something completely different
               -- O(5n + 10) = O(n)
               -- O(100) = O(1)
               -- O(2n + 5n + 8) = O(n^2)
               -- O(2n) = O(n)
   
   
   --Simplifying Big O
      -- Big O Shorthand
         1. Arithmetic operations are constant
         2. Variable assignment is constant
         3. Accessing elements in an array (by index) or object (by key) is constant
         4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop
    ************************************************************************************************
        
    -- Space Complexity 
      -- how much additional memory do we need to allocate in order to run the code in the algo?
         -- Most primitives (boolean, numbers, undefined, null) are constant space
         -- Strings require O(n) space (where n is the string.length)
         -- Reference Types (arrays + objects) are generally O(n), where n is the lentgth(for arrays) and the number of keys (for objects)

   --Logarithms 
      -- log2(8) = 3 ------> 2^3 = 8
      -- log2(value) = exponent ------> 2^exponent = value
      -- the binary logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to 1
      -- 

  */