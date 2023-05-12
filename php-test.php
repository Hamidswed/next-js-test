<?php
// Check if two command line arguments are provided
if (count($argv) !== 3) {
    echo "Usage: php multiply.php <number1> <number2>\n";
    exit(1);
}

// Get the numbers from command line arguments
$number1 = $argv[1];
$number2 = $argv[2];

// Validate if the arguments are numeric
if (!is_numeric($number1) || !is_numeric($number2)) {
    echo "Error: Both arguments should be numeric.\n";
    exit(1);
}

// Perform the multiplication
$result = $number1 * $number2;

// Output the result
echo "Result: $result\n";
