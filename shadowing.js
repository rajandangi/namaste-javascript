const a = 20; // Outer scope (Script)
{
    const a = 30; // First block scope
    console.log("Inside Block 1, a = ", a);
    {
        // No 'a' declared here!
        console.log("Inside Block 2, a = ", a); // Which 'a' does this access?
    }
}
console.log("Outside Block, a = ", a);