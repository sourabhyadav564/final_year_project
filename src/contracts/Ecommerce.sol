////////////////////////// Remaining functionalities ///////////////////////
// 1. remove item from cart
// 2. user family members editing
// 3. user family members delete
// 4. delete order
// 5. mulitiple items orders

//SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract Ecommerce {
    mapping(uint256 => Product) public products;
    mapping(string => User) public users;
    mapping(uint256 => Order) public orders;
    uint256 public counter;
    uint256 public usercounter;
    uint256 public ordercounter;

    constructor() public {
        counter = 1;
        usercounter = 1;
        ordercounter = 1;
    }

    struct Order {
        string username;
        string userphone;
        string product_title;
        string product_quantity;
        string date;
        uint256 price;
        uint256 id;
    }
    struct Person {
        string name;
        uint256 age;
        string gender;
    }
    struct Product {
        uint256 id;
        string title;
        uint256 price;
        string desc;
        string quantity;
        string image;
        address created_by;
    }
    struct User {
        uint256[] cartitems;
        Person[] family_members;
        string name;
        string phone_number;
        string address_;
        string gender;
        uint256 age;
    }

    /////////////////////////////////////////////////product related functions start/////////////////////
    event productcreated(
        uint256 id,
        string title,
        uint256 price,
        string desc,
        string image,
        string quantity,
        address author
    );
    event productedited(
        uint256 id,
        string title,
        uint256 price,
        string desc,
        string image,
        string quantity,
        address author
    );
    event productdeleted(uint256 id, address author);

    function createproduct(
        string memory title,
        uint256 price,
        string memory desc,
        string memory quantity,
        string memory image
    ) public {
        uint256 id = counter;
        Product storage product = products[id];
        product.id = id;
        product.title = title;
        product.price = price;
        product.desc = desc;
        product.image = image;
        product.quantity = quantity;
        product.created_by = msg.sender;
        emit productcreated(
            product.id,
            product.title,
            product.price,
            product.desc,
            product.image,
            product.quantity,
            product.created_by
        );
        counter++;
    }

    function editproduct(
        uint256 id,
        string memory title,
        uint256 price,
        string memory desc,
        string memory quantity,
        string memory image
    ) public {
        Product storage product = products[id];
        product.title = title;
        product.price = price;
        product.desc = desc;
        product.image = image;
        product.quantity = quantity;
        product.created_by = msg.sender;
        emit productedited(
            product.id,
            product.title,
            product.price,
            product.desc,
            product.image,
            product.quantity,
            product.created_by
        );
    }

    function deleteproduct(uint256 id) public {
        delete products[id];
        emit productdeleted(id, msg.sender);
    }

    function getallproudcts() public view returns (Product[] memory) {
        Product[] memory prods = new Product[](counter);
        for (uint i = 0; i < counter; i++) {
            string memory title=products[i].title;
            string memory empty='';
            if (keccak256(abi.encodePacked(title)) != keccak256(abi.encodePacked(empty))) {
                prods[i]=products[i];
}
        }
        return prods;
    }

    /////////////////////////////////////////////////product related functions end/////////////////////

    /////////////////////////////////////////////////user related functions start/////////////////////

    event usercreated(
        string name,
        string phone_number,
        string address_,
        string gender,
        uint256 age,
        uint256 counter,
        address author
    );
    event useredited(
        string name,
        string phone_number,
        string address_,
        string gender,
        uint256 age,
        address author
    );
    event userdeleted(string phone_number, address author);
    event member_added(string name, uint256 age, string gender, address author);
    event cartitemadded(
        uint256 last_index,
        uint256 product_id,
        string phone_number,
        address author
    );

    function createuser(
        string memory name,
        string memory phone_number,
        string memory address_,
        string memory gender,
        uint256 age
    ) public {
        User storage user = users[phone_number];
        user.name = name;
        user.phone_number = phone_number;
        user.address_ = address_;
        user.age = age;
        user.gender = gender;

        emit usercreated(
            name,
            phone_number,
            address_,
            gender,
            age,
            usercounter,
            msg.sender
        );
        usercounter++;
    }

    function edituser(
        string memory old_phone_number,
        string memory new_name,
        string memory new_address_,
        string memory new_gender,
        uint256 new_age
    ) public {
        User storage user = users[old_phone_number];
        user.name = new_name;
        user.address_ = new_address_;
        user.age = new_age;
        user.gender = new_gender;

        emit useredited(
            user.name,
            user.phone_number,
            user.address_,
            user.gender,
            user.age,
            msg.sender
        );
    }

    function deleteuser(string memory phone_number) public {
        delete users[phone_number];
        emit userdeleted(phone_number, msg.sender);
    }

    function addtocart(uint256 product_id, string memory phone_number) public {
        User storage user = users[phone_number];
        user.cartitems.push(product_id);
        uint256 cart_len = user.cartitems.length;
        uint256 last_index = cart_len - 1;
        emit cartitemadded(
            last_index,
            user.cartitems[last_index],
            user.phone_number,
            msg.sender
        );
    }

    function addfamilymember(
        string memory phone_number,
        string memory name,
        uint256 age,
        string memory gender
    ) public {
        User storage user = users[phone_number];
        Person memory person;
        person.age = age;
        person.gender = gender;
        person.name = name;
        user.family_members.push(person);
        emit member_added(
            user.family_members[0].name,
            user.family_members[0].age,
            user.family_members[0].gender,
            msg.sender
        );
    }

    function getfamilymembers(string memory phone_number)
        public
        view
        returns (Person[] memory)
    {
        User storage user = users[phone_number];
        return user.family_members;
    }

    /////////////////////////////////////////////////user related functions end/////////////////////
    event ordercreated(
        uint256 id,
        string username,
        string userphone,
        string product_title,
        string product_quantity,
        string date,
        uint256 price,
        address author
    );

    function createorder(
        string memory username,
        string memory userphone,
        string memory product_title,
        string memory product_quantity,
        string memory date,
        uint256 price
    ) public {
        Order storage order = orders[ordercounter];
        order.id = ordercounter;
        order.username = username;
        order.userphone = userphone;
        order.product_title = product_title;
        order.product_quantity = product_quantity;
        order.date = date;
        order.price = price;
        emit ordercreated(
            order.id,
            order.username,
            order.userphone,
            order.product_title,
            order.product_quantity,
            order.date,
            order.price,
            msg.sender
        );
        ordercounter++;
    }
}
