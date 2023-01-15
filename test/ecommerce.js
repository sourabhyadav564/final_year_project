const { assert } = require('chai');

const Ecommerce = artifacts.require("Ecommerce");

require('chai').use(require('chai-as-promised')).should();


contract('Ecommerce', ([deployer, author, tipper]) => {
    let ecommerce;
    before(async () => {
        ecommerce = await Ecommerce.deployed();
    }
    );
    describe('deployment', () => {
        let product, productcounter, user,usercounter, member, order,prod,dprod,euser,duser,citemadd;
        before(async () => {
            product = await ecommerce.createproduct('sugar', 200, "this is the first product", "200", "test image", { from: author });
            prod=await ecommerce.editproduct(1,'wheat',100,"wheattt","100 Kg","final image",{from:author});
            user = await ecommerce.createuser('mudit tiwari', "94135655045", "scheme 8", "male", 18, { from: author });
            euser=await ecommerce.edituser("94135655045",'mudit', "scheme 10", "male", 20, { from: author });
            member = await ecommerce.addfamilymember('94135655045', "nimit", 10, "male", { from: author });
            citemadd=await ecommerce.addtocart(1,"94135655045",{from:author});
            dprod=await ecommerce.deleteproduct(1,{from:author});
            duser=await ecommerce.deleteuser("94135655045",{from:author});
            order = await ecommerce.createorder("mudit",
                "11",
                "wheat",
                "100 kg",
                "11:11:2022",
                500,{ from: author })
            productcounter = await ecommerce.counter();
            usercounter = await ecommerce.usercounter();

        }
        );
        it('deploys successfully', async () => {
            const address = await ecommerce.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);

        }

        );
        it('creates product', async () => {

            // assert.equal(postcounter, 1);
            let event = product.logs[0].args;
            assert.equal(event.id.toNumber(), productcounter.toNumber() - 1, 'id is correct');
            assert.equal(event.title, 'sugar', 'Title is correct');
            assert.equal(event.author, author, 'author is correct');
            assert.equal(event.price, 200, 'price is correct');
            assert.equal(event.desc, "this is the first product", 'description is correct');
            assert.equal(event.quantity, "200", 'quantity is correct');
            assert.equal(event.image, 'test image', 'image is correct');
        }
        );
        it('edit product', async () => {

            // assert.equal(postcounter, 1);
            let event = prod.logs[0].args;
            assert.equal(event.id.toNumber(), productcounter.toNumber() - 1, 'id is correct');
            assert.equal(event.title, 'wheat', 'Title is correct');
            assert.equal(event.author, author, 'author is correct');
            assert.equal(event.price, 100, 'price is correct');
            assert.equal(event.desc, "wheattt", 'description is correct');
            assert.equal(event.quantity, "100 Kg", 'quantity is correct');
            assert.equal(event.image, 'final image', 'image is correct');
        }
        );

        it('delete product', async () => {

            // assert.equal(postcounter, 1);
            let event = dprod.logs[0].args;
            assert.equal(event.id.toNumber(), productcounter.toNumber() - 1, 'id is correct');
            assert.equal(event.author, author, 'author is correct');
        }
        );


        it('creates user', async () => {
            let event = user.logs[0].args;
            assert.equal(event.counter.toNumber(), usercounter.toNumber() - 1, 'user counter is correct');
            assert.equal(event.name, 'mudit tiwari', 'name is correct');
            assert.equal(event.author, author, 'author is correct');
            assert.equal(event.phone_number, 94135655045, 'phone number is correct');
            assert.equal(event.address_, "scheme 8", 'address is correct');
            assert.equal(event.gender, "male", 'gender is correct');
            assert.equal(event.age, 18, 'age is correct');
        }
        );

        it('edit user', async () => {
            let event = euser.logs[0].args;
            assert.equal(event.name, 'mudit', 'name is correct');
            assert.equal(event.author, author, 'author is correct');
            assert.equal(event.phone_number, 94135655045, 'phone number is correct');
            assert.equal(event.address_, "scheme 10", 'address is correct');
            assert.equal(event.gender, "male", 'gender is correct');
            assert.equal(event.age, 20, 'age is correct');
        }
        );

        it('add to cart', async () => {

            let event = citemadd.logs[0].args;
            assert.equal(event.author, author, 'author is correct');
            assert.equal(event.phone_number, 94135655045, 'phone number is correct');
            assert.equal(event.last_index, 0, 'last index is correct');
            assert.equal(event.product_id, productcounter.toNumber() - 1, 'product id is correct');
        }
        );
        it('delete user', async () => {

            let event = duser.logs[0].args;
            assert.equal(event.author, author, 'author is correct');
            assert.equal(event.phone_number, 94135655045, 'phone number is correct');
        }
        );

        

        it('add family member', async () => {

            // assert.equal(postcounter, 1);
            let event = member.logs[0].args;

            assert.equal(event.name, 'nimit', 'name is correct');
            assert.equal(event.author, author, 'author is correct');

            assert.equal(event.gender, "male", 'gender is correct');
            assert.equal(event.age, 10, 'age is correct');
        }
        );

        it('create order', async () => {
            // assert.equal(postcounter, 1);
            let event = order.logs[0].args;

            assert.equal(event.username, 'mudit', 'username is correct');
            assert.equal(event.userphone, "11", 'userphone is correct');
            assert.equal(event.author,author,"author is correct")
            assert.equal(event.product_title, "wheat", 'product title is correct');
            assert.equal(event.date, "11:11:2022", 'date is correct');
            assert.equal(event.price, 500, 'price is correct');
        }
        );



    }
    );
});