function discountCalculate(totalPurchaseAmount){

    if(totalPurchaseAmount>=50 && totalPurchaseAmount<100){
        discount = 5;
    }
    else if(totalPurchaseAmount>=100 && totalPurchaseAmount<200){
        discount = 10;
    }
    else if(totalPurchaseAmount>=200){
        discount = 15;
    }
    else{
        discount = 0;
    }

    const discountAmount = (totalPurchaseAmount * discount) / 100;
    const discountedAmount = (totalPurchaseAmount - discountAmount);

    console.log("Total Purchase Amount:$",totalPurchaseAmount);
    console.log("Discout:$",discount);
    console.log("Discounted Amount:$",discountedAmount);
    console.log("Discount Amount:$",discountAmount);

    return {
        totalPurchaseAmount,
        discountAmount,
        discountedAmount
    };

}
 // Change total purchase amount whatever you want
 const totalPurchaseAmount = 350;
 discountCalculate(totalPurchaseAmount);