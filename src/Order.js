var OrderViewModel = function (pizzaViewModel) {
    var self = this;
    self.pizzaViewModel = pizzaViewModel;
    self.qty = ko.observable(0);
    self.orders = ko.observableArray();
    self.selectedPizza = ko.observable();

    self.selectedPrice =  ko.computed(function() {
        var price, selected =   self.selectedPizza();
        if(!selected) price = 0
        else price = selected.price;
        return (self.qty() * price);
    }, this);

    self.totalPrice =  ko.computed(function() {
        return _.reduce(self.orders(), function(memo, num){
            return memo + (num.pizza.price * num.qty);
        }, 0);
    }, this);

    self.add = function () {
       self.orders.push({pizza: self.selectedPizza(), qty: self.qty()})
    };
}