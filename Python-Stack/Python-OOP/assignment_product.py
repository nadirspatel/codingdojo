class Product:

    def __init__(self,item_price,item_name,item_weight,item_brand,item_status):
        self.item_price = item_price
        self.item_name = item_name
        self.item_weight = item_weight
        self.item_brand = item_brand
        self.item_status = item_status
    
    def sell(self):
        if self.item_status != "sold":
            self.item_status = "for sale"

    def addTax(self):
        self.tax = self.item_price * self.tax

    def returnItem(self,returned):
        if returned == "defective":
            self.item_status = "defective"
            self.item_price = 0
        if returned == "new":
            self.item_status = "for sale"
        if returned == "opened":
            self.item_status = "used"
            self.item_price = self.item_price - (self.item_price * .2)
        return self

    def displayInfo(self):
        print (" Price: {}\n Item Name: {}\n Weight: {}\n Brand: {}\n Status: {}\n".format(self.item_price,self.item_name,self.item_weight,self.item_brand,self.item_status))
        return self

product1 = Product("100","Apple","1","Gala","sold")
product1.returnItem("opened")
product1.displayInfo()
#product2 = Product("100","Banana","1","Chiquita","New").displayInfo()