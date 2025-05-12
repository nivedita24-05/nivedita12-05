import React from 'react';
import ProductCard from './productCard';

const Card1 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OUFsUUpuUVQ3cUdJUXc0NW5mTVpFdE9MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMzlKVGsyNDdnTWJxWHVYZ20wTDc3dFA&traceId=1"
        title="Iphone"
        price="$59.99"
      />
    </div>
  );
};

const Card2 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5J59Wb99dsVMyyeNuB6yLKPI-bs5-Q_ZQg&s"
        title="bluetooth speaker"
        price="$79.99"
      />
    </div>
  );
};

const Card3 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://th.bing.com/th/id/OIP.Lf-OSO-LYVpEKg4VGNAgmgHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7"
        title="Titan Watch"
        price="$89.99"
      />
    </div>
  );
};

/*const Card4 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://www.bing.com/images/search?view=detailV2&ccid=Ir29KH8i&id=F3AE74C0A6EE3946DB478A5194F02E6C8DF21856&thid=OIP.Ir29KH8ifMH_oEOBLg6uYwHaHa&mediaurl=https%3a%2f%2fi5.walmartimages.com%2fasr%2f35b47efa-88ba-46ab-9faa-71096e67aed7.a7275eab204a8d8dc3d7949f0dbe74cc.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.22bdbd287f227cc1ffa043812e0eae63%3frik%3dVhjyjWwu8JRRig%26pid%3dImgRaw%26r%3d0&exph=3331&expw=3331&q=hp+laptop&simid=608048150505289497&FORM=IRPRST&ck=2A8983C44699318D50A432A6A6DC52AC&selectedIndex=1&itb=0"
        title="bluetooth speaker"
        price="$69.99"
      />
    </div>
  );
};*/
export default Card1;
export { Card2 ,Card3};