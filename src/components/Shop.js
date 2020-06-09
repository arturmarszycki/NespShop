import React from 'react';
import ShopWrapper from './ShopComponents';

const Shop = ({shop, getData, updateShopItem, removeItem}) => {
   return (
       <>
           <ShopWrapper
               type="tree" /*tree, list or full*/
               shop={shop}
               getData={getData}
               updateShopItem={updateShopItem}
               removeItem={removeItem}
           />
       </>
   )
};

export default Shop;