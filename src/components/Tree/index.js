import React from 'react';
import Category from './Category';
import '../../styles/Tree/tree.scss';

const Tree = ({data}) => {
    const coffee_IspItaliana = data.filter(item => item.id_shop_category === 9);
    const coffee_BaristaCreations = data.filter(item => item.id_shop_category === 29);
    const coffee_EspressoLungo = data.filter(item => item.id_shop_category === 11);
    const coffee_MasterOrigin = data.filter(item => item.id_shop_category === 12);
    return (
        <div className="panel-tree">
            <Category items={coffee_IspItaliana} fullData={data} />
            <Category items={coffee_BaristaCreations} fullData={data} />
            <Category items={coffee_EspressoLungo} fullData={data} />
            <Category items={coffee_MasterOrigin} fullData={data} />
        </div>
    )
};

export default Tree;