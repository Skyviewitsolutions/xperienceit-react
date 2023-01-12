import React from 'react'
import './ProductStickyBar.css'
const ProductStickBar = () => {
  return (
    <>
    <div className='productStickyBar'>
<nav class="navbar navbar-expand-md navbar-light fixed-bottom ">
    <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"></a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto mb-2 mb-md-0 ml-5 product_Sticky_contant">
                <li class="nav-item active">
                    <a class="nav-link" aria-current="page" href="#">Overview</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inclusions</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Reviews</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link active" href="#">Video</a>
                </li>
            </ul>
           
        </div>
        <span className='stickyPackagePrice'>Packages Price</span>
    </div>
</nav>
</div>
    </>
  )
}

export default ProductStickBar;