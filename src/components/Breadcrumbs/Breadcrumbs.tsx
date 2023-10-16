import React from 'react';

const BreadcrumbsComponent: React.FC = () => {
    return (
        <div className='breadcrumbsWrapper col-12'>
            <span className='breadcrumbs'> Eletrónica, Audio y Video &gt; Reproductores &gt; iPod touch &gt; &nbsp;<b>32 GB</b></span>
        </div>
    );
}

export const Breadcrumbs = BreadcrumbsComponent;
export default BreadcrumbsComponent;
