// 1.构造函数法
function Cat() {
    this.name = "大毛";
}

Cat.prototype.makeSound = function () {
    alert("喵喵喵");
}

var cat1 = new Cat();
// alert(act1.name);   //大毛



// 2.Object.create()法
var Cat = {
    name: "大毛",
    makeSound: function () { alert("喵喵喵") }
}

var cat1 = Object.create(Cat);
alert(cat1.name);   //大毛
cat1.makeSound();   //喵喵喵

// 老式浏览器
if (!Object.create) {
    Object.create = function (o) {
        function F() { }
        F.prototype = o;
        return new F();
    }
}


// 3.极简主义法
// 3.1封装
var Cat = {
    createNew: function () {
        var cat = {};
        cat.name = "大毛";
        cat.makeSound = function () { alert("喵喵喵") }
        return cat;
    }
}

// var cat1 = Cat.createNew();
// cat1.makeSound();    //喵喵

// 3.2继承
var Animal = {
    createNew: function () {
        var animal = {};
        animal.sleep = function () { alert("睡懒觉") };
        return animal;
    }
}

// 然后，在Cat的createNew()方法中，调用Animal的createNew()方法。
// var Cat = {
//     createNew:function(){
//         var cat = Animal.createNew();
//         cat.name = "大毛";
//         cat.makeSound = function(){alert("喵喵")};
//         return cat;
//     }
// }
// var cat1 = Cat.createNew();
// cat1.sleep();   //睡懒觉

// 3.3 私有属性和私有方法
var Cat = {

    createNew: function () {

        var cat = {};

        var sound = "喵喵喵";

        cat.makeSound = function () { alert(sound); };

        return cat;

    }
};

// var cat1 = Cat.createNew();

// alert(cat1.sound); // undefined


// 3.4数据共享
// 有时候，我们需要所有实例对象，能够读写同一项内部数据。这个时候，只要把这个内部数据，封装在类对象的里面、createNew()方法的外面即可。

var Cat = {
    sound:"喵喵",
    createNew:function(){
        var cat = [];
        cat.makeSound = function(){alert(Cat.sound)};
        cat.changeSound = function(x){Cat.sound = x;}
        return cat;
    }
}

// var cat1 = Cat.createNew();

// var cat2 = Cat.createNew();

// cat1.makeSound(); // 喵喵喵

// 这时，如果有一个实例对象，修改了共享的数据，另一个实例对象也会受到影响。

cat2.changeSound("啦啦啦");

cat1.makeSound(); // 啦啦啦