
function Phone(brand, price, color, imei, number)
{
    // przekazanie parametrów
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.imei = imei;
    this.number = number;
}
// Function printInfo
Phone.prototype.printInfo = function()
{
    document.write("The phone brand is " + 
				   this.brand + 
				   ", color is " + 
				   this.color + 
				   " price is " + 
				   this.price + 
				   ", imei is " + 
				   this.imei + 
				   " and the number is " 
				   + this.number + ".");
}
// Sample phone
var iPhone6S = new Phone("Apple", 2250, "silver", "308377139882709", "+48123456789");

// print info about phone
iPhone6S.printInfo();
