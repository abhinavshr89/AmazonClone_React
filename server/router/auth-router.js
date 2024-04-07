const express = require('express');
const router = express.Router();
const pageController = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require('../middlewares/validate-middleware');
const cartController = require('../controllers/cart-controller');

const productController = require('../controllers/products-controller')

router.get('/', pageController.home);


router
  .route('/register')
  .post(validate(signupSchema), pageController.register);


router
.route('/cart')
.post(cartController.addItemToCart)
.get(cartController.getAllCartItems)



router.delete('/cart/:_id', cartController.removeItemFromCart);


router.route("/products").get(productController.getAllProducts)
router.get("/products/:searchtxt?",productController.getSelectedProducts);


router.route("/login").post(pageController.Login);

module.exports = router;

